import { useForm } from 'react-hook-form'
import ProtectedLayout from '@/components/layout/ProtectedLayout'
// import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function NewNote() {
  const form = useForm()

  const onSubmit = (values: unknown) => {
    console.log(values)
  }

  return (
    <ProtectedLayout>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-4 px-4 lg:px-8 py-2 flex flex-col'>
          {/* <Button
            variant='secondary'
            type='submit'
            className='ml-auto my-1 lg:my-4'>
            Save
          </Button> */}
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder='Title'
                    {...field}
                    className='border-none'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder='Description (Optional)'
                    className='resize-none border-none'
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </ProtectedLayout>
  )
}
