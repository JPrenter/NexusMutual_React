import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function Contact() {
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
              Contact us
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20" style={{ backgroundColor: 'rgb(247, 249, 253)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <iframe 
              style={{ border: 'none', width: '100%' }} 
              height="990px" 
              src="https://notionforms.io/forms/nexus-mutual-general-contact"
              title="Contact Form"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 