'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { useReducedMotion } from 'framer-motion'

const HeroCanvas = dynamic(() => import('./hero-canvas'), { ssr: false })

export function HeroVisual() {
  const reduced = useReducedMotion()
  const rootRef = useRef<HTMLDivElement>(null)
  const [webgl, setWebgl] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = rootRef.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (reduced || window.innerWidth < 768) return
    try {
      const canvas = document.createElement('canvas')
      const context = canvas.getContext('webgl2') || canvas.getContext('webgl')
      if (context) setWebgl(true)
    } catch {}
  }, [reduced])

  return (
    <div ref={rootRef} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="hero-grid absolute inset-0" />
      <div className="absolute right-[-8%] top-[6%] h-[38rem] w-[38rem] rounded-full glow sm:right-[4%]" />
      <div className="absolute bottom-[-14%] left-[-10%] h-[30rem] w-[30rem] rounded-full bg-accent-2/10 blur-[110px]" />
      <div className="absolute right-[10%] top-1/2 hidden h-[32rem] w-[32rem] -translate-y-1/2 rounded-full border border-white/[0.05] sm:block" />
      <div className="absolute right-[18%] top-1/2 hidden h-[22rem] w-[22rem] -translate-y-1/2 rounded-full border border-white/[0.04] sm:block" />
      {webgl && visible && (
        <div className="absolute inset-0 opacity-80 sm:left-auto sm:w-[62%]">
          <HeroCanvas />
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
    </div>
  )
}
