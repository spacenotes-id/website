import { Paper } from '@/components/paper'
import { Title } from '@/components/title'
import { withBreadcrumb } from '@/components/with-breadcrumb'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
}

function DashboardPage() {
  return (
    <Paper className='py-2 px-3.5 rounded min-h-[calc(100vh-9.25rem)]'>
      <Title>Dashboard</Title>

      <p className='mt-24 text-center'>
        <em>Nothing to see here yet, but stay tuned!</em>
      </p>
    </Paper>
  )
}

export default withBreadcrumb(DashboardPage)
