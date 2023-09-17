import { SidebarNoteList } from './sn-list'

export function SidebarNote() {
  return (
    <div>
      <p className='text-sm font-semibold px-4'>Latest Notes</p>
      <SidebarNoteList />
    </div>
  )
}
