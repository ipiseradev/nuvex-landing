import type { Metadata, Viewport } from 'next'
import { headers } from 'next/headers'
import { Instrument_Serif, Inter, Sora } from 'next/font/google'
import './globals.css'
import { LocaleProvider } from '@/components/providers/locale-provider'
import { SmoothScroll } from '@/components/providers/smooth-scroll'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Preloader } from '@/components/layout/preloader'
import { ScrollProgress } from '@/components/layout/scroll-progress'
import { WhatsAppFloat } from '@/components/layout/whatsapp-float'
import { SkipLink } from '@/components/layout/skip-link'
import { JsonLd } from '@/components/seo/json-ld'
import { createPageMetadata } from '@/lib/seo'
import type { Locale } from '@/content/types'

const display = Sora({ subsets: ['latin'], variable: '--font-display', display: 'swap' })
const body = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' })
const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = createPageMetadata('es', 'home')

export const viewport: Viewport = {
  themeColor: '#050506',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const requestHeaders = await headers()
  const locale: Locale = requestHeaders.get('x-nuvex-locale') === 'en' ? 'en' : 'es'

  return (
    <html lang={locale} className={`${display.variable} ${body.variable} ${serif.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(sessionStorage.getItem('nuvex-intro')==='done')document.documentElement.classList.add('intro-seen')}catch(e){}",
          }}
        />
        <JsonLd />
      </head>
      <body>
        <LocaleProvider initialLocale={locale}>
          <SkipLink />
          <Preloader />
          <SmoothScroll />
          <ScrollProgress />
          <Header />
          {children}
          <Footer />
          <WhatsAppFloat />
        </LocaleProvider>
      </body>
    </html>
  )
}
