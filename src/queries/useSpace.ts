import { buildQuery } from './builder'

import { useQuery } from '@tanstack/react-query'

export function useSpace() {
  return useQuery({
    queryKey: ['SPACES'],
    queryFn: buildQuery({ url: '/space' }),
  })
}
