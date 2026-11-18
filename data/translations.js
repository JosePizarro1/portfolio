export const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      skills: "Habilidades",
      certifications: "Certificaciones",
      solutions: "Soluciones",
      projects: "Proyectos",
      contact: "Contacto",
      cv: "Mi CV"
    },
    hero: {
      welcome: "Bienvenido a mi portafolio",
      greeting: "Hola, soy",
      roles: [
        "FullStack Developer",
        "Especialista en Django",
        "Experto en Tailwind y Bootstrap"
      ],
      description: "Desarrollo aplicaciones web de extremo a extremo, combinando interactividad en el frontend con servicios robustos en el backend, para ofrecer soluciones atractivas, adaptables y escalables con código limpio y mantenible.",
      viewWork: "Ver Mi Trabajo",
      contactMe: "Contáctame"
    },
    about: {
      title: "Sobre Mí",
      subtitle: "Desarrollador FullStack apasionado por crear hermosas soluciones y agentes de IA",
      description: "Desarrollador apasionado por crear aplicaciones web responsivas, accesibles y de alto rendimiento. Con una base sólida en tecnologías frontend y backend, actualmente exploro el camino que mejor se alinea con mis objetivos a largo plazo, ya sea profundizar en la arquitectura del backend o perfeccionar mi desarrollo frontend.",
      location: "Tacna, Perú",
      downloadResume: "Descargar CV (PDF)",
      hobbies: {
        coding: "Código Libre",
        gaming: "Videojuegos",
        music: "Música",
        reading: "Lectura",
        fitness: "Gimnasio"
      }
    },
    skills: {
      title: "Mis",
      highlight: "Habilidades",
      description: "He trabajado con una variedad de tecnologías en el mundo del desarrollo web. Aquí tienes un resumen de mis habilidades técnicas y experiencia.",
      core: "Competencias Principales",
      tools: "Tecnologías y Herramientas"
    },
    certifications: {
      title: "Certificaciones &",
      highlight: "Acreditaciones",
      description: "Especialización continua y certificaciones en Inteligencia Artificial y Cloud.",
      completedTitle: "Completada",
      list: [
        {
          title: "AWS Certified AI Practitioner",
          issuer: "AWS Certification",
          badge: "/img/badges/aws-ai-practitioner.webp",
          description: "Fundamentos de IA generativa, LLMs, Amazon Bedrock y desarrollo de soluciones de IA en la nube.",
          tags: ["GenAI", "Bedrock", "SageMaker", "Prompting"],
          progress: 100
        }
      ]
    },
    solutions: {
      title: "Soluciones",
      highlight: "Empresariales",
      description: "He diseñado e implementado flujos e integraciones avanzadas para resolver problemas complejos de negocio en sistemas corporativos.",
      viewFlow: "Más detalles",
      close: "Cerrar",
      list: [
        {
          id: "sf-shield",
          title: "Salesforce Shield & Seguridad de Datos",
          subtitle: "Cifrado y Auditoría de Plataforma",
          tech: ["Salesforce Shield", "Apex", "CRM Analytics", "Tenant Secrets"],
          description: "Cifrado y monitoreo de seguridad en tiempo real para proteger información sensible corporativa.",
          challenge: ["Riesgo de fuga PII", "Auditoría estricta", "Restricción de búsquedas"],
          solution: ["Cifrado AES-256", "Clases Apex seguras", "Event Monitoring", "CRM Analytics"],
          flow: [
            "[SF-SHIELD] Configurando Tenant Secret corporativo...",
            "[SECURITY] Aplicando Platform Encryption en campos PII...",
            "[APEX] Ejecutando clases Apex personalizadas (0% overhead)...",
            "[MONITOR] Streaming de logs API activado hacia CRM Analytics."
          ]
        },
        {
          id: "webhook-leads",
          title: "Pipeline de Captura Meta Leads (CRM)",
          subtitle: "Sincronización en Tiempo Real",
          tech: ["FastAPI", "Webhooks", "Meta API", "Meta Leads", "CRM Integrations"],
          description: "Ingesta automatizada e instantánea de leads desde anuncios de Meta hacia el CRM.",
          challenge: ["Pérdida de prospectos", "Latencia en ingesta", "Datos no validados"],
          solution: ["FastAPI asíncrono", "Webhooks Meta API", "Validación inmediata"],
          flow: [
            "[META-API] Suscrito a Webhook de leads en Facebook/Instagram Ads...",
            "[FASTAPI] Servidor asíncrono listo escuchando eventos POST...",
            "[VALIDATOR] Limpiando y validando formato de teléfono y correo...",
            "[CRM-SYNC] Lead inyectado con éxito en el CRM corporativo."
          ]
        },
        {
          id: "slack-ticketing",
          title: "Hub de Soporte y Alertas en Slack",
          subtitle: "Prevención de Colisiones de Soporte",
          tech: ["Apps Script", "Slack Webhooks", "BigQuery", "Pusher", "Websockets"],
          description: "Sistema bidireccional en Slack para asignación y alerta de tickets en tiempo real.",
          challenge: ["Tickets duplicados", "Llamadas API excesivas", "Falta de sincronización"],
          solution: ["Bot receptor Slack", "Google Apps Script", "Logs en BigQuery", "Pusher WebSockets"],
          flow: [
            "[SLACK-BOT] Escuchando webhook en canal de soporte corporativo...",
            "[APPS-SCRIPT] Ejecutando procesamiento y enrutamiento automatizado...",
            "[BIGQUERY] Registrando historial y telemetría de incidencias...",
            "[WEBSOCKET] Pusher difundiendo evento: Ticket asignado (0.2s)."
          ]
        },
        {
          id: "sf-looker",
          title: "BI Pipeline: Salesforce a Looker Studio",
          subtitle: "Reportabilidad Automatizada",
          tech: ["Looker Studio", "Google Sheets API", "Salesforce API", "BI Dashboards"],
          description: "Visualización e integración automatizada de datos de Salesforce en dashboards corporativos.",
          challenge: ["Reportes manuales", "Alto costo de licencias", "Datos desactualizados"],
          solution: ["Exportación diaria", "Google Sheets API", "Looker Studio Dashboards"],
          flow: [
            "[SALESFORCE] Ejecutando query de exportación comercial diaria...",
            "[SHEETS-API] Sincronizando datos consolidados con Google Sheets...",
            "[BI-ENGINE] Looker Studio procesando fuentes combinadas...",
            "[LOOKER] Tableros ejecutivos actualizados y listos para consulta."
          ]
        }
      ]
    },
    projects: {
      title: "Mis",
      highlight: "Proyectos",
      description: "Aquí hay algunos de mis proyectos recientes. Cada proyecto muestra diferentes habilidades y tecnologías con las que he trabajado.",
      more: "Más proyectos en progreso",
      liveDemo: "Ver Demo",
      sourceCode: "Código Fuente",
      youtube: "Ver YouTube",
      downloadBrochure: "Descargar Brochure",
      list: [
        {
          title: "Sistema Página Web Control Lab",
          description: "Un avanzado sistema de gestión de laboratorios y portal web de atención a pacientes con conexión mediante LIS (Laboratory Information System). Integra seguimiento de pacientes, sincronización de órdenes médicas, programación de citas y entrega automatizada de resultados.",
          image: "/img/pagina_web_salud_laboratorio.webp",
          tags: ["React", "Python", "Supabase", "PostgreSQL", "Conexión LIS"],
          liveUrl: "",
          githubUrl: "",
          youtubeUrl: "",
          isControlLab: true
        },
        {
          title: "Metropolitano - Sistema de Gestión Médica",
          description: "Un sistema robusto y moderno para la gestión de afiliados, seguimiento de atención médica e importación masiva de datos mediante Excel. Ofrece una interfaz premium con rendimiento optimizado e interacciones dinámicas.",
          image: "/img/seguimiento_metropolitano.webp",
          tags: ["Django", "Pandas", "Tailwind CSS", "DataTables.js", "PostgreSQL", "Vercel"],
          liveUrl: "https://seguimientoati.vercel.app/",
          githubUrl: "",
          youtubeUrl: ""
        },
        {
          title: "Bot de Atención al Cliente y Reservas",
          description: "Un bot inteligente de atención al cliente enfocado en flujos de reserva automatizados. Integra Azure OCR para procesar y validar capturas de pago, y se sincroniza con servicios de terceros para la gestión de calendarios y agendas.",
          image: "/img/bot_reservas.webp",
          tags: ["FastAPI", "LangGraph", "RAG & Embeddings", "Docker", "Azure DevOps", "WhatsApp API", "Azure OCR"],
          liveUrl: "",
          githubUrl: "",
          youtubeUrl: ""
        },
        {
          title: "Taza Calculadora P2P",
          description: "Una calculadora avanzada diseñada para gestionar remesas y arbitraje utilizando el mercado P2P de Binance. Ofrece seguimiento de tasas en tiempo real, márgenes de ganancia personalizados y soporte multi-moneda.",
          image: "/img/taza_calculadora.webp",
          tags: ["Python", "Flask", "JavaScript", "Binance API", "Vercel"],
          liveUrl: "https://taza-calculadora.vercel.app",
          githubUrl: "https://github.com/JosePizarro1/TazaCalculadora.git",
          youtubeUrl: ""
        },
        {
          title: "Caja System",
          description: "Un sistema integral para gestionar flujos de ingresos y egresos, personal, un calendario de gastos y la contabilidad completa de pagos.",
          image: "/img/imagen1.webp",
          tags: ["Django", "Bootstrap", "Tailwind CSS", "Gmail API", "Google Drive API", "SQLite3"],
          liveUrl: "https://cajaegatur.pythonanywhere.com/",
          githubUrl: "https://github.com/JosePizarro1/cajachica",
          youtubeUrl: ""
        },
        {
          title: "GTI Gestión de Procesos Internos Egatur",
          description: "Un sistema de flujo de trabajo interno de extremo a extremo para documentos administrativos, con firmas digitales y control de acceso basado en roles.",
          image: "/img/imagen2.webp",
          tags: ["Django", "Bootstrap", "Tailwind CSS", "SQLite3", "Gmail API", "Google Drive API"],
          liveUrl: "https://gti.egatur.edu.pe/",
          githubUrl: "https://github.com/JosePizarro1/gti",
          youtubeUrl: ""
        },
        {
          title: "Sistema de Gimnasio/Academia",
          description: "Una plataforma adaptable de gestión de gimnasios/academias con control de asistencia por código QR, gestión de clientes, procesamiento de pagos y seguimiento de membresías.",
          image: "/img/imagen3.webp",
          tags: ["Django", "Bootstrap", "Tailwind CSS", "SQLite3"],
          liveUrl: "https://demogym.pythonanywhere.com/",
          githubUrl: "https://github.com/JosePizarro1/Gym",
          youtubeUrl: ""
        },
        {
          title: "Aventura de Cofres NFT Medieval",
          description: "Un juego adaptable basado en NFTs con mecánicas de cofres y lógica de personajes para la generación de oro. Alcanzó más de 1,800 usuarios activos durante su fase pico.",
          image: "/img/imagen4.webp",
          tags: ["Django", "Bootstrap", "Tailwind CSS", "SQLite3"],
          liveUrl: "https://medievalnft.pythonanywhere.com/login/?next=/",
          githubUrl: "",
          youtubeUrl: "https://youtu.be/Cg1xWz0_uwk"
        },
        {
          title: "Sistema de Cafetería con Inventario y Kardex",
          description: "Aplicación web responsiva para gestionar inventarios completos de productos con seguimiento Kardex entre almacenes. Incluye funcionalidad de ventas para calcular ganancias, monitorizar stock y detectar escasez.",
          image: "/img/cafeteria.webp",
          tags: ["Django", "Bootstrap", "Tailwind CSS", "SQLite3"],
          liveUrl: "https://cafeteria.egatur.edu.pe/",
          githubUrl: "https://github.com/JosePizarro1/cafeteria.git",
          youtubeUrl: ""
        },
        {
          title: "Centro de Salud Esperanza",
          description: "Un sistema para el Centro de Salud Esperanza diseñado para monitorear servicios básicos para la población y garantizar un seguimiento y planificación precisos.",
          image: "/img/centrosaludesperanza.webp",
          tags: ["Python", "Django", "Bootstrap", "Tailwind CSS", "SQLite3"],
          liveUrl: "",
          githubUrl: "https://github.com/JosePizarro1/mcais.git",
          youtubeUrl: ""
        }
      ]
    },
    contact: {
      title: "Ponte en",
      highlight: "Contacto",
      description: "¿Tienes un proyecto en mente o quieres colaborar? Siéntete libre de escribirme a través del formulario o de mis datos de contacto.",
      infoTitle: "Información de Contacto",
      email: "Correo Electrónico",
      phone: "Teléfono",
      locationLabel: "Ubicación",
      locationValue: "Tacna, Perú",
      followMe: "Sígueme",
      formName: "Tu Nombre",
      formEmail: "Tu Correo",
      formSubject: "Asunto",
      formMessage: "Mensaje",
      placeholderName: "Ej. Juan Pérez",
      placeholderEmail: "Ej. juan@example.com",
      placeholderSubject: "Consulta sobre proyecto",
      placeholderMessage: "Hola, me gustaría hablar sobre...",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      success: "Mensaje enviado con éxito. Me pondré en contacto contigo pronto.",
      error: "Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo."
    },
    footer: {
      description: "Un desarrollador fullstack apasionado por crear experiencias web hermosas y funcionales con tecnologías modernas.",
      links: "Enlaces Rápidos",
      contactInfo: "Información de Contacto",
      rights: "Todos los derechos reservados."
    },
    chatbot: {
      title: "Asistente de Jose",
      status: "En línea | Gemini AI",
      greeting: "¡Hola! Soy el asistente virtual de Jose. ¿Quieres saber sobre sus proyectos o contactarlo?",
      bubbleGreeting: "¡Hola! Soy Jose. ¿En qué puedo ayudarte hoy?",
      placeholder: "Escribe un mensaje...",
      error: "Lo siento, tuve un problema al procesar tu mensaje. ¿Podrías intentarlo de nuevo?",
      options: {
        projects: "Ver Proyectos",
        skills: "Habilidades",
        contact: "Contacto"
      }
    },
    cv: {
      title: "Mi Curriculum Vitae",
      subtitle: "Formato optimizado ATS (Estilo Oxford)",
      printButton: "Imprimir / Descargar PDF",
      location: "Tacna, Perú",
      subtitleRole: "Software Engineer / Backend & AI Developer",
      sections: {
        summary: "Resumen Profesional",
        experience: "Experiencia Laboral",
        skills: "Habilidades Técnicas",
        education: "Educación y Certificaciones",
        extraCertifications: "Certificaciones"
      },
      summaryParagraph: "Ingeniero de Sistemas y Desarrollador Backend / Full Stack con más de 2 años de experiencia en arquitecturas escalables y desacopladas. Especializado en el ecosistema backend con Java (Spring Boot, Arquitectura Hexagonal), .NET Core y Python (Django), junto al desarrollo frontend modular (React, Next.js, Microfrontends). Experiencia probada en pruebas automatizadas (xUnit, Moq), orquestación de Agentes de IA con LangGraph y flujos modernos de ingeniería asistidos por IA.",
      experienceList: [
        {
          company: "TANNUA",
          role: "Desarrollador Backend, Microservicios & IA",
          date: "Nov. 2025 — Presente",
          bullets: [
            "Diseñé e implementé microservicios bajo Arquitectura Hexagonal en Java (Spring Boot) y servicios backend en .NET Core (C#), aplicando JPA/Hibernate, Entity Framework Core y funciones SQL directas, garantizando cobertura con pruebas unitarias y de integración mediante JUnit 5, Mockito, xUnit y Moq.",
            "Participé en el desarrollo de un Agente de IA Conversacional orquestando flujos de estados complejos con Python y LangGraph, integrando validación predictiva de comprobantes bancarios mediante modelos de Azure Document Intelligence (OCR).",
            "Implementé la integración de interfaces modulares mediante Microfrontends, canales en tiempo real con WebSockets y pipelines CI/CD automatizados con Docker en Azure DevOps."
          ]
        },
        {
          company: "RIVERCON",
          role: "Desarrollador Mobile & Frontend",
          date: "May. 2025 — Oct. 2025",
          bullets: [
            "Desarrollé aplicaciones móviles de alto rendimiento con Flutter y Firebase, entregando el sistema logístico de inventarios 'Horzifrut' y la red social bilingüe 'Zodiac'.",
            "Diseñé la arquitectura de estado y autenticación multicanal, reduciendo tiempos de respuesta y optimizando la experiencia móvil."
          ]
        },
        {
          company: "EGATUR",
          role: "Desarrollador Full Stack",
          date: "Sep. 2024 — May. 2025",
          bullets: [
            "Construí los portales de gestión operativa y tesorería en Python/Django bajo arquitectura MVC, digitalizando flujos manuales corporativos.",
            "Automaticé la generación y auditoría de reportes financieros conectando bases de datos relacionales con APIs de Google Workspace (Drive y Gmail)."
          ]
        },
        {
          company: "MEDIEVAL (Web3)",
          role: "Desarrollador Full Stack & Backend",
          date: "Feb. 2022 — Ago. 2022",
          bullets: [
            "Diseñé e implementé la arquitectura backend en Django y MySQL para una plataforma de juegos con más de 2,000 usuarios activos concurrentes.",
            "Gestioné lógica transaccional asíncrona segura, integrando flujos de soporte y métricas operativas centralizadas."
          ]
        }
      ],
      skillsLabels: {
        languagesCore: "Lenguajes",
        languagesCoreVal: "Java, C# (.NET), Python, JavaScript, TypeScript, SQL.",
        back: "Backend & Arquitectura",
        backVal: "Spring Boot, Arquitectura Hexagonal, .NET Core, Entity Framework, Hibernate / JPA, Django, Microservicios, REST APIs.",
        testing: "Testing & Calidad",
        testingVal: "JUnit 5 & Mockito (Java) | xUnit & Moq (.NET) | Pytest (Python) | TDD, Pruebas Unitarias e Integración.",
        front: "Frontend",
        frontVal: "React, Next.js, Microfrontends, Tailwind CSS, Flutter.",
        infra: "Cloud, IA & DevOps",
        infraVal: "AWS (Certified AI Practitioner), LangGraph, Azure Document Intelligence, Azure DevOps, Docker, WebSockets, CI/CD.",
        db: "Bases de Datos",
        dbVal: "PostgreSQL, MongoDB (NoSQL), MySQL, SQL Server, SQLite.",
        apis: "Herramientas & AI Tooling",
        apisVal: "Antigravity, Cursor, Claude Code, Git, GitHub, Postman, Power BI, Salesforce Shield (Apex).",
        languages: "Idiomas",
        languagesVal: "Español (Nativo), Inglés (B2 Intermedio Profesional - Certificado EF SET)."
      },
      educationList: [
        {
          school: "Universidad Nacional Jorge Basadre Grohmann",
          degree: "Bachiller en Ingeniería en Informática y Sistemas"
        },
        {
          school: "COAR Moquegua",
          degree: "Egresado de Excelencia Académica (2019)"
        }
      ],
      extraBullets: [
        "AWS Certified AI Practitioner — Amazon Web Services (Credencial oficial completada).",
        "AWS Certified Cloud Practitioner — Amazon Web Services (En preparación / Próxima a certificar).",
        "Análisis de Datos con Power BI — Certificación completada (Udemy, 30 horas)."
      ]
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      certifications: "Certifications",
      solutions: "Solutions",
      projects: "Projects",
      contact: "Contact",
      cv: "My CV"
    },
    hero: {
      welcome: "Welcome to my portfolio",
      greeting: "Hi, I'm",
      roles: [
        "FullStack Developer",
        "Django Specialist",
        "Tailwind and Bootstrap Expert"
      ],
      description: "I develop end-to-end web applications, combining frontend interactivity with robust backend services to deliver engaging, responsive, and scalable solutions with clean, maintainable code.",
      viewWork: "View My Work",
      contactMe: "Contact Me"
    },
    about: {
      title: "About Me",
      subtitle: "FullStack Developer passionate about creating beautiful solutions and AI agents",
      description: "Developer passionate about building responsive, accessible, and performant web applications. With a solid foundation in both frontend and backend technologies, I’m currently exploring the path that best aligns with my long-term goals, whether it's diving deeper into backend architecture or refining my frontend craft.",
      location: "Tacna, Peru",
      downloadResume: "Download Resume (PDF)",
      hobbies: {
        coding: "Open Source",
        gaming: "Gaming",
        music: "Music",
        reading: "Reading",
        fitness: "Fitness"
      }
    },
    skills: {
      title: "My",
      highlight: "Skills",
      description: "I've worked with a variety of technologies in the web development world. Here's an overview of my technical skills and expertise.",
      core: "Core Competencies",
      tools: "Technologies & Tools"
    },
    certifications: {
      title: "Certifications &",
      highlight: "Credentials",
      description: "Continuous learning and specialization in Artificial Intelligence and Cloud.",
      completedTitle: "Completed",
      list: [
        {
          title: "AWS Certified AI Practitioner",
          issuer: "AWS Certification",
          badge: "/img/badges/aws-ai-practitioner.webp",
          description: "Foundations of Generative AI, LLMs, Amazon Bedrock, and Cloud AI solutions.",
          tags: ["GenAI", "Bedrock", "SageMaker", "Prompting"],
          progress: 100
        }
      ]
    },
    solutions: {
      title: "Enterprise",
      highlight: "Solutions",
      description: "I have designed and implemented advanced workflows and integrations to solve complex business problems in corporate systems.",
      viewFlow: "More details",
      close: "Close",
      list: [
        {
          id: "sf-shield",
          title: "Salesforce Shield & Data Security",
          subtitle: "Platform Encryption & Auditing",
          tech: ["Salesforce Shield", "Apex", "CRM Analytics", "Tenant Secrets"],
          description: "Real-time security encryption and monitoring to protect sensitive corporate data.",
          challenge: ["PII leak risks", "Strict compliance", "Search restrictions"],
          solution: ["AES-256 Encryption", "Secure Apex classes", "Event Monitoring", "CRM Analytics"],
          flow: [
            "[SF-SHIELD] Configuring corporate Tenant Secret...",
            "[SECURITY] Applying Platform Encryption on PII fields...",
            "[APEX] Running custom Apex classes (0% overhead)...",
            "[MONITOR] API event logs streaming to CRM Analytics."
          ]
        },
        {
          id: "webhook-leads",
          title: "Meta Leads Sync Pipeline",
          subtitle: "Real-Time CRM Ingestion",
          tech: ["FastAPI", "Webhooks", "Meta API", "Meta Leads", "CRM Integrations"],
          description: "Automated, immediate ingestion of leads from Meta Ads into the CRM.",
          challenge: ["Lead data loss", "Ingestion latency", "Unvalidated inputs"],
          solution: ["Asynchronous FastAPI", "Meta API Webhooks", "Instant Validation"],
          flow: [
            "[META-API] Subscribed to Meta Leads Webhook (FB/IG Ads)...",
            "[FASTAPI] Async server listening on POST events...",
            "[VALIDATOR] Cleaning & validating phone & email format...",
            "[CRM-SYNC] Lead successfully ingested into CRM database."
          ]
        },
        {
          id: "slack-ticketing",
          title: "Slack Support & Alert Hub",
          subtitle: "Support Collision Prevention",
          tech: ["Apps Script", "Slack Webhooks", "BigQuery", "Pusher", "Websockets"],
          description: "Bidirectional ticket assignment and alert system in Slack with real-time sync.",
          challenge: ["Duplicate responses", "API rate limits", "Agent desynchronization"],
          solution: ["Slack Receiver Bot", "Google Apps Script Engine", "BigQuery Logs DB", "Pusher WebSockets"],
          flow: [
            "[SLACK-BOT] Listening to Webhook in support channel...",
            "[APPS-SCRIPT] Processing and routing ticket automatically...",
            "[BIGQUERY] Logging ticket telemetry & history...",
            "[WEBSOCKET] Pusher broadcasting event: Ticket Claimed (0.2s)."
          ]
        },
        {
          id: "sf-looker",
          title: "BI Pipeline: Salesforce to Looker Studio",
          subtitle: "Automated Reporting System",
          tech: ["Looker Studio", "Google Sheets API", "Salesforce API", "BI Dashboards"],
          description: "Automated data visual pipeline from Salesforce to interactive corporate dashboards.",
          challenge: ["Manual reporting", "High license costs", "Stale business metrics"],
          solution: ["Daily Batch Syncs", "Google Sheets API", "Looker Studio Dashboards"],
          flow: [
            "[SALESFORCE] Executing daily commercial export query...",
            "[SHEETS-API] Syncing consolidated data with Google Sheets...",
            "[BI-ENGINE] Looker Studio processing blended sources...",
            "[LOOKER] Executive dashboard refreshed & ready."
          ]
        }
      ]
    },
    projects: {
      title: "My",
      highlight: "Projects",
      description: "Here are some of my recent projects. Each project showcases different skills and technologies I've worked with.",
      more: "More projects in progress",
      liveDemo: "Live Demo",
      sourceCode: "Source Code",
      youtube: "YouTube",
      downloadBrochure: "Download Brochure",
      list: [
        {
          title: "Control Lab Website System",
          description: "An advanced laboratory management system and patient portal integrated with LIS (Laboratory Information System). Features patient tracking, automated test result delivery, medical scheduling, and clinical order synchronization.",
          image: "/img/pagina_web_salud_laboratorio.webp",
          tags: ["React", "Python", "Supabase", "PostgreSQL", "LIS Integration"],
          liveUrl: "",
          githubUrl: "",
          youtubeUrl: "",
          isControlLab: true
        },
        {
          title: "Metropolitano - Medical Management System",
          description: "A robust and modern system for affiliate management, medical care tracking, and bulk data import via Excel. Features a premium UI with optimized performance and dynamic interactions.",
          image: "/img/seguimiento_metropolitano.webp",
          tags: ["Django", "Pandas", "Tailwind CSS", "DataTables.js", "PostgreSQL", "Vercel"],
          liveUrl: "https://seguimientoati.vercel.app/",
          githubUrl: "",
          youtubeUrl: ""
        },
        {
          title: "Customer Service & Booking Bot",
          description: "An intelligent customer service bot focused on automated reservation flows. Integrates Azure OCR to process and validate payment screenshots, and synchronizes with third-party services for scheduling and calendar management.",
          image: "/img/bot_reservas.webp",
          tags: ["FastAPI", "LangGraph", "RAG & Embeddings", "Docker", "Azure DevOps", "WhatsApp API", "Azure OCR"],
          liveUrl: "",
          githubUrl: "",
          youtubeUrl: ""
        },
        {
          title: "P2P Currency Calculator",
          description: "An advanced calculator designed to manage remittances and arbitrage using the Binance P2P market. It features real-time rate tracking, custom profit margins, and multi-currency support.",
          image: "/img/taza_calculadora.webp",
          tags: ["Python", "Flask", "JavaScript", "Binance API", "Vercel"],
          liveUrl: "https://taza-calculadora.vercel.app",
          githubUrl: "https://github.com/JosePizarro1/TazaCalculadora.git",
          youtubeUrl: ""
        },
        {
          title: "Caja System",
          description: "A comprehensive system for managing income and expense flows, personnel, an expense calendar, and full accounting of payments.",
          image: "/img/imagen1.webp",
          tags: ["Django", "Bootstrap", "Tailwind CSS", "Gmail API", "Google Drive API", "SQLite3"],
          liveUrl: "https://cajaegatur.pythonanywhere.com/",
          githubUrl: "https://github.com/JosePizarro1/cajachica",
          youtubeUrl: ""
        },
        {
          title: "GTI Internal Process Management Egatur",
          description: "An end-to-end internal workflow system for administrative documents, featuring digital signatures and role-based access control.",
          image: "/img/imagen2.webp",
          tags: ["Django", "Bootstrap", "Tailwind CSS", "SQLite3", "Gmail API", "Google Drive API"],
          liveUrl: "https://gti.egatur.edu.pe/",
          githubUrl: "https://github.com/JosePizarro1/gti",
          youtubeUrl: ""
        },
        {
          title: "Gym Management/Academy System",
          description: "A responsive gym management/Academy platform with QR-based attendance, client management, payment processing, and membership tracking.",
          image: "/img/imagen3.webp",
          tags: ["Django", "Bootstrap", "Tailwind CSS", "SQLite3"],
          liveUrl: "https://demogym.pythonanywhere.com/",
          githubUrl: "https://github.com/JosePizarro1/Gym",
          youtubeUrl: ""
        },
        {
          title: "NFT Chest Adventure Game MEDIEVAL",
          description: "A responsive NFT-based game with chest mechanics and character logic for gold creation. Reached over 1,800 active users during its peak phase.",
          image: "/img/imagen4.webp",
          tags: ["Django", "Bootstrap", "Tailwind CSS", "SQLite3"],
          liveUrl: "https://medievalnft.pythonanywhere.com/login/?next=/",
          githubUrl: "",
          youtubeUrl: "https://youtu.be/Cg1xWz0_uwk"
        },
        {
          title: "Cafeteria Management System with Inventory and Kardex",
          description: "A fully responsive web application. This system manages a complete product inventory with Kardex tracking between warehouses. It includes sales functionality to calculate profits, monitor stock levels, and detect shortages.",
          image: "/img/cafeteria.webp",
          tags: ["Django", "Bootstrap", "Tailwind CSS", "SQLite3"],
          liveUrl: "https://cafeteria.egatur.edu.pe/",
          githubUrl: "https://github.com/JosePizarro1/cafeteria.git",
          youtubeUrl: ""
        },
        {
          title: "Centro Salud Esperanza",
          description: "A system for the Esperanza Health Center designed to monitor basic services for the population and ensure accurate tracking and planning.",
          image: "/img/centrosaludesperanza.webp",
          tags: ["Python", "Django", "Bootstrap", "Tailwind CSS", "SQLite3"],
          liveUrl: "",
          githubUrl: "https://github.com/JosePizarro1/mcais.git",
          youtubeUrl: ""
        }
      ]
    },
    contact: {
      title: "Get In",
      highlight: "Touch",
      description: "Have a project in mind or want to collaborate? Feel free to reach out to me using the form below or through my contact information.",
      infoTitle: "Contact Information",
      email: "Email",
      phone: "Phone",
      locationLabel: "Location",
      locationValue: "Tacna, Peru",
      followMe: "Follow Me",
      formName: "Your Name",
      formEmail: "Your Email",
      formSubject: "Subject",
      formMessage: "Message",
      placeholderName: "e.g. John Doe",
      placeholderEmail: "e.g. john@example.com",
      placeholderSubject: "Project Inquiry",
      placeholderMessage: "Hello, I'd like to talk about...",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully. I'll get back to you soon.",
      error: "There was an error sending your message. Please try again."
    },
    footer: {
      description: "A passionate fullstack developer creating beautiful and functional web experiences with modern technologies.",
      links: "Quick Links",
      contactInfo: "Contact Info",
      rights: "All rights reserved."
    },
    chatbot: {
      title: "Jose Assistant",
      status: "Online | Gemini AI",
      greeting: "Hi! I'm Jose's virtual assistant. Would you like to know about his projects or contact him?",
      bubbleGreeting: "Hi! I'm Jose. How can I help you today?",
      placeholder: "Type a message...",
      error: "Sorry, I had a problem processing your message. Could you please try again?",
      options: {
        projects: "View Projects",
        skills: "Skills",
        contact: "Contact"
      }
    },
    cv: {
      title: "My Curriculum Vitae",
      subtitle: "ATS Optimized Format (Oxford Style)",
      printButton: "Print / Download PDF",
      location: "Tacna, Peru",
      subtitleRole: "Software Engineer / Backend & AI Developer",
      sections: {
        summary: "Professional Summary",
        experience: "Work Experience",
        skills: "Technical Skills",
        education: "Education and Certifications",
        extraCertifications: "Certifications"
      },
      summaryParagraph: "Systems Engineer and Backend / Full Stack Developer with over 2 years of experience designing scalable, decoupled software architectures. Specialized in backend engineering with Java (Spring Boot, Hexagonal Architecture), .NET Core, and Python (Django), backed by modular frontend development (React, Next.js, Microfrontends). Proven experience in automated testing (JUnit 5, xUnit, Pytest), AI Agent orchestration with LangGraph, and modern AI-augmented developer workflows.",
      experienceList: [
        {
          company: "TANNUA",
          role: "Backend, Microservices & AI Developer",
          date: "Nov. 2025 — Present",
          bullets: [
            "Designed and implemented microservices using Hexagonal Architecture in Java (Spring Boot) and backend services in .NET Core (C#), utilizing JPA/Hibernate, Entity Framework Core, and direct SQL functions, ensuring code coverage with unit and integration testing via JUnit 5, Mockito, xUnit, and Moq.",
            "Participated in the engineering of an advanced conversational AI Agent orchestrating state graphs with Python and LangGraph, integrating predictive bank receipt verification with Azure Document Intelligence (OCR).",
            "Implemented modular interfaces using Microfrontends, bidirectional real-time channels via WebSockets, and automated CI/CD pipelines with Docker on Azure DevOps."
          ]
        },
        {
          company: "RIVERCON",
          role: "Mobile & Frontend Developer",
          date: "May 2025 — Oct. 2025",
          bullets: [
            "Developed high-performance mobile applications using Flutter and Firebase, delivering 'Horzifrut' (logistics inventory management) and 'Zodiac' (bilingual social network).",
            "Architected app state and multi-provider authentication, optimizing user retention and mobile UX responsiveness."
          ]
        },
        {
          company: "EGATUR",
          role: "Full Stack Developer",
          date: "Sep. 2024 — May 2025",
          bullets: [
            "Engineered administrative and treasury management platforms in Python/Django under MVC architecture, digitizing manual corporate operations.",
            "Automated automated reporting and financial audits by connecting relational databases with Google Workspace APIs (Drive and Gmail)."
          ]
        },
        {
          company: "MEDIEVAL (Web3)",
          role: "Full Stack & Backend Developer",
          date: "Feb. 2022 — Aug. 2022",
          bullets: [
            "Architected backend infrastructure with Django and MySQL for a Web3 gaming platform with over 2,000 active concurrent users.",
            "Managed secure asynchronous transaction logic and integrated centralized support and monitoring workflows."
          ]
        }
      ],
      skillsLabels: {
        languagesCore: "Languages",
        languagesCoreVal: "Java, C# (.NET), Python, JavaScript, TypeScript, SQL.",
        back: "Backend & Architecture",
        backVal: "Spring Boot, Hexagonal Architecture, .NET Core, Entity Framework, Hibernate / JPA, Django, Microservices, REST APIs.",
        testing: "Testing & Quality",
        testingVal: "JUnit 5 & Mockito (Java) | xUnit & Moq (.NET) | Pytest (Python) | TDD, Unit & Integration Testing.",
        front: "Frontend",
        frontVal: "React, Next.js, Microfrontends, Tailwind CSS, Flutter.",
        infra: "Cloud, AI & DevOps",
        infraVal: "AWS (Certified AI Practitioner), LangGraph, Azure Document Intelligence, Azure DevOps, Docker, WebSockets, CI/CD.",
        db: "Databases",
        dbVal: "PostgreSQL, MongoDB (NoSQL), MySQL, SQL Server, SQLite.",
        apis: "Tools & AI Tooling",
        apisVal: "Antigravity, Cursor, Claude Code, Git, GitHub, Postman, Power BI, Salesforce Shield (Apex).",
        languages: "Languages",
        languagesVal: "Spanish (Native), English (B2 Upper Intermediate - Certified EF SET)."
      },
      educationList: [
        {
          school: "Universidad Nacional Jorge Basadre Grohmann",
          degree: "Bachelor of Science in Computer Science & Systems Engineering"
        },
        {
          school: "COAR Moquegua",
          degree: "Academic Excellence Graduate (2019)"
        }
      ],
      extraBullets: [
        "AWS Certified AI Practitioner — Amazon Web Services (Official credential completed).",
        "AWS Certified Cloud Practitioner — Amazon Web Services (In progress / Target certification).",
        "Data Analysis with Power BI — Completed Certification (Udemy, 30 hours)."
      ]
    }
  }
};

