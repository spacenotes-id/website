import type { PrimitiveAtom } from 'jotai'
import { atom } from 'jotai'

export const toggleAtom = (atomValue: PrimitiveAtom<boolean>) => {
  return atom(null, (get, set) => set(atomValue, !get(atomValue)))
}

export const openAtom = (atomValue: PrimitiveAtom<boolean>) => {
  return atom(null, (get, set) => set(atomValue, true))
}
export const closeAtom = (atomValue: PrimitiveAtom<boolean>) => {
  return atom(null, (get, set) => set(atomValue, false))
}
