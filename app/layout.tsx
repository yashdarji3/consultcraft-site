import React from 'react'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ConsultCraft | AI-Powered Systems for Coaches',
  description: 'Scale your coaching business with AI-based systems and automation.',
  keywords: 'AI automation, coaching business, CRM, Notion, Zapier, systems, automation',
  authors: [{ name: 'Yash Darji' }],
  openGraph: {
    title: 'ConsultCraft | AI-Powered Systems for Coaches',
    description: 'Scale your coaching business with AI-based systems and automation.',
    type: 'website',
    url: 'https://consultcraft-site.vercel.app/',
    siteName: 'ConsultCraft',
  },
  icons: {
    icon: '/favicon.ico',
  },
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-consultcraft-light-gray">
        {children}
      </body>
    </html>
  )
} 