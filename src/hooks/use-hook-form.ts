import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import type { ZodType, z } from 'zod'

type TOptions<TSchema extends ZodType> = {
  schema: TSchema
  defaultvalue: z.infer<TSchema>
}

export function useHookForm<TSchema extends ZodType>(options: TOptions<TSchema>) {
  return useForm<z.infer<typeof options.schema>>({
    mode: 'onBlur',
    resolver: zodResolver(options.schema),
  })
}
