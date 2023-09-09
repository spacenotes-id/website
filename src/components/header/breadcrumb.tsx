import { LayoutDashboardIcon, ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'

export type TBreadcrumb = { label: string; path: string }

type TProps = {
  items?: Array<TBreadcrumb>
}

export function Breadcrumb(props: TProps) {
  const { items = [] } = props

  return (
    <div className='flex items-center'>
      <LayoutDashboardIcon size='1em' className='mr-0.5' />

      <nav className='inline-flex items-center'>
        {items.map((item, index, self) => {
          const lastElement = index === self.length - 1

          if (lastElement)
            return (
              <span className='text-sm font-medium py-0.5 px-1' key={item.path}>
                {item.label}
              </span>
            )
          return (
            <span key={item.path} className='inline-flex items-center'>
              <Link
                className='text-sm font-medium rounded py-0.5 px-1 motion-safe:transition motion-safe:hover:bg-primary-100'
                href={item.path}
              >
                <span>{item.label}</span>
              </Link>

              <ChevronRightIcon size='0.95em' />
            </span>
          )
        })}
      </nav>
    </div>
  )
}
