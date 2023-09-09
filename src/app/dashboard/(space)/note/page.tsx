import { withBreadcrumb } from '@/components/with-breadcrumb'

function NotePage() {
  return <h1>Note Page</h1>
}

export default withBreadcrumb(NotePage, [{ label: 'Note', path: '' }])
