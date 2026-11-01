import { NextResponse } from 'next/server'
import { SESSION_COOKIE } from '@/lib/dev-auth'

export async function POST() {
  const response = NextResponse.json({ ok: true, mode: 'development' })
  response.cookies.set(SESSION_COOKIE, 'development-session', { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', path: '/', maxAge: 60 * 60 * 24 * 7 })
  return response
}
