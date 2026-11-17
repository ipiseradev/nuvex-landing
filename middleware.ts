import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const locale = request.nextUrl.pathname.startsWith('/en') ? 'en' : 'es'
  const headers = new Headers(request.headers)
  headers.set('x-nuvex-locale', locale)
  return NextResponse.next({ request: { headers } })
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
