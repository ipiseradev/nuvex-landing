import { NextResponse } from 'next/server'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const attempts = new Map<string, number[]>()
const RATE_LIMIT = 5
const RATE_WINDOW_SECONDS = 600

function clean(value: unknown, max: number) {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

async function allowRequest(ip: string) {
  const base = process.env.KV_REST_API_URL?.replace(/\/$/, '')
  const token = process.env.KV_REST_API_TOKEN

  if (base && token) {
    try {
      const key = encodeURIComponent(`nuvex:contact:${ip}`)
      const headers = { Authorization: `Bearer ${token}` }
      const response = await fetch(`${base}/incr/${key}`, {
        method: 'POST',
        headers,
        cache: 'no-store',
      })
      if (!response.ok) throw new Error('kv_increment_failed')
      const data = (await response.json()) as { result?: number }
      const count = Number(data.result ?? 0)
      if (count === 1) {
        await fetch(`${base}/expire/${key}/${RATE_WINDOW_SECONDS}`, {
          method: 'POST',
          headers,
          cache: 'no-store',
        })
      }
      return count <= RATE_LIMIT
    } catch {}
  }

  const now = Date.now()
  const recent = (attempts.get(ip) || []).filter((time) => now - time < RATE_WINDOW_SECONDS * 1000)
  if (recent.length >= RATE_LIMIT) return false
  recent.push(now)
  attempts.set(ip, recent)
  return true
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_payload' }, { status: 400 })
  }

  if (typeof payload.honeypot === 'string' && payload.honeypot.trim() !== '') {
    return NextResponse.json({ ok: true })
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local'
  if (!(await allowRequest(ip))) {
    return NextResponse.json({ ok: false, error: 'too_many_requests' }, { status: 429 })
  }

  const name = clean(payload.name, 120)
  const company = clean(payload.company, 120)
  const email = clean(payload.email, 180)
  const phone = clean(payload.phone, 60)
  const message = clean(payload.message, 4000)

  const errors: Record<string, string> = {}
  if (name.length < 2) errors.name = 'required'
  if (!emailPattern.test(email)) errors.email = 'invalid'
  if (message.length < 10) errors.message = 'required'
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL

  if (apiKey && to) {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || 'NUVEX Solutions <onboarding@resend.dev>',
        to: [to],
        reply_to: email,
        subject: `Nueva consulta de ${name}`,
        text: [
          `Nombre: ${name}`,
          `Empresa: ${company || '-'}`,
          `Email: ${email}`,
          `Teléfono: ${phone || '-'}`,
          '',
          message,
        ].join('\n'),
      }),
    })

    if (!response.ok) {
      return NextResponse.json({ ok: false, error: 'delivery_failed' }, { status: 502 })
    }
  } else {
    console.info('[contact] inquiry received', { name, company, email })
  }

  return NextResponse.json({ ok: true })
}
