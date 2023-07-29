import { ReactNode } from 'react'
import { useSession } from 'next-auth/react'
import { Skeleton } from '../ui/skeleton'
import { useRouter } from 'next/router'
import Header from '../header/Header'

const DefaultLoader = () => {
  return (
    <div className='w-full mx-auto my-8 flex flex-col gap-8'>
      <Skeleton className='w-4/5 h-12 mx-auto' />
      <Skeleton className='w-4/5 h-[60vh] mx-auto' />
    </div>
  )
}

export default function ProtectedLayout({
  children,
  loader = <DefaultLoader />,
}: {
  children: ReactNode
  loader?: ReactNode
}) {
  const { status } = useSession()
  const router = useRouter()

  if (status === 'loading') {
    return loader
  }

  if (status === 'unauthenticated') {
    router.push('/signin')
    return <></>
  }

  return (
    <main className='flex flex-col relative'>
      <Header />
      {children}
    </main>
  )
}
