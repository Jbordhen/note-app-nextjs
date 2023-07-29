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
import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Home() {
  const session = useSession()
  const router = useRouter()

  const handleGithubSignin = () => {
    signIn('github')
  }

  if (session.status === 'authenticated') {
    router.push('/dashboard')
    return <></>
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
            <Button onClick={handleGithubSignin} variant='default'>
              Sign in with Github
            </Button>
          </CardContent>
          {/* <CardFooter>
            <p>Card Footer</p>
          </CardFooter> */}
        </Card>
      ) : (
        <></>
      )}
    </div>
  )
}
