import { SidebarMenuListItem } from './sm-list-item'

import { FolderIcon, LayoutDashboardIcon, StickyNoteIcon } from 'lucide-react'

const menu = [
  { icon: LayoutDashboardIcon, label: 'Dashboard', href: '/dashboard' },
  { icon: FolderIcon, label: 'Spaces', href: '/dashboard/spaces' },
  { icon: StickyNoteIcon, label: 'Notes', href: '/dashboard/notes' },
]

export function SidebarMenuList() {
  return (
    <nav className='flex flex-col gap-2.5'>
      {menu.map((item) => (
        <SidebarMenuListItem key={item.href} {...item} />
      ))}
    </nav>
  )
}
