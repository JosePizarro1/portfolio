export const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      skills: "Habilidades",
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
          description: "Un avanzado sistema de gestión de laboratorios y portal web de atención a pacientes. Integra seguimiento de pacientes, informes médicos, programación de citas y entrega de resultados. Diseñado con patrones modernos de experiencia de usuario.",
          image: "/img/pagina_web_salud_laboratorio.png",
          tags: ["React", "Python", "Supabase", "PostgreSQL"],
          liveUrl: "",
          githubUrl: "",
          youtubeUrl: "",
          brochureUrl: "/Control Lab -Broushure.pdf",
          isControlLab: true
        },
        {
          title: "Metropolitano - Sistema de Gestión Médica",
          description: "Un sistema robusto y moderno para la gestión de afiliados, seguimiento de atención médica e importación masiva de datos mediante Excel. Ofrece una interfaz premium con rendimiento optimizado e interacciones dinámicas.",
          image: "/img/seguimiento_metropolitano.png",
          tags: ["Django", "Pandas", "Tailwind CSS", "DataTables.js", "PostgreSQL", "Vercel"],
          liveUrl: "https://seguimientoati.vercel.app/",
          githubUrl: "",
          youtubeUrl: ""
        },
        {
          title: "Bot de Atención al Cliente y Reservas",
          description: "Un bot inteligente de atención al cliente enfocado en flujos de reserva automatizados. Integra Azure OCR para procesar y validar capturas de pago, y se sincroniza con servicios de terceros para la gestión de calendarios y agendas.",
          image: "/img/imagen3.png",
          tags: ["FastAPI", "LangGraph", "RAG & Embeddings", "Docker", "Azure DevOps", "WhatsApp API", "Azure OCR"],
          liveUrl: "",
          githubUrl: "",
          youtubeUrl: ""
        },
        {
          title: "Taza Calculadora P2P",
          description: "Una calculadora avanzada diseñada para gestionar remesas y arbitraje utilizando el mercado P2P de Binance. Ofrece seguimiento de tasas en tiempo real, márgenes de ganancia personalizados y soporte multi-moneda.",
          image: "/img/taza_calculadora.png",
          tags: ["Python", "Flask", "JavaScript", "Binance API", "Vercel"],
          liveUrl: "https://taza-calculadora.vercel.app",
          githubUrl: "https://github.com/JosePizarro1/TazaCalculadora.git",
          youtubeUrl: ""
        },
        {
          title: "Caja System",
          description: "Un sistema integral para gestionar flujos de ingresos y egresos, personal, un calendario de gastos y la contabilidad completa de pagos.",
          image: "/img/imagen1.png",
          tags: ["Django", "Bootstrap", "Tailwind CSS", "Gmail API", "Google Drive API", "SQLite3"],
          liveUrl: "https://cajaegatur.pythonanywhere.com/",
          githubUrl: "https://github.com/JosePizarro1/cajachica",
          youtubeUrl: ""
        },
        {
          title: "GTI Gestión de Procesos Internos Egatur",
          description: "Un sistema de flujo de trabajo interno de extremo a extremo para documentos administrativos, con firmas digitales y control de acceso basado en roles.",
          image: "/img/imagen2.png",
          tags: ["Django", "Bootstrap", "Tailwind CSS", "SQLite3", "Gmail API", "Google Drive API"],
          liveUrl: "https://gti.egatur.edu.pe/",
          githubUrl: "https://github.com/JosePizarro1/gti",
          youtubeUrl: ""
        },
        {
          title: "Sistema de Gimnasio/Academia",
          description: "Una plataforma adaptable de gestión de gimnasios/academias con control de asistencia por código QR, gestión de clientes, procesamiento de pagos y seguimiento de membresías.",
          image: "/img/imagen3.png",
          tags: ["Django", "Bootstrap", "Tailwind CSS", "SQLite3"],
          liveUrl: "https://demogym.pythonanywhere.com/",
          githubUrl: "https://github.com/JosePizarro1/Gym",
          youtubeUrl: ""
        },
        {
          title: "Aventura de Cofres NFT Medieval",
          description: "Un juego adaptable basado en NFTs con mecánicas de cofres y lógica de personajes para la generación de oro. Alcanzó más de 1,800 usuarios activos durante su fase pico.",
          image: "/img/imagen4.png",
          tags: ["Django", "Bootstrap", "Tailwind CSS", "SQLite3"],
          liveUrl: "https://medievalnft.pythonanywhere.com/login/?next=/",
          githubUrl: "",
          youtubeUrl: "https://youtu.be/Cg1xWz0_uwk"
        },
        {
          title: "Sistema de Cafetería con Inventario y Kardex",
          description: "Aplicación web responsiva para gestionar inventarios completos de productos con seguimiento Kardex entre almacenes. Incluye funcionalidad de ventas para calcular ganancias, monitorizar stock y detectar escasez.",
          image: "/img/cafeteria.png",
          tags: ["Django", "Bootstrap", "Tailwind CSS", "SQLite3"],
          liveUrl: "https://cafeteria.egatur.edu.pe/",
          githubUrl: "https://github.com/JosePizarro1/cafeteria.git",
          youtubeUrl: ""
        },
        {
          title: "Centro de Salud Esperanza",
          description: "Un sistema para el Centro de Salud Esperanza diseñado para monitorear servicios básicos para la población y garantizar un seguimiento y planificación precisos.",
          image: "/img/centrosaludesperanza.png",
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
      subtitleRole: "Software Engineer / FullStack Developer (+2 Años de Exp.)",
      sections: {
        summary: "Resumen Profesional",
        experience: "Experiencia Laboral",
        skills: "Habilidades Técnicas e Idiomas",
        education: "Educación y Certificaciones",
        extraCertifications: "Certificaciones Extra"
      },
      summaryParagraph: "Ingeniero Informático y Desarrollador FullStack con <strong>más de 2 años de experiencia</strong> sólida diseñando e implementando arquitecturas web y soluciones tecnológicas de extremo a extremo. Altamente competente en los ecosistemas de <strong>Python y JavaScript (React, Next.js, Django, FastAPI)</strong> y en bases de datos relacionales. Cuento con probada experiencia desarrollando aplicaciones modulares, automatizando flujos corporativos, implementando seguridad avanzada (<strong>Salesforce Shield</strong>, cifrado y auditoría) e integrando <strong>Agentes de IA Generativa</strong> (LangGraph), <strong>WebSockets</strong> y <strong>Webhooks</strong> en tiempo real. Destacado por traducir problemas complejos de negocio en interfaces refinadas y productos altamente escalables impulsados por inteligencia artificial y sólidas prácticas de ingeniería.",
      experienceList: [
        {
          company: "TANNUA",
          role: "Desarrollador (IA & Backend)",
          date: "Nov. 2025 - Actualidad",
          bullets: [
            "Lideré el despliegue de un Agente de IA Corporativo integrando potentes sistemas de <strong>RAG (Retrieval-Augmented Generation) y Embeddings</strong> para respuestas orgánicas, orquestados en flujos dinámicos mediante Python y LangGraph.",
            "Diseñé e implementé la arquitectura de <strong>Webhooks</strong> para integraciones con <strong>Meta (WhatsApp Cloud API y Facebook Leads)</strong>, automatizando la captura de prospectos (leads) y su ingesta directa al CRM en tiempo real.",
            "Reforcé el cumplimiento de seguridad y gobernanza de datos en <strong>Salesforce</strong> mediante la implementación de <strong>Salesforce Shield</strong>; configurando encriptación de plataforma (Platform Encryption), auditorías y monitoreo de eventos (Event Monitoring) utilizando clases <strong>Apex</strong> personalizadas.",
            "Establecí canales de comunicación bidireccional en tiempo real utilizando <strong>WebSockets</strong> para transmitir notificaciones instantáneas de eventos de los agentes de IA y actualizaciones de citas.",
            "Aceleré la gestión de citas multi-servicio implementando un Motor de Búsqueda Secuencial inteligente, sincronizado en tiempo real con la API de AgendaPro.",
            "Sistematicé la validación de pagos entrenando modelos predictivos con Azure Document Intelligence (OCR) para lograr el reconocimiento preciso de recibos bancarios.",
            "Automaticé tareas críticas de infraestructura creando servicios en segundo plano y notificaciones, gestionando todo el ciclo de despliegue mediante <strong>Docker</strong> y flujos CI/CD en <strong>Azure DevOps</strong>."
          ]
        },
        {
          company: "RIVERCON",
          role: "Desarrollador Frontend/Mobile",
          date: "Mayo 2025 - Oct. 2025",
          bullets: [
            "Desarrollo eficiente de aplicaciones móviles colaborativas utilizando <strong>Flutter, FlutterFlow</strong> y arquitecturas de <strong>Firebase</strong>.",
            "Creación de 'Horzifrut' (sistema logístico móvil de inventarios) y 'Zodiac' (red social bilingüe con autenticación telefónica/email)."
          ]
        },
        {
          company: "EGATUR",
          role: "Desarrollador Full Stack",
          date: "Sept. 2024 - Mayo 2025",
          bullets: [
            "Centralicé el control de flujos de ingresos directivos mediante la construcción de los portales 'Trámite Interno GTI' y 'Caja Chica', escalados en <strong>Python y Django</strong>.",
            "Reduje la carga manual operativa al sincronizar la generación de reportes automáticos conectando bases de datos SQLite3 con las robustas APIs de <strong>Google Workspace (Gmail y Drive)</strong>.",
            "Refactoricé patrones de diseño adoptando un fuerte modelo <strong>MVC</strong>, promoviendo despliegues seguros y estructurados."
          ]
        },
        {
          company: "Independiente / Web3",
          role: "Game & Web Developer",
          date: "Feb. 2022 - Ago. 2022",
          bullets: [
            "Despliegue de un exitoso videojuego integral Web3 (NFT) ('Medieval'), alcanzando más de 2,000 usuarios hiper-activos distribuidos en MySQL.",
            "Manejo integral de lógica de compra/venta y asincronía en aperturas de cofres generados proceduralmente.",
            "Automaticé la sincronización de datos y el flujo de reportes corporativos integrando <strong>Salesforce con Excel, Looker Studio, Slack y Google Apps Script</strong> para agilizar la toma de decisiones y alertas de canales.",
            "Diseñé y desarrollé un <strong>Sistema de Gestión de Tickets</strong> interno a medida dentro de Salesforce para centralizar e incrementar la eficiencia del soporte operativo."
          ]
        }
      ],
      skillsLabels: {
        languagesCore: "Lenguajes y Core",
        front: "Frameworks Frontend",
        back: "Frameworks Backend",
        db: "Bases de Datos",
        infra: "Infraestructura, DevOps e IA",
        apis: "APIs y Otras Herramientas",
        languages: "Idiomas",
        languagesVal: "Español (Nativo), Inglés (B2 Upper Intermediate - Certificado EF SET)."
      },
      educationList: [
        {
          school: "Universidad Nacional Jorge Basadre Grohmann",
          degree: "Bachiller en Ingeniería Informática y Sistemas"
        },
        {
          school: "COAR Moquegua",
          degree: "Egresado (2019)"
        }
      ],
      extraBullets: [
        "Análisis de Datos con Power BI: Certificación completada (Udemy - 30 horas)."
      ]
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
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
      description: "I develop end-to-end web applications—combining frontend interactivity with robust backend services—to deliver engaging, responsive, and scalable solutions with clean, maintainable code.",
      viewWork: "View My Work",
      contactMe: "Contact Me"
    },
    about: {
      title: "About Me",
      subtitle: "FullStack Developer passionate about creating beautiful solutions and AI agents",
      description: "Developer passionate about building responsive, accessible, and performant web applications. With a solid foundation in both frontend and backend technologies, I’m currently exploring the path that best aligns with my long-term goals—whether it's diving deeper into backend architecture or refining my frontend craft.",
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
          description: "An advanced laboratory management system and patient care web portal. Integrates patient tracking, medical reports, scheduling, and results delivery. Designed with modern user experience patterns.",
          image: "/img/pagina_web_salud_laboratorio.png",
          tags: ["React", "Python", "Supabase", "PostgreSQL"],
          liveUrl: "",
          githubUrl: "",
          youtubeUrl: "",
          brochureUrl: "/Control Lab -Broushure.pdf",
          isControlLab: true
        },
        {
          title: "Metropolitano - Medical Management System",
          description: "A robust and modern system for affiliate management, medical care tracking, and bulk data import via Excel. Features a premium UI with optimized performance and dynamic interactions.",
          image: "/img/seguimiento_metropolitano.png",
          tags: ["Django", "Pandas", "Tailwind CSS", "DataTables.js", "PostgreSQL", "Vercel"],
          liveUrl: "https://seguimientoati.vercel.app/",
          githubUrl: "",
          youtubeUrl: ""
        },
        {
          title: "Customer Service & Booking Bot",
          description: "An intelligent customer service bot focused on automated reservation flows. Integrates Azure OCR to process and validate payment screenshots, and synchronizes with third-party services for scheduling and calendar management.",
          image: "/img/imagen3.png",
          tags: ["FastAPI", "LangGraph", "RAG & Embeddings", "Docker", "Azure DevOps", "WhatsApp API", "Azure OCR"],
          liveUrl: "",
          githubUrl: "",
          youtubeUrl: ""
        },
        {
          title: "P2P Currency Calculator",
          description: "An advanced calculator designed to manage remittances and arbitrage using the Binance P2P market. It features real-time rate tracking, custom profit margins, and multi-currency support.",
          image: "/img/taza_calculadora.png",
          tags: ["Python", "Flask", "JavaScript", "Binance API", "Vercel"],
          liveUrl: "https://taza-calculadora.vercel.app",
          githubUrl: "https://github.com/JosePizarro1/TazaCalculadora.git",
          youtubeUrl: ""
        },
        {
          title: "Caja System",
          description: "A comprehensive system for managing income and expense flows, personnel, an expense calendar, and full accounting of payments.",
          image: "/img/imagen1.png",
          tags: ["Django", "Bootstrap", "Tailwind CSS", "Gmail API", "Google Drive API", "SQLite3"],
          liveUrl: "https://cajaegatur.pythonanywhere.com/",
          githubUrl: "https://github.com/JosePizarro1/cajachica",
          youtubeUrl: ""
        },
        {
          title: "GTI Internal Process Management Egatur",
          description: "An end-to-end internal workflow system for administrative documents, featuring digital signatures and role-based access control.",
          image: "/img/imagen2.png",
          tags: ["Django", "Bootstrap", "Tailwind CSS", "SQLite3", "Gmail API", "Google Drive API"],
          liveUrl: "https://gti.egatur.edu.pe/",
          githubUrl: "https://github.com/JosePizarro1/gti",
          youtubeUrl: ""
        },
        {
          title: "Gym Management/Academy System",
          description: "A responsive gym management/Academy platform with QR-based attendance, client management, payment processing, and membership tracking.",
          image: "/img/imagen3.png",
          tags: ["Django", "Bootstrap", "Tailwind CSS", "SQLite3"],
          liveUrl: "https://demogym.pythonanywhere.com/",
          githubUrl: "https://github.com/JosePizarro1/Gym",
          youtubeUrl: ""
        },
        {
          title: "NFT Chest Adventure Game MEDIEVAL",
          description: "A responsive NFT-based game with chest mechanics and character logic for gold creation. Reached over 1,800 active users during its peak phase.",
          image: "/img/imagen4.png",
          tags: ["Django", "Bootstrap", "Tailwind CSS", "SQLite3"],
          liveUrl: "https://medievalnft.pythonanywhere.com/login/?next=/",
          githubUrl: "",
          youtubeUrl: "https://youtu.be/Cg1xWz0_uwk"
        },
        {
          title: "Cafeteria Management System with Inventory and Kardex",
          description: "A fully responsive web application. This system manages a complete product inventory with Kardex tracking between warehouses. It includes sales functionality to calculate profits, monitor stock levels, and detect shortages.",
          image: "/img/cafeteria.png",
          tags: ["Django", "Bootstrap", "Tailwind CSS", "SQLite3"],
          liveUrl: "https://cafeteria.egatur.edu.pe/",
          githubUrl: "https://github.com/JosePizarro1/cafeteria.git",
          youtubeUrl: ""
        },
        {
          title: "Centro Salud Esperanza",
          description: "A system for the Esperanza Health Center designed to monitor basic services for the population and ensure accurate tracking and planning.",
          image: "/img/centrosaludesperanza.png",
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
      subtitleRole: "Software Engineer / FullStack Developer (+2 Years Exp.)",
      sections: {
        summary: "Professional Summary",
        experience: "Work Experience",
        skills: "Technical Skills & Languages",
        education: "Education and Certifications",
        extraCertifications: "Extra Certifications"
      },
      summaryParagraph: "Computer Engineer and FullStack Developer with <strong>over 2 years of solid experience</strong> designing and deploying end-to-end web architectures and technological solutions. Highly proficient in <strong>Python and JavaScript ecosystems (React, Next.js, Django, FastAPI)</strong> and relational databases. Proven track record in building modular applications, automating corporate workflows, implementing advanced security (<strong>Salesforce Shield</strong>, encryption, and auditing), and integrating Generative AI Agents (LangGraph), <strong>WebSockets</strong>, and real-time <strong>Webhooks</strong>. Recognized for translating complex business requirements into refined interfaces and highly scalable products powered by AI and solid software engineering practices.",
      experienceList: [
        {
          company: "TANNUA",
          role: "Developer (AI & Backend)",
          date: "Nov. 2025 - Present",
          bullets: [
            "Led the deployment of a Corporate AI Agent integrating powerful <strong>RAG (Retrieval-Augmented Generation) and Embeddings</strong> systems for organic replies, orchestrated in dynamic flows via Python and LangGraph.",
            "Designed and implemented a <strong>Webhook-based</strong> architecture for <strong>Meta integrations (WhatsApp Cloud API and Facebook Leads)</strong>, automating real-time lead capture and ingestion into the CRM.",
            "Enforced data security and governance compliance in <strong>Salesforce</strong> by implementing <strong>Salesforce Shield</strong>, configuring Platform Encryption, security audits, and Event Monitoring using custom <strong>Apex</strong> classes.",
            "Established real-time bidirectional communication channels using <strong>WebSockets</strong> to broadcast instant notifications of AI agent events and appointment updates.",
            "Accelerated multi-service appointment scheduling by implementing an intelligent Sequential Search Engine, synchronized in real-time with the AgendaPro API.",
            "Systematized payment validation by training predictive models with Azure Document Intelligence (OCR) to achieve precise bank receipt recognition.",
            "Automated critical infrastructure tasks by creating background services and notifications, managing the entire deployment lifecycle via <strong>Docker</strong> and CI/CD pipelines in <strong>Azure DevOps</strong>."
          ]
        },
        {
          company: "RIVERCON",
          role: "Frontend/Mobile Developer",
          date: "May 2025 - Oct. 2025",
          bullets: [
            "Efficiently developed collaborative mobile applications using <strong>Flutter, FlutterFlow</strong>, and <strong>Firebase</strong> architectures.",
            "Created 'Horzifrut' (a mobile logistics inventory system) and 'Zodiac' (a bilingual social network with phone/email authentication)."
          ]
        },
        {
          company: "EGATUR",
          role: "Full Stack Developer",
          date: "Sept. 2024 - May 2025",
          bullets: [
            "Centralized the tracking of executive revenue streams by building the 'Trámite Interno GTI' and 'Caja Chica' portals, scaled in <strong>Python and Django</strong>.",
            "Reduced manual operational overhead by synchronizing automated report generation connecting SQLite3 databases with Google Workspace APIs <strong>(Gmail and Drive)</strong>.",
            "Refactored design patterns to adopt a robust <strong>MVC</strong> model, promoting secure and structured deployments."
          ]
        },
        {
          company: "Independent / Web3",
          role: "Game & Web Developer",
          date: "Feb. 2022 - Aug. 2022",
          bullets: [
            "Deployed a successful end-to-end Web3 (NFT) game ('Medieval'), reaching over 2,000 hyper-active users distributed on MySQL.",
            "Managed buy/sell transaction logic and asynchronous orchestration for procedurally generated chest openings.",
            "Automated data synchronization and corporate reporting flows by integrating <strong>Salesforce with Excel, Looker Studio, Slack, and Google Apps Script</strong> to streamline operational decision-making.",
            "Designed and developed a custom internal <strong>Ticket Management System</strong> within Salesforce to centralize and increase the efficiency of operations support."
          ]
        }
      ],
      skillsLabels: {
        languagesCore: "Languages & Core",
        front: "Frontend Frameworks",
        back: "Backend Frameworks",
        db: "Databases",
        infra: "Infrastructure, DevOps & AI",
        apis: "APIs & Other Tools",
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
          degree: "Graduate (2019)"
        }
      ],
      extraBullets: [
        "Data Analysis with Power BI: Completed Certification (Udemy - 30 hours)."
      ]
    }
  }
};

