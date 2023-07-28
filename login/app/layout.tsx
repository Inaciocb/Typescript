import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NextAuthProvider from './NextAuthProvider'
import Login from './login/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider><h1 className="header"> <Login /> </h1>{children}</NextAuthProvider>
        </body>
    </html>
  )
}
