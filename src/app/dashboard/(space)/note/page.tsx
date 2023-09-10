import type { TBreadcrumb } from '@/components/breadcrumb'
import { Breadcrumb } from '@/components/breadcrumb'
import { Button } from '@/components/button'
import { Paper } from '@/components/paper'
import { Title } from '@/components/title'

import { allNotes } from '@/db/space'
import { tw } from '@/libs/common'

import { ArchiveIcon, EyeIcon, HeartIcon, PencilIcon, StickyNoteIcon } from 'lucide-react'
import Link from 'next/link'

export default function NotePage() {
  const breadcrumb: TBreadcrumb[] = [{ label: 'Note', path: 'note' }]

  return (
    <>
      <Breadcrumb items={breadcrumb} />

      <Paper className='py-2 px-3.5 rounded min-h-[calc(100vh-9.25rem)]'>
        <Title>Overview</Title>

        <div className='grid gap-3 grid-cols-[repeat(auto-fit,minmax(min(100%,8rem),1fr))]'>
          <Paper className='p-4 rounded col-span-2'>
            <div className='inline-flex items-center text-xl lg:text-2xl 2xl:text-3xl font-semibold'>
              <StickyNoteIcon className='mr-2 text-sky-600' size='1em' />
              <span>{allNotes.length}</span>
            </div>
            <p className='mt-2'>Notes created</p>
          </Paper>

          <Paper className='p-4 rounded'>
            <div className='inline-flex items-center text-xl lg:text-2xl 2xl:text-3xl font-semibold'>
              <HeartIcon className='mr-2 text-red-500' size='1em' />
              <span>{allNotes.length - 4}</span>
            </div>
            <p className='mt-2'>Favorite Notes</p>
          </Paper>
          <Paper className='p-4 rounded'>
            <div className='inline-flex items-center text-xl lg:text-2xl 2xl:text-3xl font-semibold'>
              <ArchiveIcon className='mr-2 text-emerald-700' size='1em' />
              <span>{allNotes.length - 21}</span>
            </div>
            <p className='mt-2'>Archived Notes</p>
          </Paper>
        </div>

        <div className='mt-8'>
          <p className='font-bold text-lg lg:text-xl 2xl:text-2xl mb-4'>Your notes</p>
          <div className='grid gap-3 grid-cols-[repeat(auto-fit,minmax(min(100%,14rem),1fr))]'>
            {allNotes.map((item) => {
              return (
                <Paper key={item.id} className='flex flex-col px-4 py-2 h-28 rounded'>
                  <p className='font-semibold mb-2'>{item.name}</p>

                  <hr />

                  <div className='flex items-center space-x-2 mt-auto ml-auto'>
                    <Link
                      href={`note/${item.id}`}
                      className={tw(
                        'inline-flex items-center',
                        'py-1 px-2 rounded',
                        'text-xs font-medium',
                        'motion-safe:transition',
                        'bg-primary-200',
                        'motion-safe:hover:bg-primary-300 motion-safe:active:bg-primary-400',
                      )}
                    >
                      <EyeIcon size='1em' />
                      <span className='ml-1'>View</span>
                    </Link>
                    <Button
                      icon={PencilIcon}
                      interactive='yes'
                      variants='ghost'
                      className='py-1 px-2 text-xs'
                    >
                      <span className='ml-1'>Modify</span>
                    </Button>
                  </div>
                </Paper>
              )
            })}
          </div>
        </div>
      </Paper>
    </>
  )
}
