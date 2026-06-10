import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nexus Industrial Solutions',
  description: 'Delivering reliable industrial supply & global trade solutions',
  viewport: 'width=device-width, initial-scale=1.0',
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
