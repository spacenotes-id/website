'use client'

import { Button } from '@/components/button'
import { Input } from '@/components/inputs/input'
import { PasswordInput } from '@/components/inputs/password-input'

import { useHookForm } from '@/hooks/use-hook-form'

import { getErrorFields } from '@/utils/form'

import type { TApiErrorResponse } from '@/types/api'

import { useRegister } from './mutation'
import type { TRegisterSchema } from './schema'
import { registerSchema } from './schema'

import type { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import { toast } from 'react-toastify'

export function RegisterForm() {
  const router = useRouter()
  const form = useHookForm({
    schema: registerSchema,
    defaultvalue: { email: '', full_name: '', password: '', username: '' },
  })

  const createMutation = useRegister()

  const onValidSubmit = async (data: TRegisterSchema) => {
    try {
      const res = await createMutation.mutateAsync(data)
      toast.success(`${res.message}, you can now login with your account!`)
      form.reset()
      router.replace('/login')
    } catch (error) {
      const err = error as AxiosError<TApiErrorResponse>
      toast.error(
        err?.response?.data?.error ?? 'Something went wrong on our end, please try again later',
      )
    } finally {
      createMutation.reset()
    }
  }

  const errors = useMemo(() => getErrorFields(form.formState), [form.formState])

  return (
    <form onSubmit={form.handleSubmit(onValidSubmit)}>
      <div className='space-y-4'>
        <Input
          label='Username'
          htmlFor='username'
          placeholder='Put a cool username'
          error={errors.username?.message}
          {...form.register('username')}
        />
        <Input
          label='Full Name'
          htmlFor='fullName'
          placeholder='Your full name'
          error={errors.full_name?.message}
          {...form.register('full_name')}
        />
        <Input
          label='Email'
          type='email'
          htmlFor='email'
          placeholder='Your email'
          error={errors.email?.message}
          {...form.register('email')}
        />
        <PasswordInput
          label='Password'
          htmlFor='password'
          placeholder='Create a strong password'
          error={errors.password?.message}
          {...form.register('password')}
        />

        <div className='flex items-center gap-2.5 w-full'>
          <Button
            isLoading={form.formState.isSubmitting}
            disabled={form.formState.isSubmitting}
            type='submit'
            className='py-2 px-4 w-full max-w-max ml-auto font-semibold'
            interactive
          >
            <span className='ml-1'>Register</span>
          </Button>
        </div>
      </div>
    </form>
  )
}
