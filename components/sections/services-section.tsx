'use client'

import Link from 'next/link'
import { AnimatedTitle } from '@/components/motion/animated-title'
import { Reveal } from '@/components/motion/reveal'
import { ButtonLink } from '@/components/ui/button'
import { useContent, useLocale } from '@/components/providers/locale-provider'
import { localizeHref } from '@/lib/i18n'

export function ServicesSection() {
  const { content } = useContent()
  const { locale } = useLocale()

  return (
    <section id="servicios" className="section scroll-mt-24">
      <div className="shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal>
              <span className="eyebrow">{content.services.eyebrow}</span>
            </Reveal>
            <AnimatedTitle text={content.services.title} className="display mt-6 max-w-[18ch] text-[clamp(2.4rem,5.6vw,5.4rem)]" />
          </div>
          <Reveal delay={0.15} className="max-w-md">
            <p className="text-sm leading-relaxed text-copy-muted sm:text-base">{content.services.intro}</p>
          </Reveal>
        </div>

        <Reveal className="mt-14 border-t border-white/[0.1]" stagger={0.08}>
          {content.services.items.map((service) => (
            <Link
              key={service.number}
              id={`servicio-${service.number}`}
              href={`${localizeHref('/servicios', locale)}#servicio-${service.number}`}
              className="service-row group relative flex scroll-mt-28 items-start gap-5 border-b border-white/[0.1] py-7 sm:items-center sm:gap-10 sm:py-8"
            >
              <span className="hud w-8 shrink-0 pt-1 text-accent sm:w-12 sm:pt-0">{service.number}</span>
              <span className="flex-1">
                <span className="service-row__title display block text-[clamp(1.6rem,3.2vw,2.9rem)]">
                  {service.title}
                </span>
                <span className="mt-2 block max-w-xl text-sm leading-relaxed text-copy-muted">
                  {service.description}
                </span>
              </span>
              <span className="service-row__arrow text-2xl text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:mt-0">
                ↗
              </span>
            </Link>
          ))}
        </Reveal>

        <Reveal className="mt-10 flex justify-end">
          <ButtonLink href="/servicios">{content.services.viewAll}</ButtonLink>
        </Reveal>
      </div>
    </section>
  )
}
