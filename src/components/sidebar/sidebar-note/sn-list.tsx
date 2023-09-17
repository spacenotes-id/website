import { spaces } from '@/db/space'

import { SidebarNoteListItem } from './sn-list-item'

export function SidebarNoteList() {
  const latestNotes = spaces
    .slice(0, 3)
    .flatMap(({ notes }) => notes)
    .slice(0, 3)

  return (
    <div className='flex flex-col space-y-2 px-4 py-3'>
      {latestNotes.map((item) => (
        <SidebarNoteListItem key={item.id} {...item} />
      ))}
    </div>
  )
}
