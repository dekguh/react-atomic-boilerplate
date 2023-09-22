/**
 * @see https://nextjs.org/docs/pages/building-your-application/routing/middleware
 */
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// handle authentication from server
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  if (!request.cookies.get('jwtToken')?.value && !path.includes('/sign-in')) {
    if (path.startsWith('/sign-in')) {
      return NextResponse.next()
    } else if (path.startsWith('/sign-up')) {
      return NextResponse.next()
    } else if (!path.startsWith('/sign-in')) {
      return NextResponse.redirect(new URL('/sign-in', request.url))
    }
  } else if (request.cookies.get('jwtToken')?.value && path.includes('/sign-in') || path.includes('/sign-up')) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/sign-in', '/sign-up']
}