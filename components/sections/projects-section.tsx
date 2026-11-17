'use client'

import { useState } from 'react'
import { AnimatedTitle } from '@/components/motion/animated-title'
import { Marquee } from '@/components/motion/marquee'
import { Reveal } from '@/components/motion/reveal'
import { ButtonLink } from '@/components/ui/button'
import { useContent } from '@/components/providers/locale-provider'
import type { ProjectItem } from '@/content/types'
import { ProjectCard } from './project-card'
import { ProjectLightbox, type Origin } from './project-lightbox'

export function ProjectsSection() {
  const { content } = useContent()
  const [active, setActive] = useState<{ project: ProjectItem; origin: Origin } | null>(null)

  return (
    <section id="proyectos" className="section scroll-mt-24 overflow-hidden border-t border-white/[0.08]">
      <div className="shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal>
              <span className="eyebrow">{content.projects.eyebrow}</span>
            </Reveal>
            <AnimatedTitle
              text={content.projects.title}
              className="display mt-6 max-w-[16ch] text-[clamp(2.4rem,5.4vw,5.2rem)]"
            />
          </div>
          <Reveal delay={0.1} className="max-w-md">
            <p className="text-sm leading-relaxed text-copy-muted sm:text-base">{content.projects.intro}</p>
          </Reveal>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-4">
        {content.projects.rows.map((row, rowIndex) => (
          <Marquee
            key={rowIndex}
            duration={52 + rowIndex * 16}
            reverse={rowIndex % 2 === 1}
            gap="1.5rem"
            className="py-2"
          >
            {[0, 1].map((group) => (
              <div key={group} className="marquee__group" aria-hidden={group === 1}>
                {row.map((project) => (
                  <ProjectCard
                    key={`${group}-${project.id}`}
                    project={project}
                    enlargeLabel={content.projects.enlarge}
                    onOpen={(clicked, origin) => setActive({ project: clicked, origin })}
                  />
                ))}
              </div>
            ))}
          </Marquee>
        ))}
      </div>

      <div className="shell mt-10 flex justify-end">
        <ButtonLink href="/proyectos">{content.projects.viewAll}</ButtonLink>
      </div>

      <ProjectLightbox
        project={active?.project ?? null}
        origin={active?.origin ?? null}
        closeLabel={content.projects.close}
        onClose={() => setActive(null)}
      />
    </section>
  )
}
