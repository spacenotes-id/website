'use client'

import { Button } from '@/components/button'

import { LayoutDashboardIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <main className='flex flex-col items-center justify-center text-center min-h-screen'>
      <h1 className='font-bold text-3xl 2xl:text-4xl mb-4 text-transparent bg-clip-text gradient-text animate-text-flow'>
        Welcome to SpaceNotes
      </h1>
      <Button
        interactive
        onClick={() => router.push('/dashboard')}
        icon={LayoutDashboardIcon}
        variants='primary'
        className='py-2 px-4'
      >
        <span className='ml-2 font-bold'>Go to dashboard</span>
      </Button>

      <div className='flex items-center gap-2.5'>
        <Link
          href='/register'
          className='py-2 px-3 text-sm font-medium mt-4 border rounded text-white bg-base-700'
        >
          Register Now
        </Link>
        <Link
          href='/login'
          className='py-2 px-3 text-sm font-medium mt-4 border rounded text-white bg-base-700'
        >
          Login now
        </Link>
      </div>
    </main>
  )
}
