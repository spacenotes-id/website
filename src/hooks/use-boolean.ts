import { useState } from 'react'

export function useBoolean(initialOpen = false) {
  const [state, setState] = useState(initialOpen)

  const enable = () => setState(true)
  const disable = () => setState(false)
  const toggle = () => setState((prev) => !prev)

  return [state, { enable, disable, toggle }] as const
}
