import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Toolkit() {
  return (
    <>
      <Head>
        <title>Free AI Toolkit - ConsultCraft | Download Free Tools & Templates</title>
        <meta name="description" content="Download our free AI toolkit with templates, checklists, and tools to help you automate your coaching business." />
        <meta property="og:title" content="Free AI Toolkit - ConsultCraft | Download Free Tools & Templates" />
        <meta property="og:description" content="Download our free AI toolkit with templates, checklists, and tools." />
        <meta property="og:url" content="https://consultcraft.com/toolkit" />
        <meta property="og:image" content="https://consultcraft.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free AI Toolkit - ConsultCraft | Download Free Tools & Templates" />
        <meta name="twitter:description" content="Download our free AI toolkit with templates, checklists, and tools." />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 to-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Download Our Free AI Toolkit
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get instant access to templates, checklists, and tools that will help you automate and scale your coaching business
              </p>
            </div>
          </section>

          {/* Toolkit Overview */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  What's Inside the Toolkit
                </h2>
                <p className="text-xl text-gray-600">
                  Everything you need to start automating your coaching business today
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="bg-gray-50 p-8 rounded-xl">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Templates & Checklists</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Client onboarding checklist</li>
                    <li>• Email sequence templates</li>
                    <li>• Sales funnel blueprint</li>
                    <li>• Content calendar template</li>
                    <li>• Goal setting worksheet</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Tools & Prompts</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• ChatGPT prompt library</li>
                    <li>• Content generation tools</li>
                    <li>• Email subject line generator</li>
                    <li>• Social media post creator</li>
                    <li>• Client feedback analyzer</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary-50 p-8 rounded-xl text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Value: $497
                </h3>
                <p className="text-gray-600 mb-6">
                  This toolkit contains the same templates and tools we use with our premium clients. 
                  Download it completely free and start automating your business today.
                </p>
              </div>
            </div>
          </section>

          {/* Download Form */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Get Your Free Toolkit
                  </h2>
                  <p className="text-gray-600">
                    Enter your details below to get instant access to the AI toolkit
                  </p>
                </div>

                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Type
                    </label>
                    <select
                      id="business"
                      name="business"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select your business type</option>
                      <option value="life-coach">Life Coach</option>
                      <option value="business-coach">Business Coach</option>
                      <option value="health-coach">Health Coach</option>
                      <option value="consultant">Consultant</option>
                      <option value="solopreneur">Solopreneur</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                      I'd like to receive updates about new tools, tips, and strategies for growing my coaching business
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-lg"
                  >
                    Download Toolkit
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">
                    By downloading, you agree to our{' '}
                    <a href="#" className="text-primary-600 hover:text-primary-700">
                      Privacy Policy
                    </a>
                    {' '}and{' '}
                    <a href="#" className="text-primary-600 hover:text-primary-700">
                      Terms of Service
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What You'll Get */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  What You'll Get
                </h2>
                <p className="text-xl text-gray-600">
                  Detailed breakdown of everything included in your free toolkit
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Client Onboarding Checklist</h3>
                  <p className="text-gray-600 text-sm">
                    A comprehensive 15-step checklist to ensure every new client gets the best possible start.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Email Sequence Templates</h3>
                  <p className="text-gray-600 text-sm">
                    5 proven email sequences for different stages of your client journey.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Sales Funnel Blueprint</h3>
                  <p className="text-gray-600 text-sm">
                    Step-by-step guide to building a high-converting sales funnel for your coaching business.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Content Calendar Template</h3>
                  <p className="text-gray-600 text-sm">
                    Monthly content planning template with AI-powered content ideas and scheduling.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">ChatGPT Prompt Library</h3>
                  <p className="text-gray-600 text-sm">
                    50+ proven prompts for content creation, client communication, and business growth.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Goal Setting Worksheet</h3>
                  <p className="text-gray-600 text-sm">
                    Strategic planning worksheet to help you set and achieve your business goals.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  What Others Are Saying
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-gray-600 mb-4">
                    "The email templates alone saved me hours of work. The AI prompts helped me create content I never thought I could write."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary-600 font-semibold text-sm">J</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Jennifer Smith</p>
                      <p className="text-sm text-gray-600">Life Coach</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-gray-600 mb-4">
                    "This toolkit gave me the structure I needed to finally get organized. The funnel blueprint was a game-changer for my business."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary-600 font-semibold text-sm">M</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Michael Brown</p>
                      <p className="text-sm text-gray-600">Business Consultant</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 bg-primary-600">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                Download your free AI toolkit now and start automating your coaching business today.
              </p>
              <a
                href="#download-form"
                className="inline-flex items-center px-8 py-4 bg-white text-lg font-medium rounded-lg text-primary-600 hover:bg-gray-100 transition-colors"
              >
                Download Now - It's Free
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
} 