import type { Content } from './types'

export const es: Content = {
  locale: 'es',
  tagline: 'Tecnología que impulsa negocios.',
  nav: {
    home: 'Inicio',
    services: 'Servicios',
    projects: 'Proyectos',
    process: 'Proceso',
    contact: 'Contacto',
    menu: 'Menú',
    close: 'Cerrar',
    cta: 'Hablemos',
    language: 'Idioma',
  },
  hero: {
    eyebrow: 'Software House · Buenos Aires, Argentina',
    title: 'Tecnología que *impulsa* negocios.',
    subtitle:
      'Transformamos ideas y desafíos empresariales en soluciones digitales diseñadas para crecer.',
    note: 'Custom Software, Digital Experiences & AI Solutions',
    primaryCta: 'Agendar una consulta',
    secondaryCta: 'Ver servicios',
    discover: 'Descubrí más',
    hud: {
      topLeft: "34°36'S · 58°22'O",
      bottomLeft: 'Software House',
      topRight: '001 / Custom Software',
      bottomRight: '2026',
    },
  },
  marquee: {
    label: 'Stack & capacidades',
    items: [
      'Next.js',
      'React',
      'TypeScript',
      'Java / Spring Boot',
      'Python',
      '.NET',
      'Inteligencia Artificial',
      'Automatización',
      'APIs',
      'PostgreSQL',
      'Node.js',
      'Diseño de producto',
    ],
  },
  services: {
    eyebrow: 'Lo que hacemos',
    title: 'Soluciones para *cada* desafío.',
    intro:
      'Acompañamos a empresas en todo el ciclo de un producto digital: desde la primera conversación hasta su evolución continua.',
    viewAll: 'Ver todos los servicios',
    items: [
      {
        number: '01',
        title: 'Desarrollo web',
        description:
          'Sitios institucionales y experiencias digitales claras, rápidas y pensadas para convertir consultas.',
        detail:
          'Diseñamos y desarrollamos sitios corporativos, landing pages y plataformas de contenido con enfoque mobile-first, accesibilidad y rendimiento desde el primer día.',
      },
      {
        number: '02',
        title: 'Software a medida',
        description:
          'Sistemas que se adaptan a tus procesos, no al revés. Construidos alrededor de la operación real de tu empresa.',
        detail:
          'Analizamos tus flujos, modelamos los datos y desarrollamos herramientas web que resuelven necesidades concretas y pueden crecer junto a tu negocio.',
      },
      {
        number: '03',
        title: 'Inteligencia artificial',
        description:
          'Asistentes y agentes de IA integrados a tus herramientas, con foco en tareas concretas y medibles.',
        detail:
          'Diseñamos flujos de IA aplicados a la atención, el análisis de información y la toma de decisiones, con supervisión humana y criterios claros de uso.',
      },
      {
        number: '04',
        title: 'Automatización de procesos',
        description:
          'Menos tareas repetitivas, más tiempo para lo importante. Conectamos sistemas y eliminamos trabajo manual.',
        detail:
          'Integramos aplicaciones, ordens cargas y construimos flujos automáticos que reducen errores y liberan al equipo de tareas operativas.',
      },
      {
        number: '05',
        title: 'Apps y SaaS',
        description:
          'Productos digitales escalables, desde una primera versión hasta una plataforma con múltiples usuarios.',
        detail:
          'Definimos el alcance, validamos las funciones clave y construimos el producto por etapas, con arquitectura preparada para crecer.',
      },
      {
        number: '06',
        title: 'Soporte y mantenimiento',
        description:
          'Acompañamiento continuo: mejoras, correcciones y evolución del producto a medida que cambia tu negocio.',
        detail:
          'Monitoreamos, corregimos y mejoramos lo que ya está en producción, para que la tecnología siga siendo una herramienta y no un problema.',
      },
    ],
  },
  features: {
    items: [
      {
        kind: 'web',
        eyebrow: '01 / Experiencias digitales',
        title: 'Webs que *comunican* y convierten.',
        body: 'Una web profesional no solo se ve bien: transmite confianza y guía al visitante hacia el siguiente paso.',
        bullets: [
          'Diseño adaptable a cada pantalla',
          'Rendimiento y Core Web Vitals desde el inicio',
          'Estructura de contenido pensada para búsquedas',
          'Accesibilidad y navegación por teclado',
        ],
        cta: 'Hablemos de tu web',
        mockTitle: 'nuvex — inicio',
        mockTag: 'Diseño · Web',
      },
      {
        kind: 'software',
        eyebrow: '02 / Software a medida',
        title: 'Software que se ajusta a *tu operación*.',
        body: 'Cada empresa trabaja distinto. Por eso construimos sistemas alrededor de sus procesos y no al contrario.',
        bullets: [
          'Modelado de datos y permisos por rol',
          'Integraciones con las herramientas que ya usás',
          'Interfaces claras para equipos no técnicos',
          'Arquitectura preparada para escalar',
        ],
        cta: 'Contanos tu desafío',
        mockTitle: 'Consola de operaciones',
        mockTag: 'Plataforma · SaaS',
      },
      {
        kind: 'ai',
        eyebrow: '03 / IA y automatización',
        title: 'IA aplicada a *tareas reales*.',
        body: 'Identificamos los procesos donde la inteligencia artificial y la automatización suman valor, y los llevamos a la práctica.',
        bullets: [
          'Agentes y asistentes conectados a tus datos',
          'Flujos automáticos con supervisión humana',
          'Análisis y resúmenes de información',
          'Integraciones con APIs y herramientas internas',
        ],
        cta: 'Explorá posibilidades',
        mockTitle: 'Asistente de conocimiento',
        mockTag: 'IA · Automatización',
      },
    ],
  },
  projects: {
    eyebrow: 'Trabajos propios',
    title: 'Ideas llevadas a *la práctica*.',
    intro:
      'Mientras tanto, mostramos desarrollos propios y conceptos de producto. Cada pieza tiene su etiqueta: proyecto propio o concepto.',
    enlarge: 'Ampliar',
    close: 'Cerrar',
    viewAll: 'Ver todos los proyectos',
    rows: [
      [
        {
          id: 'panel-operaciones',
          title: 'Panel de operaciones',
          kind: 'Proyecto propio',
          category: 'SaaS · Interno',
          description:
            'Concepto de consola para visualizar el estado de procesos, prioridades y actividad reciente en una sola pantalla.',
          mock: 'dashboard',
          tint: '#e9e9ec',
        },
        {
          id: 'plataforma-aprendizaje',
          title: 'Plataforma de aprendizaje',
          kind: 'Concepto',
          category: 'Producto digital',
          description:
            'Propuesta de experiencia de aprendizaje con rutas, progreso y contenidos organizados por módulos.',
          mock: 'site',
          tint: '#c9cad0',
        },
        {
          id: 'asistente-consultas',
          title: 'Asistente de consultas',
          kind: 'Proyecto propio',
          category: 'IA · Demostrador',
          description:
            'Demostrador de asistente para responder preguntas frecuentes sobre documentación interna y derivar casos complejos.',
          mock: 'ai',
          tint: '#f2f2f4',
        },
        {
          id: 'tienda-concepto',
          title: 'Tienda concepto',
          kind: 'Concepto',
          category: 'E-commerce',
          description:
            'Exploración de ficha de producto, carrito y checkout con foco en simplicidad y pasos mínimos de compra.',
          mock: 'commerce',
          tint: '#b6b7be',
        },
      ],
      [
        {
          id: 'tablero-metricas',
          title: 'Tablero de métricas',
          kind: 'Proyecto propio',
          category: 'Datos · Visualización',
          description:
            'Prototipo de tablero para seguir indicadores operativos con filtros simples y vistas por periodo.',
          mock: 'dashboard',
          tint: '#d7d8dd',
        },
        {
          id: 'app-campo',
          title: 'App de campo',
          kind: 'Concepto',
          category: 'Mobile · Productividad',
          description:
            'Concepto de aplicación móvil para registrar tareas, adjuntar evidencia y sincronizar con una consola web.',
          mock: 'app',
          tint: '#a8a9b0',
        },
        {
          id: 'flujo-onboarding',
          title: 'Flujo de onboarding',
          kind: 'Proyecto propio',
          category: 'Producto · UX',
          description:
            'Secuencia de bienvenida y configuración inicial pensada para reducir fricción en el primer uso de una plataforma.',
          mock: 'automation',
          tint: '#e9e9ec',
        },
        {
          id: 'identidad-web',
          title: 'Identidad y web',
          kind: 'Concepto',
          category: 'Marca · Web',
          description:
            'Ejercicio de sistema visual aplicado a una web institucional con tipografía, color y componentes propios.',
          mock: 'site',
          tint: '#bfc0c7',
        },
      ],
    ],
  },
  process: {
    eyebrow: 'Cómo trabajamos',
    title: 'Un proceso *claro*, de principio a fin.',
    intro:
      'Trabajamos por etapas, con entregables concretos y conversaciones frecuentes. Así el proyecto avanza sin sorpresas.',
    steps: [
      {
        number: '01',
        title: 'Descubrimiento',
        description:
          'Entendemos el negocio, el problema y a quienes afecta. Definimos el alcance y las preguntas que hay que responder.',
      },
      {
        number: '02',
        title: 'Diseño',
        description:
          'Traducimos los hallazgos en flujos, pantallas y una propuesta visual que se pueda revisar y ajustar.',
      },
      {
        number: '03',
        title: 'Desarrollo',
        description:
          'Construimos la solución en iteraciones, con revisiones periódicas y código preparado para mantener.',
      },
      {
        number: '04',
        title: 'Lanzamiento',
        description:
          'Preparamos el entorno, validamos el funcionamiento y acompañamos la puesta en marcha con el equipo.',
      },
      {
        number: '05',
        title: 'Soporte',
        description:
          'Seguimos cerca después del lanzamiento: corregimos, mejoramos y adaptamos la solución a nuevos escenarios.',
      },
    ],
  },
  why: {
    eyebrow: 'Por qué NUVEX',
    title: 'Nuestra forma de *hacer* las cosas.',
    intro:
      'No prometemos datos que no podemos mostrar. Prometemos una manera de trabajar: presente, clara y enfocada en lo que importa.',
    pillars: [
      {
        number: '01',
        title: 'Calidad',
        description:
          'Cuidamos cada detalle, desde la estructura del código hasta la última interacción de una interfaz.',
      },
      {
        number: '02',
        title: 'Comunicación transparente',
        description:
          'Contamos qué estamos haciendo, qué decidimos y por qué. Sin jerga innecesaria ni sorpresas.',
      },
      {
        number: '03',
        title: 'Escalabilidad',
        description:
          'Construimos con vistas al futuro: soluciones que se pueden ampliar sin tener que empezar de cero.',
      },
      {
        number: '04',
        title: 'Necesidades reales',
        description:
          'Resolvemos problemas concretos de personas y empresas. La tecnología está al servicio del objetivo, no al revés.',
      },
    ],
    testimonialsFlag: false,
    testimonialsNote:
      '[COMPLETAR] Sección de testimonios preparada: activar el flag cuando haya casos reales autorizados.',
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Hablemos de *tu proyecto*.',
    intro:
      'Contanos qué necesitás. Te respondemos con ideas concretas y próximos pasos, sin compromiso.',
    fields: {
      name: 'Nombre',
      company: 'Empresa',
      email: 'Email',
      phone: 'Teléfono (opcional)',
      message: 'Mensaje',
      honeypot: 'No completar',
    },
    submit: 'Enviar consulta',
    sending: 'Enviando…',
    success: '¡Gracias! Recibimos tu mensaje. Te respondemos a la brevedad.',
    error: 'No pudimos enviar la consulta. Probá de nuevo o escribinos por WhatsApp.',
    invalidEmail: 'Ingresá un email válido.',
    required: 'Completá este campo.',
    directTitle: 'También podés escribirnos',
    whatsapp: 'Escribinos por WhatsApp',
    email: 'Enviar un email',
    instagram: 'Seguinos en Instagram',
    location: 'Buenos Aires, Argentina',
    responseTime: '[COMPLETAR] Tiempo de respuesta habitual',
  },
  finalCta: {
    title: 'Hagamos algo *que se destaque*.',
    body: 'Contanos tu idea y la transformamos en una solución digital con propósito.',
    button: 'Contanos tu idea',
  },
  footer: {
    description:
      'Software house argentina. Diseñamos ideas y construimos soluciones digitales para empresas que quieren crecer.',
    servicesTitle: 'Servicios',
    exploreTitle: 'Explorá',
    contactTitle: 'Contacto',
    backToTop: 'Volver arriba',
    rights: '© 2026 NUVEX Solutions',
    location: 'Buenos Aires, Argentina',
    serviceLinks: [
      { label: 'Desarrollo web', href: '/servicios' },
      { label: 'Software a medida', href: '/servicios' },
      { label: 'Inteligencia artificial', href: '/servicios' },
      { label: 'Automatización', href: '/servicios' },
    ],
    exploreLinks: [
      { label: 'Proyectos', href: '/proyectos' },
      { label: 'Proceso', href: '/proceso' },
      { label: 'Por qué NUVEX', href: '/#por-que-nuvex' },
      { label: 'Contacto', href: '/contacto' },
    ],
  },
  pages: {
    services: {
      eyebrow: 'Servicios',
      title: 'Soluciones digitales *a medida*.',
      intro:
        'Desarrollo de software a medida en Argentina para empresas que buscan tecnología clara, útil y preparada para crecer.',
    },
    projects: {
      eyebrow: 'Proyectos',
      title: 'Trabajos propios y *conceptos*.',
      intro:
        'Una selección de desarrollos propios y conceptos de producto. No incluimos trabajos de clientes hasta contar con autorización.',
    },
    process: {
      eyebrow: 'Proceso',
      title: 'De la idea al *lanzamiento*.',
      intro:
        'Cinco etapas simples, con entregables visibles y espacio para ajustar el rumbo cuando hace falta.',
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Estamos para *ayudarte*.',
      intro: 'Hola. Conversemos sobre lo que querés lograr.',
    },
    notFound: {
      title: 'Página no encontrada',
      body: 'Parece que esta ruta no existe. Volvé al inicio para seguir explorando.',
      cta: 'Volver al inicio',
    },
  },
  seo: {
    title: 'NUVEX Solutions | Software house Argentina',
    description:
      'Software house argentina. Desarrollo de software a medida, experiencias digitales, agentes de IA para empresas y automatización de procesos.',
  },
  whatsapp: {
    label: '¿Hablamos?',
    message: 'Hola NUVEX, quiero consultar sobre un proyecto de desarrollo de software.',
  },
  a11y: {
    skip: 'Saltar al contenido principal',
    progress: 'Progreso de lectura',
    scrollHint: 'Desplazate para descubrir más',
  },
}
