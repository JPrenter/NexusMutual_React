export interface BlogPost {
  slug: string
  title: string
  date: string
  featuredImage: string
  excerpt: string
  author: string
  tags: string[]
  content?: string
}

export interface BlogMetadata {
  title: string
  date: string
  featuredImage: string
  excerpt: string
  author: string
  tags: string[]
  slug: string
} 