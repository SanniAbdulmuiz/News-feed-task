import './globals.css'
import React from 'react'
import ClientProviders from './_components/ClientProviders'
import Header from './_components/Header'
import Footer from './_components/Footer'

import { Josefin_Sans } from 'next/font/google'

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'News Today',
  description: 'Latest headlines',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={` ${josefin.className} bg-gray-50 min-h-screen flex flex-col`}>
        <ClientProviders>
          <Header />

          <main className='flex-1'>{children}</main>

          <Footer />
        </ClientProviders>
      </body>
    </html>
  )
}
