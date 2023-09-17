'use client'

import { closeAtom } from '@/atoms/composed/boolean-atom'
import { drawerAtom } from '@/atoms/drawer'

import { Button } from '../button'

import { useAtomValue, useSetAtom } from 'jotai'
import { FolderIcon, LayoutDashboardIcon, StickyNoteIcon } from 'lucide-react'
import { Drawer } from 'vaul'

export function AppDrawer() {
  const drawerIsOpen = useAtomValue(drawerAtom)
  const closeDrawer = useSetAtom(closeAtom(drawerAtom))

  return (
    <Drawer.Root open={drawerIsOpen} onClose={closeDrawer}>
      <Drawer.Overlay className='fixed inset-0 bg-black/60' />

      <Drawer.Portal>
        <Drawer.Content className='fixed bottom-0 inset-x-0 top-1/2 rounded-t-lg bg-white'>
          <div className='w-11/12 mx-auto max-w-md py-4'>
            <div className='mx-auto w-12 h-1.5 rounded-full bg-zinc-300 mb-4' />

            <Drawer.Title className='font-semibold mb-4'>SpaceNotes</Drawer.Title>

            <nav className='flex flex-col gap-2.5 mb-4'>
              <Button
                icon={LayoutDashboardIcon}
                variants='ghost'
                className='py-2 px-3 text-sm'
                interactive
              >
                <span className='ml-1'>Dashboard</span>
              </Button>
              <Button icon={FolderIcon} variants='ghost' className='py-2 px-3 text-sm' interactive>
                <span className='ml-1'>Space</span>
              </Button>
              <Button
                icon={StickyNoteIcon}
                variants='ghost'
                className='py-2 px-3 text-sm'
                interactive
              >
                <span className='ml-1'>Note</span>
              </Button>
            </nav>

            <Button
              interactive
              variants='black'
              className='text-sm py-2 px-4 w-full justify-center'
            >
              Logout
            </Button>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
