import { notFound } from 'next/navigation'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { getBlogPostBySlug, getAllBlogSlugs, formatDate } from '../../../lib/blog'
import { useMDXComponents } from '../../../../mdx-components'

// This is required for dynamic MDX imports
import { MDXRemote } from 'next-mdx-remote/rsc'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  
  if (!post) {
    notFound()
  }

  const mdxComponents = useMDXComponents({})

  return (
    <main className="min-h-screen">
      {/* Navigation with Blue Background */}
      <Navigation background="blue" />
      
      {/* Content Section */}
      <section className="pt-32 pb-16" style={{ backgroundColor: 'rgb(247, 249, 253)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Tag */}
          <div className="text-center mb-6">
            <span 
              className="inline-block text-nexus-green px-4 py-2 rounded-full text-sm font-medium"
              style={{
                backgroundImage: 'linear-gradient(#0ab6821a 10%, #00694b1a)'
              }}
            >
              Announcements
            </span>
          </div>
          
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            {/* Meta */}
            <div className="flex items-center justify-center text-gray-600 text-base">
              <time dateTime={post.date}>
                {formatDate(post.date).toUpperCase()}
              </time>
              <span className="mx-3">by</span>
              <span className="underline">{post.author}</span>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="mb-12">
            <Image
              src={post.featuredImage}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-auto rounded-3xl shadow-lg"
            />
          </div>
          
          {/* Article Content */}
          <div>
            {/* Content */}
            <div className="max-w-none">
              <MDXRemote source={post.content || ''} components={mdxComponents} />
            </div>
            
            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-base mb-2">
                    Published on {formatDate(post.date)}
                  </p>
                  <p className="text-gray-600 text-base">
                    By {post.author}
                  </p>
                </div>
                
                {/* Back to Blog */}
                <Link 
                  href="/blog"
                  className="inline-flex items-center text-nexus-green hover:text-green-600 font-semibold transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-nexus-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Protect Your DeFi Assets?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join thousands of DeFi users who trust Nexus Mutual to protect their crypto assets.
          </p>
          <Link
            href="https://app.nexusmutual.io/cover"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-nexus-yellow text-nexus-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 transition-colors"
          >
            Get Coverage Now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
} 