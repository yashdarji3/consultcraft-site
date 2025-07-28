'use client'

import Navigation from '../../components/Navigation'

export default function AboutPage() {
  return (
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">
                Built by Yash Darji
              </h2>
              <p className="text-body mb-6">
                Systems builder for solo brands who want to scale without the chaos. I've helped dozens of coaches and consultants automate their way to freedom.
              </p>
              <p className="text-body mb-6">
                After working with hundreds of coaches and consultants, I realized that most were spending way too much time on manual tasks instead of focusing on what they do best — helping their clients.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-consultcraft-sky text-xl">✓</span>
                  <span className="text-consultcraft-gray">5+ years building systems for coaches</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-consultcraft-sky text-xl">✓</span>
                  <span className="text-consultcraft-gray">50+ successful automation projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-consultcraft-sky text-xl">✓</span>
                  <span className="text-consultcraft-gray">Deep expertise in Notion, Zapier, and AI tools</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 bg-gradient-to-r from-consultcraft-sky to-blue-500 rounded-full flex items-center justify-center text-white text-6xl font-bold mx-auto mb-6">
                YD
              </div>
              <h3 className="text-2xl font-semibold text-consultcraft-dark-blue mb-2">
                Yash Darji
              </h3>
              <p className="text-consultcraft-gray">
                Systems Builder & Automation Expert
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-consultcraft-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg mb-6">
              Our Mission
            </h2>
            <p className="text-body mb-8">
              To give coaches and consultants the tools they need to focus on what they do best — helping their clients — while we handle the systems.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-2xl p-8 shadow-soft">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-consultcraft-dark-blue mb-3">
                  Focus on Results
                </h3>
                <p className="text-consultcraft-gray">
                  Let you focus on coaching while we handle the technical backend.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-soft">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-consultcraft-dark-blue mb-3">
                  Scale Efficiently
                </h3>
                <p className="text-consultcraft-gray">
                  Build systems that grow with your business, not against it.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-soft">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-consultcraft-dark-blue mb-3">
                  AI-Powered
                </h3>
                <p className="text-consultcraft-gray">
                  Leverage the latest AI tools to automate repetitive tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Our Values
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="text-2xl">💡</div>
              <div>
                <h3 className="text-lg font-semibold text-consultcraft-dark-blue mb-2">
                  Simplicity First
                </h3>
                <p className="text-consultcraft-gray">
                  Complex systems that are simple to use. We believe in powerful tools that don't require a manual.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">🎨</div>
              <div>
                <h3 className="text-lg font-semibold text-consultcraft-dark-blue mb-2">
                  Beautiful Design
                </h3>
                <p className="text-consultcraft-gray">
                  Systems that look as good as they work. Your brand deserves beautiful automation.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">🚀</div>
              <div>
                <h3 className="text-lg font-semibold text-consultcraft-dark-blue mb-2">
                  Results-Driven
                </h3>
                <p className="text-consultcraft-gray">
                  Every system we build is designed to save time and increase revenue.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">🤝</div>
              <div>
                <h3 className="text-lg font-semibold text-consultcraft-dark-blue mb-2">
                  Partnership
                </h3>
                <p className="text-consultcraft-gray">
                  We're not just vendors, we're partners in your success journey.
                </p>
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
              Ready to Work Together?
            </h2>
            <p className="text-lg text-consultcraft-light-text mb-8">
              Let's discuss how we can help you scale your coaching business with smart systems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/services" 
                className="btn-primary"
              >
                View Our Services
              </a>
              <a 
                href="/contact" 
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-consultcraft-dark-blue transition-all duration-300"
              >
                Get in Touch
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