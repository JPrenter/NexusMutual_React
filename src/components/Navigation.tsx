'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

interface NavigationProps {
  background?: 'transparent' | 'blue'
}

export default function Navigation({ background = 'transparent' }: NavigationProps) {
  const [isLearnOpen, setIsLearnOpen] = useState(false)

  const navClasses = background === 'blue' 
    ? "relative bg-nexus-dark" 
    : "absolute top-0 left-0 right-0 z-50 bg-transparent"

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/images/logos/nexus-mutual-logo-white.svg"
                  alt="Nexus Mutual"
                  width={120}
                  height={40}
                  className="h-10 w-auto cursor-pointer"
                />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/cover-products" className="text-white hover:text-nexus-green px-3 py-2 text-lg font-medium transition-colors">
                Products
              </a>
              <a href="/claims" className="text-white hover:text-nexus-green px-3 py-2 text-lg font-medium transition-colors">
                Claims
              </a>
              <div className="relative">
                <button
                  onClick={() => setIsLearnOpen(!isLearnOpen)}
                  className="text-white hover:text-nexus-green px-3 py-2 text-lg font-medium flex items-center transition-colors"
                >
                  Learn
                  <svg
                    className={`ml-1 h-4 w-4 transform transition-transform ${
                      isLearnOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isLearnOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <a href="https://docs.nexusmutual.io/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100">
                      Docs
                    </a>
                    <a href="https://github.com/NexusMutual" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100">
                      Developers
                    </a>
                  </div>
                )}
              </div>
              <Link href="/blog" className="text-white hover:text-nexus-green px-3 py-2 text-lg font-medium transition-colors">
                Blog
              </Link>
              <a href="/contact" className="text-white hover:text-nexus-green px-3 py-2 text-lg font-medium transition-colors">
                Contact us
              </a>
            </div>
          </div>

          {/* Open App Button */}
          <div className="hidden md:block">
            <Button 
              variant="secondary-white"
              href="https://app.nexusmutual.io/cover"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open App
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-nexus-green">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 