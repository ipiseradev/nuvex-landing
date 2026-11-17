'use client'

import { useContent } from '@/components/providers/locale-provider'
import { whatsappHref } from '@/lib/config'

export function WhatsAppFloat() {
  const { content } = useContent()

  return (
    <a
      href={whatsappHref(content.whatsapp.message)}
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-ink-800/90 py-2.5 pl-3.5 pr-4 text-sm font-medium shadow-[0_18px_45px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-colors hover:border-accent hover:bg-accent hover:text-ink-950 sm:bottom-7 sm:right-7"
      aria-label={content.whatsapp.label}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.2A8.4 8.4 0 0 1 4 11.5 8.4 8.4 0 0 1 12.5 3a8.4 8.4 0 0 1 8.5 8.5Z" />
        <path d="M9 9c.2 2.7 2.3 4.8 5 5l1-1.5 2 1c-.2 1.1-1.6 2.1-3 2-3.6-.2-5.8-2.4-6-6-.1-1.4.9-2.8 2-3l1 2Z" fill="currentColor" stroke="none" />
      </svg>
      <span>{content.whatsapp.label}</span>
    </a>
  )
}
