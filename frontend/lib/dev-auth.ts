import { cookies } from 'next/headers'
import { isValidSessionValue, SESSION_COOKIE, SESSION_VALUE } from '@/lib/session'

export { SESSION_COOKIE, SESSION_VALUE }
export const DEVELOPMENT_EMAIL = process.env.DOCUMENTVERIFY_DEMO_EMAIL ?? 'demo@documentverify.com'
export const DEVELOPMENT_PASSWORD = process.env.DOCUMENTVERIFY_DEMO_PASSWORD ?? 'Demo@12345'

export function isValidDevelopmentCredential(email: string, password: string) {
  return email.trim().toLowerCase() === DEVELOPMENT_EMAIL.toLowerCase() && password === DEVELOPMENT_PASSWORD
}

export async function getSession() {
  const cookieStore = await cookies()
  return isValidSessionValue(cookieStore.get(SESSION_COOKIE)?.value)
    ? { email: DEVELOPMENT_EMAIL, name: 'Demo reviewer' }
    : null
}
