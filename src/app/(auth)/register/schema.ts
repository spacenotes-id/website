import { z } from 'zod'

export const registerSchema = z.object({
  username: z.string().nonempty('This field is required').min(3, 'At least 3 characters or more'),
  full_name: z.string().nonempty('This field is required'),
  email: z.string().nonempty('This field is required').email('Invalid email address'),
  password: z.string().nonempty('This field is required').min(8, 'At least 8 characters or more'),
})

export type TRegisterSchema = z.infer<typeof registerSchema>
