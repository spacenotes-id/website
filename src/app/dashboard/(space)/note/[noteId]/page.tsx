import { Button } from '@/components/button'
import { Paper } from '@/components/paper'

import { allNotes } from '@/db/space'

import { ArchiveIcon, HeartIcon, Trash2Icon } from 'lucide-react'
import { notFound } from 'next/navigation'

type PageProps = {
  params: {
    noteId?: string
  }
}
export default function NoteIdPage(props: PageProps) {
  const note = allNotes.find((note) => note.id === props.params.noteId)

  if (!note) {
    notFound()
  }

  return (
    <>
      <Paper className='sticky top-[4.5rem] flex items-center px-3 py-4 rounded backdrop-blur-md'>
        <p className='font-bold text-lg lg:text-xl truncate pb-1 mr-4'>{note.name}</p>

        <div className='flex items-center space-x-2 ml-auto'>
          <Button className='p-1.5 text-base' variants='ghost' interactive='yes' icon={HeartIcon}>
            <span className='sr-only'>Favorite</span>
          </Button>
          <Button className='p-1.5 text-base' variants='ghost' interactive='yes' icon={ArchiveIcon}>
            <span className='sr-only'>Archive</span>
          </Button>
          <Button className='p-1.5 text-base' variants='danger' interactive='yes' icon={Trash2Icon}>
            <span className='sr-only'>Delete</span>
          </Button>
        </div>
      </Paper>

      <Paper className='p-4 mt-3 space-y-4 min-h-[calc(100vh-11rem)] rounded'>
        <p>{note.body}</p>
      </Paper>
    </>
  )
}
