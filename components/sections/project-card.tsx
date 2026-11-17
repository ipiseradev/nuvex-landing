'use client'

import { useRef } from 'react'
import type { ProjectItem } from '@/content/types'
import type { Origin } from './project-lightbox'
import { ProjectMock } from './project-mock'

export function ProjectCard({
  project,
  enlargeLabel,
  onOpen,
}: {
  project: ProjectItem
  enlargeLabel: string
  onOpen: (project: ProjectItem, origin: Origin) => void
}) {
  const visualRef = useRef<HTMLDivElement>(null)

  const open = () => {
    const rect = visualRef.current?.getBoundingClientRect()
    onOpen(project, {
      left: rect?.left ?? 0,
      top: rect?.top ?? 0,
      width: rect?.width ?? 0,
      height: rect?.height ?? 0,
    })
  }

  return (
    <button type="button" onClick={open} className="group w-[clamp(15rem,26vw,24rem)] shrink-0 text-left">
      <div ref={visualRef} className="relative aspect-[4/3] w-full overflow-hidden">
        <ProjectMock project={project} />
        <span className="absolute inset-x-0 bottom-0 flex translate-y-full justify-end bg-gradient-to-t from-ink-950 to-transparent p-3 text-xs text-accent transition-transform duration-500 group-hover:translate-y-0 group-focus-visible:translate-y-0">
          {enlargeLabel} ↗
        </span>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <span className="hud text-accent">{project.kind}</span>
          <h3 className="display mt-2 text-xl sm:text-2xl">{project.title}</h3>
        </div>
        <span className="hud mt-1 shrink-0">{project.category}</span>
      </div>
    </button>
  )
}
