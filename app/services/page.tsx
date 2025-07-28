'use client'

import Navigation from '../../components/Navigation'
import Head from 'next/head'

export default function ServicesPage() {
  const services = [
    {
      icon: '🧠',
      title: 'AI Automation Setup',
      description: 'Complete automation of your lead capture and follow-up processes',
      deliverables: [
        'Lead Capture Forms',
        'CRM automations (Notion, Airtable, Zapier)',
        'DM autoresponders',
        'Automated email flows'
      ]
    },
    {
      icon: '📋',
      title: 'Notion Dashboard Customization',
      description: 'Personalized CRM and workflow systems built for coaches',
      deliverables: [
        'Personalized CRM for coaches',
        'Client onboarding flow',
        'Weekly planner & content tracker',
        'Custom automation triggers'
      ]
    },
    {
      icon: '🔁',
      title: 'Monthly Support & Optimization',
      description: 'Ongoing support to keep your systems running smoothly',
      deliverables: [
        '1-on-1 consulting calls',
        'Workflow updates',
        'Priority support',
        'Performance optimization'
      ]
    }
  ]

  const features = [
    {
      icon: '⏰',
      title: 'Save 10+ Hours Weekly',
      description: 'Automate repetitive tasks and focus on what matters'
    },
    {
      icon: '🎨',
      title: 'Beautiful, Branded Flows',
      description: 'Professional Notion & Zapier integrations that match your brand'
    },
    {
      icon: '🎯',
      title: 'Coaching Business Expertise',
      description: 'Deep understanding of coaching workflows and pain points'
    },
    {
      icon: '📈',
      title: 'Scalable Solutions',
      description: 'Easy to maintain and grow with your business'
    }
  ]

  return (
    <>
      <Head>
        <title>Our Services | ConsultCraft</title>
        <meta name="description" content="Done-for-you automation and CRM setups for coaches." />
        <meta name="keywords" content="AI automation services, coaching business automation, Notion CRM, Zapier automation, client onboarding" />
        <meta name="author" content="Yash Darji" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Our Services | ConsultCraft" />
        <meta property="og:description" content="Done-for-you automation and CRM setups for coaches." />
        <meta property="og:url" content="https://consultcraft-site.vercel.app/services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-services.png" />
        <meta property="og:site_name" content="ConsultCraft" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services | ConsultCraft" />
        <meta name="twitter:description" content="Done-for-you automation and CRM setups for coaches." />
        <meta name="twitter:image" content="/og-services.png" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://consultcraft-site.vercel.app/services" />
      </Head>
      
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
              <a 
                href="/contact" 
                className="btn-primary text-lg animate-fade-in-up animation-delay-300"
              >
                Book a Free Consultation
              </a>
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
                Everything you need to automate and scale your coaching business.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="card hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-consultcraft-sky to-blue-500 rounded-xl flex items-center justify-center text-2xl mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-consultcraft-dark-blue mb-3">
                    {service.title}
                  </h3>
                  <p className="text-consultcraft-gray mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-consultcraft-sky mt-1">✓</span>
                        <span className="text-consultcraft-gray text-sm">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
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
                We understand the unique challenges coaches face and build solutions that actually work.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-consultcraft-sky to-blue-500 rounded-xl flex items-center justify-center text-xl text-white">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-consultcraft-dark-blue mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-consultcraft-gray">
                      {feature.description}
                    </p>
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
                <a 
                  href="/contact" 
                  className="btn-primary"
                >
                  Book a Free Consultation
                </a>
                <a 
                  href="/contact" 
                  className="bg-white text-consultcraft-dark-blue font-semibold px-8 py-4 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                >
                  Contact Us
                </a>
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