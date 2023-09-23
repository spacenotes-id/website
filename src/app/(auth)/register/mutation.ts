import { API_BASE_URL } from '@/utils/api-client'

import { buildMutation } from '@/queries/builder'

import type { TRegisterSchema } from './schema'
import type { TRegisterSuccessResponse } from './type'

import { useMutation } from '@tanstack/react-query'

export function useRegister() {
  return useMutation({
    mutationFn: buildMutation<TRegisterSuccessResponse, TRegisterSchema>({
      method: 'POST',
      url: `${API_BASE_URL}/auth/register`,
    }),
  })
}
