'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { gsap } from '@/lib/gsap'
import { useContent } from '@/components/providers/locale-provider'

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const { content } = useContent()

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return
    const tween = gsap.fromTo(
      bar,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.25,
        },
      },
    )
    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [pathname])

  return (
    <div
      className="fixed inset-x-0 top-0 z-[90] h-[2px] bg-white/[0.04]"
      role="progressbar"
      aria-label={content.a11y.progress}
    >
      <div
        ref={barRef}
        className="h-full w-full origin-left bg-gradient-to-r from-accent to-accent-2"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  )
}
