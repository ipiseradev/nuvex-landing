'use client'

import { AnimatedTitle } from '@/components/motion/animated-title'
import { Reveal } from '@/components/motion/reveal'
import { useContent } from '@/components/providers/locale-provider'

export function WhySection() {
  const { content } = useContent()

  return (
    <section id="por-que-nuvex" className="section scroll-mt-24">
      <div className="shell">
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow">{content.why.eyebrow}</span>
          </Reveal>
          <AnimatedTitle
            text={content.why.title}
            className="display mt-6 text-[clamp(2.3rem,5vw,4.8rem)]"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 text-sm leading-relaxed text-copy-muted sm:text-base">{content.why.intro}</p>
          </Reveal>
        </div>

        <Reveal className="mt-14 grid gap-px overflow-hidden rounded-panel border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {content.why.pillars.map((pillar) => (
            <div key={pillar.number} className="pillar group bg-ink-950 p-7 sm:p-8">
              <span className="hud text-accent">{pillar.number}</span>
              <h3 className="display mt-8 text-2xl transition-colors group-hover:text-accent">
                {pillar.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-copy-muted">{pillar.description}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
