import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Head>
        <title>About - ConsultCraft | Yash Darji</title>
        <meta name="description" content="Learn about Yash Darji and the mission behind ConsultCraft - helping coaches and consultants grow their business with AI-powered systems." />
        <meta property="og:title" content="About - ConsultCraft | Yash Darji" />
        <meta property="og:description" content="Learn about Yash Darji and the mission behind ConsultCraft." />
        <meta property="og:url" content="https://consultcraft.com/about" />
        <meta property="og:image" content="https://consultcraft.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About - ConsultCraft | Yash Darji" />
        <meta name="twitter:description" content="Learn about Yash Darji and the mission behind ConsultCraft." />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 to-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About ConsultCraft
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Helping coaches and consultants build scalable, AI-powered businesses that work while they sleep.
              </p>
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Our Mission
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    At ConsultCraft, we believe that every coach and consultant deserves to have a business that scales beyond their personal capacity. 
                    Our mission is to democratize access to enterprise-level automation and AI systems.
                  </p>
                  <p className="text-lg text-gray-600 mb-6">
                    We've seen too many brilliant professionals burn out trying to do everything themselves. 
                    That's why we've made it our purpose to build done-for-you systems that handle the heavy lifting.
                  </p>
                  <p className="text-lg text-gray-600">
                    Whether you're just starting out or ready to scale to 7 figures, we provide the tools, 
                    systems, and support you need to build a coaching empire.
                  </p>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Believe</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-3">✓</span>
                      <span>Every coach deserves to impact more lives without sacrificing their own well-being</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-3">✓</span>
                      <span>AI should enhance human connection, not replace it</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-3">✓</span>
                      <span>Scalable systems are the key to sustainable growth</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-3">✓</span>
                      <span>Done-for-you solutions free up time for what matters most</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* About Yash Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Meet Yash Darji
                </h2>
                <p className="text-xl text-gray-600">
                  Founder & AI Systems Architect
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-primary-600">Y</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                    Yash Darji
                  </h3>
                  <p className="text-gray-600 text-center mb-6">
                    AI enthusiast, business systems architect, and passionate about helping coaches scale their impact.
                  </p>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center">
                      <span className="font-medium w-24">Experience:</span>
                      <span>5+ years in AI & automation</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium w-24">Specialty:</span>
                      <span>Business process automation</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium w-24">Mission:</span>
                      <span>Democratizing AI for coaches</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    The Journey
                  </h3>
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-4">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">The Problem</h4>
                        <p className="text-gray-600">
                          Saw coaches and consultants struggling with manual processes, limited scalability, and burnout from doing everything themselves.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-4">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">The Solution</h4>
                        <p className="text-gray-600">
                          Developed AI-powered systems and automation workflows that could handle client management, content creation, and business processes.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-4">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">The Impact</h4>
                        <p className="text-gray-600">
                          Helped dozens of coaches and consultants scale their businesses while reducing their workload and increasing their income.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-4">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">The Vision</h4>
                        <p className="text-gray-600">
                          Building ConsultCraft to help thousands more coaches and consultants leverage AI to build sustainable, scalable businesses.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Values
                </h2>
                <p className="text-xl text-gray-600">
                  The principles that guide everything we do
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center p-8 rounded-xl bg-gray-50">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Client-First</h3>
                  <p className="text-gray-600">
                    Every system we build is designed with the end user in mind. We prioritize user experience and results.
                  </p>
                </div>

                <div className="text-center p-8 rounded-xl bg-gray-50">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
                  <p className="text-gray-600">
                    We stay at the forefront of AI and automation technology to deliver cutting-edge solutions.
                  </p>
                </div>

                <div className="text-center p-8 rounded-xl bg-gray-50">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality</h3>
                  <p className="text-gray-600">
                    We don't just build systems - we build systems that work reliably and deliver measurable results.
                  </p>
                </div>

                <div className="text-center p-8 rounded-xl bg-gray-50">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Community</h3>
                  <p className="text-gray-600">
                    We believe in building a community of coaches and consultants who support and learn from each other.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-primary-600">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                Let's discuss how we can help you build a scalable, AI-powered coaching business.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-lg font-medium rounded-lg text-primary-600 hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
} 