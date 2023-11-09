import type { Metadata } from 'next'
import { Inter, Ubuntu } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const ubuntu = Ubuntu({subsets: ['latin'], weight: '400'})

export const metadata: Metadata = {
  title: 'Quiz App for BIG MINDS',
  description: 'Quiz App is desigend to make you feel cute',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  )
}
