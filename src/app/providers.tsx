'use client'

import { queryClientConfig } from '@/libs/query-client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider as JotaiProvider } from 'jotai'
import { SessionProvider } from 'next-auth/react'
import { useState } from 'react'

export default function Providers(props: React.PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient(queryClientConfig))

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <JotaiProvider>{props.children}</JotaiProvider>
      </QueryClientProvider>
    </SessionProvider>
  )
}
