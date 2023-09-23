import { CustomLink } from '@/components/link'

import type { Note } from '@/db/note'

import { StickyNoteIcon } from 'lucide-react'

export function SidebarNoteListItem(props: Note) {
  return (
    <CustomLink
      href={`/dashboard/note/${props.id}`}
      interactive
      variants='ghost'
      icon={StickyNoteIcon}
      className='py-2 px-3 text-sm'
    >
      <span className='truncate pr-1 ml-1'>{props.name}</span>
    </CustomLink>
  )
}
