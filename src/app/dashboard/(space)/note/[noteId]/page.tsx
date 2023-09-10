import type { TBreadcrumb } from '@/components/breadcrumb'
import { Breadcrumb } from '@/components/breadcrumb'
import { Button } from '@/components/button'
import { Paper } from '@/components/paper'

import type { Note } from '@/db/note'
import { allNotes } from '@/db/space'

import htmr from 'htmr'
import { ArchiveIcon, HeartIcon, Trash2Icon } from 'lucide-react'
import { marked } from 'marked'
import { notFound } from 'next/navigation'

const getNote = (noteId?: string) => {
  return new Promise<Note | null>((resolve) =>
    setTimeout(() => {
      const note = allNotes.find((note) => note.id === noteId)
      resolve(note ?? null)
    }, 800),
  )
}

type PageProps = {
  params: {
    noteId?: string
  }
}

export default async function NoteDetailPage(props: PageProps) {
  const note = await getNote(props.params.noteId)

  if (!note) {
    notFound()
  }

  const content = await marked.parse(note.body, { async: true })
  const breadcrumb: TBreadcrumb[] = [
    { label: 'Note', path: '/dashboard/note' },
    { label: note.name, path: note.id },
  ]

  return (
    <>
      <Breadcrumb items={breadcrumb} />

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

      <Paper className='p-4 mt-3 space-y-4 min-h-[calc(100vh-11rem)] rounded prose prose-sm lg:prose-base prose-gray max-w-none'>
        {htmr(content)}
      </Paper>
    </>
  )
}
