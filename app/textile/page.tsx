'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function TextileRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Navigate to the Textile page folder (existing route at /Textile)
    router.replace('/Textile')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-700">
      Redirecting to the Textile page...
    </div>
  )
}
