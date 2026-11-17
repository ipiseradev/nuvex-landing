'use client'

import Link from 'next/link'
import { useContent } from '@/components/providers/locale-provider'
import { localizeHref } from '@/lib/i18n'

export function Logo({ className = '' }: { className?: string }) {
  const { locale, content } = useContent()

  return (
    <Link
      href={localizeHref('/', locale)}
      className={`inline-flex items-center gap-2 text-copy ${className}`}
      aria-label={`${content.nav.home} — NUVEX`}
    >
      <svg viewBox="0 0 34 34" className="h-[1.55rem] w-[1.55rem] shrink-0" aria-hidden="true">
        <path d="M4 29V5l13 24V5" fill="none" stroke="currentColor" strokeWidth="2.4" />
        <path d="M17 5l13 24V5" fill="none" stroke="var(--accent-2)" strokeWidth="2.4" />
      </svg>
      <svg viewBox="0 0 152 30" className="h-[1.35rem] w-auto" aria-hidden="true">
        <text
          x="0"
          y="23"
          fill="currentColor"
          fontFamily="var(--font-display), sans-serif"
          fontSize="25"
          fontWeight="600"
          letterSpacing="2"
        >
          NUVEX
        </text>
      </svg>
    </Link>
  )
}
