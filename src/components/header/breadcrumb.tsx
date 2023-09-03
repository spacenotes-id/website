'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Breadcrumb() {
  const pathname = usePathname()

  const segments = pathname.split('/').filter((segment) => segment !== '') // Split and remove empty segments

  const items = segments.map((segment, index) => {
    const path = '/' + segments.slice(0, index + 1).join('/') // Build the path for each breadcrumb
    const name = segment.charAt(0).toUpperCase() + segment.slice(1) // Capitalize the name

    return {
      href: path,
      name: name,
      isLastElement: index === segments.length - 1,
    }
  })

  return (
    <nav className='inline-flex items-center'>
      {items.map((item) => {
        if (item.isLastElement)
          return (
            <span className='text-sm font-medium py-0.5 px-1' key={item.href}>
              {item.name}
            </span>
          )
        return (
          <span key={item.href} className='inline-flex items-center mr-1.5'>
            <Link
              className='text-sm font-medium rounded py-0.5 px-1 motion-safe:transition motion-safe:hover:bg-primary-100'
              href={item.href}
            >
              <span>{item.name}</span>
            </Link>

            <span className='ml-1'>/</span>
          </span>
        )
      })}
    </nav>
  )
}
