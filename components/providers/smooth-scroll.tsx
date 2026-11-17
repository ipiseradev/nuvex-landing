'use client'

import { useEffect } from 'react'
import { useReducedMotion } from 'framer-motion'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '@/lib/gsap'

let lenisInstance: Lenis | null = null

export function stopSmoothScroll() {
  lenisInstance?.stop()
}

export function startSmoothScroll() {
  lenisInstance?.start()
}

export function scrollToTop() {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { duration: 1.4 })
    return
  }
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export function scrollToElement(target: string | HTMLElement, offset = -72) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset, duration: 1.2 })
    return
  }
  const el = typeof target === 'string' ? document.querySelector(target) : target
  el?.scrollIntoView({ behavior: 'smooth' })
}

export function SmoothScroll() {
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return

    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.9, smoothWheel: true })
    lenisInstance = lenis
    lenis.on('scroll', ScrollTrigger.update)

    const raf = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    const onAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest('a')
      if (!anchor) return
      const url = new URL(anchor.href, window.location.href)
      if (url.pathname !== window.location.pathname || !url.hash) return
      const target = document.querySelector(url.hash)
      if (!target) return
      event.preventDefault()
      scrollToElement(url.hash)
    }

    document.addEventListener('click', onAnchorClick)

    return () => {
      document.removeEventListener('click', onAnchorClick)
      gsap.ticker.remove(raf)
      lenis.destroy()
      lenisInstance = null
    }
  }, [reduced])

  return null
}
