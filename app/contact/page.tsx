'use client'

import { useState } from 'react'
import Navigation from '../../components/Navigation'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
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
              Get in Touch
            </h1>
            <p className="text-body mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Ready to scale your coaching business? Let's talk about how we can help.
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-consultcraft-dark-blue mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-consultcraft-sky focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-consultcraft-dark-blue mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-consultcraft-sky focus:outline-none"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-consultcraft-dark-blue mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-consultcraft-sky focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-consultcraft-dark-blue mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-consultcraft-sky focus:outline-none"
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

            {/* Contact Information */}
            <div>
              <h2 className="heading-lg mb-6">
                Contact Information
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
                      hello@consultcraft.com
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
                      Social Media
                    </h3>
                    <p className="text-consultcraft-gray mb-2">
                      Instagram: @consultcraft
                    </p>
                    <p className="text-consultcraft-gray">
                      LinkedIn: ConsultCraft
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-xl">
                    ⏰
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-consultcraft-dark-blue mb-2">
                      Response Time
                    </h3>
                    <p className="text-consultcraft-gray">
                      Within 24 hours during business days
                    </p>
                    <p className="text-sm text-consultcraft-light-text">
                      Monday - Friday, 9 AM - 6 PM EST
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
              <a href="mailto:hello@consultcraft.com" className="text-consultcraft-light-text hover:text-consultcraft-sky transition-colors">
                hello@consultcraft.com
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