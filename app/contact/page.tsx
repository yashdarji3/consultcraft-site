'use client'

import { useState } from 'react'
import Navigation from '../../components/Navigation'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ fullName: '', email: '', message: '' })
      alert('Thank you! We\'ll get back to you within 24 hours.')
    }, 1500)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
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

      {/* Contact Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
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
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Direct Contact Info */}
            <div>
              <h2 className="heading-lg mb-6">
                Get in touch directly
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-consultcraft-sky to-blue-500 rounded-xl flex items-center justify-center text-white text-xl">
                    📧
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-consultcraft-dark-blue mb-2">
                      Email
                    </h3>
                    <p className="text-consultcraft-gray">
                      contact@consultcraft.com
                    </p>
                    <p className="text-sm text-consultcraft-light-text">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white text-xl">
                    📱
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

              {/* Quick Links */}
              <div className="mt-12 p-6 bg-consultcraft-light-gray rounded-2xl">
                <h3 className="text-lg font-semibold text-consultcraft-dark-blue mb-4">
                  Quick Links
                </h3>
                <div className="space-y-3">
                  <a 
                    href="/toolkit" 
                    className="block text-consultcraft-gray hover:text-consultcraft-sky transition-colors"
                  >
                    → Get the Free AI Toolkit
                  </a>
                  <a 
                    href="/services" 
                    className="block text-consultcraft-gray hover:text-consultcraft-sky transition-colors"
                  >
                    → View Our Services
                  </a>
                  <a 
                    href="/about" 
                    className="block text-consultcraft-gray hover:text-consultcraft-sky transition-colors"
                  >
                    → Learn About Us
                  </a>
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
              <a href="mailto:contact@consultcraft.com" className="text-consultcraft-light-text hover:text-consultcraft-sky transition-colors">
                contact@consultcraft.com
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
  )
} 