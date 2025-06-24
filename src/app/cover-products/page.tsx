import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import Image from 'next/image'
import Link from 'next/link'

export default function Products() {
  return (
    <main 
      className="min-h-screen relative"
      style={{
        backgroundImage: 'linear-gradient(135deg, #002332 0%, #002332 60%, #0ab68280 100%), url("/images/bg-waves-1.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Navigation />
      
      {/* Hero Section */}
      <section className="text-white pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Products
            </h1>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            
            {/* Cover from Nexus Mutual */}
            <div className="bg-white rounded-3xl p-8 text-gray-900 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 bg-nexus-dark rounded-2xl flex items-center justify-center mb-6">
                  <Image
                    src="/images/icons/nexus-mutual-cover.png"
                    alt="Cover Plans"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Cover from Nexus Mutual
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Protect your assets across all of DeFi in one click. Choose from three comprehensive plans tailored to different strategies.
                </p>
              </div>
              <div className="flex items-center text-nexus-green font-semibold hover:text-green-600 transition-colors cursor-pointer">
                <a href="https://nexusmutual.io/everything-pass" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <span className="mr-2">Learn more</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Protocol Cover */}
            <div className="bg-white rounded-3xl p-8 text-gray-900 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 bg-nexus-dark rounded-2xl flex items-center justify-center mb-6">
                  <Image
                    src="/images/icons/protocol-cover.svg"
                    alt="Protocol Cover"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Protocol Cover
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Secure your assets deposited in a single protocol against a range of loss events, including hacks, exploits and more.
                </p>
              </div>
              <div className="flex items-center text-nexus-green font-semibold hover:text-green-600 transition-colors cursor-pointer">
                <a href="https://docs.nexusmutual.io/overview/cover-products/protocol-cover/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <span className="mr-2">Learn more</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Depeg Cover */}
            <div className="bg-white rounded-3xl p-8 text-gray-900 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 bg-nexus-dark rounded-2xl flex items-center justify-center mb-6">
                  <Image
                    src="/images/icons/depeg-cover.svg"
                    alt="Depeg Cover"
                    width={28}
                    height={28}
                    className="w-7 h-7"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Depeg Cover
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  With Depeg Cover from Nexus Mutual, you no longer have to worry about your favorite stablecoin and ETH or BTC derivatives losing their peg.
                </p>
              </div>
              <div className="flex items-center text-nexus-green font-semibold hover:text-green-600 transition-colors cursor-pointer">
                <a href="https://nexusmutual.io/blog/dont-worry-about-depegs-introducing-depeg-cover-from-nexus-mutual" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <span className="mr-2">Learn more</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Slashing Cover */}
            <div className="bg-white rounded-3xl p-8 text-gray-900 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 bg-nexus-dark rounded-2xl flex items-center justify-center mb-6">
                  <Image
                    src="/images/icons/slashing-cover.svg"
                    alt="Slashing Cover"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Slashing Cover
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Acting as a validator operator can be lucrative, yet downtime can lead to losses. Secure your validators with cover that protects against slashing penalties.
                </p>
              </div>
              <div className="flex items-center text-nexus-green font-semibold hover:text-green-600 transition-colors cursor-pointer">
                <a href="https://docs.nexusmutual.io/overview/cover-products/eth-slashing-cover/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <span className="mr-2">Learn more</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight">
              Have questions about which product is right for you, or need a bespoke solution?
            </h2>
            <Link href="/contact">
              <Button variant="primary" size="large">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 