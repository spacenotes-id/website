import { Button } from '@/components/button'

import { tw } from '@/utils/common'

import type { LucideIcon } from 'lucide-react'

type TProps = {
  label: string
  href: string
  icon: LucideIcon
}

export function SidebarMenuListItem(props: TProps) {
  return (
    <Button icon={props.icon} variants='ghost' className={tw('py-2 px-3 text-sm')} interactive>
      <span className='ml-1'>{props.label}</span>
    </Button>
  )
}
