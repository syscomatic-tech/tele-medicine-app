import { Inter } from 'next/font/google'
import './globals.css'
import PrelineScript from '@/components/preline/prelineScript'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" class="dark">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body className={inter.className}>
        <div className='bg-bg min-h-screen'>
        {children}
        </div>
      </body>
      <PrelineScript/>
    </html>
  )
}
