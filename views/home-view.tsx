'use client'

import { Hero } from '@/components/sections/hero'
import { TechMarquee } from '@/components/sections/tech-marquee'
import { ServicesSection } from '@/components/sections/services-section'
import { FeatureBlocks } from '@/components/sections/feature-blocks'
import { ProjectsSection } from '@/components/sections/projects-section'
import { ProcessSection } from '@/components/sections/process-section'
import { WhySection } from '@/components/sections/why-section'
import { ContactSection } from '@/components/sections/contact-section'
import { FinalCta } from '@/components/sections/final-cta'

export function HomeView() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <ServicesSection />
      <FeatureBlocks />
      <ProjectsSection />
      <ProcessSection />
      <WhySection />
      <ContactSection />
      <FinalCta />
    </>
  )
}
