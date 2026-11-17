'use client'

import { useContent } from '@/components/providers/locale-provider'

export function SkipLink() {
  const { content } = useContent()

  return (
    <a
      href="#main"
      className="sr-only fixed left-4 top-4 z-[150] rounded-full bg-accent px-4 py-2 text-sm text-ink-950 focus:not-sr-only"
    >
      {content.a11y.skip}
    </a>
  )
}
