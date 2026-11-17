'use client'

import { useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { gsap } from '@/lib/gsap'
import { useIsoLayoutEffect } from '@/lib/use-isomorphic-layout-effect'
import { AnimatedTitle } from '@/components/motion/animated-title'
import { Reveal } from '@/components/motion/reveal'
import { useContent } from '@/components/providers/locale-provider'

export function ProcessSection() {
  const { content } = useContent()
  const lineRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  useIsoLayoutEffect(() => {
    const line = lineRef.current
    const steps = stepsRef.current
    if (!line || !steps || reduced) return

    const tween = gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: { trigger: steps, start: 'top 70%', end: 'bottom 75%', scrub: true },
      },
    )
    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [reduced])

  return (
    <section id="proceso" className="section scroll-mt-24 border-t border-white/[0.08] bg-ink-900/50">
      <div className="shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div className="self-start lg:sticky lg:top-32">
          <Reveal>
            <span className="eyebrow">{content.process.eyebrow}</span>
          </Reveal>
          <AnimatedTitle
            text={content.process.title}
            className="display mt-6 max-w-[15ch] text-[clamp(2.3rem,4.8vw,4.6rem)]"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-copy-muted sm:text-base">
              {content.process.intro}
            </p>
          </Reveal>
        </div>

        <div ref={stepsRef} className="relative pl-8 sm:pl-12">
          <div className="absolute bottom-0 left-0 top-0 w-px bg-white/[0.12]" aria-hidden="true">
            <div ref={lineRef} className="h-full w-full origin-top bg-gradient-to-b from-accent to-accent-2" />
          </div>

          {content.process.steps.map((step) => (
            <Reveal key={step.number} className="relative border-b border-white/[0.08] py-8 first:pt-0 last:border-0 sm:py-11">
              <span className="absolute -left-[2.4rem] top-9 h-2 w-2 rounded-full border border-accent bg-ink-950 sm:-left-[3.4rem] sm:top-12" />
              <span className="hud text-accent">{step.number}</span>
              <h3 className="display mt-3 text-[clamp(1.6rem,2.8vw,2.5rem)]">{step.title}</h3>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-copy-muted">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
