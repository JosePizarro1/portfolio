import { GoogleGenerativeAI } from "@google/generative-ai";

const MODELS = ["gemini-2.0-flash", "gemini-2.0-flash-lite"];

async function tryGenerateWithModel(genAI, modelName, history, lastMessage) {
  const model = genAI.getGenerativeModel({ model: modelName });
  const chat = model.startChat({ history });
  const result = await chat.sendMessage(lastMessage);
  const response = await result.response;
  return response.text();
}

export async function POST(req) {
  try {
    const { messages } = await req.json();
    
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("Missing NEXT_PUBLIC_GEMINI_API_KEY");
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    const systemPrompt = `Eres el asistente virtual de Jose Pizarro, un desarrollador de software talentoso. 
    Tu objetivo es ayudar a los visitantes de su portafolio a conocer sus proyectos, habilidades y cómo contactarlo.
    Sé amable, profesional y conciso. Responde siempre en español.
    Si te preguntan algo que no sabes sobre Jose, invítalos a contactarlo directamente.
    Jose se especializa en React, Next.js, Node.js y desarrollo de aplicaciones móviles con Flutter.`;

    const history = [
      {
        role: "user",
        parts: [{ text: systemPrompt }],
      },
      {
        role: "model",
        parts: [{ text: "Entendido. Soy el asistente virtual de Jose Pizarro. ¿En qué puedo ayudar a los visitantes hoy?" }],
      }
    ];

    if (messages.length > 0) {
      const pastMessages = messages.slice(0, -1);
      pastMessages.forEach(msg => {
        history.push({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.content }],
        });
      });
    }

    const lastMessage = messages[messages.length - 1].content;

    // Try each model, falling back if rate limited
    let lastError = null;
    for (const modelName of MODELS) {
      try {
        const text = await tryGenerateWithModel(genAI, modelName, history, lastMessage);
        return new Response(JSON.stringify({ text }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      } catch (err) {
        console.warn(`Model ${modelName} failed:`, err.message);
        lastError = err;
        if (err.status === 429) continue;
        throw err;
      }
    }

    // All models were rate limited
    if (lastError?.status === 429) {
      return new Response(JSON.stringify({ 
        text: "⏳ El asistente está ocupado en este momento. Por favor, espera un minuto e intenta de nuevo.",
        rateLimited: true
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    throw lastError;
  } catch (error) {
    console.error("Gemini Error:", error);
    return new Response(JSON.stringify({ 
      text: "Lo siento, tuve un problema técnico. Por favor intenta de nuevo en unos segundos.",
      error: true
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
}
