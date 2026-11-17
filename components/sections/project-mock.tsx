'use client'

import type { CSSProperties } from 'react'
import type { ProjectItem } from '@/content/types'

export function ProjectMock({ project }: { project: ProjectItem }) {
  const tint = project.tint

  return (
    <div
      className="mock-window h-full w-full"
      style={
        {
          '--project-tint': tint,
          '--project-tint-soft': `color-mix(in srgb, ${tint} 22%, transparent)`,
        } as CSSProperties
      }
    >
      <div className="mock-bar">
        <span className="mock-dot" />
        <span className="mock-dot" />
        <span className="mock-dot" />
        <span className="ml-3 truncate text-[0.58rem] uppercase tracking-[0.16em] text-copy-muted">
          {project.category}
        </span>
      </div>
      <div className="h-[calc(100%-2rem)] p-3 sm:p-4">
        {project.mock === 'dashboard' && <Dashboard />}
        {project.mock === 'site' && <SiteMock />}
        {project.mock === 'app' && <AppMock />}
        {project.mock === 'ai' && <AiProjectMock />}
        {project.mock === 'commerce' && <CommerceMock />}
        {project.mock === 'automation' && <AutomationMock />}
      </div>
    </div>
  )
}

function Dashboard() {
  return (
    <div className="flex h-full gap-3">
      <div className="hidden w-1/5 flex-col gap-2 rounded-md border border-white/[0.07] bg-white/[0.02] p-2 sm:flex">
        <span className="h-2 w-2 rounded-sm bg-[var(--project-tint)]" />
        {[0, 1, 2, 3, 4].map((index) => (
          <span key={index} className="mock-line w-3/4" />
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <div className="grid grid-cols-3 gap-2">
          {['12', '84%', '06'].map((value, index) => (
            <div key={index} className="rounded-md border border-white/[0.07] bg-white/[0.03] p-2">
              <span className="block font-display text-sm text-copy sm:text-base">{value}</span>
              <span className="mock-line mt-1.5 block w-2/3" />
            </div>
          ))}
        </div>
        <div className="flex flex-1 items-end gap-1 rounded-md border border-white/[0.07] bg-white/[0.02] p-3">
          {[42, 70, 55, 88, 62, 96, 74, 90, 68].map((height, index) => (
            <span
              key={index}
              className={`flex-1 rounded-t-sm ${index === 5 ? 'bg-[var(--project-tint)]' : 'bg-white/15'}`}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function SiteMock() {
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="h-3 w-3 rounded-sm bg-[var(--project-tint)]" />
        <div className="flex gap-2">
          <span className="mock-line w-7" />
          <span className="mock-line w-9" />
          <span className="mock-line w-7" />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center gap-2">
        <span className="mock-line h-3 w-4/5 bg-white/25" />
        <span className="mock-line h-3 w-2/3 bg-white/20" />
        <span className="mt-1 w-fit rounded-full bg-[var(--project-tint)] px-3 py-1.5 text-[0.55rem] text-ink-950">
          Explorar ↗
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((index) => (
          <div key={index} className="h-10 rounded-sm bg-white/[0.06]" />
        ))}
      </div>
    </div>
  )
}

function AppMock() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="h-[92%] w-1/2 rounded-2xl border border-white/15 bg-ink-950 p-3 sm:w-[38%]">
        <div className="mx-auto mb-3 h-1 w-8 rounded-full bg-white/20" />
        <div className="h-16 rounded-lg bg-[var(--project-tint-soft)] p-2">
          <span className="mock-line block w-2/3 bg-white/25" />
          <span className="mock-line mt-2 block w-1/2" />
        </div>
        <div className="mt-3 space-y-2">
          {[0, 1, 2, 3].map((index) => (
            <div key={index} className="flex items-center gap-2 rounded-md border border-white/[0.07] p-2">
              <span className="h-2 w-2 rounded-full bg-[var(--project-tint)]" />
              <span className="mock-line w-3/4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function AiProjectMock() {
  return (
    <div className="flex h-full flex-col justify-center gap-3">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`max-w-[80%] rounded-xl px-3 py-2 ${index % 2 === 0 ? 'ml-auto bg-[var(--project-tint-soft)]' : 'border border-white/10 bg-white/[0.04]'}`}
        >
          <span className="mock-line block w-full" />
          {index === 1 && <span className="mock-line mt-1.5 block w-3/5" />}
        </div>
      ))}
      <div className="flex gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--project-tint)]" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
      </div>
    </div>
  )
}

function CommerceMock() {
  return (
    <div className="flex h-full gap-3">
      <div className="w-1/2 rounded-md bg-white/[0.05]" />
      <div className="flex flex-1 flex-col gap-2">
        <span className="mock-line h-2.5 w-3/4 bg-white/25" />
        <span className="mock-line w-1/2" />
        <span className="mock-line w-2/3" />
        <span className="mt-auto block rounded-full bg-[var(--project-tint)] py-2 text-center text-[0.55rem] text-ink-950">
          Agregar
        </span>
      </div>
    </div>
  )
}

function AutomationMock() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2">
      {[0, 1, 2].map((index) => (
        <div key={index} className="flex w-full items-center gap-2">
          <span
            className={`h-8 flex-1 rounded-md border border-white/10 ${index === 1 ? 'bg-[var(--project-tint-soft)]' : 'bg-white/[0.03]'}`}
          />
          {index < 2 && <span className="text-sm text-[var(--project-tint)]">↓</span>}
        </div>
      ))}
    </div>
  )
}
