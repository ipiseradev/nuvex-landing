'use client'

import { useRef, type ElementType, type ReactNode } from 'react'
import { useReducedMotion } from 'framer-motion'
import { gsap } from '@/lib/gsap'
import { useIsoLayoutEffect } from '@/lib/use-isomorphic-layout-effect'

export function Reveal({
  children,
  as = 'div',
  className = '',
  delay = 0,
  y = 28,
  stagger = 0,
  start = 'top 88%',
}: {
  children: ReactNode
  as?: ElementType
  className?: string
  delay?: number
  y?: number
  stagger?: number
  start?: string
}) {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()

  useIsoLayoutEffect(() => {
    const element = ref.current
    if (!element) return
    const targets = stagger ? Array.from(element.children) : [element]

    if (reduced) {
      gsap.set(targets, { opacity: 1, y: 0 })
      return
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        targets,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.05,
          ease: 'power3.out',
          delay,
          stagger,
          scrollTrigger: { trigger: element, start, once: true },
        },
      )
    }, element)

    return () => context.revert()
  }, [reduced, delay, y, stagger, start])

  const Component = as
  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  )
}
