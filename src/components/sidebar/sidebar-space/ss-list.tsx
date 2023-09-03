import { spaces } from '@/db/space'

import { SidebarSpaceListItem } from './ss-list-item'

export function SidebarSpaceList() {
  return (
    <div className='flex flex-col space-y-2 px-4 py-3'>
      {spaces.map((item) => (
        <SidebarSpaceListItem key={item.id} {...item} />
      ))}
    </div>
  )
}
