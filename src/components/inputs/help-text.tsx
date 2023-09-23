import type { THelpTextInputProps } from './type'

import { P, match } from 'ts-pattern'

export function HelpText(props: THelpTextInputProps) {
  return match(props.help)
    .with(P.nullish, () => null)
    .otherwise((help) => <p className='text-xs text-base-500'>{help}</p>)
}
