import { Button } from '@/components/button'

import { LogOutIcon } from 'lucide-react'

export function SidebarFooterLogoutButton() {
  return (
    <Button icon={LogOutIcon} variants='black' className='w-full h-10 px-3'>
      <span className='ml-1 text-sm font-semibold'>Logout</span>
    </Button>
  )
}
