import { useMediaQuery } from './use-media-query'

export function useMediaQueryMaxWidth(size: number) {
  return useMediaQuery(`(max-width: ${size}px)`)
}
