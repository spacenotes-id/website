'use client'

import { Button } from '@/components/button'
import { Input } from '@/components/inputs/input'
import { PasswordInput } from '@/components/inputs/password-input'

import { useHookForm } from '@/hooks/use-hook-form'

import { getErrorFields } from '@/utils/form'

import type { TLoginSchema } from './schema'
import { loginSchema } from './schema'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import { toast } from 'react-toastify'

export function LoginForm() {
  const form = useHookForm({ schema: loginSchema, defaultvalue: { email: '', password: '' } })
  const router = useRouter()

  const errors = useMemo(() => getErrorFields(form.formState), [form.formState])

  const onValidSubmit = async (data: TLoginSchema) => {
    try {
      const res = await signIn('credentials', { redirect: false, ...data })

      if (res?.error) throw new Error(res.error)

      toast.success('Login successfully')
      form.reset()
      router.replace('/dashboard')
    } catch (error) {
      const err = error as Error
      form.setValue('password', '', { shouldDirty: true, shouldTouch: true, shouldValidate: true })
      toast.error(err?.message ?? 'Cannot login, please try again later')
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onValidSubmit)}>
      <div className='space-y-5'>
        <Input
          withAsterisk
          label='Email'
          htmlFor='email'
          placeholder='Input your email'
          error={errors.email?.message}
          {...form.register('email')}
        />

        <PasswordInput
          withAsterisk
          label='Password'
          htmlFor='password'
          help='Your password usually 8 characters or more'
          placeholder='Input your password'
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
            Signin
          </Button>
        </div>
      </div>
    </form>
  )
}
