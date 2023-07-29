import { signOut, useSession } from 'next-auth/react'
import { Button } from '../ui/button'

export default function Header() {
  const { data } = useSession()
  return (
    <nav className='flex flex-row justify-between items-center mx-4 lg:mx-8 my-2 lg:my-4'>
      <div>
        Hi <span className='font-bold text-primary'>{data?.user?.name}</span>
      </div>
      <div>
        <Button variant='destructive' onClick={() => signOut()}>
          Logout
        </Button>
      </div>
    </nav>
  )
}
