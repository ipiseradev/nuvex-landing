'use client'

import Link from 'next/link'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { useContent } from '@/components/providers/locale-provider'
import { localizeHref } from '@/lib/i18n'
import { useMagnetic } from './magnetic'

type Variant = 'primary' | 'ghost'

function classes(variant: Variant, className: string) {
  return `btn ${variant === 'primary' ? 'btn--primary' : ''} ${className}`.trim()
}

function Arrow() {
  return (
    <span className="btn__arrow" aria-hidden="true">
      ↗
    </span>
  )
}

export function ButtonLink({
  href,
  children,
  variant = 'ghost',
  className = '',
  arrow = true,
  onClick,
}: {
  href: string
  children: ReactNode
  variant?: Variant
  className?: string
  arrow?: boolean
  onClick?: () => void
}) {
  const { locale } = useContent()
  const ref = useMagnetic<HTMLAnchorElement>()
  const isInternal = href.startsWith('/')
  const resolved = isInternal ? localizeHref(href, locale) : href
  const content = (
    <>
      <span>{children}</span>
      {arrow && <Arrow />}
    </>
  )
  const props = { ref, className: classes(variant, className), onClick }

  return isInternal ? (
    <Link href={resolved} {...props}>
      {content}
    </Link>
  ) : (
    <a href={resolved} {...props} target="_blank" rel="noreferrer">
      {content}
    </a>
  )
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  arrow = false,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; arrow?: boolean }) {
  const ref = useMagnetic<HTMLButtonElement>()
  return (
    <button ref={ref} className={classes(variant, className)} {...props}>
      <span>{children}</span>
      {arrow && <Arrow />}
    </button>
  )
}
