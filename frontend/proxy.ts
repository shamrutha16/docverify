import { NextRequest, NextResponse } from 'next/server'
import { isValidSessionValue, SESSION_COOKIE } from '@/lib/session'

export function proxy(request: NextRequest) {
  const hasSession = isValidSessionValue(request.cookies.get(SESSION_COOKIE)?.value)
  if (request.nextUrl.pathname.startsWith('/dashboard') && !hasSession) return NextResponse.redirect(new URL('/login', request.url))
  if ((request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/register') && hasSession) return NextResponse.redirect(new URL('/dashboard', request.url))
  return NextResponse.next()
}

export const config = { matcher: ['/dashboard/:path*', '/login', '/register'] }
