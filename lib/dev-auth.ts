import { cookies } from 'next/headers'

export const SESSION_COOKIE = 'documentverify_session'

export async function getSession() {
  const cookieStore = await cookies()
  return cookieStore.get(SESSION_COOKIE)?.value === 'development-session'
    ? { email: 'demo@documentverify.local', name: 'Demo reviewer' }
    : null
}
