'use client'

import { AnimatedTitle } from '@/components/motion/animated-title'
import { Reveal } from '@/components/motion/reveal'
import { ButtonLink } from '@/components/ui/button'
import { useContent } from '@/components/providers/locale-provider'
import { scrollToElement } from '@/components/providers/smooth-scroll'
import { HeroVisual } from './hero-visual'

export function Hero() {
  const { content } = useContent()

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden pt-24 sm:pt-28">
      <HeroVisual />

      <div className="shell relative z-10 flex items-start justify-between pt-6">
        <span className="hud">{content.hero.hud.topLeft}</span>
        <span className="hud hidden sm:block">{content.hero.hud.topRight}</span>
      </div>

      <div className="shell relative z-10 flex flex-1 flex-col justify-center py-14 sm:py-20">
        <Reveal>
          <span className="eyebrow">{content.hero.eyebrow}</span>
        </Reveal>

        <AnimatedTitle
          as="h1"
          text={content.hero.title}
          immediate
          delay={0.25}
          className="display mt-7 max-w-[15ch] text-[clamp(2.9rem,8.7vw,8.5rem)] sm:max-w-[14ch]"
        />

        <Reveal delay={0.45} className="mt-8 max-w-xl">
          <p className="text-base leading-relaxed text-copy-muted sm:text-lg">{content.hero.subtitle}</p>
          <p className="hud mt-5">{content.hero.note}</p>
        </Reveal>

        <Reveal delay={0.6} className="mt-10 flex flex-wrap items-center gap-3">
          <ButtonLink href="/#contacto" variant="primary">
            {content.hero.primaryCta}
          </ButtonLink>
          <ButtonLink href="/#servicios">{content.hero.secondaryCta}</ButtonLink>
        </Reveal>
      </div>

      <div className="shell relative z-10 flex items-end justify-between gap-4 pb-8">
        <span className="hud hidden sm:block">{content.hero.hud.bottomLeft}</span>
        <button
          type="button"
          onClick={() => scrollToElement('#servicios')}
          className="group mx-auto flex flex-col items-center gap-3 sm:mx-0"
          aria-label={content.hero.discover}
        >
          <span className="hud transition-colors group-hover:text-accent">{content.hero.discover}</span>
          <span className="scroll-cue block h-8 w-px bg-gradient-to-b from-accent to-transparent" />
        </button>
        <span className="hud hidden sm:block">{content.hero.hud.bottomRight}</span>
      </div>
    </section>
  )
}
