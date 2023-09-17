import { useMediaQueryMaxWidth } from './use-mq-max-width'
import { useMediaQueryMinWidth } from './use-mq-min-width'

import { useEffect } from 'react'

type TScreenSizes = {
  min: number
  max?: number
}

type TCallback = (matched: boolean) => unknown

export function useWatchScreen(callback: TCallback, screenSize: TScreenSizes) {
  const isMaxMatched = useMediaQueryMaxWidth(screenSize?.max ?? screenSize.min + 10)
  const isMinMatched = useMediaQueryMinWidth(screenSize.min)

  if (screenSize.min >= (screenSize?.max ?? screenSize.min + 10)) {
    throw new Error(
      `min size should not be greater or equal to max screen, check your code at ${useWatchScreen.name}`,
    )
  }

  useEffect(() => {
    callback(isMinMatched && (screenSize?.max ? isMaxMatched : true))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMaxMatched, isMinMatched])
}
