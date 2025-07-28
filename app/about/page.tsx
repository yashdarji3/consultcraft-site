'use client'

import Navigation from '../../components/Navigation'
import Head from 'next/head'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About ConsultCraft | Yash Darji</title>
        <meta name="description" content="The story behind ConsultCraft and our founder." />
        <meta name="keywords" content="Yash Darji, ConsultCraft founder, coaching automation, AI systems, business automation" />
        <meta name="author" content="Yash Darji" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About ConsultCraft | Yash Darji" />
        <meta property="og:description" content="The story behind ConsultCraft and our founder." />
        <meta property="og:url" content="https://consultcraft-site.vercel.app/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-about.png" />
        <meta property="og:site_name" content="ConsultCraft" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About ConsultCraft | Yash Darji" />
        <meta name="twitter:description" content="The story behind ConsultCraft and our founder." />
        <meta name="twitter:image" content="/og-about.png" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://consultcraft-site.vercel.app/about" />
      </Head>
      
      <div className="min-h-screen bg-consultcraft-light-gray">
        <Navigation />

        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-white to-consultcraft-light-gray pt-24">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="heading-xl mb-6 animate-fade-in-up">
                About ConsultCraft
              </h1>
              <p className="text-body mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
                We help coaches and consultants scale their businesses with smart AI systems and automation.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="animate-fade-in-up">
                  <h2 className="heading-lg mb-6">
                    Meet Yash Darji
                  </h2>
                  <p className="text-body mb-6">
                    Hi, I'm Yash — a systems builder and automation specialist who helps coaches and consultants scale their businesses without the burnout.
                  </p>
                  <p className="text-body mb-6">
                    After working with dozens of successful coaches and seeing the same challenges repeat themselves, I created ConsultCraft to provide the exact systems and automations that actually work.
                  </p>
                  <p className="text-body">
                    My mission is simple: help coaches focus on what they do best (coaching) while AI and automation handle the rest.
                  </p>
                </div>
                <div className="animate-fade-in-up animation-delay-200">
                  <div className="bg-gradient-to-br from-consultcraft-sky to-blue-500 rounded-2xl p-8 text-white text-center">
                    <div className="text-6xl mb-4">👨‍💻</div>
                    <h3 className="text-xl font-semibold mb-2">Systems Builder</h3>
                    <p className="text-blue-100">
                      Specializing in Notion, Zapier, and AI automation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section-padding bg-consultcraft-light-gray">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="heading-lg mb-8 animate-fade-in-up">
                Our Mission
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="card animate-fade-in-up">
                  <div className="w-16 h-16 bg-gradient-to-r from-consultcraft-sky to-blue-500 rounded-xl flex items-center justify-center text-2xl mb-6 mx-auto">
                    🎯
                  </div>
                  <h3 className="text-xl font-semibold text-consultcraft-dark-blue mb-3">
                    Simplify
                  </h3>
                  <p className="text-consultcraft-gray">
                    Make complex business processes simple and automated
                  </p>
                </div>
                <div className="card animate-fade-in-up animation-delay-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-2xl mb-6 mx-auto">
                    ⚡
                  </div>
                  <h3 className="text-xl font-semibold text-consultcraft-dark-blue mb-3">
                    Scale
                  </h3>
                  <p className="text-consultcraft-gray">
                    Help coaches grow without proportional increase in workload
                  </p>
                </div>
                <div className="card animate-fade-in-up animation-delay-200">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-2xl mb-6 mx-auto">
                    🚀
                  </div>
                  <h3 className="text-xl font-semibold text-consultcraft-dark-blue mb-3">
                    Succeed
                  </h3>
                  <p className="text-consultcraft-gray">
                    Enable coaches to focus on their clients and results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-lg text-center mb-12 animate-fade-in-up">
                Our Values
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6 animate-fade-in-up">
                  <div className="w-12 h-12 bg-gradient-to-r from-consultcraft-sky to-blue-500 rounded-xl flex items-center justify-center text-xl text-white">
                    💡
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-consultcraft-dark-blue mb-2">
                      Innovation First
                    </h3>
                    <p className="text-consultcraft-gray">
                      We stay ahead of the curve with the latest AI and automation technologies to give our clients the best possible systems.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6 animate-fade-in-up animation-delay-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-xl text-white">
                    🤝
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-consultcraft-dark-blue mb-2">
                      Client Success
                    </h3>
                    <p className="text-consultcraft-gray">
                      Your success is our success. We're committed to building systems that actually work and scale with your business.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6 animate-fade-in-up animation-delay-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-xl text-white">
                    🎨
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-consultcraft-dark-blue mb-2">
                      Quality & Design
                    </h3>
                    <p className="text-consultcraft-gray">
                      We believe that great systems should not only work perfectly but also look beautiful and be intuitive to use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-consultcraft-dark-blue text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to work together?
              </h2>
              <p className="text-lg text-consultcraft-light-text mb-8">
                Let's discuss how we can automate your coaching business and help you scale smarter.
              </p>
              <a 
                href="/contact" 
                className="btn-primary"
              >
                Get Started Today
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