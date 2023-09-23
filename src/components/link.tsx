import { fallbackElement } from '@/utils/fallback-value'

import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import type { LucideIcon } from 'lucide-react'
import type { LinkProps } from 'next/link'
import NextLink from 'next/link'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const link = cva('text-sm rounded border', {
  variants: {
    variants: {
      unstyled: ['border-none'],
      primary: ['border-transparent', 'bg-primary-200 text-black'],
      ghost: ['bg-base-50 text-base-600'],
      danger: ['border-transparent', 'bg-red-100 text-red-900'],
      black: ['bg-base-700 border-base-600 text-white'],
    },
    interactive: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      variants: 'primary',
      interactive: true,
      className: [
        'motion-safe:transition',
        'motion-safe:hover:bg-primary-300',
        'motion-safe:active:bg-primary-400',
      ],
    },
    {
      variants: 'ghost',
      interactive: true,
      className: [
        'motion-safe:transition',
        'motion-safe:hover:bg-base-100',
        'motion-safe:active:bg-base-200',
      ],
    },
    {
      variants: 'danger',
      interactive: true,
      className: [
        'motion-safe:transition',
        'motion-safe:hover:bg-red-200',
        'motion-safe:active:bg-red-300',
      ],
    },
    {
      variants: 'black',
      interactive: true,
      className: [
        'motion-safe:transition',
        'motion-safe:hover:bg-base-800',
        'motion-safe:active:bg-base-950',
      ],
    },
  ],
  defaultVariants: {
    variants: 'primary',
  },
})

type ExtendedLinkProps = LinkProps &
  Omit<React.ComponentPropsWithRef<'a'>, 'href'> & { icon?: LucideIcon }

export type CustomLinkProps = VariantProps<typeof link> & ExtendedLinkProps

export const CustomLink = forwardRef<HTMLAnchorElement, CustomLinkProps>((p, ref) => {
  const { variants, interactive, icon, ...props } = p

  const withIcon = fallbackElement({
    component: icon,
    onSucces(Icon) {
      return <Icon size='1em' />
    },
  })

  return (
    <NextLink
      ref={ref}
      {...props}
      className={twMerge(
        link({
          className: twMerge(props.className, icon && 'inline-flex items-center'),
          interactive,
          variants,
        }),
      )}
    >
      {withIcon}
      {props.children}
    </NextLink>
  )
})

CustomLink.displayName = 'CustomLink'
