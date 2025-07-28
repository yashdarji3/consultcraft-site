'use client'

import { useState } from 'react'
import Navigation from '../../components/Navigation'

export default function ServicesPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleConsultationSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Thank you! We\'ll contact you within 24 hours to schedule your consultation.')
    }, 1500)
  }

  const services = [
    {
      icon: '🧠',
      title: 'AI Automation Setup',
      description: 'Complete automation of your lead generation and client management processes.',
      deliverables: [
        'Lead Capture Forms',
        'CRM automations (Notion, Airtable, Zapier)',
        'DM autoresponders',
        'Automated email flows'
      ],
      color: 'from-blue-500 to-consultcraft-sky'
    },
    {
      icon: '📋',
      title: 'Notion Dashboard Customization',
      description: 'Personalized systems that match your coaching business perfectly.',
      deliverables: [
        'Personalized CRM for coaches',
        'Client onboarding flow',
        'Weekly planner & content tracker'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🔁',
      title: 'Monthly Support & Optimization',
      description: 'Ongoing support to keep your systems running smoothly and efficiently.',
      deliverables: [
        '1-on-1 consulting calls',
        'Workflow updates',
        'Priority support'
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const whyWorkWithUs = [
    {
      icon: '⏰',
      title: 'Save 10+ hours weekly',
      description: 'Automated systems that free up your time for what matters most'
    },
    {
      icon: '🎨',
      title: 'Beautiful, branded flows',
      description: 'Notion & Zapier setups that match your brand perfectly'
    },
    {
      icon: '🎯',
      title: 'Deep coaching expertise',
      description: 'Built specifically for coaching business needs and workflows'
    },
    {
      icon: '📈',
      title: 'Scalable solutions',
      description: 'Easy to maintain and grow with your business'
    }
  ]

  return (
    <div className="min-h-screen bg-consultcraft-light-gray">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-white to-consultcraft-light-gray pt-24">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6 animate-fade-in-up">
              Done-for-You Systems to Scale Your Coaching Business
            </h1>
            <p className="text-body mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Let AI run your backend — while you focus on coaching.
            </p>
            <button 
              className="btn-primary text-lg animate-bounce-subtle"
              onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book a Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Our Services
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              Comprehensive solutions to automate and scale your coaching business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="card hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-consultcraft-dark-blue mb-4">
                  {service.title}
                </h3>
                <p className="text-consultcraft-gray mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-consultcraft-dark-blue mb-3">
                    What you get:
                  </h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-consultcraft-gray">
                        <span className="text-consultcraft-sky mt-1">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="section-padding bg-consultcraft-light-gray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Why Work With Us
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              We understand coaching businesses because we've built systems for dozens of successful coaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyWorkWithUs.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 hover:shadow-medium transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-consultcraft-dark-blue mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-consultcraft-gray leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-consultcraft-dark-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to simplify your coaching business?
            </h2>
            <p className="text-lg text-consultcraft-light-text mb-8">
              Let us handle the tech so you can focus on results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="btn-primary"
                onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book a Free Consultation
              </button>
              <a 
                href="/contact" 
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-consultcraft-dark-blue transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation-form" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="heading-lg mb-4">
                Book Your Free Consultation
              </h2>
              <p className="text-body">
                Let's discuss how we can automate your coaching business and save you 10+ hours weekly.
              </p>
            </div>
            
            <form onSubmit={handleConsultationSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-consultcraft-dark-blue mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-consultcraft-sky focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-consultcraft-dark-blue mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-consultcraft-sky focus:outline-none"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-consultcraft-dark-blue mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-consultcraft-sky focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-consultcraft-dark-blue mb-2">
                  What's your biggest challenge with your coaching business?
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-consultcraft-sky focus:outline-none"
                  placeholder="Tell us about your current setup and what you'd like to automate..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Book Free Consultation'}
              </button>
            </form>
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