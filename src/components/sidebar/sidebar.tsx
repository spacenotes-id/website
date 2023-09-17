import { Paper } from '@/components/paper'

import { tw } from '@/libs/common'

import { SidebarFooter } from './sidebar-footer'
import { SidebarMenu } from './sidebar-menu'
import { SidebarNote } from './sidebar-note'

import Image from 'next/image'

export function Sidebar() {
  return (
    <Paper
      as='aside'
      className={tw(
        'fixed left-0 inset-y-0 z-50',
        'mr-4 sm:w-52 md:w-60 xl:w-72',
        'hidden sm:block',
      )}
    >
      <div className='w-full h-full flex flex-col'>
        <Paper
          className={tw(
            'sticky top-0',
            'flex items-center justify-center shrink-0',
            'h-14 border-t-0 border-l-0 border-r-0',
          )}
        >
          <Image src='/next.svg' width={80} height={40} alt='Next.js Logo' />
        </Paper>

        <div className='h-full overflow-y-auto py-8 row-span-4 space-y-6 custom-scrollbar'>
          <SidebarNote />

          <SidebarMenu />
        </div>

        <SidebarFooter />
      </div>
    </Paper>
  )
}
