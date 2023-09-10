import { Breadcrumb } from '@/components/breadcrumb'
import { Paper } from '@/components/paper'
import { Title } from '@/components/title'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function DashboardPage() {
  return (
    <>
      <Breadcrumb />

      <Paper className='py-2 px-3.5 rounded min-h-[calc(100vh-9.25rem)]'>
        <Title>Dashboard</Title>

        <p className='mt-24 text-center'>
          <em>Nothing to see here yet, but stay tuned!</em>
        </p>
      </Paper>
    </>
  )
}
