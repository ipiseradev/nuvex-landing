import { en } from '@/content/en'
import { es } from '@/content/es'
import type { Content, Locale } from '@/content/types'

export const contentByLocale: Record<Locale, Content> = { es, en }

export function getContent(locale: Locale): Content {
  return contentByLocale[locale]
}

export function localeFromPath(pathname: string | null): Locale {
  return pathname?.startsWith('/en') ? 'en' : 'es'
}

export function localizeHref(href: string, locale: Locale): string {
  if (!href.startsWith('/')) return href
  const path = href === '/en' ? '/' : href.startsWith('/en/') ? href.slice(3) : href
  return locale === 'en' ? (path === '/' ? '/en' : `/en${path}`) : path
}
