'use client'

import { useMemo, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { gsap } from '@/lib/gsap'
import { useIsoLayoutEffect } from '@/lib/use-isomorphic-layout-effect'

type Tag = 'h1' | 'h2' | 'h3' | 'p' | 'span'

function parseWords(text: string) {
  const parts = text.split('*')
  const words: { text: string; accent: boolean }[] = []
  parts.forEach((part, index) => {
    part
      .split(/\s+/)
      .filter(Boolean)
      .forEach((word) => words.push({ text: word, accent: index % 2 === 1 }))
  })
  return words
}

export function AnimatedTitle({
  text,
  as = 'h2',
  className = '',
  delay = 0,
  immediate = false,
}: {
  text: string
  as?: Tag
  className?: string
  delay?: number
  immediate?: boolean
}) {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const words = useMemo(() => parseWords(text), [text])

  useIsoLayoutEffect(() => {
    const element = ref.current
    if (!element) return
    const inners = element.querySelectorAll<HTMLElement>('.word-inner')

    if (reduced) {
      gsap.set(inners, { yPercent: 0, opacity: 1 })
      return
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        inners,
        { yPercent: 115, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          ease: 'power4.out',
          stagger: 0.055,
          delay,
          scrollTrigger: immediate
            ? undefined
            : { trigger: element, start: 'top 88%', once: true },
        },
      )
    }, element)

    return () => context.revert()
  }, [reduced, delay, immediate, words])

  const Component = as as React.ElementType
  return (
    <Component ref={ref} className={className}>
      {words.map((word, index) => (
        <span key={`${word.text}-${index}`}>
          <span className={`word-mask ${word.accent ? 'accent-word' : ''}`}>
            <span className="word-inner">{word.text}</span>
          </span>{' '}
        </span>
      ))}
    </Component>
  )
}
