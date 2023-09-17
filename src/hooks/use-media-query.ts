'use client'

import { useCallback, useEffect, useState } from 'react'

const getMatches = (query: string) => () => {
  return typeof window !== 'undefined' ? window.matchMedia(query).matches : false
}

export function useMediaQuery(mediaQuery: string) {
  const [isMatches, setMatches] = useState(getMatches(mediaQuery))
  const handler = useCallback((list: MediaQueryListEvent) => {
    setMatches(list.matches)
  }, [])

  useEffect(() => {
    window.matchMedia(mediaQuery).addEventListener('change', handler)

    return () => window.matchMedia(mediaQuery).removeEventListener('change', handler)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mediaQuery])

  return isMatches
}
