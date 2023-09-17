'use client'

import { Button } from '@/components/button'

import { LayoutDashboardIcon } from 'lucide-react'
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
    </main>
  )
}
