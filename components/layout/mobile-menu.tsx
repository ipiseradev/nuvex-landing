'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { useContent, useLocale } from '@/components/providers/locale-provider'
import { localizeHref } from '@/lib/i18n'
import { startSmoothScroll, stopSmoothScroll } from '@/components/providers/smooth-scroll'
import { whatsappHref } from '@/lib/config'

const overlay = {
  hidden: { clipPath: 'inset(0 0 100% 0)' },
  visible: { clipPath: 'inset(0 0 0% 0)' },
}

const item = {
  hidden: { y: 40, opacity: 0 },
  visible: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.18 + index * 0.07, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function MobileMenu({
  open,
  onClose,
  isHome,
  alternatePath,
}: {
  open: boolean
  onClose: () => void
  isHome: boolean
  alternatePath: string
}) {
  const { content } = useContent()
  const { locale } = useLocale()

  useEffect(() => {
    if (!open) return
    document.body.classList.add('is-locked')
    stopSmoothScroll()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('is-locked')
      startSmoothScroll()
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  const links = [
    { number: '01', label: content.nav.home, href: isHome ? '/' : localizeHref('/', locale) },
    {
      number: '02',
      label: content.nav.services,
      href: isHome ? '/#servicios' : localizeHref('/servicios', locale),
    },
    {
      number: '03',
      label: content.nav.projects,
      href: isHome ? '/#proyectos' : localizeHref('/proyectos', locale),
    },
    {
      number: '04',
      label: content.nav.process,
      href: isHome ? '/#proceso' : localizeHref('/proceso', locale),
    },
    {
      number: '05',
      label: content.nav.contact,
      href: isHome ? '/#contacto' : localizeHref('/contacto', locale),
    },
  ]

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          className="fixed inset-0 z-[70] flex flex-col justify-between overflow-y-auto bg-ink-950 px-6 pb-8 pt-28 lg:hidden"
          variants={overlay}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="pointer-events-none absolute right-[-10%] top-[10%] h-72 w-72 rounded-full bg-accent/20 blur-[100px]" />

          <nav aria-label="Mobile" className="relative flex flex-col">
            {links.map((link, index) => (
              <motion.div key={link.number} custom={index} variants={item} initial="hidden" animate="visible">
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="group flex items-baseline gap-5 border-b border-white/[0.08] py-3.5"
                >
                  <span className="hud text-accent">{link.number}</span>
                  <span className="font-display text-[clamp(2rem,9vw,3.4rem)] tracking-display transition-colors group-hover:text-accent">
                    {link.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            custom={links.length}
            variants={item}
            initial="hidden"
            animate="visible"
            className="relative mt-10 flex items-end justify-between gap-4"
          >
            <div className="flex flex-col gap-3">
              <Link href={alternatePath} className="hud hover:text-accent">
                {locale === 'es' ? 'EN / English' : 'ES / Español'}
              </Link>
              <a href={whatsappHref(content.whatsapp.message)} className="text-sm text-copy-muted">
                {content.whatsapp.label} ↗
              </a>
            </div>
            <span className="hud text-right">{content.hero.hud.topLeft}</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
