import { tw } from '@/utils/common'

import { Paper } from './paper'

import { LayoutDashboardIcon, ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'
import { match } from 'ts-pattern'

export type TBreadcrumb = { label: string; path: string }

type TProps = {
  items?: Array<TBreadcrumb>
}

export function Breadcrumb(props: TProps) {
  const { items = [] } = props

  const breadcrumbs = [{ label: 'Dashboard', path: '/dashboard' }, ...items]

  return (
    <Paper as='header' className='py-1.5 px-2 sm:py-2.5 sm:px-3.5 mb-3 rounded'>
      <nav className='flex items-center flex-wrap'>
        {breadcrumbs.map((item, index, self) => {
          const lastElement = index === self.length - 1

          if (lastElement)
            return (
              <span
                className={tw(
                  'inline-flex items-center py-0.5 text-xs sm:text-sm',
                  self.length == 1 && 'px-1',
                )}
                key={item.path}
              >
                {match(self.length)
                  .with(1, () => <LayoutDashboardIcon className='shrink-0' size='0.95em' />)
                  .otherwise(() => (
                    <ChevronRightIcon className='shrink-0' size='0.95em' />
                  ))}
                <span className='ml-1 font-medium'>{item.label}</span>
              </span>
            )

          return (
            <span key={item.path} className='inline-flex items-center'>
              {match(index)
                .with(0, () => null)
                .otherwise(() => (
                  <ChevronRightIcon className='shrink-0' size='0.95em' />
                ))}
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
                {match(index)
                  .with(0, () => <LayoutDashboardIcon size='0.95em' className='mr-1 shrink-0' />)
                  .otherwise(() => null)}
                <span className='shrink-0'>{item.label}</span>
              </Link>
            </span>
          )
        })}
      </nav>
    </Paper>
  )
}
