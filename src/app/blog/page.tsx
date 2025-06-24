import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { getBlogMetadata, formatDate } from '../../lib/blog'

export default function Blog() {
  const posts = getBlogMetadata()

  return (
    <main className="min-h-screen">
      {/* Navigation with Blue Background */}
      <Navigation background="blue" />
      
      {/* Hero Section */}
      <section className="text-white pt-32 pb-16 relative overflow-hidden bg-nexus-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-200">
            News, updates and insights from the<br />
            Nexus Mutual team
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20" style={{ backgroundColor: 'rgb(247, 249, 253)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No blog posts yet</h2>
              <p className="text-gray-600">Check back soon for updates and insights!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.slug} className="bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300 shadow-lg">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="cursor-pointer">
                      {/* Featured Image */}
                      <div className="relative h-48">
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        {/* Category Tag */}
                        <div className="mb-4">
                          <span 
                            className="inline-block text-nexus-green px-3 py-1 rounded-full text-sm font-medium"
                            style={{
                              backgroundImage: 'linear-gradient(#0ab6821a 10%, #00694b1a)'
                            }}
                          >
                            Announcements
                          </span>
                        </div>
                        
                        {/* Title */}
                        <h2 className="text-xl font-bold text-gray-900 mb-4 leading-tight hover:text-nexus-green transition-colors">
                          {post.title}
                        </h2>
                        
                        {/* Date */}
                        <div className="text-gray-500 text-sm">
                          {formatDate(post.date).toUpperCase()}
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
} 