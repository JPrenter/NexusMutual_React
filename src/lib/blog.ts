import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { BlogPost, BlogMetadata } from '@/types/blog'

const blogDirectory = path.join(process.cwd(), 'content/blog')

export function getAllBlogSlugs(): string[] {
  try {
    const filenames = fs.readdirSync(blogDirectory)
    return filenames
      .filter(name => name.endsWith('.mdx'))
      .map(name => name.replace(/\.mdx$/, ''))
  } catch {
    console.warn('Blog directory not found, returning empty array')
    return []
  }
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      featuredImage: data.featuredImage || '',
      excerpt: data.excerpt || '',
      author: data.author || 'Nexus Mutual Team',
      tags: data.tags || [],
      content,
    }
  } catch {
    console.error(`Error reading blog post ${slug}`)
    return null
  }
}

export function getAllBlogPosts(): BlogPost[] {
  const slugs = getAllBlogSlugs()
  const posts = slugs
    .map(slug => getBlogPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => {
      // Sort by date, newest first
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
  
  return posts
}

export function getBlogMetadata(): BlogMetadata[] {
  return getAllBlogPosts().map(post => ({
    slug: post.slug,
    title: post.title,
    date: post.date,
    featuredImage: post.featuredImage,
    excerpt: post.excerpt,
    author: post.author,
    tags: post.tags,
  }))
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
} 