import './globals.css'
import type { Metadata } from 'next'


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
      <body>{children}</body>
    </html>
  )
}
