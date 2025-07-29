'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Head from 'next/head'

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to toolkit page
    router.push('/toolkit')
  }, [router])

  return (
    <>
      <Head>
        <title>ConsultCraft | AI-Powered Systems for Coaches</title>
        <meta name="description" content="Scale your coaching business with AI-based systems and automation. Done-for-you workflows, CRM dashboards, and more." />
        <meta property="og:title" content="ConsultCraft" />
        <meta property="og:description" content="AI systems built for coaches. Done-for-you automations, dashboards, and client flows." />
        <meta property="og:url" content="https://consultcraft-site.vercel.app/" />
        <meta property="og:image" content="/og-home.png" />
      </Head>
      
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
    </>
  )
} 