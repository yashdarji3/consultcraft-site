'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to toolkit page
    router.push('/toolkit')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-consultcraft-light-gray">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-consultcraft-dark-blue mb-4">
          ConsultCraft
        </h1>
        <p className="text-consultcraft-gray">
          Redirecting to toolkit...
        </p>
      </div>
    </div>
  )
} 