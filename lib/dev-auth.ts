import { cookies } from 'next/headers'

export const SESSION_COOKIE = 'documentverify_session'
export const DEVELOPMENT_EMAIL = process.env.DOCUMENTVERIFY_DEMO_EMAIL ?? 'demo@documentverify.local'
export const DEVELOPMENT_PASSWORD = process.env.DOCUMENTVERIFY_DEMO_PASSWORD ?? 'verify-demo-123'

export function isValidDevelopmentCredential(email: string, password: string) {
  return email.trim().toLowerCase() === DEVELOPMENT_EMAIL.toLowerCase() && password === DEVELOPMENT_PASSWORD
}

export async function getSession() {
  const cookieStore = await cookies()
  return cookieStore.get(SESSION_COOKIE)?.value === 'development-session'
    ? { email: DEVELOPMENT_EMAIL, name: 'Demo reviewer' }
    : null
}
