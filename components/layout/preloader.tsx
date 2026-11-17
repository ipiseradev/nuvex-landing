'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { gsap } from '@/lib/gsap'
import { useContent } from '@/components/providers/locale-provider'

export function Preloader() {
  const { content } = useContent()
  const rootRef = useRef<HTMLDivElement>(null)
  const [done, setDone] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    if (reduced || document.documentElement.classList.contains('intro-seen')) {
      document.documentElement.classList.add('intro-seen')
      setDone(true)
      return
    }

    document.body.classList.add('is-locked')

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        onComplete: () => {
          document.documentElement.classList.add('intro-seen')
          document.body.classList.remove('is-locked')
          try {
            sessionStorage.setItem('nuvex-intro', 'done')
          } catch {}
          setDone(true)
        },
      })

      timeline
        .fromTo(
          '.preloader__letter',
          { yPercent: 115, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.7, stagger: 0.07, ease: 'power4.out' },
        )
        .fromTo('.preloader__caption', { opacity: 0 }, { opacity: 1, duration: 0.35 }, '-=0.3')
        .to('.preloader__inner', { yPercent: -35, duration: 0.3, ease: 'power2.inOut' }, '+=0.12')
        .to(root, { yPercent: -100, duration: 0.6, ease: 'expo.inOut' }, '-=0.02')
    }, root)

    return () => {
      context.revert()
      document.body.classList.remove('is-locked')
    }
  }, [reduced])

  if (done) return null

  return (
    <div ref={rootRef} className="preloader" aria-hidden="true">
      <div className="preloader__inner text-center">
        <div className="flex justify-center font-display text-[clamp(2.8rem,9vw,6rem)] font-medium tracking-display">
          {'NUVEX'.split('').map((letter, index) => (
            <span key={index} className="preloader__mask">
              <span className="preloader__letter inline-block">{letter}</span>
            </span>
          ))}
        </div>
        <p className="preloader__caption mt-4 text-[0.65rem] uppercase tracking-[0.3em] text-copy-muted">
          {content.tagline}
        </p>
      </div>
    </div>
  )
}
