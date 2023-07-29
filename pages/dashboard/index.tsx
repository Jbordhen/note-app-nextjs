import ProtectedLayout from '@/components/layout/ProtectedLayout'
import { useSession } from 'next-auth/react'

export default function Dashboard() {
  const session = useSession()

  return (
    <ProtectedLayout>
      <div>You are logged in as {session.data?.user?.name}</div>
    </ProtectedLayout>
  )
}
