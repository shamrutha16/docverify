import { AuthShell, RecoveryForm } from '@/components/auth-form'

export default function ForgotPasswordPage() {
  return <AuthShell title="Recover your access." copy="Enter your work email and we will show the next step for account recovery."><RecoveryForm /></AuthShell>
}
