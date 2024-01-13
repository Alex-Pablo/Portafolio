import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { motion } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alex Pablo',
  description: 'Alex Pablo desarrollador web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
