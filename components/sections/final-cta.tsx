'use client'

import { AnimatedTitle } from '@/components/motion/animated-title'
import { Reveal } from '@/components/motion/reveal'
import { ButtonLink } from '@/components/ui/button'
import { useContent } from '@/components/providers/locale-provider'

export function FinalCta() {
  const { content } = useContent()

  return (
    <section className="relative flex min-h-[78vh] items-center overflow-hidden border-t border-white/[0.08] py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full glow" aria-hidden="true" />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />

      <div className="shell relative text-center">
        <Reveal className="flex justify-center">
          <span className="eyebrow">{content.finalCta.body}</span>
        </Reveal>
        <AnimatedTitle
          text={content.finalCta.title}
          className="display mx-auto mt-8 max-w-[16ch] text-[clamp(2.8rem,7.5vw,7.5rem)]"
        />
        <Reveal delay={0.2} className="mt-12 flex justify-center">
          <ButtonLink href="/#contacto" variant="primary">
            {content.finalCta.button}
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  )
}
