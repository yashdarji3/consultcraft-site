'use client'

import { useState } from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Head from 'next/head'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ fullName: '', email: '', message: '' })
      alert('Thank you! We\'ll get back to you within 24 hours.')
    }, 1500)
  }

  return (
    <>
      <Head>
        <title>Contact Us | ConsultCraft</title>
        <meta name="description" content="Reach out to ConsultCraft to book a consultation or ask questions about AI automation for coaches." />
        <meta name="keywords" content="contact ConsultCraft, consultation booking, AI automation consultation, coaching business help" />
        <meta name="author" content="Yash Darji" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact ConsultCraft" />
        <meta property="og:description" content="Reach out to ConsultCraft to book a consultation or ask questions about AI automation for coaches." />
        <meta property="og:url" content="https://consultcraft-site.vercel.app/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://consultcraft-site.vercel.app/og-contact.png" />
        <meta property="og:site_name" content="ConsultCraft" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact ConsultCraft" />
        <meta name="twitter:description" content="Reach out to ConsultCraft to book a consultation or ask questions about AI automation for coaches." />
        <meta name="twitter:image" content="https://consultcraft-site.vercel.app/og-contact.png" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://consultcraft-site.vercel.app/contact" />
      </Head>
      
      <div className="min-h-screen bg-consultcraft-light-gray">
        <Navigation />

        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-white to-consultcraft-light-gray pt-24">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="heading-xl mb-6 animate-fade-in-up">
                Let's Build Smarter Systems Together
              </h1>
              <p className="text-body mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
                Have questions or ready to get started? Reach out anytime.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="section-padding">
          <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card animate-fade-in-up">
              <h2 className="heading-lg mb-6">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-consultcraft-dark-blue mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-consultcraft-sky focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-consultcraft-dark-blue mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-consultcraft-sky focus:outline-none transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-consultcraft-dark-blue mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-consultcraft-sky focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your coaching business and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Direct Contact Info */}
            <div className="card animate-fade-in-up animation-delay-100">
              <h2 className="heading-lg mb-6">
                Get in touch directly
              </h2>
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-consultcraft-sky to-blue-500 rounded-xl flex items-center justify-center text-white text-xl">
                    📧
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-consultcraft-dark-blue mb-2">
                      Email Us
                    </h3>
                    <p className="text-consultcraft-gray">
                      contact@consultcraft.com
                    </p>
                    <p className="text-sm text-consultcraft-light-text">
                      We aim to respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-xl">
                    📸
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-consultcraft-dark-blue mb-2">
                      Instagram
                    </h3>
                    <p className="text-consultcraft-gray">
                      @consultcraft
                    </p>
                    <p className="text-sm text-consultcraft-light-text">
                      Follow us for updates and tips
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-xl">
                    🌍
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-consultcraft-dark-blue mb-2">
                      Location
                    </h3>
                    <p className="text-consultcraft-gray">
                      Remote (Serving Globally)
                    </p>
                    <p className="text-sm text-consultcraft-light-text">
                      We work with coaches worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section-padding bg-consultcraft-dark-blue text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Want to get started faster?
              </h2>
              <p className="text-lg text-consultcraft-light-text mb-8">
                Book a free consultation call and let's discuss how we can automate your coaching business.
              </p>

              <a
                href="/services#consultation-form"
                className="btn-primary inline-block"
              >
                Book a Free Consultation
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
} 