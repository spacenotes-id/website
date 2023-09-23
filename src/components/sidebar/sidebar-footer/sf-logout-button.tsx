'use client'

import { Button } from '@/components/button'

import { useBoolean } from '@/hooks/use-boolean'

import { signOut } from 'next-auth/react'

export function SidebarFooterLogoutButton() {
  const [isLoading, handler] = useBoolean()

  const onClick = async () => {
    handler.enable()
    try {
      await signOut()
    } catch (error) {
      console.error(error)
    } finally {
      handler.disable()
    }
  }
  return (
    <Button
      isLoading={isLoading}
      variants='black'
      className='w-full justify-center h-10 px-3'
      onClick={onClick}
    >
      <span className='ml-1 text-sm font-semibold'>Log Out</span>
    </Button>
  )
}
