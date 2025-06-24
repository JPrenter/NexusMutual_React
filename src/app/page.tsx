'use client'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Button from '../components/Button'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  
  const textOptions = [
    'smart contract hacks',
    'custody failure', 
    'slashing',
    'depeg',
    '(almost anything)'
  ]

  useEffect(() => {
    const currentFullText = textOptions[currentTextIndex]
    let currentCharIndex = 0
    setDisplayText('')
    setIsTyping(true)

    // Typing effect
    const typeInterval = setInterval(() => {
      if (currentCharIndex <= currentFullText.length) {
        setDisplayText(currentFullText.slice(0, currentCharIndex))
        currentCharIndex++
      } else {
        clearInterval(typeInterval)
        setIsTyping(false)
        
        // Wait 2 seconds before starting next phrase
        setTimeout(() => {
          setCurrentTextIndex((prevIndex) => 
            prevIndex === textOptions.length - 1 ? 0 : prevIndex + 1
          )
        }, 2000)
      }
    }, 100) // Type each character every 100ms

    return () => clearInterval(typeInterval)
  }, [currentTextIndex, textOptions.length])

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-nexus-dark text-white min-h-screen flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="text-left mb-12">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                The <span className="text-nexus-green">First</span> Crypto<br />
                Insurance Alternative
              </h1>
              <p className="text-nexus-green text-xl mb-0 italic">
                Covering crypto since 2019
              </p>
            </div>
          </div>
          
          {/* Center the CTA content to full page width */}
          <div className="text-center w-full flex justify-center">
            <div className="text-2xl mb-12 max-w-2xl">
              Protect your crypto against{' '}
              <span className="text-nexus-green font-semibold">
                {displayText}
                <span className={`inline-block w-0.5 h-6 bg-nexus-green ml-1 ${isTyping ? 'animate-pulse' : 'opacity-0'}`}></span>
              </span>
            </div>
          </div>
          <div className="text-center w-full">
            <Link href="/contact">
              <Button variant="primary" size="large">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-60">
          <div className="flex flex-col items-center">
            <span className="text-base mb-2">Scroll down</span>
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-nexus-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            From individuals to institutions, <span className="text-nexus-green">we&apos;ve covered it all</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">$5.75B+</div>
              <div className="text-gray-600">in crypto protected</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">10,000+</div>
              <div className="text-gray-600">covers provided</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">#1</div>
              <div className="text-gray-600">in claims paid</div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-6 italic">
                &quot;As a leading digital asset hedge fund, Edge Capital is committed to providing a superior return to our LPs while safeguarding their assets. By relying on Nexus Mutual as a key part of our security strategy, we have been able to further grow our asset base while pursuing new investment opportunities.&quot;
              </p>
              <div className="flex items-center">
                <Image
                  src="/images/team/vadim-khramov.jpeg"
                  alt="Vadim Khramov"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold">Vadim Khramov</div>
                  <div className="text-base text-gray-600">Managing Director, Edge Capital</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-6 italic">
                &quot;The cost-efficient Fund Portfolio Cover from market-leader Nexus Mutual allows us to provide an even more asymmetric risk-return profile in our yield-generating funds. Nexus Mutual is the only company we trust to issue a cover that fits the complexities of our operations.&quot;
              </p>
              <div className="flex items-center">
                <Image
                  src="/images/team/alessandro-buser.jpeg"
                  alt="Alessandro Buser"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold">Alessandro Buser</div>
                  <div className="text-base text-gray-600">CTO, Dialectic</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-6 italic">
                &quot;At Fasanara, we navigate the complexities of DeFi with a scientific approach. Nexus Mutual is the partner we rely on to provide bespoke risk coverage, allowing us to deploy innovative strategies with confidence.&quot;
              </p>
              <div className="flex items-center">
                <Image
                  src="/images/companies/fasanara-capital.jpeg"
                  alt="Fasanara Digital"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold">Fasanara Digital</div>
                  <div className="text-base text-gray-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-nexus-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-gray-600 mb-12">Trusted by</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            <div className="flex justify-center items-center h-12">
              <Image
                src="/images/companies/re7-capital.png"
                alt="Re7Capital"
                width={150}
                height={48}
                className="max-h-10 w-auto opacity-60 hover:opacity-100 transition-opacity object-contain"
              />
            </div>
            <div className="flex justify-center items-center h-12">
              <Image
                src="/images/companies/edge-capital.png"
                alt="Edge Capital"
                width={150}
                height={48}
                className="max-h-10 w-auto opacity-60 hover:opacity-100 transition-opacity object-contain"
              />
            </div>
            <div className="flex justify-center items-center h-12">
              <Image
                src="/images/companies/dialectic.png"
                alt="Dialectic"
                width={150}
                height={48}
                className="max-h-10 w-auto opacity-60 hover:opacity-100 transition-opacity object-contain"
              />
            </div>
            <div className="flex justify-center items-center h-12">
              <Image
                src="/images/companies/fasanara.png"
                alt="Fasanara"
                width={150}
                height={48}
                className="max-h-10 w-auto opacity-60 hover:opacity-100 transition-opacity object-contain"
              />
            </div>
            <div className="flex justify-center items-center h-12">
              <Image
                src="/images/companies/native.png"
                alt="Native"
                width={150}
                height={48}
                className="max-h-10 w-auto opacity-60 hover:opacity-100 transition-opacity object-contain"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center mt-8">
            <div className="flex justify-center items-center h-12">
              <Image
                src="/images/companies/opencover.png"
                alt="Opencover"
                width={150}
                height={48}
                className="max-h-10 w-auto opacity-60 hover:opacity-100 transition-opacity object-contain"
              />
            </div>
            <div className="flex justify-center items-center h-12">
              <Image
                src="/images/companies/rockaway.png"
                alt="Rockaway"
                width={150}
                height={48}
                className="max-h-10 w-auto opacity-60 hover:opacity-100 transition-opacity object-contain"
              />
            </div>
            <div className="flex justify-center items-center h-12">
              <Image
                src="/images/companies/ensuro.png"
                alt="Ensuro"
                width={150}
                height={48}
                className="max-h-10 w-auto opacity-60 hover:opacity-100 transition-opacity object-contain"
              />
            </div>
            <div className="flex justify-center items-center h-12">
              <Image
                src="/images/companies/ether-fi.png"
                alt="Ether.fi"
                width={150}
                height={48}
                className="max-h-10 w-auto opacity-60 hover:opacity-100 transition-opacity object-contain"
              />
            </div>
            <div className="flex justify-center items-center h-12">
              <span className="text-center text-base opacity-60">and many more!</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works & Why Nexus Mutual Section */}
      <section className="py-20 bg-nexus-dark text-white relative overflow-hidden">
        {/* Wave Background Images */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src="/images/bg-waves-1.svg"
              alt=""
              fill
              className="object-cover opacity-30"
              priority={false}
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src="/images/bg-waves-2.svg"
              alt=""
              fill
              className="object-cover opacity-20"
              priority={false}
            />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* How It Works */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              How does it work?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex items-start space-x-6 p-6 border border-nexus-green-20 rounded-xl">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/icons/step-1.svg"
                    alt="Step 1"
                    width={64}
                    height={64}
                    className="w-16 h-16"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Step 1</h3>
                  <p className="text-gray-300">
                    Connect with our team of experts to review your crypto risk exposure
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 p-6 border border-nexus-green-20 rounded-xl">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/icons/step-2.svg"
                    alt="Step 2"
                    width={64}
                    height={64}
                    className="w-16 h-16"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Step 2</h3>
                  <p className="text-gray-300">
                    Get a cover plan tailored to your needs and budget
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 p-6 border border-nexus-green-20 rounded-xl">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/icons/step-3.svg"
                    alt="Step 3"
                    width={64}
                    height={64}
                    className="w-16 h-16"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Step 3</h3>
                  <p className="text-gray-300">
                    Easily purchase cover with ETH, USDC, or BTC for instant protection
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 p-6 border border-nexus-green-20 rounded-xl">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/icons/step-4.svg"
                    alt="Step 4"
                    width={64}
                    height={64}
                    className="w-16 h-16"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Step 4</h3>
                  <p className="text-gray-300">
                    Receive hands on support if you ever need to file a claim to get reimbursed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Nexus Mutual */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Why Nexus Mutual?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="text-center">
                <h3 className="text-nexus-green text-xl font-semibold mb-2">Get Paid</h3>
                <h4 className="text-nexus-green text-xl font-semibold mb-4">in Days</h4>
                <p className="text-gray-300">
                  With cover from Nexus Mutual, you&apos;ll get reimbursed within days
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-nexus-green text-xl font-semibold mb-2">100%</h3>
                <h4 className="text-nexus-green text-xl font-semibold mb-4">Transparent</h4>
                <p className="text-gray-300">
                  Everything from our assets to claims history are transparent and verifiable
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-nexus-green text-xl font-semibold mb-2">$100M+</h3>
                <h4 className="text-nexus-green text-xl font-semibold mb-4">in Assets</h4>
                <p className="text-gray-300">
                  Our substantial asset pool means we&apos;re ready to help in any situation
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-nexus-green text-xl font-semibold mb-2">Unmatched</h3>
                <h4 className="text-nexus-green text-xl font-semibold mb-4">Solutions</h4>
                <p className="text-gray-300">
                  We have the experience to create bespoke covers that no one else can offer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA & As Seen On Section */}
      <section className="py-20 bg-nexus-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* CTA */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Have questions about protecting your crypto?
            </h2>
            <Link href="/contact">
              <Button variant="primary">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* As Seen On */}
          <div className="border-t border-gray-300 pt-16">
            <h3 className="text-center text-gray-600 mb-12">As seen on</h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
              <div className="flex justify-center items-center h-8">
                <Image
                  src="/images/media/the-block.png"
                  alt="The Block"
                  width={120}
                  height={32}
                  className="max-h-6 w-auto opacity-60 hover:opacity-100 transition-opacity object-contain"
                />
              </div>
              <div className="flex justify-center items-center h-8">
                <Image
                  src="/images/media/blockworks.png"
                  alt="Blockworks"
                  width={120}
                  height={32}
                  className="max-h-6 w-auto opacity-60 hover:opacity-100 transition-opacity object-contain"
                />
              </div>
              <div className="flex justify-center items-center h-8">
                <Image
                  src="/images/media/bankless.png"
                  alt="Bankless"
                  width={120}
                  height={32}
                  className="max-h-6 w-auto opacity-60 hover:opacity-100 transition-opacity object-contain"
                />
              </div>
              <div className="flex justify-center items-center h-8">
                <Image
                  src="/images/media/forbes.jpg"
                  alt="Forbes"
                  width={120}
                  height={32}
                  className="max-h-6 w-auto opacity-60 hover:opacity-100 transition-opacity object-contain"
                />
              </div>
              <div className="flex justify-center items-center h-8">
                <Image
                  src="/images/media/decrypt.png"
                  alt="Decrypt"
                  width={120}
                  height={32}
                  className="max-h-6 w-auto opacity-60 hover:opacity-100 transition-opacity object-contain"
                />
              </div>
              <div className="flex justify-center items-center h-8">
                <Image
                  src="/images/media/coindesk.png"
                  alt="CoinDesk"
                  width={120}
                  height={32}
                  className="max-h-6 w-auto opacity-60 hover:opacity-100 transition-opacity object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-20" style={{backgroundImage: 'linear-gradient(90deg, #002332, #0ab682 90%)'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Subscribe to our newsletter
          </h2>
          <p className="text-white text-lg mb-8 opacity-90">
            Be the first to know about our latest news, announcements and events!
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-full border-0 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button variant="primary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 