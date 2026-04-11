'use client'

import { Printer } from 'lucide-react'
import { useEffect } from 'react'

export default function CVTemplate() {
  const handlePrint = () => {
    window.print()
  }

  // To ensure the body gets white background when printing to PDF
  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
      @media print {
        body, html {
          background-color: white !important;
          color: black !important;
        }
        * {
          print-color-adjust: exact;
          -webkit-print-color-adjust: exact;
        }
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-[800px] flex justify-between items-center mb-6 print:hidden">
        <div>
          <h2 className="text-2xl font-bold text-white">Mi Curriculum Vitae</h2>
          <p className="text-zinc-400 text-sm">Formato optimizado ATS (Estilo Oxford)</p>
        </div>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-white hover:bg-zinc-200 text-black px-4 py-2 rounded-md font-semibold transition-colors"
        >
          <Printer size={18} />
          Imprimir / Descargar PDF
        </button>
      </div>

      {/* CV Paper Component */}
      <div
        className="w-full max-w-[800px] bg-white text-black p-10 md:p-14 shadow-2xl rounded-sm font-serif"
        style={{ minHeight: '1056px' /* Standard Letter height roughly */ }}
      >

        {/* Header */}
        <div className="text-center mb-6 border-b-[1.5px] border-black pb-4">
          <h1 className="text-3xl sm:text-4xl font-bold uppercase mb-2 tracking-wide text-black">Jose Pizarro</h1>
          <p className="text-sm font-sans tracking-wide text-gray-800 flex justify-center items-center gap-2 flex-wrap">
            <span>Tacna, Perú</span> |
            <a href="mailto:josepizarroarca@gmail.com" className="hover:underline text-blue-900 font-medium print:text-black print:no-underline">josepizarroarca@gmail.com</a> |
            <a href="https://www.linkedin.com/in/jose-alfredo-pizarro-rabanal-56aaaa189" target="_blank" rel="noreferrer" className="hover:underline text-blue-900 font-medium print:text-black print:no-underline">LinkedIn</a> |
            <a href="https://github.com/JosePizarro1" target="_blank" rel="noreferrer" className="hover:underline text-blue-900 font-medium print:text-black print:no-underline">github.com/JosePizarro1</a> |
            <a href="https://portfolio-iota-rosy-30.vercel.app/" target="_blank" rel="noreferrer" className="hover:underline text-blue-900 font-medium print:text-black print:no-underline">Portafolio Web</a>
          </p>
          <p className="text-sm font-bold uppercase mt-1 tracking-wider text-black">
            Software Engineer / FullStack Developer (+2 Años de Exp.)
          </p>
        </div>

        {/* Professional Summary */}
        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase mb-2 border-b-[1px] border-gray-400 text-black pb-1">Resumen Profesional</h2>
          <p className="text-sm text-justify leading-relaxed text-gray-800">
            Ingeniero Informático y Desarrollador FullStack con <strong>más de 2 años de experiencia</strong> sólida diseñando e implementando arquitecturas web y soluciones tecnológicas de extremo a extremo. Altamente competente en los ecosistemas de <strong>Python y JavaScript (React, Next.js, Django, FastAPI)</strong> y en bases de datos relacionales. Cuento con probada experiencia desarrollando aplicaciones modulares, automatizando flujos corporativos e integrando <strong>Agentes de IA Generativa</strong> (LangGraph) y herramientas de análisis óptico avanzado (Azure OCR). Destacado por traducir problemas complejos de negocio en interfaces refinadas y productos altamente escalables impulsados por inteligencia artificial y sólidas prácticas de ingeniería.
          </p>
        </div>

        {/* Experience / Projects */}
        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase mb-2 border-b-[1px] border-gray-400 text-black pb-1">Experiencia Laboral</h2>

          <div className="mb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="text-md font-bold text-black">TANNUA - <span className="font-normal text-sm">Desarrollador (IA & Backend)</span></h3>
              <span className="text-xs font-sans text-gray-600">Nov. 2025 - Actualidad</span>
            </div>
            <ul className="list-disc list-outside ml-4 text-sm mt-1 space-y-1 text-gray-800">
              <li>Lideré el despliegue de un Agente de IA Corporativo integrando potentes sistemas de <strong>RAG (Retrieval-Augmented Generation) y Embeddings</strong> para respuestas orgánicas, orquestados en flujos dinámicos mediante Python y LangGraph.</li>
              <li>Aceleré la gestión de citas multi-servicio implementando un Motor de Búsqueda Secuencial inteligente, sincronizado en tiempo real con la API de AgendaPro.</li>
              <li>Sistematicé la validación de pagos entrenando modelos predictivos con Azure Document Intelligence (OCR) para lograr el reconocimiento preciso de recibos bancarios.</li>
              <li>Automaticé tareas críticas de infraestructura creando servicios en segundo plano y notificaciones, gestionando todo el ciclo de despliegue mediante <strong>Docker</strong> y flujos CI/CD en <strong>Azure DevOps</strong>.</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="text-md font-bold text-black">RIVERCON - <span className="font-normal text-sm">Desarrollador Frontend/Mobile</span></h3>
              <span className="text-xs font-sans text-gray-600">Mayo 2025 - Oct. 2025</span>
            </div>
            <ul className="list-disc list-outside ml-4 text-sm mt-1 space-y-1 text-gray-800">
              <li>Desarrollo eficiente de aplicaciones móviles colaborativas utilizando Flutter, FlutterFlow y arquitecturas de Firebase.</li>
              <li>Creación de "Horzifrut" (sistema logístico móvil de inventarios) y "Zodiac" (red social bilingüe con autenticación telefónica/email).</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="text-md font-bold text-black">EGATUR - <span className="font-normal text-sm">Desarrollador Full Stack</span></h3>
              <span className="text-xs font-sans text-gray-600">Sept. 2024 - Mayo 2025</span>
            </div>
            <ul className="list-disc list-outside ml-4 text-sm mt-1 space-y-1 text-gray-800">
              <li>Centralicé el control de flujos de ingresos directivos mediante la construcción de los portales "Trámite Interno GTI" y "Caja Chica", escalados en Python y Django.</li>
              <li>Reduje la carga manual operativa al sincronizar la generación de reportes automáticos conectando bases de datos SQLite3 con las robustas APIs de Google Workspace (Gmail y Drive).</li>
              <li>Refactoricé patrones de diseño adoptando un fuerte modelo MVC, promoviendo despliegues seguros y estructurados.</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="text-md font-bold text-black">Independiente / Web3 - <span className="font-normal text-sm">Game & Web Developer</span></h3>
              <span className="text-xs font-sans text-gray-600">Feb. 2022 - Ago. 2022</span>
            </div>
            <ul className="list-disc list-outside ml-4 text-sm mt-1 text-gray-800">
              <li>Despliegue de un exitoso videojuego integral Web3 (NFT) ("Medieval"), alcanzando más de 2,000 usuarios hiper-activos distribuidos en MySQL.</li>
              <li>Manejo integral de lógica de compra/venta y asincronía en aperturas de cofres generados proceduralmente.</li>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase mb-2 border-b-[1px] border-gray-400 text-black pb-1">Habilidades Técnicas e Idiomas</h2>
          <div className="text-sm text-gray-800 space-y-1">
            <p><span className="font-bold text-black">Lenguajes y Core:</span> JavaScript, TypeScript, Python, HTML5, CSS3, SQL.</p>
            <p><span className="font-bold text-black">Frameworks Frontend:</span> React, Next.js, Tailwind CSS, Bootstrap, Vercel, Framer Motion, Flutter.</p>
            <p><span className="font-bold text-black">Frameworks Backend:</span> Django, FastAPI, Flask, Arquitecturas RESTful y Microservicios.</p>
            <p><span className="font-bold text-black">Bases de Datos:</span> PostgreSQL, MySQL, SQLite3.</p>
            <p><span className="font-bold text-black">Infraestructura, DevOps e IA:</span> Docker, Azure DevOps, Google Cloud Platform (GCP), Integración IA (LangGraph, RAG, Embeddings, LLMs), Azure OCR.</p>
            <p><span className="font-bold text-black">APIs y Otras Herramientas:</span> Salesforce CRM, integrations con Slack, WhatsApp Cloud API, Google Apps Script, Looker Studio, Git, GitHub, Power BI, Figma.</p>
            <p><span className="font-bold text-black">Idiomas:</span> Español (Nativo), Inglés (B2 Upper Intermediate - Certificado EF SET).</p>
          </div>
        </div>

        {/* Education and Certifications */}
        <div>
          <h2 className="text-sm font-bold uppercase mb-2 border-b-[1px] border-gray-400 text-black pb-1">Educación y Certificaciones</h2>

          <div className="mb-3">
            <div className="flex flex-col text-sm text-gray-800">
              <h3 className="font-bold text-black text-md">Universidad Nacional Jorge Basadre Grohmann</h3>
              <span>Bachiller en Ingeniería Informática y Sistemas</span>
            </div>
          </div>

          <div className="mb-3">
            <div className="flex flex-col text-sm text-gray-800">
              <h3 className="font-bold text-black text-md">COAR Moquegua</h3>
              <span>Egresado (2019)</span>
            </div>
          </div>

          <div className="mb-1 mt-4">
            <h3 className="text-sm font-bold text-black mb-1">Certificaciones Extra</h3>
            <ul className="list-disc list-outside ml-4 text-sm text-gray-800 space-y-1">
              <li><span className="font-semibold text-black">Análisis de Datos con Power BI:</span> Certificación completada (Udemy - 30 horas).</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}
