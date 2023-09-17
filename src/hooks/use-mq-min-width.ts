import { useMediaQuery } from './use-media-query'

export function useMediaQueryMinWidth(size: number) {
  return useMediaQuery(`(min-width: ${size}px)`)
}
