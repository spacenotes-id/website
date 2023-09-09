import { tw } from '@/libs/common'

import { LayoutDashboardIcon, ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'

export type TBreadcrumb = { label: string; path: string }

type TProps = {
  items?: Array<TBreadcrumb>
}

export function Breadcrumb(props: TProps) {
  const { items = [] } = props

  return (
    <nav className='flex items-center flex-wrap'>
      {items.map((item, index, self) => {
        const lastElement = index === self.length - 1

        if (lastElement)
          return (
            <span className='inline-flex items-center py-0.5' key={item.path}>
              <ChevronRightIcon className='shrink-0' size='0.95em' />
              <span className='text-xs sm:text-sm font-medium'>{item.label}</span>
            </span>
          )

        return (
          <span key={item.path} className='inline-flex items-center'>
            {index !== 0 && <ChevronRightIcon className='shrink-0' size='0.95em' />}
            <Link
              className={tw(
                'inline-flex items-center',
                'text-xs sm:text-sm font-medium',
                'rounded py-0.5 px-1',
                'motion-safe:transition',
                'motion-safe:hover:bg-primary-100',
              )}
              href={item.path}
            >
              {index === 0 && <LayoutDashboardIcon size='0.95em' className='mr-1 shrink-0' />}
              <span className='shrink-0'>{item.label}</span>
            </Link>
          </span>
        )
      })}
    </nav>
  )
}
