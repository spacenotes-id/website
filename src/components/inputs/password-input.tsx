import { tw } from '@/utils/common'

import { Button } from '../button'
import { InputErrorMessage } from './error-message'
import { HelpText } from './help-text'
import { InputLabel } from './label'
import type { TPasswordInputProps } from './type'

import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { forwardRef, useCallback, useState } from 'react'

export const PasswordInput = forwardRef<HTMLInputElement, TPasswordInputProps>((params, ref) => {
  const { htmlFor, label, help, error, withAsterisk, ...props } = params
  const [inputType, setInputType] = useState('password')

  const onToggle = useCallback(
    () => setInputType((prev) => (prev === 'password' ? 'type' : 'password')),
    [],
  )

  return (
    <div className='relative'>
      <InputLabel htmlFor={htmlFor} label={label} withAsterisk={withAsterisk} />

      <HelpText help={help} />

      <div
        className={tw(
          'relative mt-1.5',
          'rounded border overflow-hidden',
          'motion-safe:transition focus-within:ring-1',
          'focus-within:bg-primary-50 focus-within:border-primary-500 focus-within:ring-primary-200',
          'bg-base-50',
        )}
      >
        <input
          id={htmlFor}
          {...props}
          type={inputType}
          ref={ref}
          className={tw(
            'w-full peer',
            'text-xs md:text-sm placeholder:text-xs md:placeholder:text-sm',
            'py-2 px-2.5 outline-none bg-transparent',
          )}
        />

        <Button
          type='button'
          onClick={onToggle}
          variants='unstyled'
          className={tw(
            'absolute right-0 top-1/2 -translate-y-1/2',
            'inline-flex items-center justify-center',
            'w-10 h-full',
            'motion-safe:transition',
            'peer-focus:bg-primary-100 bg-base-100',
          )}
        >
          {inputType === 'password' ? <EyeOffIcon size='1.25em' /> : <EyeIcon size='1.25em' />}
          <span className='sr-only'>Hide or see password</span>
        </Button>
      </div>

      <InputErrorMessage error={error} />
    </div>
  )
})

PasswordInput.displayName = 'PasswordInput'
