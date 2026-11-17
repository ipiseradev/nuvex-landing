# NUVEX Solutions

[![CI](https://github.com/ipiseradev/nuvex-landing/actions/workflows/ci.yml/badge.svg)](https://github.com/ipiseradev/nuvex-landing/actions/workflows/ci.yml)

Sitio institucional de NUVEX: una sola página con todas las secciones + páginas internas en español e inglés. Construido con Next.js (App Router), TypeScript, Tailwind CSS, GSAP + ScrollTrigger, Lenis, Framer Motion y React Three Fiber en el hero.

## Requisitos

- Node.js 20.9 o superior
- npm 10 o superior

## Inicio

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abrí http://localhost:3000.

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Servir el build de producción |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript sin emitir archivos |

## Variables de entorno

Copiá `.env.example` a `.env.local` y completá:

| Variable | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL canonical, sitemap, Open Graph y JSON-LD |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Email visible en contacto/footer y JSON-LD |
| `NEXT_PUBLIC_WHATSAPP` | Número en formato internacional sin `+` (ej. `5491112345678`) |
| `RESEND_API_KEY` | Opcional. Si está junto a `CONTACT_TO_EMAIL`, el formulario envía por Resend |
| `CONTACT_TO_EMAIL` | Casilla destino de las consultas |
| `CONTACT_FROM_EMAIL` | Remitente verificado en Resend |
| `KV_REST_API_URL` | Opcional. URL REST de Upstash para rate limit distribuido |
| `KV_REST_API_TOKEN` | Opcional. Token REST de Upstash para rate limit distribuido |

Sin `RESEND_API_KEY`, el endpoint `/api/contact` valida la consulta y la registra en la consola del servidor (útil para desarrollo). El honeypot y un límite de 5 envíos por IP cada 10 minutos ya están implementados: si se configuran `KV_REST_API_URL` y `KV_REST_API_TOKEN`, el contador vive en el store externo; si no, se usa el mapa en memoria del proceso.

## Estructura

```
app/                 Rutas, metadata, sitemap, robots, OG image y API
  api/contact/       Route Handler del formulario
  en/                Versión inglesa de cada página
components/
  layout/            Header, menú mobile, footer, preloader, cursor, WhatsApp
  motion/            AnimatedTitle, Reveal, Parallax
  providers/         Locale, Lenis
  sections/          Hero, servicios, features, proyectos, proceso, contacto…
  ui/                Logo, botones magnéticos
  seo/               JSON-LD
content/
  es.ts / en.ts      Todo el copy editable
  types.ts           Tipos compartidos
lib/                 Config, i18n, SEO, GSAP, validación
views/               Composición de home y páginas internas
```

## Editar contenido

- **Textos:** `content/es.ts` y `content/en.ts`. No hace falta tocar componentes. Las palabras en cursiva/acento se marcan con `*`, por ejemplo `'Hagamos algo *que se destaque*.'`.
- **Proyectos:** el array `content.*.projects.rows`. Cada item tiene `id`, `title`, `kind` (`Proyecto propio` / `Concepto`), `category`, `description`, `mock` (`dashboard | site | app | ai | commerce | automation`) y `tint`. Los mocks son composiciones CSS, no imágenes: se pueden reemplazar por `next/image` con WebP/AVIF cuando haya capturas reales.
- **Imágenes:** no hay assets binarios; los mockups son HTML/CSS originales. Si agregás imágenes, ponelas en `public/` y usá `next/image` con `width`/`height` fijos para evitar layout shift.
- **Servicios:** `content.*.services.items`. Cada fila lleva un `id` tipo `servicio-01` accessible desde el listado.
- **Testimonios:** sección preparada pero oculta. El flag está en `content.*.why.testimonialsFlag` (false). Activalo cuando haya casos reales autorizados y reemplazá `testimonialsNote`.

## Idiomas

Español en `/`, inglés en `/en`. El selector del header conserva la ruta actual y alterna el prefijo. Cada ruta tiene metadata, canonical y hreflang propios. El `<html lang>` se actualiza también en navegaciones client-side.

## Animaciones

| Efecto | Librería |
| --- | --- |
| Preloader y split text por palabras | GSAP |
| Reveals, parallax, línea de proceso, barra de progreso, ocultar/revealar header | GSAP + ScrollTrigger |
| Smooth scroll e anclas | Lenis sincronizado con GSAP ticker |
| Marquees de tecnologías y proyectos | CSS keyframes (pausa en hover) |
| Menú mobile, lightbox con transición compartida y transición de página | Framer Motion |
| Botones magnéticos y cursor personalizado | GSAP `quickTo` |
| Partículas del hero | React Three Fiber (dynamic import, solo desktop con WebGL) |

`prefers-reduced-motion` desactiva Lenis, parallax, marquees, cursor, preloader y animaciones de entrada. El hero usa un fallback estático en mobile o sin WebGL.

## Deploy en Vercel

Importar el repositorio, configurar las variables de entorno y deployar. No hay configuración especial: `next build` ya está probado. El OG image se genera en `/opengraph-image`.

## Pendiente de completar

- `NEXT_PUBLIC_CONTACT_EMAIL` y `NEXT_PUBLIC_WHATSAPP` (hoy muestran `[COMPLETAR]`; el botón de WhatsApp usa el link de envío sin número como fallback).
- `content.*.contact.responseTime`: `[COMPLETAR] Tiempo de respuesta habitual`.
- `content.*.why.testimonialsFlag` y `testimonialsNote`: sin testimonios reales.
- Proyectos: hoy son proyectos propios y conceptos rotulados como tal; reemplazar por casos reales cuando haya autorización.
- Definición visual final: el logo es un wordmark SVG provisorio.
