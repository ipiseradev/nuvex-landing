'use client'

import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { useContent } from '@/components/providers/locale-provider'

type Status = 'idle' | 'sending' | 'success' | 'error'

export function ContactForm() {
  const { content } = useContent()
  const [status, setStatus] = useState<Status>('idle')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const email = String(data.get('email') || '')
    const message = String(data.get('message') || '')
    const name = String(data.get('name') || '')

    const errors: Record<string, string> = {}
    if (name.trim().length < 2) errors.name = content.contact.required
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = content.contact.invalidEmail
    if (message.trim().length < 10) errors.message = content.contact.required
    setFieldErrors(errors)
    if (Object.keys(errors).length > 0) return

    setStatus('sending')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          company: data.get('company'),
          email,
          phone: data.get('phone'),
          message,
          honeypot: data.get('honeypot'),
        }),
      })
      if (!response.ok) throw new Error('delivery failed')
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="surface p-6 sm:p-9" aria-label={content.contact.title}>
      <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
        <Field
          name="name"
          label={content.contact.fields.name}
          placeholder={content.contact.fields.name}
          error={fieldErrors.name}
          autoComplete="name"
        />
        <Field
          name="company"
          label={content.contact.fields.company}
          placeholder={content.contact.fields.company}
          autoComplete="organization"
        />
        <Field
          name="email"
          label={content.contact.fields.email}
          placeholder="nombre@empresa.com"
          error={fieldErrors.email}
          type="email"
          autoComplete="email"
        />
        <Field
          name="phone"
          label={content.contact.fields.phone}
          placeholder="+54 9 11 ..."
          autoComplete="tel"
        />
      </div>

      <label className="mt-8 block">
        <span className="hud">{content.contact.fields.message}</span>
        <textarea
          name="message"
          rows={4}
          placeholder={content.contact.fields.message}
          aria-invalid={Boolean(fieldErrors.message)}
          className="field mt-2 min-h-[7rem] resize-y"
        />
        {fieldErrors.message && <span className="mt-2 block text-xs text-accent">{fieldErrors.message}</span>}
      </label>

      <div className="sr-only" aria-hidden="true">
        <label htmlFor="honeypot">{content.contact.fields.honeypot}</label>
        <input id="honeypot" name="honeypot" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={status === 'sending'} arrow>
          {status === 'sending' ? content.contact.sending : content.contact.submit}
        </Button>
        <p className="text-xs text-copy-muted" role="status" aria-live="polite">
          {status === 'success' && content.contact.success}
          {status === 'error' && content.contact.error}
        </p>
      </div>
    </form>
  )
}

function Field({
  name,
  label,
  placeholder,
  error,
  type = 'text',
  autoComplete,
}: {
  name: string
  label: string
  placeholder: string
  error?: string
  type?: string
  autoComplete?: string
}) {
  return (
    <label className="block">
      <span className="hud">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        className="field"
      />
      {error && <span className="mt-1 block text-xs text-accent">{error}</span>}
    </label>
  )
}
