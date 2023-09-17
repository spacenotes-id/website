import { Button } from '@/components/button'
import { Paper } from '@/components/paper'

import { LogOutIcon } from 'lucide-react'

export function SidebarLogoutButton() {
  return (
    <Paper className='flex items-center px-4 py-2 h-14 shrink-0 border-r-0'>
      <Button icon={LogOutIcon} variants='black' className='w-full h-full px-3'>
        <span className='ml-1 text-sm font-semibold'>Logout</span>
      </Button>
    </Paper>
  )
}
