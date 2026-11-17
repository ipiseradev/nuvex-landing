'use client'

import type { FeatureKind } from '@/content/types'

export function FeatureMockup({ kind, title, tag }: { kind: FeatureKind; title: string; tag: string }) {
  return (
    <div className="relative w-full">
      <div className="mock-window aspect-[4/3] w-full p-3 sm:p-4">
        <div className="mock-bar">
          <span className="mock-dot" />
          <span className="mock-dot" />
          <span className="mock-dot" />
          <span className="ml-3 truncate text-[0.6rem] uppercase tracking-[0.16em] text-copy-muted">
            {title}
          </span>
        </div>
        <div className="h-[calc(100%-2rem)] pt-3">
          {kind === 'web' && <WebMock />}
          {kind === 'software' && <SoftwareMock />}
          {kind === 'ai' && <AiMock />}
        </div>
      </div>
      <span className="absolute -bottom-3 left-4 rounded-full border border-white/10 bg-ink-800 px-3 py-1 text-[0.6rem] uppercase tracking-[0.18em] text-copy-muted">
        {tag}
      </span>
    </div>
  )
}

function WebMock() {
  return (
    <div className="flex h-full flex-col gap-3 p-2 sm:p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-sm bg-accent" />
          <span className="mock-line w-12" />
        </div>
        <div className="hidden gap-3 sm:flex">
          <span className="mock-line w-8" />
          <span className="mock-line w-10" />
          <span className="mock-line w-8" />
        </div>
      </div>
      <div className="mt-auto mb-auto space-y-2">
        <span className="mock-line h-2.5 w-3/4 bg-white/25" />
        <span className="mock-line h-2.5 w-1/2 bg-white/20" />
        <span className="mt-3 inline-block rounded-full bg-accent/80 px-3 py-1.5 text-[0.55rem] text-ink-950">
          Ver más ↗
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((index) => (
          <div key={index} className="rounded-md border border-white/10 bg-white/[0.03] p-2">
            <div className={`h-8 rounded-sm ${index === 1 ? 'bg-accent/25' : 'bg-white/[0.07]'}`} />
            <span className="mock-line mt-2 block w-3/4" />
          </div>
        ))}
      </div>
    </div>
  )
}

function SoftwareMock() {
  return (
    <div className="flex h-full gap-3 p-1 sm:p-2">
      <div className="hidden w-1/5 flex-col gap-2 rounded-md border border-white/[0.07] bg-white/[0.02] p-2 sm:flex">
        <span className="h-2 w-2 rounded-sm bg-accent" />
        {[0, 1, 2, 3].map((index) => (
          <span key={index} className={`mock-line ${index === 0 ? 'w-full bg-accent/40' : 'w-3/4'}`} />
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="grid grid-cols-3 gap-2">
          {['34%', '128', '07'].map((value, index) => (
            <div key={index} className="rounded-md border border-white/[0.07] bg-white/[0.03] p-2">
              <span className="block font-display text-sm text-copy sm:text-base">{value}</span>
              <span className="mock-line mt-1.5 block w-2/3" />
            </div>
          ))}
        </div>
        <div className="flex flex-1 items-end gap-1.5 rounded-md border border-white/[0.07] bg-white/[0.02] p-3">
          {[38, 62, 45, 78, 54, 88, 70, 96].map((height, index) => (
            <span
              key={index}
              className={`flex-1 rounded-t-sm ${index === 7 ? 'bg-accent' : 'bg-accent/35'}`}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
        <div className="space-y-1.5">
          <span className="mock-line w-full" />
          <span className="mock-line w-4/5" />
        </div>
      </div>
    </div>
  )
}

function AiMock() {
  return (
    <div className="flex h-full flex-col gap-3 p-2 sm:p-4">
      <div className="flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/25 text-[0.6rem] text-accent">
          N
        </span>
        <span className="mock-line w-24" />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-3">
        <div className="ml-auto max-w-[75%] rounded-xl rounded-br-sm bg-accent/20 px-3 py-2">
          <span className="mock-line block w-24 bg-white/25" />
        </div>
        <div className="max-w-[85%] rounded-xl rounded-bl-sm border border-white/10 bg-white/[0.04] px-3 py-2">
          <span className="mock-line block w-full" />
          <span className="mock-line mt-1.5 block w-4/5" />
          <span className="mock-line mt-1.5 block w-2/3" />
        </div>
        <div className="flex gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent/80" />
          <span className="h-1.5 w-1.5 rounded-full bg-accent/50" />
          <span className="h-1.5 w-1.5 rounded-full bg-accent/20" />
        </div>
      </div>
      <div className="flex gap-2">
        {['01', '02', '03'].map((item) => (
          <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-[0.55rem] text-copy-muted">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
