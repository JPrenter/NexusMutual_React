# Content Management Guide

This guide explains how content is managed in the Nexus Mutual Clone project, particularly the blog system built with MDX. It covers content creation, management, and best practices for maintaining the blog.

## 📋 Table of Contents

1. [Content Architecture](#content-architecture)
2. [Blog System Overview](#blog-system-overview)
3. [Creating Blog Posts](#creating-blog-posts)
4. [MDX Features](#mdx-features)
5. [Content Management Functions](#content-management-functions)
6. [Best Practices](#best-practices)
7. [Troubleshooting](#troubleshooting)

## 🏗️ Content Architecture

### Directory Structure

```
content/
└── blog/                           # Blog posts directory
    ├── nexus-mutual-etherfi-partnership.mdx
    ├── getting-started-with-nexus-mutual.mdx
    ├── claims-process-explained.mdx
    └── understanding-defi-risks.mdx

public/
└── images/
    ├── blog/                       # Blog post images
    ├── companies/                  # Company logos
    ├── icons/                      # Site icons
    ├── logos/                      # Brand logos
    ├── media/                      # General media
    └── team/                       # Team photos
```

### Content Flow

1. **Creation**: MDX files created in `content/blog/`
2. **Processing**: Build-time processing with gray-matter for frontmatter
3. **Generation**: Static pages generated for each blog post
4. **Display**: Rendered with custom MDX components

## 📝 Blog System Overview

### Technology Stack

- **MDX**: Markdown with React component support
- **gray-matter**: Frontmatter parsing
- **Next.js**: Static generation and dynamic routing
- **TypeScript**: Type safety for content management

### Key Files

- `src/lib/blog.ts`: Content management utilities
- `src/types/blog.ts`: TypeScript type definitions
- `mdx-components.tsx`: Custom MDX component styling
- `src/app/blog/page.tsx`: Blog listing page
- `src/app/blog/[slug]/page.tsx`: Individual blog post pages

### Blog Post Structure

Each blog post consists of:
1. **Frontmatter**: YAML metadata at the top
2. **Content**: MDX content (Markdown + React components)
3. **Images**: Referenced images in `public/images/blog/`

## 📖 Creating Blog Posts

### Step-by-Step Process

#### 1. Create MDX File

Create a new file in `content/blog/` with a descriptive filename:

```bash
# Good filenames
content/blog/nexus-mutual-v2-launch.mdx
content/blog/understanding-smart-contract-risks.mdx
content/blog/2024-q1-update.mdx

# Avoid
content/blog/blog-post-1.mdx
content/blog/untitled.mdx
```

#### 2. Add Frontmatter

Start your MDX file with YAML frontmatter:

```yaml
---
title: "Your Blog Post Title"
date: "2024-01-15"
featuredImage: "/images/blog/your-post-image.jpg"
excerpt: "A brief description of your blog post that will appear in the blog listing and meta descriptions."
author: "Author Name"
tags: ["DeFi", "Insurance", "Smart Contracts"]
---
```

#### 3. Write Content

After the frontmatter, write your content using Markdown syntax:

```markdown
# Main Heading

Your introduction paragraph here. This will be styled automatically with the custom MDX components.

## Secondary Heading

More content with **bold text** and *italic text*.

### Subsection

- Bullet point 1
- Bullet point 2
- Bullet point 3

> This is a blockquote that will be styled with the Nexus brand colors.

[Link to external resource](https://example.com)

![Alt text for image](/images/blog/content-image.jpg)
```

### Frontmatter Fields

#### Required Fields

- **title**: The blog post title (used in page title and h1)
- **date**: Publication date in YYYY-MM-DD format
- **featuredImage**: Path to featured image (must start with `/`)
- **excerpt**: Brief description for blog listing and SEO

#### Optional Fields

- **author**: Author name (defaults to "Nexus Mutual Team")
- **tags**: Array of tags for categorization

### Example Complete Blog Post

```mdx
---
title: "Understanding DeFi Insurance: A Comprehensive Guide"
date: "2024-01-15"
featuredImage: "/images/blog/defi-insurance-guide.jpg"
excerpt: "Learn how DeFi insurance works, the risks it covers, and why it's essential for crypto investors and protocols."
author: "Sarah Johnson"
tags: ["DeFi", "Insurance", "Risk Management", "Education"]
---

# Understanding DeFi Insurance: A Comprehensive Guide

DeFi insurance represents a paradigm shift in how we protect digital assets. Unlike traditional insurance, DeFi insurance operates through decentralized protocols and smart contracts.

## What is DeFi Insurance?

DeFi insurance provides coverage for various risks in the decentralized finance ecosystem:

- **Smart contract bugs** and exploits
- **Protocol failures** and hacks
- **Slashing events** in proof-of-stake networks
- **Custody failures** and exchange risks

### How It Works

1. **Risk Assessment**: Protocols and users assess their risk exposure
2. **Coverage Purchase**: Users buy coverage for specific risks
3. **Claims Process**: When events occur, claims are submitted and processed
4. **Payouts**: Valid claims result in compensation

> DeFi insurance is not just about protection—it's about enabling confidence in the ecosystem.

## Benefits for Users

DeFi insurance offers several advantages:

- **Transparency**: All transactions on-chain
- **Accessibility**: Global access without intermediaries
- **Efficiency**: Automated claims processing
- **Innovation**: New coverage types impossible in traditional insurance

## Getting Started

To get started with DeFi insurance:

1. Assess your risk exposure
2. Research available coverage options
3. Purchase appropriate coverage
4. Monitor your positions regularly

[Learn more about Nexus Mutual coverage](/cover-products)
```

## 🎨 MDX Features

### Custom Component Styling

The project uses custom MDX components defined in `mdx-components.tsx`:

#### Headings
- **h1**: Large, bold headings with proper spacing
- **h2**: Secondary headings with brand styling
- **h3**: Subsection headings

#### Text Elements
- **p**: Paragraphs with optimal line height and spacing
- **ul/ol**: Lists with proper indentation and spacing
- **li**: List items with consistent styling

#### Interactive Elements
- **a**: Links with Nexus green color and hover effects
- **blockquote**: Styled quotes with brand border and background

#### Media
- **img**: Automatically optimized with Next.js Image component
- **code**: Inline code with gray background
- **pre**: Code blocks with dark theme

### Using React Components in MDX

You can use React components within your MDX content:

```mdx
import Button from '../../components/Button'

# My Blog Post

Regular markdown content here.

<Button variant="primary" href="/contact">
  Contact Us for More Info
</Button>

More markdown content.
```

### Image Handling

#### Featured Images

Featured images should be:
- **Format**: JPG or PNG
- **Size**: Minimum 800x400px
- **Location**: `public/images/blog/`
- **Naming**: Descriptive filenames

#### Content Images

Images within blog posts:
- Place in `public/images/blog/`
- Use descriptive alt text
- Reference with absolute paths starting with `/`

```markdown
![Description of the image](/images/blog/my-content-image.jpg)
```

## ⚙️ Content Management Functions

### Core Functions (`src/lib/blog.ts`)

#### `getAllBlogSlugs()`
Returns array of all blog post slugs (filenames without .mdx).

```typescript
const slugs = getAllBlogSlugs()
// Returns: ['post-1', 'post-2', 'post-3']
```

#### `getBlogPostBySlug(slug)`
Returns complete blog post with content for a specific slug.

```typescript
const post = getBlogPostBySlug('my-blog-post')
// Returns: BlogPost object with content
```

#### `getAllBlogPosts()`
Returns all blog posts sorted by date (newest first).

```typescript
const posts = getAllBlogPosts()
// Returns: Array of BlogPost objects
```

#### `getBlogMetadata()`
Returns blog post metadata without content (for listing pages).

```typescript
const metadata = getBlogMetadata()
// Returns: Array of BlogMetadata objects
```

#### `formatDate(dateString)`
Formats date strings consistently.

```typescript
const formatted = formatDate('2024-01-15')
// Returns: "January 15, 2024"
```

### Error Handling

The blog functions include error handling:
- Missing blog directory returns empty arrays
- Invalid blog posts are filtered out
- Console warnings for debugging

## ✅ Best Practices

### Content Writing

1. **SEO-Friendly Titles**: Use descriptive, keyword-rich titles
2. **Engaging Excerpts**: Write compelling excerpts for the blog listing
3. **Consistent Voice**: Maintain consistent brand voice and tone
4. **Proper Structure**: Use hierarchical headings (h1 → h2 → h3)
5. **Internal Linking**: Link to relevant pages within the site

### Image Management

1. **Optimization**: Compress images before adding
2. **Alt Text**: Always include descriptive alt text
3. **Consistent Naming**: Use descriptive, consistent filenames
4. **Appropriate Sizes**: Use appropriate image dimensions

```markdown
<!-- Good -->
![Nexus Mutual dashboard showing coverage options](/images/blog/nexus-dashboard-coverage.jpg)

<!-- Avoid -->
![Image](/images/blog/img1.jpg)
```

### File Organization

1. **Descriptive Filenames**: Use clear, descriptive filenames
2. **Date Prefixing**: Consider prefixing with dates for chronological order
3. **Consistent Format**: Stick to kebab-case for filenames

```bash
# Good
2024-01-15-nexus-mutual-v2-launch.mdx
understanding-defi-insurance-basics.mdx

# Avoid
BlogPost1.mdx
nexus_mutual_update.mdx
```

### Frontmatter Best Practices

1. **Consistent Dates**: Always use YYYY-MM-DD format
2. **Relevant Tags**: Use consistent, relevant tags
3. **Compelling Excerpts**: Write excerpts that encourage reading
4. **Accurate Authors**: Credit appropriate authors

### Content Guidelines

1. **Length**: Aim for 500-2000 words for substantial posts
2. **Readability**: Use short paragraphs and clear language
3. **Code Examples**: Include code examples when relevant
4. **External Links**: Use `target="_blank"` for external links
5. **Brand Consistency**: Maintain consistent brand terminology

## 🐛 Troubleshooting

### Common Issues

#### Blog Post Not Appearing

**Symptoms**: New blog post doesn't show in listing

**Solutions**:
1. Check frontmatter format is valid YAML
2. Ensure file is in `content/blog/` directory
3. Verify filename ends with `.mdx`
4. Check for parsing errors in browser console
5. Restart development server

#### Images Not Loading

**Symptoms**: Images show broken links

**Solutions**:
1. Verify image exists in `public/images/blog/`
2. Check image path starts with `/`
3. Ensure image filename matches exactly (case-sensitive)
4. Verify image format is supported (JPG, PNG, WebP)

#### Build Errors

**Symptoms**: Build fails with MDX errors

**Solutions**:
1. Check MDX syntax is valid
2. Verify frontmatter YAML is properly formatted
3. Ensure all imported components exist
4. Check for unclosed HTML tags in MDX

#### Date Sorting Issues

**Symptoms**: Posts appear in wrong order

**Solutions**:
1. Verify date format is YYYY-MM-DD
2. Check dates are valid
3. Ensure dates are in frontmatter, not content

### Debug Process

1. **Check Browser Console**: Look for JavaScript errors
2. **Verify File Paths**: Ensure all paths are correct
3. **Test Locally**: Run `npm run dev` and test changes
4. **Build Test**: Run `npm run build` to check for build errors

### Getting Help

If you encounter issues:
1. Check this documentation
2. Review existing blog posts for examples
3. Check browser console for errors
4. Verify file structure matches examples
5. Test with a minimal example first

## 📊 Content Analytics

### Tracking Content Performance

Consider implementing:
- Page view tracking
- Time on page metrics
- Social sharing tracking
- Click-through rates from blog listing

### SEO Optimization

- Use descriptive URLs (slugs)
- Include relevant keywords in titles
- Write compelling meta descriptions (excerpts)
- Use proper heading hierarchy
- Include internal and external links

### Content Calendar

Maintain a content calendar to:
- Plan regular publishing schedule
- Track seasonal content
- Coordinate with marketing initiatives
- Ensure content variety 