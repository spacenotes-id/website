import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import { Loader2Icon, type LucideIcon } from 'lucide-react'
import { createElement, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { P, match } from 'ts-pattern'

const button = cva(['text-sm font-medium rounded border'], {
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

export type ButtonProps = VariantProps<typeof button> &
  React.ComponentProps<'button'> & {
    icon?: LucideIcon
    isLoading?: boolean
  }

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ icon, variants, interactive, isLoading, ...props }, ref) => {
    const withIcon = match({ icon, isLoading })
      .with({ isLoading: true, icon: P._ }, () => (
        <Loader2Icon className='motion-safe:animate-spin' size='1em' />
      ))
      .with({ isLoading: P.nullish.or(false), icon: P.not(P.nullish).select() }, (Icon) => (
        <Icon size='1em' />
      ))
      .otherwise(() => null)

    return createElement<ButtonProps, HTMLButtonElement>(
      'button',
      {
        ...props,
        ref,
        className: twMerge(
          button({
            variants,
            interactive,
            className: twMerge(props.className, (icon || isLoading) && 'inline-flex items-center'),
          }),
        ),
      },
      withIcon,
      props.children,
    )
  },
)

Button.displayName = 'Button'
