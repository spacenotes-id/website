import type { TBreadcrumb } from './header/breadcrumb'
import { Breadcrumb } from './header/breadcrumb'
import { Paper } from './paper'

import type { ComponentType } from 'react'

type TItems<TProps> = Array<TBreadcrumb> | ((componentProps: TProps) => TBreadcrumb[])
export function withBreadcrumb<TProps>(
  Component: ComponentType<TProps>,
  items: TItems<TProps> = [],
) {
  // eslint-disable-next-line react/display-name
  return function (props: TProps & React.Attributes) {
    const base: TBreadcrumb = { label: 'Dashboard', path: '/dashboard' }
    const breadcrumbs = Array.isArray(items) ? items ?? [] : items(props) ?? []

    return (
      <>
        <Paper as='header' className='py-2 px-3.5 mb-4 rounded'>
          <Breadcrumb items={[base, ...breadcrumbs]} />
        </Paper>
        <Component {...props} />
      </>
    )
  }
}