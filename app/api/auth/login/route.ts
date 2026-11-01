import { NextResponse } from 'next/server'
import { isValidDevelopmentCredential, SESSION_COOKIE } from '@/lib/dev-auth'

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const email = typeof body?.email === 'string' ? body.email : ''
  const password = typeof body?.password === 'string' ? body.password : ''

  if (!isValidDevelopmentCredential(email, password)) {
    return NextResponse.json({ ok: false, error: 'Invalid development credentials.' }, { status: 401 })
  }

  const response = NextResponse.json({ ok: true, mode: 'development' })
  response.cookies.set(SESSION_COOKIE, 'development-session', { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', path: '/', maxAge: 60 * 60 * 24 * 7 })
  return response
}
