import { tw } from '@/utils/common'

import { PlusJakartaSans } from './fonts'
import Providers from './providers'
import './styles/tailwind.css'

import type { Metadata } from 'next'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const metadata: Metadata = {
  title: {
    default: 'SpaceNotes',
    template: '%s | SpaceNotes',
  },
  description: 'Powered by - Next.js',
}

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html
      lang='en'
      className={tw('scroll-pt-16', PlusJakartaSans.variable)}
      suppressHydrationWarning
    >
      <body>
        <Providers>{props.children}</Providers>
        <ToastContainer
          position='top-left'
          autoClose={3000}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          role='alert'
          theme='light'
        />
      </body>
    </html>
  )
}
