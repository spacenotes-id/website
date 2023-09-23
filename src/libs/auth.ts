import { API_BASE_URL } from '@/utils/api-client'
import { asyncFetchJSON } from '@/utils/http'

import type { TApiErrorResponse, TApiInvalidError, TApiSuccessResponse } from '@/types/api'

import type { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

type LoginResponse = {
  access_token: string
  refresh_token: string
}
type TResponse = TApiSuccessResponse<LoginResponse>

export const nextAuthOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Signin To Spacenotes',
      type: 'credentials',
      credentials: {
        email: { label: 'Email', placeholder: 'Your email address ...', type: 'email' },
        password: { label: 'Password', placeholder: 'Your password ...', type: 'password' },
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async authorize(credentials, req) {
        const payload = {
          email: credentials?.email,
          password: credentials?.password,
        }
        const [res, error] = await asyncFetchJSON<TResponse, TApiErrorResponse | TApiInvalidError>({
          url: `${API_BASE_URL}/auth/login`,
          method: 'POST',
          data: payload,
        })

        if (error) {
          if (error?.response?.data) {
            if ('errors' in error.response.data) {
              throw new Error(error.response.data.errors.join(', '))
            }
            if ('error' in error.response.data) {
              throw new Error(error.response.data.error)
            }
          }

          return null
        }

        return { id: res.data.access_token, ...res }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
}
