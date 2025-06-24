'use client'

import { useState } from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Image from 'next/image'

export default function Claims() {
  const [currentStory, setCurrentStory] = useState(0)

  const stories = [
    {
      id: 1,
      logos: [
        { src: "/images/companies/rari-capital.png", alt: "Rari Capital", width: 120, height: 60, className: "h-12 w-auto" },
        { src: "/images/companies/tribe-dao.png", alt: "TribeDAO", width: 80, height: 80, className: "h-16 w-16 rounded-full" }
      ],
      stats: [
        { value: "$80M", label: "Total lost in hack" },
        { value: "$5M", label: "Total claims paid" },
        { value: "3 days", label: "Average payout time" }
      ],
      title: "TribeDAO, Rari Capital Fuse Market Hack",
      date: "30 April 2022",
      description: "A flaw in the Rari Capital code led to an $80m loss. People who protected their crypto with Protocol Cover received payouts just days after filing."
    },
    {
      id: 2,
      logos: [
        { src: "/images/companies/perpetual-protocol.svg", alt: "Perpetual Protocol", width: 120, height: 60, className: "h-12 w-auto" }
      ],
      stats: [
        { value: "$6M+", label: "Total lost in failure" },
        { value: "$377K+", label: "Total claims paid" },
        { value: "", label: "" }
      ],
      title: "Perpetual Protocol v1 economic loss event",
      date: "May 2022",
      description: "Extreme volatility caused major price deviations in Perpetual Protocol v1 markets and liquidation mechanisms failed, which created losses exceeding $5.7m due to economic design failure. Claims Assessors reviewed, approved, and paid all claims within days."
    },
    {
      id: 3,
      logos: [
        { src: "/images/companies/cream-finance.svg", alt: "CREAM Finance", width: 120, height: 60, className: "h-12 w-auto" }
      ],
      stats: [
        { value: "$130M+", label: "Total lost in exploit" },
        { value: "$397K+", label: "Total claims paid" },
        { value: "", label: "" }
      ],
      title: "CREAM V1 Economic Exploit",
      date: "27 October 2021",
      description: "After CREAM Finance, a DeFi lending protocol, was hacked for $130m, Nexus Mutual members voted to approve and pay claims. Members who purchased CREAM Protocol Cover were made whole in a matter of days."
    }
  ]

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length)
  }

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length)
  }

  const goToStory = (index: number) => {
    setCurrentStory(index)
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="text-white pt-32 pb-12 relative overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(135deg, #002332 0%, #002332 60%, #0ab68280 100%), url("/images/bg-waves-1.svg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              $18,249,286 in claims paid
            </h1>
          </div>
        </div>
      </section>

      {/* Filing a claim section */}
      <section className="py-20" style={{ backgroundColor: 'rgb(247, 249, 253)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Filing a claim is easy
            </h2>
          </div>
          
          {/* Steps Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Step 1 */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/images/icons/step-1.svg"
                  alt="Step 1"
                  width={80}
                  height={80}
                  className="w-20 h-20"
                />
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                Review that your incident is covered by the cover product wording and submit your claim.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/images/icons/step-2.svg"
                  alt="Step 2"
                  width={80}
                  height={80}
                  className="w-20 h-20"
                />
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                Provide details of the incident.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/images/icons/step-3.svg"
                  alt="Step 3"
                  width={80}
                  height={80}
                  className="w-20 h-20"
                />
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                Submit proof of loss, which is specific to each cover product.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/images/icons/step-4.svg"
                  alt="Step 4"
                  width={80}
                  height={80}
                  className="w-20 h-20"
                />
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                Assessors review a claim&apos;s validity and vote on the outcome. Decisions are made within 3 to 6 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Battle-tested process section */}
      <section className="py-20 bg-nexus-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Column - 40% width */}
            <div className="lg:w-2/5 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                Battle-tested and transparent claim assessment process.
              </h2>
              <p className="text-gray-300 leading-relaxed text-base">
                Every member has the right to vote on claims. Cover wording documents detail the guidance for paying claims but members have the final say and are rewarded for voting honestly. That&apos;s why we&apos;ve already paid out over <span className="text-white font-semibold">$18M+</span> claims.
              </p>
            </div>

            {/* Right Column - 60% width with 2x2 grid */}
            <div className="lg:w-3/5 lg:-mt-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mt-16">
                
                {/* Discretionary mutual */}
                <div className="mb-8 md:mt-16">
                  <div className="mb-4">
                    <Image
                      src="/images/icons/discretionary-mutual.svg"
                      alt="Discretionary mutual"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Discretionary mutual</h3>
                  <p className="text-gray-300 leading-relaxed text-base">
                    There&apos;s no centralised claims department deciding on payouts. Just a fair, honest claims assessment process that is open to all members.
                  </p>
                </div>

                {/* Incentivised to vote honestly */}
                <div className="mb-8">
                  <div className="mb-4">
                    <Image
                      src="/images/icons/incentivised-voting.svg"
                      alt="Incentivised to vote honestly"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Incentivised to vote honestly</h3>
                  <p className="text-gray-300 leading-relaxed text-base">
                    Members stake and lock their NXM to vote on claims. Those who vote honestly are rewarded. Those who vote fraudulently risk losing their NXM.
                  </p>
                </div>

                {/* Protected against fraudulent voting */}
                <div className="md:mt-16">
                  <div className="mb-4">
                    <Image
                      src="/images/icons/protected-voting.svg"
                      alt="Protected against fraudulent voting"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Protected against fraudulent voting</h3>
                  <p className="text-gray-300 leading-relaxed text-base">
                    If the Advisory Board determines a claim assessor has submitted a fraudulent vote, they have the power to burn the offending claim assessor&apos;s staked NXM.
                  </p>
                </div>

                {/* Transparent process */}
                <div>
                  <div className="mb-4">
                    <Image
                      src="/images/icons/transparent-process.svg"
                      alt="Transparent process"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Transparent process</h3>
                  <p className="text-gray-300 leading-relaxed text-base">
                    Members discuss claims in a dedicated Discord channel ahead of voting. All claim outcomes can be viewed on-chain, in our user interface, and in our documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Claims Stories Section */}
      <section className="py-20" style={{ backgroundColor: 'rgb(247, 249, 253)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Claims stories
            </h2>
          </div>
          
          {/* Carousel Container */}
          <div className="relative">
            {/* Current Story */}
            <div className="bg-white rounded-3xl p-12 shadow-xl max-w-4xl mx-auto">
              {/* Company Logos */}
              <div className="flex items-center justify-center gap-8 mb-12">
                {stories[currentStory].logos.map((logo, index) => (
                  <Image
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className={logo.className}
                  />
                ))}
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {stories[currentStory].stats.map((stat, index) => (
                  stat.value && (
                    <div key={index} className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                      <div className="text-gray-600 text-base">{stat.label}</div>
                    </div>
                  )
                ))}
              </div>

              {/* Story Content */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {stories[currentStory].title}
                </h3>
                <div className="text-gray-600 mb-6 text-base">{stories[currentStory].date}</div>
                <p className="text-gray-700 leading-relaxed text-base mb-8">
                  {stories[currentStory].description}
                </p>
                <div className="flex items-center text-nexus-green font-semibold hover:text-green-600 transition-colors cursor-pointer">
                  <span className="mr-2 text-base">Read More</span>
                  <div className="w-8 h-0.5 bg-nexus-yellow"></div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 gap-3">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToStory(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentStory ? 'bg-gray-900' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevStory}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextStory}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 