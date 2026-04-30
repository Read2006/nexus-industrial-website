import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nexus Industrial Solutions | Industrial Supplier Pakistan',
  description: 'SECP-registered industrial supplier in Islamabad. Quality components, fast delivery, nationwide service.',
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
