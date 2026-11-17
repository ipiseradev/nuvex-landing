'use client'

import { useEffect, useRef } from 'react'
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion'
import type { ProjectItem } from '@/content/types'
import { startSmoothScroll, stopSmoothScroll } from '@/components/providers/smooth-scroll'
import { setMarqueeSpeed } from '@/lib/marquee'
import { useIsoLayoutEffect } from '@/lib/use-isomorphic-layout-effect'
import { ProjectMock } from './project-mock'

export interface Origin {
  left: number
  top: number
  width: number
  height: number
}

export function ProjectLightbox({
  project,
  origin,
  closeLabel,
  onClose,
}: {
  project: ProjectItem | null
  origin: Origin | null
  closeLabel: string
  onClose: () => void
}) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const controls = useAnimationControls()

  useEffect(() => {
    if (!project) return
    const previous = document.activeElement as HTMLElement | null
    document.body.classList.add('is-locked')
    stopSmoothScroll()
    setMarqueeSpeed(0, 0.35)
    closeRef.current?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab' || !dialogRef.current) return
      const focusables = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'),
      )
      if (focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('is-locked')
      startSmoothScroll()
      setMarqueeSpeed(1, 0.5)
      document.removeEventListener('keydown', onKey)
      previous?.focus()
    }
  }, [project, onClose])

  useIsoLayoutEffect(() => {
    if (!project || !origin || !boxRef.current) return
    const rect = boxRef.current.getBoundingClientRect()
    if (!rect.width || !rect.height) return
    controls.set({
      x: origin.left - rect.left,
      y: origin.top - rect.top,
      scaleX: origin.width / rect.width,
      scaleY: origin.height / rect.height,
      opacity: 0.5,
    })
    controls.start({
      x: 0,
      y: 0,
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    })
  }, [project, origin, controls])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[110] flex items-center justify-center overflow-y-auto bg-ink-950/95 p-5 backdrop-blur-xl sm:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          role="presentation"
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            className="w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <motion.div
              ref={boxRef}
              animate={controls}
              style={{ transformOrigin: 'top left' }}
              className="aspect-[4/3] w-full"
            >
              <ProjectMock project={project} />
            </motion.div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span className="hud text-accent">{project.kind}</span>
                <h2 className="display mt-2 text-3xl sm:text-4xl">{project.title}</h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-copy-muted">
                  {project.description}
                </p>
                <p className="hud mt-4">{project.category}</p>
              </div>
              <button ref={closeRef} type="button" onClick={onClose} className="btn shrink-0">
                <span>{closeLabel}</span>
                <span aria-hidden="true">✕</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
