import type { Content } from './types'

export const en: Content = {
  locale: 'en',
  tagline: 'Technology that moves business forward.',
  nav: {
    home: 'Home',
    services: 'Services',
    projects: 'Projects',
    process: 'Process',
    contact: 'Contact',
    menu: 'Menu',
    close: 'Close',
    cta: 'Let’s talk',
    language: 'Language',
  },
  hero: {
    eyebrow: 'Software house · Buenos Aires, Argentina',
    title: 'Technology that *moves* business forward.',
    subtitle:
      'We turn ideas and business challenges into digital solutions designed to grow.',
    note: 'Custom Software, Digital Experiences & AI Solutions',
    primaryCta: 'Book a consultation',
    secondaryCta: 'Explore services',
    discover: 'Scroll to discover',
    hud: {
      topLeft: "34°36'S · 58°22'W",
      bottomLeft: 'Software House',
      topRight: '001 / Custom Software',
      bottomRight: '2026',
    },
  },
  marquee: {
    label: 'Stack & capabilities',
    items: [
      'Next.js',
      'React',
      'TypeScript',
      'Java / Spring Boot',
      'Python',
      '.NET',
      'Artificial Intelligence',
      'Automation',
      'APIs',
      'PostgreSQL',
      'Node.js',
      'Product design',
    ],
  },
  services: {
    eyebrow: 'What we do',
    title: 'Solutions for *every* challenge.',
    intro:
      'We support companies through the full lifecycle of a digital product: from the first conversation to its ongoing evolution.',
    viewAll: 'View all services',
    items: [
      {
        number: '01',
        title: 'Web development',
        description:
          'Institutional websites and digital experiences that are clear, fast and built to turn visitors into inquiries.',
        detail:
          'We design and build corporate websites, landing pages and content platforms with a mobile-first approach, accessibility and performance from day one.',
      },
      {
        number: '02',
        title: 'Custom software',
        description:
          'Systems that fit your processes, not the other way around. Built around how your organization actually works.',
        detail:
          'We analyze your workflows, model the data and develop web tools that solve concrete needs and can grow alongside your business.',
      },
      {
        number: '03',
        title: 'Artificial intelligence',
        description:
          'AI assistants and agents integrated with your tools, focused on concrete, measurable tasks.',
        detail:
          'We design AI workflows for support, information analysis and decision-making, with human oversight and clear usage criteria.',
      },
      {
        number: '04',
        title: 'Process automation',
        description:
          'Less repetitive work, more time for what matters. We connect systems and remove manual tasks.',
        detail:
          'We integrate applications, organize workloads and build automated flows that reduce errors and free your team from operational work.',
      },
      {
        number: '05',
        title: 'Apps & SaaS',
        description:
          'Scalable digital products, from a first version to a platform with multiple users.',
        detail:
          'We define scope, validate key features and build the product in stages, with an architecture ready to scale.',
      },
      {
        number: '06',
        title: 'Support & maintenance',
        description:
          'Ongoing care: improvements, fixes and product evolution as your business changes.',
        detail:
          'We monitor, fix and improve what is already in production, so technology stays a tool instead of becoming a problem.',
      },
    ],
  },
  features: {
    items: [
      {
        kind: 'web',
        eyebrow: '01 / Digital experiences',
        title: 'Websites that *communicate* and convert.',
        body: 'A professional website does more than look good: it builds trust and guides visitors to the next step.',
        bullets: [
          'Designs that adapt to every screen',
          'Performance and Core Web Vitals from the start',
          'Content structure built for search',
          'Accessibility and keyboard navigation',
        ],
        cta: 'Talk about your website',
        mockTitle: 'nuvex — home',
        mockTag: 'Design · Web',
      },
      {
        kind: 'software',
        eyebrow: '02 / Custom software',
        title: 'Software that fits *your operation*.',
        body: 'Every company works differently. That is why we build systems around their processes, not the other way around.',
        bullets: [
          'Data modeling and role-based permissions',
          'Integrations with the tools you already use',
          'Clear interfaces for non-technical teams',
          'Architecture prepared to scale',
        ],
        cta: 'Share your challenge',
        mockTitle: 'Operations console',
        mockTag: 'Platform · SaaS',
      },
      {
        kind: 'ai',
        eyebrow: '03 / AI & automation',
        title: 'AI applied to *real tasks*.',
        body: 'We identify where artificial intelligence and automation create value, and turn that into working solutions.',
        bullets: [
          'Agents and assistants connected to your data',
          'Automated flows with human oversight',
          'Analysis and summaries of information',
          'Integrations with APIs and internal tools',
        ],
        cta: 'Explore possibilities',
        mockTitle: 'Knowledge assistant',
        mockTag: 'AI · Automation',
      },
    ],
  },
  projects: {
    eyebrow: 'Own work',
    title: 'Ideas put into *practice*.',
    intro:
      'In the meantime, we share our own developments and product concepts. Every piece is labeled: own project or concept.',
    enlarge: 'Enlarge',
    close: 'Close',
    viewAll: 'View all projects',
    rows: [
      [
        {
          id: 'panel-operaciones',
          title: 'Operations panel',
          kind: 'Own project',
          category: 'SaaS · Internal',
          description:
            'Console concept for monitoring process status, priorities and recent activity in a single screen.',
          mock: 'dashboard',
          tint: '#e9e9ec',
        },
        {
          id: 'plataforma-aprendizaje',
          title: 'Learning platform',
          kind: 'Concept',
          category: 'Digital product',
          description:
            'Learning experience proposal with paths, progress and content organized into modules.',
          mock: 'site',
          tint: '#c9cad0',
        },
        {
          id: 'asistente-consultas',
          title: 'Query assistant',
          kind: 'Own project',
          category: 'AI · Demo',
          description:
            'Demo assistant for answering frequently asked questions about internal docs and escalating complex cases.',
          mock: 'ai',
          tint: '#f2f2f4',
        },
        {
          id: 'tienda-concepto',
          title: 'Store concept',
          kind: 'Concept',
          category: 'E-commerce',
          description:
            'Exploration of product detail, cart and checkout with a focus on simplicity and minimal steps.',
          mock: 'commerce',
          tint: '#b6b7be',
        },
      ],
      [
        {
          id: 'tablero-metricas',
          title: 'Metrics dashboard',
          kind: 'Own project',
          category: 'Data · Visualization',
          description:
            'Dashboard prototype for tracking operational indicators with simple filters and period views.',
          mock: 'dashboard',
          tint: '#d7d8dd',
        },
        {
          id: 'app-campo',
          title: 'Field app',
          kind: 'Concept',
          category: 'Mobile · Productivity',
          description:
            'Mobile app concept for logging tasks, attaching evidence and syncing with a web console.',
          mock: 'app',
          tint: '#a8a9b0',
        },
        {
          id: 'flujo-onboarding',
          title: 'Onboarding flow',
          kind: 'Own project',
          category: 'Product · UX',
          description:
            'Welcome and initial setup sequence designed to reduce friction during first use of a platform.',
          mock: 'automation',
          tint: '#e9e9ec',
        },
        {
          id: 'identidad-web',
          title: 'Identity & website',
          kind: 'Concept',
          category: 'Brand · Web',
          description:
            'Visual system exercise applied to an institutional website with its own type, color and components.',
          mock: 'site',
          tint: '#bfc0c7',
        },
      ],
    ],
  },
  process: {
    eyebrow: 'How we work',
    title: 'A *clear* process, end to end.',
    intro:
      'We work in stages, with concrete deliverables and frequent conversations. That keeps the project moving without surprises.',
    steps: [
      {
        number: '01',
        title: 'Discovery',
        description:
          'We understand the business, the problem and who it affects. We define scope and the questions that need answers.',
      },
      {
        number: '02',
        title: 'Design',
        description:
          'We translate findings into flows, screens and a visual proposal you can review and adjust.',
      },
      {
        number: '03',
        title: 'Development',
        description:
          'We build the solution in iterations, with regular reviews and code that is ready to maintain.',
      },
      {
        number: '04',
        title: 'Launch',
        description:
          'We prepare the environment, validate behavior and support the rollout together with your team.',
      },
      {
        number: '05',
        title: 'Support',
        description:
          'We stay close after launch: fixing, improving and adapting the solution to new scenarios.',
      },
    ],
  },
  why: {
    eyebrow: 'Why NUVEX',
    title: 'The way we *do* things.',
    intro:
      'We do not promise numbers we cannot show. We promise a way of working: present, transparent and focused on what matters.',
    pillars: [
      {
        number: '01',
        title: 'Quality',
        description:
          'We care about every detail, from the structure of the code to the last interaction in an interface.',
      },
      {
        number: '02',
        title: 'Transparent communication',
        description:
          'We share what we are doing, what we decided and why. No unnecessary jargon and no surprises.',
      },
      {
        number: '03',
        title: 'Scalability',
        description:
          'We build with the future in mind: solutions that can grow without starting over.',
      },
      {
        number: '04',
        title: 'Real needs',
        description:
          'We solve concrete problems for people and companies. Technology serves the goal, not the other way around.',
      },
    ],
    testimonialsFlag: false,
    testimonialsNote:
      '[COMPLETAR] Testimonials section prepared: enable the flag once real, authorized cases are available.',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let’s talk about *your project*.',
    intro: 'Tell us what you need. We reply with concrete ideas and next steps, no strings attached.',
    fields: {
      name: 'Name',
      company: 'Company',
      email: 'Email',
      phone: 'Phone (optional)',
      message: 'Message',
      honeypot: 'Leave this field empty',
    },
    submit: 'Send inquiry',
    sending: 'Sending…',
    success: 'Thanks! We received your message. We will get back to you shortly.',
    error: 'We could not send your inquiry. Please try again or reach out on WhatsApp.',
    invalidEmail: 'Please enter a valid email address.',
    required: 'This field is required.',
    directTitle: 'You can also reach us',
    whatsapp: 'Message us on WhatsApp',
    email: 'Send an email',
    instagram: 'Follow us on Instagram',
    location: 'Buenos Aires, Argentina',
    responseTime: '[COMPLETAR] Typical response time',
  },
  finalCta: {
    title: 'Let’s make something *stand out*.',
    body: 'Tell us your idea and we will turn it into a digital solution with purpose.',
    button: 'Tell us your idea',
  },
  footer: {
    description:
      'Argentine software house. We design ideas and build digital solutions for companies that want to grow.',
    servicesTitle: 'Services',
    exploreTitle: 'Explore',
    contactTitle: 'Contact',
    backToTop: 'Back to top',
    rights: '© 2026 NUVEX Solutions',
    location: 'Buenos Aires, Argentina',
    serviceLinks: [
      { label: 'Web development', href: '/servicios' },
      { label: 'Custom software', href: '/servicios' },
      { label: 'Artificial intelligence', href: '/servicios' },
      { label: 'Automation', href: '/servicios' },
    ],
    exploreLinks: [
      { label: 'Projects', href: '/proyectos' },
      { label: 'Process', href: '/proceso' },
      { label: 'Why NUVEX', href: '/#por-que-nuvex' },
      { label: 'Contact', href: '/contacto' },
    ],
  },
  pages: {
    services: {
      eyebrow: 'Services',
      title: 'Digital solutions *built to fit*.',
      intro:
        'Custom software development in Argentina for companies looking for clear, useful technology ready to grow.',
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Own work and *concepts*.',
      intro:
        'A selection of our own developments and product concepts. We do not include client work until we have authorization.',
    },
    process: {
      eyebrow: 'Process',
      title: 'From idea to *launch*.',
      intro: 'Five simple stages, with visible deliverables and room to adjust course when needed.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'We are here to *help*.',
      intro: 'Hello. Let’s talk about what you want to achieve.',
    },
    notFound: {
      title: 'Page not found',
      body: 'This route does not seem to exist. Head back home to keep exploring.',
      cta: 'Back to home',
    },
  },
  seo: {
    title: 'NUVEX Solutions | Software house Argentina',
    description:
      'Argentine software house. Custom software development, digital experiences, AI agents for business and process automation.',
  },
  whatsapp: {
    label: 'Let’s talk',
    message: 'Hi NUVEX, I’d like to ask about a software development project.',
  },
  a11y: {
    skip: 'Skip to main content',
    progress: 'Reading progress',
    scrollHint: 'Scroll to discover more',
  },
}
