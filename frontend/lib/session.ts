export const SESSION_COOKIE = 'documentverify_session'
export const SESSION_VALUE = 'development-session'

export function isValidSessionValue(value: string | undefined) {
  return value === SESSION_VALUE
}
