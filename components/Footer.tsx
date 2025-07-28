import React from 'react'

export default function Footer() {
  return (
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
            <p className="text-sm text-gray-400 text-center">
              © 2025 ConsultCraft. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 