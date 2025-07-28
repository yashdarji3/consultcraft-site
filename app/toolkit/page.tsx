'use client'

import { useState } from 'react'
import Navigation from '../../components/Navigation'
import Head from 'next/head'

export default function ToolkitPage() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setEmail('')
      alert('Thank you! Check your email for the toolkit.')
    }, 1500)
  }

  const toolkitFeatures = [
    {
      icon: '🤖',
      title: 'AI Content Generator Prompts',
      description: 'ChatGPT-based prompts to create engaging content consistently',
      color: 'from-blue-500 to-consultcraft-sky'
    },
    {
      icon: '📊',
      title: 'CRM & Lead Tracker',
      description: 'Notion-based system to track and nurture your leads',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '👥',
      title: 'Client Onboarding System',
      description: 'Streamlined process to welcome and onboard new clients',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '⚡',
      title: 'Automation Blueprint',
      description: 'Zapier + Notion + Email workflows to automate your business',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: '🎯',
      title: 'AI Funnel Flow',
      description: 'Bonus: Complete funnel automation with AI optimization',
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  return (
    <>
      <Head>
        <title>Free AI Toolkit for Coaches | ConsultCraft</title>
        <meta name="description" content="Download the same AI tools and dashboards we use to scale." />
        <meta name="keywords" content="free toolkit, AI automation, coaching tools, Notion dashboard, CRM, lead tracking" />
        <meta name="author" content="Yash Darji" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Free AI Toolkit for Coaches | ConsultCraft" />
        <meta property="og:description" content="Download the same AI tools and dashboards we use to scale." />
        <meta property="og:url" content="https://consultcraft-site.vercel.app/toolkit" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-toolkit.png" />
        <meta property="og:site_name" content="ConsultCraft" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free AI Toolkit for Coaches | ConsultCraft" />
        <meta name="twitter:description" content="Download the same AI tools and dashboards we use to scale." />
        <meta name="twitter:image" content="/og-toolkit.png" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://consultcraft-site.vercel.app/toolkit" />
      </Head>
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-white to-consultcraft-light-gray pt-24">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="heading-xl mb-6 animate-fade-in-up">
                The Only AI Toolkit Coaches Need to Scale Smarter
              </h1>
              <p className="text-body mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
                Automate your content, leads, and onboarding in one place — 100% free.
              </p>
              <button 
                className="btn-primary text-lg animate-bounce-subtle"
                onClick={() => document.getElementById('toolkit-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get the Free Toolkit
              </button>
            </div>
          </div>
        </section>

        {/* Toolkit Preview Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">
                What's Inside the ConsultCraft Toolkit?
              </h2>
              <p className="text-body max-w-2xl mx-auto">
                Everything you need to automate your coaching business and scale without burnout.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {toolkitFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="card hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-2xl mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-consultcraft-dark-blue mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-consultcraft-gray leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Capture Section */}
        <section className="section-padding bg-consultcraft-dark-blue text-white">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Scale Your Coaching Business?
              </h2>
              <p className="text-lg text-consultcraft-light-text mb-8">
                Join hundreds of coaches who've already streamlined their business with our AI toolkit.
              </p>
              
              <form 
                id="toolkit-form"
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 rounded-xl border border-gray-300 focus:border-consultcraft-sky focus:outline-none text-consultcraft-dark-blue"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Get Free Toolkit'}
                </button>
              </form>
              
              <p className="text-sm text-consultcraft-light-text mt-4">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-consultcraft-dark-blue text-white py-12">
          <div className="container-custom">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">ConsultCraft</h3>
              <p className="text-consultcraft-light-text mb-6">
                Smart Systems for Coaches & Consultants
              </p>
              <div className="flex justify-center space-x-6">
                <a href="https://instagram.com/consultcraft" className="text-consultcraft-light-text hover:text-consultcraft-sky transition-colors">
                  Instagram @consultcraft
                </a>
                <a href="https://linkedin.com/company/consultcraft" className="text-consultcraft-light-text hover:text-consultcraft-sky transition-colors">
                  LinkedIn
                </a>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-sm text-consultcraft-light-text">
                  © 2024 ConsultCraft. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
} 