import ProtectedLayout from '@/components/layout/ProtectedLayout'
import { Button } from '@/components/ui/button'
import { api } from '@/convex/_generated/api'
import { useQuery } from 'convex/react'
import { useRouter } from 'next/router'

export default function Dashboard() {
  const router = useRouter()
  const notes = useQuery(api.notes.endpoints.list)

  return (
    <ProtectedLayout>
      <div className='flex flex-row justify-end m-2 lg:m-4'>
        <Button
          variant='outline'
          size='sm'
          onClick={() => router.push('/new-note')}>
          New Note
        </Button>
      </div>
      <div className='flex flex-col w-full lg:container'>
        {notes?.map((note) => (
          <div key={note._id}>{note.title}</div>
        ))}
      </div>
    </ProtectedLayout>
  )
}
