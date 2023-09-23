import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function tw(...classNames: ClassValue[]) {
  return twMerge(clsx(...classNames))
}

type ComposeFunction<T> = (v: T) => T
export function compose<TData>(fns: ComposeFunction<TData>[]) {
  return (value: TData) => fns.reduce((acc, fun) => fun(acc), value)
}

type TBuildURLParams = {
  url: string
  params?: Record<string, unknown>
}

export function buildURL(config: TBuildURLParams) {
  const url = new URL(config.url)
  if (!config.params) return url.toString()

  for (const key in config.params) {
    const value = config.params[key]
    url.searchParams.append(key, String(value))
  }

  return url.toString()
}
