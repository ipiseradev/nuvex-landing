'use client'

import { gsap } from './gsap'

const active = new Set<gsap.core.Tween>()

export function registerMarquee(tween: gsap.core.Tween) {
  active.add(tween)
  return () => {
    active.delete(tween)
  }
}

export function setMarqueeSpeed(speed: number, duration = 0.5) {
  active.forEach((tween) => {
    gsap.to(tween, { timeScale: speed, duration, overwrite: true })
  })
}
