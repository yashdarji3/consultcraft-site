import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>ConsultCraft - Build Your Coaching Empire with AI</title>
        <meta name="description" content="Done-for-you systems to automate and scale your coaching business. AI-powered solutions for coaches and consultants." />
        <meta property="og:title" content="ConsultCraft - Build Your Coaching Empire with AI" />
        <meta property="og:description" content="Done-for-you systems to automate and scale your coaching business." />
        <meta property="og:url" content="https://consultcraft.com" />
        <meta property="og:image" content="https://consultcraft.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ConsultCraft - Build Your Coaching Empire with AI" />
        <meta name="twitter:description" content="Done-for-you systems to automate and scale your coaching business." />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary-50 to-white py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  Build Your Coaching Empire with{' '}
                  <span className="text-primary-600">AI</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Done-for-you systems to automate and scale your business
                </p>
                <Link
                  href="/toolkit"
                  className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Get Free Toolkit
                </Link>
              </div>
            </div>
          </section>

          {/* What We Do Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  What We Do
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  We help you build scalable systems that work while you sleep
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Systems</h3>
                  <p className="text-gray-600">
                    Custom AI-powered workflows that handle client onboarding, follow-ups, and content creation automatically.
                  </p>
                </div>

                <div className="text-center p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Funnels</h3>
                  <p className="text-gray-600">
                    High-converting sales funnels that attract, nurture, and convert prospects into paying clients.
                  </p>
                </div>

                <div className="text-center p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Client Dashboards</h3>
                  <p className="text-gray-600">
                    Professional client portals that enhance the customer experience and reduce support requests.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Who It's For Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Who It's For
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Perfect for ambitious professionals ready to scale their impact
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Coaches</h3>
                  <p className="text-gray-600 mb-4">
                    Life coaches, business coaches, and health coaches who want to serve more clients without burning out.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Automated client onboarding</li>
                    <li>• Progress tracking systems</li>
                    <li>• Content creation workflows</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Consultants</h3>
                  <p className="text-gray-600 mb-4">
                    Business consultants and advisors looking to systematize their expertise and scale their practice.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Lead generation funnels</li>
                    <li>• Proposal automation</li>
                    <li>• Client management systems</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Solopreneurs</h3>
                  <p className="text-gray-600 mb-4">
                    Independent professionals who want to build a business that works without them being tied to it.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Time-saving automations</li>
                    <li>• Revenue optimization</li>
                    <li>• Scalable processes</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  What Our Clients Say
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary-600 font-semibold">S</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                      <p className="text-sm text-gray-600">Life Coach</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    "ConsultCraft transformed my coaching business. I went from working 60 hours a week to 20, while doubling my income."
                  </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary-600 font-semibold">M</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Mike Chen</h4>
                      <p className="text-sm text-gray-600">Business Consultant</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    "The AI systems they built for me handle 80% of my client interactions. My clients love the automated experience."
                  </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary-600 font-semibold">L</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Lisa Rodriguez</h4>
                      <p className="text-sm text-gray-600">Health Coach</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    "I was drowning in admin work. Now my business runs like clockwork, and I can focus on what I love - helping people."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20 bg-primary-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Scale Your Business?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Start with our free toolkit and see how AI can transform your coaching business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/toolkit"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-primary-600 transition-colors"
                >
                  Download Free Toolkit
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-lg font-medium rounded-lg text-primary-600 hover:bg-gray-100 transition-colors"
                >
                  Book a Call
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
} 