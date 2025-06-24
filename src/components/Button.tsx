import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'secondary-white'
  size?: 'default' | 'large'
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
  href?: string
  target?: string
  rel?: string
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'default',
  onClick, 
  disabled = false, 
  type = 'button',
  className = '',
  href,
  target,
  rel
}: ButtonProps) {
  const baseStyles = 'font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-block text-center'
  
  const sizeStyles = {
    default: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  }
  
  const variantStyles = {
    primary: 'bg-nexus-yellow text-nexus-dark hover:bg-yellow-500 focus:ring-nexus-yellow',
    secondary: 'border-2 border-nexus-dark text-nexus-dark bg-transparent hover:bg-nexus-dark hover:text-white focus:ring-nexus-dark',
    'secondary-white': 'border-2 border-white text-white bg-transparent hover:bg-nexus-yellow hover:text-nexus-dark hover:border-nexus-yellow focus:ring-nexus-yellow'
  }
  
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : ''
  
  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles} ${className}`.trim()
  
  // If href is provided, render as anchor tag
  if (href) {
    return (
      <a 
        href={href}
        target={target}
        rel={rel}
        className={combinedClassName}
      >
        {children}
      </a>
    )
  }
  
  // Otherwise render as button
  return (
    <button 
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {children}
    </button>
  )
} 