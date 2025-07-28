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
        <meta name="keywords" content="AI automation, coaching business, CRM, Notion, Zapier, systems, automation" />
        <meta name="author" content="Yash Darji" />
        
        {/* Open Graph */}
        <meta property="og:title" content="ConsultCraft | AI-Powered Systems for Coaches" />
        <meta property="og:description" content="Scale your coaching business with AI-based systems and automation. Done-for-you workflows, CRM dashboards, and more." />
        <meta property="og:url" content="https://consultcraft-site.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://consultcraft-site.vercel.app/og-home.png" />
        <meta property="og:site_name" content="ConsultCraft" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ConsultCraft | AI-Powered Systems for Coaches" />
        <meta name="twitter:description" content="Scale your coaching business with AI-based systems and automation." />
        <meta name="twitter:image" content="https://consultcraft-site.vercel.app/og-home.png" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://consultcraft-site.vercel.app/" />
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