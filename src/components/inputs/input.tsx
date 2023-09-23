import { tw } from '@/utils/common'

import { InputErrorMessage } from './error-message'
import { HelpText } from './help-text'
import { InputLabel } from './label'
import type { TInputComponentProps } from './type'

import { forwardRef } from 'react'

export const Input = forwardRef<HTMLInputElement, TInputComponentProps>((params, ref) => {
  const { label, htmlFor, error, help, withAsterisk, ...props } = params

  return (
    <div className='relative'>
      <InputLabel htmlFor={htmlFor} label={label} withAsterisk={withAsterisk} />

      <HelpText help={help} />

      <input
        {...props}
        type={props.type ?? 'text'}
        ref={ref}
        className={tw(
          'w-full',
          'text-xs md:text-sm placeholder:text-xs md:placeholder:text-sm',
          'py-2 px-2.5 rounded border outline-none',
          'motion-safe:transition focus:ring-1',
          'focus:bg-primary-50 focus:border-primary-500 focus:ring-primary-200',
          'bg-base-50',
        )}
      />

      <InputErrorMessage error={error} />
    </div>
  )
})

Input.displayName = 'Input'
