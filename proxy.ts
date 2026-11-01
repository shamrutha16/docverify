import { NextRequest, NextResponse } from 'next/server'
import { SESSION_COOKIE } from '@/lib/dev-auth'

export function proxy(request: NextRequest) {
  const hasSession = request.cookies.get(SESSION_COOKIE)?.value === 'development-session'
  if (request.nextUrl.pathname.startsWith('/dashboard') && !hasSession) return NextResponse.redirect(new URL('/login', request.url))
  if ((request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/register') && hasSession) return NextResponse.redirect(new URL('/dashboard', request.url))
  return NextResponse.next()
}

export const config = { matcher: ['/dashboard/:path*', '/login', '/register'] }
