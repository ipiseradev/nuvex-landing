'use client'

import { useRef, type ReactNode } from 'react'
import { useReducedMotion } from 'framer-motion'
import { gsap } from '@/lib/gsap'
import { useIsoLayoutEffect } from '@/lib/use-isomorphic-layout-effect'

export function Parallax({
  children,
  amount = -12,
  className = '',
}: {
  children: ReactNode
  amount?: number
  className?: string
}) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  useIsoLayoutEffect(() => {
    if (reduced) return
    const wrapper = wrapperRef.current
    const inner = innerRef.current
    if (!wrapper || !inner) return

    const tween = gsap.fromTo(
      inner,
      { yPercent: -amount / 2 },
      {
        yPercent: amount / 2,
        ease: 'none',
        scrollTrigger: {
          trigger: wrapper,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      },
    )

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [reduced, amount])

  return (
    <div ref={wrapperRef} className={className}>
      <div ref={innerRef} className="will-change-transform">
        {children}
      </div>
    </div>
  )
}
