'use client'

import { createContext, useContext, useEffect, useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { getContent, localeFromPath } from '@/lib/i18n'
import type { Content, Locale } from '@/content/types'

interface LocaleContextValue {
  locale: Locale
  content: Content
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: 'es',
  content: getContent('es'),
})

export function LocaleProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const locale = pathname ? localeFromPath(pathname) : initialLocale
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])
  const value = useMemo(() => ({ locale, content: getContent(locale) }), [locale])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  return useContext(LocaleContext)
}

export function useContent(): LocaleContextValue {
  return useContext(LocaleContext)
}

export function useCopy(): Content {
  return useContext(LocaleContext).content
}
