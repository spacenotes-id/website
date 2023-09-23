import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().nonempty('This field is required').email('Invalid email address'),
  password: z.string().nonempty('This field is required').min(8, 'At least 8 characters or more'),
})

export type TLoginSchema = z.infer<typeof loginSchema>
