'use client'

import { Button } from '@/components/button'

import type { Note } from '@/db/note'

import { StickyNoteIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function SidebarNoteListItem(props: Note) {
  const router = useRouter()

  const onClickNote = () => router.push(`/dashboard/note/${props.id}`)

  return (
    <Button
      interactive
      variants='ghost'
      onClick={onClickNote}
      icon={StickyNoteIcon}
      className='py-2 px-3 text-sm'
    >
      <span className='truncate pr-1 ml-1'>{props.name}</span>
    </Button>
  )
}
