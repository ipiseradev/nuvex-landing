'use client'

import { AnimatedTitle } from '@/components/motion/animated-title'
import { Parallax } from '@/components/motion/parallax'
import { Reveal } from '@/components/motion/reveal'
import { ButtonLink } from '@/components/ui/button'
import { useContent } from '@/components/providers/locale-provider'
import { FeatureMockup } from './feature-mockups'

export function FeatureBlocks() {
  const { content } = useContent()

  return (
    <section id="enfoque" className="section scroll-mt-24">
      <div className="shell flex flex-col gap-28 sm:gap-40">
        {content.features.items.map((feature, index) => {
          const text = (
            <div key={`${feature.kind}-text`}>
              <Reveal>
                <span className="eyebrow">{feature.eyebrow}</span>
              </Reveal>
              <AnimatedTitle
                text={feature.title}
                className="display mt-6 max-w-[15ch] text-[clamp(2.2rem,4.6vw,4.4rem)]"
              />
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-lg text-sm leading-relaxed text-copy-muted sm:text-base">
                  {feature.body}
                </p>
              </Reveal>
              <Reveal className="mt-8 space-y-3" delay={0.15} stagger={0.07}>
                {feature.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3 text-sm text-copy-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </Reveal>
              <Reveal delay={0.2} className="mt-9">
                <ButtonLink href="/#contacto">{feature.cta}</ButtonLink>
              </Reveal>
            </div>
          )

          const visual = (
            <Parallax key={`${feature.kind}-visual`} amount={index % 2 === 0 ? -9 : 9}>
              <Reveal>
                <FeatureMockup kind={feature.kind} title={feature.mockTitle} tag={feature.mockTag} />
              </Reveal>
            </Parallax>
          )

          return (
            <div key={feature.kind} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              {index % 2 === 0 ? (
                <>
                  {text}
                  {visual}
                </>
              ) : (
                <>
                  {visual}
                  {text}
                </>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
