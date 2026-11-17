'use client'

import { useContent } from '@/components/providers/locale-provider'
import { AnimatedTitle } from '@/components/motion/animated-title'
import { Reveal } from '@/components/motion/reveal'
import { ServicesSection } from '@/components/sections/services-section'
import { FeatureBlocks } from '@/components/sections/feature-blocks'
import { ProjectsSection } from '@/components/sections/projects-section'
import { ProcessSection } from '@/components/sections/process-section'
import { WhySection } from '@/components/sections/why-section'
import { ContactSection } from '@/components/sections/contact-section'
import { FinalCta } from '@/components/sections/final-cta'
import type { PageKey } from '@/lib/seo'

export function InnerView({ page }: { page: Exclude<PageKey, 'home'> }) {
  const { content } = useContent()
  const info = content.pages[page]

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/[0.08] pb-16 pt-40 sm:pb-24 sm:pt-48">
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full glow" aria-hidden="true" />
        <div className="shell relative">
          <Reveal>
            <span className="eyebrow">{info.eyebrow}</span>
          </Reveal>
          <AnimatedTitle
            as="h1"
            text={info.title}
            immediate
            className="display mt-7 max-w-[16ch] text-[clamp(2.8rem,7vw,6.8rem)]"
          />
          <Reveal delay={0.15}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-copy-muted">{info.intro}</p>
          </Reveal>
        </div>
      </section>

      {page === 'services' && (
        <>
          <ServicesSection />
          <FeatureBlocks />
          <WhySection />
        </>
      )}
      {page === 'projects' && <ProjectsSection />}
      {page === 'process' && (
        <>
          <ProcessSection />
          <WhySection />
        </>
      )}
      {page === 'contact' && <ContactSection />}

      <FinalCta />
    </>
  )
}
