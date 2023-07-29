import '@/app/globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'


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
