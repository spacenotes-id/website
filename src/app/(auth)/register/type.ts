import type { TApiSuccessResponse } from '@/types/api'

type TRegisterResponse = {
  created_at: string
  email: string
  full_name: string
  id: number
  username: string
}

export type TRegisterSuccessResponse = TApiSuccessResponse<TRegisterResponse>
