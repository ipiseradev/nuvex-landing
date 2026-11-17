'use client'

import { AnimatedTitle } from '@/components/motion/animated-title'
import { Reveal } from '@/components/motion/reveal'
import { useContent } from '@/components/providers/locale-provider'
import { isEmailConfigured, siteConfig, whatsappHref } from '@/lib/config'
import { ContactForm } from './contact-form'

export function ContactSection() {
  const { content } = useContent()

  return (
    <section id="contacto" className="section scroll-mt-24 border-t border-white/[0.08] bg-ink-900/40">
      <div className="shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div>
          <Reveal>
            <span className="eyebrow">{content.contact.eyebrow}</span>
          </Reveal>
          <AnimatedTitle
            text={content.contact.title}
            className="display mt-6 max-w-[14ch] text-[clamp(2.4rem,5vw,4.8rem)]"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-copy-muted sm:text-base">
              {content.contact.intro}
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-12 border-t border-white/[0.1] pt-8">
            <h2 className="hud">{content.contact.directTitle}</h2>
            <ul className="mt-6 space-y-5 text-sm">
              <li>
                <a
                  href={whatsappHref(content.whatsapp.message)}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  WhatsApp · {content.whatsapp.label} ↗
                </a>
              </li>
              <li>
                <a
                  href={isEmailConfigured() ? `mailto:${siteConfig.email}` : '#contacto'}
                  className="contact-link"
                >
                  Email · {isEmailConfigured() ? siteConfig.email : '[COMPLETAR]'}
                </a>
              </li>
              <li>
                <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="contact-link">
                  Instagram · @nachodev.ar ↗
                </a>
              </li>
              <li>
                <span className="text-copy-muted">{content.contact.location}</span>
              </li>
            </ul>
            <p className="hud mt-8">{content.contact.responseTime}</p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
