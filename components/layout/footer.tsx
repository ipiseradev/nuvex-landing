'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useReducedMotion } from 'framer-motion'
import { gsap } from '@/lib/gsap'
import { useIsoLayoutEffect } from '@/lib/use-isomorphic-layout-effect'
import { useContent, useLocale } from '@/components/providers/locale-provider'
import { localizeHref } from '@/lib/i18n'
import { scrollToTop } from '@/components/providers/smooth-scroll'
import { isEmailConfigured, siteConfig } from '@/lib/config'
import { Logo } from '@/components/ui/logo'
import { Reveal } from '@/components/motion/reveal'

export function Footer() {
  const { content } = useContent()
  const { locale } = useLocale()
  const curtainRef = useRef<HTMLDivElement>(null)
  const wordmarkRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  useIsoLayoutEffect(() => {
    const curtain = curtainRef.current
    const wordmark = wordmarkRef.current
    if (!curtain || !wordmark || reduced) return

    const tween = gsap.fromTo(
      curtain,
      { xPercent: 0 },
      {
        xPercent: 100,
        ease: 'none',
        scrollTrigger: {
          trigger: wordmark,
          start: 'top 95%',
          end: 'bottom 45%',
          scrub: true,
        },
      },
    )
    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [reduced])

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-ink-950 pt-20 sm:pt-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[70%] -translate-x-1/2 glow" />

      <div className="shell relative grid gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <Reveal className="max-w-sm">
          <Logo />
          <p className="mt-6 text-sm leading-relaxed text-copy-muted">{content.footer.description}</p>
          <p className="hud mt-6">{siteConfig.location}</p>
          <div className="mt-5 flex gap-5 text-sm text-copy-muted">
            <a className="transition-colors hover:text-accent" href={siteConfig.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a
              className="transition-colors hover:text-accent"
              href={isEmailConfigured() ? `mailto:${siteConfig.email}` : '#contacto'}
            >
              Email
            </a>
          </div>
        </Reveal>

        <FooterColumn title={content.footer.servicesTitle}>
          {content.footer.serviceLinks.map((link, index) => (
            <li key={index}>
              <Link href={localizeHref(link.href, locale)} className="footer-link">
                {link.label}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title={content.footer.exploreTitle}>
          {content.footer.exploreLinks.map((link, index) => (
            <li key={index}>
              <Link href={localizeHref(link.href, locale)} className="footer-link">
                {link.label}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title={content.footer.contactTitle}>
          <li className="text-sm text-copy-muted">
            {isEmailConfigured() ? siteConfig.email : '[COMPLETAR]'}
          </li>
          <li className="text-sm text-copy-muted">
            <a href="#contacto" className="footer-link">
              {content.nav.cta}
            </a>
          </li>
          <li className="text-sm text-copy-muted">{siteConfig.location}</li>
        </FooterColumn>
      </div>

      <div ref={wordmarkRef} className="shell relative overflow-hidden pb-6">
        <div className="select-none text-center font-display text-[clamp(4.5rem,20vw,19rem)] font-semibold leading-[0.78] tracking-[-0.075em]">
          <span className="block text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.24)]">
            NUVEX
          </span>
          <span className="absolute inset-0 block text-accent">NUVEX</span>
          <div ref={curtainRef} className="absolute inset-0 bg-ink-950 will-change-transform" />
        </div>
      </div>

      <div className="shell relative flex flex-col gap-3 border-t border-white/[0.08] py-7 text-xs text-copy-muted sm:flex-row sm:items-center sm:justify-between">
        <span>{content.footer.rights}</span>
        <span>{content.footer.location}</span>
        <button type="button" onClick={scrollToTop} className="hud transition-colors hover:text-accent">
          {content.footer.backToTop} ↑
        </button>
      </div>
    </footer>
  )
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <h2 className="hud mb-5 text-copy">{title}</h2>
      <ul className="flex flex-col gap-3">{children}</ul>
    </Reveal>
  )
}
