import '@/app/globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'


export const metadata: Metadata = {
  title: 'Receipt Tracker App',
  description: 'Web app for tracking travel receipts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-blue-300">
          <Navbar />
        {children}
      </body>
    </html>
  )
}
