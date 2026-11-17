'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { gsap } from '@/lib/gsap'
import { localizeHref } from '@/lib/i18n'
import { useContent, useLocale } from '@/components/providers/locale-provider'
import { Logo } from '@/components/ui/logo'
import { MobileMenu } from './mobile-menu'

export function Header() {
  const { content } = useContent()
  const { locale } = useLocale()
  const pathname = usePathname() || '/'
  const headerRef = useRef<HTMLElement>(null)
  const lastY = useRef(0)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const isHome = pathname === '/' || pathname === '/en'
  const sectionHref = (id: string, page: string) =>
    isHome ? `/#${id}` : localizeHref(`/${page}`, locale)
  const alternatePath =
    locale === 'es'
      ? pathname === '/'
        ? '/en'
        : `/en${pathname}`
      : pathname === '/en'
        ? '/'
        : pathname.replace(/^\/en/, '') || '/'

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 80)
      const element = headerRef.current
      if (!element || menuOpen) {
        if (element) gsap.to(element, { yPercent: 0, duration: 0.35, overwrite: true })
      } else if (y > lastY.current && y > 240) {
        gsap.to(element, { yPercent: -100, duration: 0.45, ease: 'power3.out', overwrite: true })
      } else {
        gsap.to(element, { yPercent: 0, duration: 0.45, ease: 'power3.out', overwrite: true })
      }
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [menuOpen])

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-[80] transition-colors duration-500 ${
          scrolled || menuOpen ? 'bg-ink-950/80 backdrop-blur-xl border-b border-white/[0.06]' : ''
        }`}
      >
        <div className="shell flex h-[4.75rem] items-center justify-between gap-6">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
            <Link className="nav-link" href={sectionHref('servicios', 'servicios')}>
              {content.nav.services}
            </Link>
            <Link className="nav-link" href={sectionHref('proyectos', 'proyectos')}>
              {content.nav.projects}
            </Link>
            <Link className="nav-link" href={sectionHref('proceso', 'proceso')}>
              {content.nav.process}
            </Link>
            <Link className="nav-link" href={sectionHref('contacto', 'contacto')}>
              {content.nav.contact}
            </Link>
          </nav>

          <div className="flex items-center gap-3 sm:gap-5">
            <Link
              href={alternatePath}
              className="hud flex items-center gap-1.5 transition-colors hover:text-accent"
              aria-label={`${content.nav.language}: ${locale === 'es' ? 'English' : 'Español'}`}
            >
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="6.5" stroke="currentColor" />
                <path d="M1.5 8h13M8 1.5c2 2 2 11 0 13M8 1.5c-2 2-2 11 0 13" stroke="currentColor" />
              </svg>
              {locale === 'es' ? 'EN' : 'ES'}
            </Link>

            <Link
              href={sectionHref('contacto', 'contacto')}
              className="btn hidden sm:inline-flex"
            >
              <span>{content.nav.cta}</span>
              <span className="btn__arrow" aria-hidden="true">
                ↗
              </span>
            </Link>

            <button
              type="button"
              className="relative z-[2] flex h-10 w-10 items-center justify-center lg:hidden"
              aria-label={menuOpen ? content.nav.close : content.nav.menu}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.svg
                    key="close"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M5 5l14 14M19 5L5 19" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="open"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M3 8h18M3 16h12" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        isHome={isHome}
        alternatePath={alternatePath}
      />
    </>
  )
}
