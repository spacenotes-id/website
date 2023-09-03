import { SidebarSpaceListHeader } from './ss-header'
import { SidebarSpaceList } from './ss-list'

export function SidebarSpace() {
  return (
    <div>
      <SidebarSpaceListHeader />

      <hr className='mt-3' />

      <SidebarSpaceList />
    </div>
  )
}
