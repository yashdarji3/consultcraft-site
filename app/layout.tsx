import React from 'react'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Toolkit - ConsultCraft',
  description: 'The Only AI Toolkit Coaches Need to Scale Smarter. Automate your content, leads, and onboarding in one place — 100% free.',
  keywords: 'AI toolkit, coaches, automation, content generation, lead tracking, client onboarding',
  authors: [{ name: 'Yash Darji' }],
  openGraph: {
    title: 'AI Toolkit - ConsultCraft',
    description: 'The Only AI Toolkit Coaches Need to Scale Smarter',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-consultcraft-light-gray">
        {children}
      </body>
    </html>
  )
} 