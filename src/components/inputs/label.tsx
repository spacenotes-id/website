import { tw } from '@/utils/common'

import type { TLabelInputProps } from './type'

export function InputLabel(props: TLabelInputProps) {
  return (
    <label
      htmlFor={props.htmlFor}
      className={tw(
        props.withAsterisk && "after:content-['_*'] after:text-red-500 after:text-[1.25em]",
      )}
    >
      {props.label}
    </label>
  )
}
