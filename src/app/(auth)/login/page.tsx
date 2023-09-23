import { Paper } from '@/components/paper'

import { LoginForm } from './form'

import Link from 'next/link'

export default function LoginPage() {
  return (
    <main className='grid place-items-center min-h-screen'>
      <Paper className='w-11/12 mx-auto max-w-lg p-4 rounded-lg'>
        <h1 className='font-bold text-2xl/snug md:text-3xl/snug'>Login to Space Notes</h1>

        <hr className='my-4' />

        <LoginForm />

        <div className='pt-5'>
          <p className='text-sm'>
            Don&apos;t have an account?{' '}
            <Link className='text-primary-500 font-medium' href='/register'>
              register
            </Link>
          </p>
        </div>
      </Paper>
    </main>
  )
}
