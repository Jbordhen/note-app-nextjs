import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { useToast } from '@/components/ui/use-toast'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Home() {
  const session = useSession()
  const router = useRouter()
  const { toast } = useToast()

  const handleGoogleSignin = () => {
    signIn('github')
  }

  if (session.status === 'unauthenticated') {
    router.push('/signin')
  }

  if (session.status === 'authenticated') {
    if (session.data.user?.email) {
      router.push('/dashboard')
    } else {
      toast({
        title: 'Email not found',
        description: 'User email is found, signing out user',
      })
      signOut()
      router.push('/signin')
    }
  }

  return (
    <div
      className={`container lg:container-2xl flex justify-center m-auto max-w-full`}>
      {session.status === 'loading' ? (
        <Skeleton className='w-[200px] h-5 rounded-full' />
      ) : session.status === 'unauthenticated' ? (
        <Card className='w-[300px]'>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Looks like you are not logged in!</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleGoogleSignin} variant='default'>
              Sign in with Github
            </Button>
          </CardContent>
          {/* <CardFooter>
            <p>Card Footer</p>
          </CardFooter> */}
        </Card>
      ) : null}
    </div>
  )
}
