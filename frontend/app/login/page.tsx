import { AuthShell, LoginForm } from '@/components/auth-form'

export default function LoginPage() {
  return <AuthShell title="Welcome back." copy="Sign in to continue reviewing documents with a clearer evidence trail."><LoginForm /></AuthShell>
}
