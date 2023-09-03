'use client'

import { queryClientConfig } from '@/libs/query-client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

export default function Providers(props: React.PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient(queryClientConfig))

  return <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
}
