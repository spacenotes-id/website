import { Paper } from '@/components/paper'

import { RegisterForm } from './form'

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Register',
  description: 'Register to space notes to write your beautiful story',
}

export default function RegisterPage() {
  return (
    <main className='grid place items-center min-h-screen'>
      <Paper className='w-11/12 mx-auto max-w-lg p-4 rounded-lg'>
        <h1 className='font-bold text-2xl/snug md:text-3xl/snug'>Register to Space Notes</h1>

        <hr className='my-4' />

        <RegisterForm />

        <div className='pt-5'>
          <p className='text-sm'>
            Already have an account?{' '}
            <Link className='text-primary-500 font-medium' href='/login'>
              login
            </Link>
          </p>
        </div>
      </Paper>
    </main>
  )
}
