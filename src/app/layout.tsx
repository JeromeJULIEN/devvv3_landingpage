import './globals.css'
import type { Metadata } from 'next'
import { Inter,Rubik } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'devvv3',
  description: 'web3 fullstack and ios freelance developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={rubik.className}>{children}</body>
    </html>
  )
}
