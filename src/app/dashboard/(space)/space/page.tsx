import type { TBreadcrumb } from '@/components/breadcrumb'
import { Breadcrumb } from '@/components/breadcrumb'
import { Button } from '@/components/button'
import { Paper } from '@/components/paper'
import { Title } from '@/components/title'

import { allNotes, favSpaces, spaces } from '@/db/space'

import { HeartIcon, OrbitIcon, PencilIcon, StickyNoteIcon, Trash2Icon } from 'lucide-react'

const breadcrumb: TBreadcrumb[] = [{ label: 'Space', path: 'space' }]

export default function SpacePage() {
  return (
    <>
      <Breadcrumb items={breadcrumb} />

      <Paper className='py-2 px-3.5 rounded min-h-[calc(100vh-9.25rem)]'>
        <Title>Overview</Title>

        <div className='grid gap-3 grid-cols-[repeat(auto-fit,minmax(min(100%,8rem),1fr))]'>
          <Paper className='p-4 rounded'>
            <div className='inline-flex items-center text-xl lg:text-2xl 2xl:text-3xl font-semibold'>
              <OrbitIcon className='mr-2 text-primary-600' size='1em' />
              <span>{spaces.length}</span>
            </div>
            <p className='mt-2'>Space created</p>
          </Paper>
          <Paper className='p-4 rounded'>
            <div className='inline-flex items-center text-xl lg:text-2xl 2xl:text-3xl font-semibold'>
              <HeartIcon className='mr-2 text-red-500' size='1em' />
              <span>{favSpaces.length}</span>
            </div>
            <p className='mt-2'>Favorite Space</p>
          </Paper>
          <Paper className='p-4 rounded'>
            <div className='inline-flex items-center text-xl lg:text-2xl 2xl:text-3xl font-semibold'>
              <StickyNoteIcon className='mr-2 text-sky-600' size='1em' />
              <span>{allNotes.length}</span>
            </div>
            <p className='mt-2'>Notes created</p>
          </Paper>
        </div>

        <div className='mt-8'>
          <p className='font-bold text-lg lg:text-xl 2xl:text-2xl mb-4'>Your spaces</p>
          <div className='grid gap-3 grid-cols-[repeat(auto-fit,minmax(min(100%,14rem),1fr))]'>
            {spaces.map((item) => {
              return (
                <Paper key={item.id} className='flex flex-col px-4 py-2 h-28 rounded'>
                  <p className='font-semibold mb-2'>{item.name}</p>

                  <hr />

                  <div className='flex items-center space-x-2 mt-auto ml-auto'>
                    <Button
                      icon={PencilIcon}
                      interactive
                      variants='ghost'
                      className='py-1 px-2 text-xs'
                    >
                      <span className='ml-1'>Modify</span>
                    </Button>
                    <Button
                      icon={Trash2Icon}
                      interactive
                      variants='danger'
                      className='py-1 px-3 text-xs'
                    >
                      <span className='ml-1'>Delete</span>
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
