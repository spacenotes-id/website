import { asyncFetchJSON } from '@/utils/http'

export type TBuildQuery = {
  url: string
  params?: Record<string, unknown>
}

export const buildQuery = <TData>(config: TBuildQuery) => {
  return async () => {
    const [data, err] = await asyncFetchJSON<TData>({ ...config, method: 'GET' })

    if (err) throw err

    return data
  }
}

type TMutateQuery = TBuildQuery & {
  method: 'POST' | 'PUT' | 'PATCH'
}
export const buildMutation = <TData, TPayload = unknown>(config: TMutateQuery) => {
  return async (payload: TPayload) => {
    const [data, err] = await asyncFetchJSON<TData>({ ...config, data: payload })

    if (err) throw err

    return data
  }
}

export const buildDeleteMutation = <TData>(config: TBuildQuery) => {
  return async () => {
    const [data, err] = await asyncFetchJSON<TData>({ ...config, method: 'DELETE' })

    if (err) throw err

    return data
  }
}
