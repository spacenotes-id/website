import { buildURL } from './common'

import type { AxiosRequestConfig, AxiosError } from 'axios'
import axios from 'axios'

type withoutBody = {
  method: 'GET' | 'DELETE'
} & Omit<AxiosRequestConfig, 'baseURL' | 'url' | 'method' | 'data'>

type withBody = {
  method: 'PUT' | 'PATCH' | 'POST'
} & Omit<AxiosRequestConfig, 'baseURL' | 'url' | 'method'>

type TAsyncFetchJsonConfig = {
  url: string
  params?: Record<string, unknown>
} & (withoutBody | withBody)

export async function asyncFetchJSON<TData, TError = unknown>({
  url,
  params,
  ...config
}: TAsyncFetchJsonConfig) {
  const actualURL = buildURL({ url, params })

  try {
    const res = await axios<TData>({
      ...config,
      url: actualURL,
      headers: {
        ...config?.headers,
        'Content-Type': 'application/json',
      },
    })

    return [res.data, null] as const
  } catch (error) {
    return [null, error as AxiosError<TError>] as const
  }
}
