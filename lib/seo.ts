import type { Metadata } from 'next'
import type { Locale } from '@/content/types'
import { siteConfig } from './config'
import { getContent } from './i18n'

export type PageKey = 'home' | 'services' | 'projects' | 'process' | 'contact'

const routes: Record<PageKey, string> = {
  home: '/',
  services: '/servicios',
  projects: '/proyectos',
  process: '/proceso',
  contact: '/contacto',
}

const titles: Record<Locale, Record<PageKey, string>> = {
  es: {
    home: 'NUVEX Solutions | Software house Argentina',
    services: 'Servicios de desarrollo de software a medida | NUVEX',
    projects: 'Proyectos propios y conceptos digitales | NUVEX',
    process: 'Cómo trabajamos | NUVEX Solutions',
    contact: 'Contacto | NUVEX Solutions',
  },
  en: {
    home: 'NUVEX Solutions | Software house Argentina',
    services: 'Custom software development services | NUVEX',
    projects: 'Own projects and digital concepts | NUVEX',
    process: 'How we work | NUVEX Solutions',
    contact: 'Contact | NUVEX Solutions',
  },
}

export function createPageMetadata(locale: Locale, page: PageKey): Metadata {
  const content = getContent(locale)
  const esPath = routes[page]
  const enPath = esPath === '/' ? '/en' : `/en${esPath}`
  const canonical = locale === 'es' ? esPath : enPath
  const description = page === 'home' ? content.seo.description : content.pages[page].intro

  return {
    metadataBase: new URL(siteConfig.url),
    title: titles[locale][page],
    description,
    applicationName: siteConfig.shortName,
    alternates: {
      canonical,
      languages: {
        'es-AR': esPath,
        en: enPath,
        'x-default': '/',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'es' ? 'es_AR' : 'en_US',
      alternateLocale: locale === 'es' ? 'en_US' : 'es_AR',
      url: canonical,
      siteName: siteConfig.name,
      title: titles[locale][page],
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale][page],
      description,
    },
    robots: { index: true, follow: true },
  }
}
