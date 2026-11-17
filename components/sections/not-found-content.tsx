'use client'

import { ButtonLink } from '@/components/ui/button'
import { AnimatedTitle } from '@/components/motion/animated-title'
import { useContent } from '@/components/providers/locale-provider'

export function NotFoundContent() {
  const { content } = useContent()

  return (
    <section className="flex min-h-[70vh] items-center pt-32">
      <div className="shell text-center">
        <span className="hud text-accent">404</span>
        <AnimatedTitle
          as="h1"
          text={content.pages.notFound.title}
          immediate
          className="display mt-6 text-[clamp(2.5rem,6vw,5rem)]"
        />
        <p className="mx-auto mt-6 max-w-md text-sm text-copy-muted">{content.pages.notFound.body}</p>
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/" variant="primary">
            {content.pages.notFound.cta}
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
