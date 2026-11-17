'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { gsap } from '@/lib/gsap'

export function useMagnetic<T extends HTMLElement>(strength = 0.18) {
  const ref = useRef<T>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const element = ref.current
    if (!element || reduced) return
    if (!window.matchMedia('(pointer: fine)').matches || window.innerWidth < 768) return

    const moveX = gsap.quickTo(element, 'x', { duration: 0.5, ease: 'power3.out' })
    const moveY = gsap.quickTo(element, 'y', { duration: 0.5, ease: 'power3.out' })

    const onMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect()
      moveX((event.clientX - rect.left - rect.width / 2) * strength)
      moveY((event.clientY - rect.top - rect.height / 2) * strength)
    }
    const onLeave = () => {
      moveX(0)
      moveY(0)
    }

    element.addEventListener('pointermove', onMove)
    element.addEventListener('pointerleave', onLeave)
    return () => {
      element.removeEventListener('pointermove', onMove)
      element.removeEventListener('pointerleave', onLeave)
      gsap.set(element, { x: 0, y: 0 })
    }
  }, [reduced, strength])

  return ref
}
