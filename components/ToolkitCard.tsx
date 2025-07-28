import React from 'react'

interface ToolkitCardProps {
  icon: string
  title: string
  description: string
  color: string
  index: number
}

export default function ToolkitCard({ icon, title, description, color, index }: ToolkitCardProps) {
  return (
    <div 
      className="card hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center text-2xl mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-consultcraft-dark-blue mb-3">
        {title}
      </h3>
      <p className="text-consultcraft-gray leading-relaxed">
        {description}
      </p>
    </div>
  )
} 