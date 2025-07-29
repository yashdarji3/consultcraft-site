import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Services() {
  return (
    <>
      <Head>
        <title>Services - ConsultCraft | AI-Powered Business Solutions</title>
        <meta name="description" content="Done-for-you automation, AI funnel setup, and client workflow builder services for coaches and consultants." />
        <meta property="og:title" content="Services - ConsultCraft | AI-Powered Business Solutions" />
        <meta property="og:description" content="Done-for-you automation, AI funnel setup, and client workflow builder services." />
        <meta property="og:url" content="https://consultcraft.com/services" />
        <meta property="og:image" content="https://consultcraft.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services - ConsultCraft | AI-Powered Business Solutions" />
        <meta name="twitter:description" content="Done-for-you automation, AI funnel setup, and client workflow builder services." />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 to-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Services
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Done-for-you solutions that transform your coaching business with AI-powered automation
              </p>
            </div>
          </section>

          {/* Services Overview */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  What We Deliver
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Complete systems that work while you focus on what you do best
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Service 1 */}
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Done-for-You Automation
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We build complete automation systems that handle your entire client journey from first contact to program completion.
                  </p>
                  <ul className="space-y-3 text-gray-600 mb-8">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-3">✓</span>
                      <span>Client onboarding automation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-3">✓</span>
                      <span>Payment processing & invoicing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-3">✓</span>
                      <span>Follow-up sequences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-3">✓</span>
                      <span>Content delivery systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-3">✓</span>
                      <span>Progress tracking & reporting</span>
                    </li>
                  </ul>
                  <div className="text-2xl font-bold text-primary-600 mb-4">
                    Starting at $2,997
                  </div>
                </div>

                {/* Service 2 */}
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    AI Client Onboarding Funnel
                  </h3>
                  <p className="text-gray-600 mb-6">
                    High-converting sales funnels powered by AI that attract, nurture, and convert prospects into paying clients.
                  </p>
                  <ul className="space-y-3 text-gray-600 mb-8">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-3">✓</span>
                      <span>Lead magnet creation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-3">✓</span>
                      <span>Email nurture sequences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-3">✓</span>
                      <span>Sales page optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-3">✓</span>
                      <span>AI-powered copywriting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-3">✓</span>
                      <span>Conversion tracking & analytics</span>
                    </li>
                  </ul>
                  <div className="text-2xl font-bold text-primary-600 mb-4">
                    Starting at $1,997
                  </div>
                </div>

                {/* Service 3 */}
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Client Workflow Dashboards
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Custom client portals and workflow systems that enhance the customer experience and streamline your operations.
                  </p>
                  <ul className="space-y-3 text-gray-600 mb-8">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-3">✓</span>
                      <span>Custom client dashboard</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-3">✓</span>
                      <span>Progress tracking tools</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-3">✓</span>
                      <span>Resource libraries</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-3">✓</span>
                      <span>Communication tools</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-3">✓</span>
                      <span>Goal setting & achievement tracking</span>
                    </li>
                  </ul>
                  <div className="text-2xl font-bold text-primary-600 mb-4">
                    Starting at $1,497
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Process
                </h2>
                <p className="text-xl text-gray-600">
                  How we work together to build your perfect system
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery</h3>
                  <p className="text-gray-600">
                    We analyze your current business processes and identify automation opportunities.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy</h3>
                  <p className="text-gray-600">
                    We design a custom automation strategy tailored to your specific needs and goals.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Build</h3>
                  <p className="text-gray-600">
                    We build and test your complete automation system with ongoing support.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                    4
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Launch</h3>
                  <p className="text-gray-600">
                    We launch your system and provide training to ensure you get maximum value.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-primary-600">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                Book a free strategy call to discuss how we can help you scale your coaching business with AI automation.
              </p>
              <a
                href="https://calendly.com/consultcraft/strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-lg font-medium rounded-lg text-primary-600 hover:bg-gray-100 transition-colors"
              >
                Book a Free Call
              </a>
              <p className="text-primary-100 mt-4 text-sm">
                No sales pitch - just a conversation about your business goals
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
} 