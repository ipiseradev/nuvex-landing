export type Locale = 'es' | 'en'

export type MockKind = 'dashboard' | 'site' | 'app' | 'ai' | 'commerce' | 'automation'
export type FeatureKind = 'web' | 'software' | 'ai'

export interface NavContent {
  home: string
  services: string
  projects: string
  process: string
  contact: string
  menu: string
  close: string
  cta: string
  language: string
}

export interface HeroContent {
  eyebrow: string
  title: string
  subtitle: string
  note: string
  primaryCta: string
  secondaryCta: string
  discover: string
  hud: {
    topLeft: string
    bottomLeft: string
    topRight: string
    bottomRight: string
  }
}

export interface MarqueeContent {
  label: string
  items: string[]
}

export interface ServiceItem {
  number: string
  title: string
  description: string
  detail: string
}

export interface ServicesContent {
  eyebrow: string
  title: string
  intro: string
  viewAll: string
  items: ServiceItem[]
}

export interface FeatureItem {
  kind: FeatureKind
  eyebrow: string
  title: string
  body: string
  bullets: string[]
  cta: string
  mockTitle: string
  mockTag: string
}

export interface FeaturesContent {
  items: FeatureItem[]
}

export interface ProjectItem {
  id: string
  title: string
  kind: string
  category: string
  description: string
  mock: MockKind
  tint: string
}

export interface ProjectsContent {
  eyebrow: string
  title: string
  intro: string
  enlarge: string
  close: string
  viewAll: string
  rows: ProjectItem[][]
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export interface ProcessContent {
  eyebrow: string
  title: string
  intro: string
  steps: ProcessStep[]
}

export interface Pillar {
  number: string
  title: string
  description: string
}

export interface WhyContent {
  eyebrow: string
  title: string
  intro: string
  pillars: Pillar[]
  testimonialsFlag: boolean
  testimonialsNote: string
}

export interface ContactContent {
  eyebrow: string
  title: string
  intro: string
  fields: {
    name: string
    company: string
    email: string
    phone: string
    message: string
    honeypot: string
  }
  submit: string
  sending: string
  success: string
  error: string
  invalidEmail: string
  required: string
  directTitle: string
  whatsapp: string
  email: string
  instagram: string
  location: string
  responseTime: string
}

export interface FinalCtaContent {
  title: string
  body: string
  button: string
}

export interface FooterContent {
  description: string
  servicesTitle: string
  exploreTitle: string
  contactTitle: string
  backToTop: string
  rights: string
  location: string
  serviceLinks: { label: string; href: string }[]
  exploreLinks: { label: string; href: string }[]
}

export interface PagesContent {
  services: { eyebrow: string; title: string; intro: string }
  projects: { eyebrow: string; title: string; intro: string }
  process: { eyebrow: string; title: string; intro: string }
  contact: { eyebrow: string; title: string; intro: string }
  notFound: { title: string; body: string; cta: string }
}

export interface SeoContent {
  title: string
  description: string
}

export interface Content {
  locale: Locale
  tagline: string
  nav: NavContent
  hero: HeroContent
  marquee: MarqueeContent
  services: ServicesContent
  features: FeaturesContent
  projects: ProjectsContent
  process: ProcessContent
  why: WhyContent
  contact: ContactContent
  finalCta: FinalCtaContent
  footer: FooterContent
  pages: PagesContent
  seo: SeoContent
  whatsapp: { label: string; message: string }
  a11y: { skip: string; progress: string; scrollHint: string }
}
