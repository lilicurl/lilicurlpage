import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Subdomain routing: devcast.lilicurl.com → /devcast
 *
 * In Vercel, add devcast.lilicurl.com as a custom domain for this project.
 * This middleware rewrites the root path to /devcast transparently.
 */
export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') ?? ''

  if (hostname.startsWith('devcast.')) {
    const url = request.nextUrl.clone()
    // Only rewrite the root — subpaths like /devcast/... pass through normally
    if (url.pathname === '/') {
      url.pathname = '/devcast'
      return NextResponse.rewrite(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
