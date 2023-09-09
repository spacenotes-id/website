import { withBreadcrumb } from '@/components/with-breadcrumb'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
}

function DashboardPage() {
  return <h1>Dashboard</h1>
}

export default withBreadcrumb(DashboardPage)
