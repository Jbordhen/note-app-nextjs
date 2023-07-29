import { signOut, useSession } from 'next-auth/react'
import { Button } from '../ui/button'
import { ThemeToggle } from './ThemeToggler'

export default function Header() {
  const { data } = useSession()
  return (
    <nav className='flex flex-row justify-between items-center px-4 lg:px-8 py-2 shadow-sm shadow-secondary'>
      <div>
        Hi <span className='font-bold text-primary'>{data?.user?.name}</span>
      </div>
      <div className='flex flex-row justify-end gap-2 items-center'>
        <Button variant='destructive' onClick={() => signOut()}>
          Logout
        </Button>
        <ThemeToggle />
      </div>
    </nav>
  )
}
