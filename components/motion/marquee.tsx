'use client'

import { useRef, type CSSProperties, type ReactNode } from 'react'
import { useReducedMotion } from 'framer-motion'
import { gsap } from '@/lib/gsap'
import { registerMarquee } from '@/lib/marquee'
import { useIsoLayoutEffect } from '@/lib/use-isomorphic-layout-effect'

export function Marquee({
  children,
  duration = 48,
  reverse = false,
  gap = '2.5rem',
  className = '',
}: {
  children: ReactNode
  duration?: number
  reverse?: boolean
  gap?: string
  className?: string
}) {
  const trackRef = useRef<HTMLDivElement>(null)
  const tweenRef = useRef<gsap.core.Tween | null>(null)
  const reduced = useReducedMotion()

  useIsoLayoutEffect(() => {
    if (reduced || !trackRef.current) return
    const tween = gsap.fromTo(
      trackRef.current,
      { xPercent: reverse ? -50 : 0 },
      { xPercent: reverse ? 0 : -50, duration, ease: 'none', repeat: -1 },
    )
    tweenRef.current = tween
    const unregister = registerMarquee(tween)
    return () => {
      unregister()
      tween.kill()
      tweenRef.current = null
    }
  }, [reduced, duration, reverse])

  const speed = (value: number) => {
    if (tweenRef.current) gsap.to(tweenRef.current, { timeScale: value, duration: 0.55, overwrite: true })
  }

  return (
    <div
      className={`overflow-hidden ${className}`}
      onPointerEnter={() => speed(0.12)}
      onPointerLeave={() => speed(1)}
    >
      <div
        ref={trackRef}
        className="flex w-max will-change-transform"
        style={{ '--marquee-gap': gap } as CSSProperties}
      >
        {children}
      </div>
    </div>
  )
}
