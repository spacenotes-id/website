'use client'

import { useWatchScreen } from '@/hooks/use-watch-screen'

import { closeAtom, toggleAtom } from '@/atoms/composed/boolean-atom'
import { drawerAtom } from '@/atoms/drawer'

import { Button } from '../button'

import { useAtomValue, useSetAtom } from 'jotai'
import type { LucideIcon } from 'lucide-react'
import { MenuIcon, XIcon } from 'lucide-react'
import { match } from 'ts-pattern'

export function DrawerButton() {
  const isDrawerOpen = useAtomValue(drawerAtom)
  const toggleDrawer = useSetAtom(toggleAtom(drawerAtom))
  const closeDrawer = useSetAtom(closeAtom(drawerAtom))

  const icon = match(isDrawerOpen)
    .returnType<LucideIcon>()
    .with(true, () => XIcon)
    .otherwise(() => MenuIcon)

  useWatchScreen(
    (match) => {
      if (isDrawerOpen && match) {
        closeDrawer()
      }
    },
    { min: 640 },
  )

  return (
    <Button
      onClick={toggleDrawer}
      icon={icon}
      variants='ghost'
      interactive
      className='sm:hidden text-sm justify-center h-8 w-8 ml-auto'
    >
      <span className='sr-only'>Open/Close menu</span>
    </Button>
  )
}
