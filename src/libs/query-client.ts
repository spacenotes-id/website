import type { QueryClientConfig } from '@tanstack/react-query'

export const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: process.env.NODE_ENV !== 'development',
    },
  },
}
