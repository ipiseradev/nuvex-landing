'use client'

import { Marquee } from '@/components/motion/marquee'
import { useContent } from '@/components/providers/locale-provider'

export function TechMarquee() {
  const { content } = useContent()
  const items = content.marquee.items

  return (
    <section className="border-y border-white/[0.08] bg-ink-900/60 py-6" aria-label={content.marquee.label}>
      <div className="shell mb-5 flex items-center gap-4">
        <span className="hud">{content.marquee.label}</span>
        <span className="h-px flex-1 bg-white/[0.08]" />
      </div>
      <Marquee duration={48}>
        {[0, 1].map((group) => (
          <div key={group} className="marquee__group" aria-hidden={group === 1}>
            {items.map((item) => (
              <span key={item} className="flex items-center gap-8 whitespace-nowrap">
                <span className="font-display text-lg tracking-tight text-copy-muted transition-colors hover:text-copy">
                  {item}
                </span>
                <span className="h-1 w-1 rounded-full bg-accent/70" />
              </span>
            ))}
          </div>
        ))}
      </Marquee>
    </section>
  )
}
