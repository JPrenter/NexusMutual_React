# Developer Guide - Nexus Mutual Clone

This guide provides in-depth technical documentation for developers working on the Nexus Mutual Clone project. It covers architecture decisions, coding patterns, maintenance considerations, and best practices.

## 📋 Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Technology Decisions](#technology-decisions)
3. [Code Organization](#code-organization)
4. [Component Patterns](#component-patterns)
5. [Styling Conventions](#styling-conventions)
6. [Content Management](#content-management)
7. [Performance Considerations](#performance-considerations)
8. [Maintenance Guidelines](#maintenance-guidelines)
9. [Common Tasks](#common-tasks)
10. [Troubleshooting](#troubleshooting)

## 🏗️ Architecture Overview

### Next.js App Router Structure

This project uses Next.js 15 with the App Router pattern, which provides:

- **File-based routing**: Each folder in `src/app/` becomes a route
- **Layout composition**: Nested layouts for shared UI components
- **Server and Client Components**: Mixed rendering strategies
- **Built-in optimization**: Image optimization, font loading, and more

### Key Architectural Decisions

1. **App Router over Pages Router**: Chosen for better performance and developer experience
2. **TypeScript throughout**: All components and utilities are strongly typed
3. **Component composition**: Reusable components with clear separation of concerns
4. **File-based content**: MDX files for blog posts stored in the `content/` directory
5. **Static generation**: Most pages are statically generated for optimal performance

## ⚙️ Technology Decisions

### Why Next.js 15?

- **App Router**: Modern routing with better performance
- **Turbopack**: Faster development builds
- **Built-in optimizations**: Image optimization, font loading, bundle splitting
- **TypeScript support**: First-class TypeScript integration
- **React 19**: Latest React features and improvements

### Why Tailwind CSS v4?

- **Utility-first**: Rapid development with consistent design
- **Custom design system**: Easy to maintain brand colors and spacing
- **Responsive design**: Built-in responsive utilities
- **Performance**: Automatic purging of unused CSS

### Why MDX for Blog Content?

- **Developer-friendly**: Markdown with React component support
- **Type safety**: TypeScript integration for frontmatter
- **Flexibility**: Custom components within content
- **Performance**: Static generation at build time

## 📂 Code Organization

### Directory Structure Explained

```
src/
├── app/                    # Next.js App Router
│   ├── (routes)/          # Route groups and pages
│   ├── globals.css        # Global styles and Tailwind config
│   └── layout.tsx         # Root layout (HTML structure)
├── components/            # Reusable UI components
│   ├── Navigation.tsx     # Header navigation
│   ├── Footer.tsx         # Site footer
│   └── Button.tsx         # Reusable button component
├── lib/                   # Utility functions and business logic
│   └── blog.ts           # Blog content management utilities
└── types/                 # TypeScript type definitions
    └── blog.ts           # Blog-related type definitions
```

### File Naming Conventions

- **Components**: PascalCase (e.g., `Navigation.tsx`, `Button.tsx`)
- **Pages**: lowercase (e.g., `page.tsx`)
- **Utilities**: camelCase (e.g., `blog.ts`)
- **Types**: camelCase with `.ts` extension (e.g., `blog.ts`)

## 🧩 Component Patterns

### Component Structure

All components follow this pattern:

```typescript
// Type definitions at the top
interface ComponentProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  // ... other props
}

// Component with TypeScript
export default function Component({ 
  children, 
  variant = 'primary',
  ...props 
}: ComponentProps) {
  // Component logic
  return (
    // JSX with Tailwind classes
  )
}
```

### Button Component Pattern

The `Button` component demonstrates several important patterns:

1. **Variant system**: Multiple visual styles through a `variant` prop
2. **Size system**: Different sizes through a `size` prop
3. **Polymorphic behavior**: Can render as `<button>` or `<a>` based on props
4. **Tailwind composition**: Dynamic class composition based on props

```typescript
// Example usage patterns
<Button variant="primary" size="large">Primary CTA</Button>
<Button variant="secondary" href="/link">Secondary Link</Button>
<Button variant="secondary-white">White Variant</Button>
```

### Navigation Component Patterns

The Navigation component shows:

1. **State management**: Using `useState` for dropdown toggles
2. **Conditional rendering**: Different backgrounds based on props
3. **Responsive design**: Mobile-first approach with `md:` breakpoints
4. **External links**: Proper handling of external navigation

## 🎨 Styling Conventions

### Tailwind CSS Custom Classes

Custom utility classes are defined in `globals.css`:

```css
.bg-nexus-dark { background-color: #002332; }
.bg-nexus-green { background-color: #0ab682; }
.bg-nexus-yellow { background-color: #ffd200; }
.text-nexus-green { color: #0ab682; }
```

### Design System Guidelines

1. **Colors**: Use custom Nexus brand colors consistently
2. **Spacing**: Follow Tailwind's spacing scale (4, 8, 12, 16, 20, 24, etc.)
3. **Typography**: Responsive text sizing with `text-base md:text-lg` patterns
4. **Responsive Design**: Mobile-first with `sm:`, `md:`, `lg:` breakpoints

### Font Size Requirements

Based on project memory: Never use less than 16px font on desktop and laptop screens; menu items should use 18px font.

```css
/* Good examples */
.text-base { font-size: 16px; }      /* 16px minimum */
.text-lg { font-size: 18px; }        /* Menu items */
.text-xl { font-size: 20px; }        /* Larger text */

/* Avoid on desktop/laptop */
.text-sm { font-size: 14px; }        /* Too small for desktop */
.text-xs { font-size: 12px; }        /* Too small for desktop */
```

## 📝 Content Management

### Blog Post Structure

Blog posts are MDX files with YAML frontmatter:

```yaml
---
title: "Post Title"                    # Required
date: "2024-01-01"                    # Required (YYYY-MM-DD format)
featuredImage: "/images/blog/..."     # Required
excerpt: "Brief description"          # Required
author: "Author Name"                 # Optional (defaults to "Nexus Mutual Team")
tags: ["tag1", "tag2"]               # Optional
---

# Post Content in MDX

Regular markdown content with React components support.
```

### Content Management Functions

The `lib/blog.ts` file provides utilities:

- `getAllBlogSlugs()`: Get all blog post slugs
- `getBlogPostBySlug(slug)`: Get specific post with content
- `getAllBlogPosts()`: Get all posts sorted by date
- `getBlogMetadata()`: Get post metadata without content
- `formatDate(dateString)`: Format dates consistently

### Adding New Content

1. **Create MDX file**: Add to `content/blog/filename.mdx`
2. **Add frontmatter**: Include all required fields
3. **Add images**: Place in `public/images/blog/`
4. **Test locally**: Verify post appears in blog listing

## ⚡ Performance Considerations

### Image Optimization

- **Next.js Image component**: Always use `next/image` for optimizations
- **Responsive images**: Use `fill` prop with relative containers
- **Image domains**: Configure allowed domains in `next.config.ts`

```typescript
// Good example
<Image
  src="/images/blog/post.jpg"
  alt="Descriptive alt text"
  width={800}
  height={400}
  className="rounded-lg"
/>
```

### Static Generation

- **Pages**: Most pages are statically generated
- **Blog posts**: Generated at build time from MDX files
- **Dynamic routes**: Use `generateStaticParams` for dynamic blog routes

### Bundle Optimization

- **Code splitting**: Next.js handles automatic code splitting
- **Tree shaking**: Unused code is automatically removed
- **CSS purging**: Tailwind automatically removes unused styles

## 🛠️ Maintenance Guidelines

### Regular Maintenance Tasks

1. **Dependency Updates**
   ```bash
   npm audit                    # Check for vulnerabilities
   npm update                   # Update compatible versions
   npm outdated                 # Check for major updates
   ```

2. **Type Safety**
   ```bash
   npm run lint                 # Run ESLint
   npx tsc --noEmit            # Type check without building
   ```

3. **Performance Monitoring**
   ```bash
   npm run build               # Check build output
   npx @next/bundle-analyzer   # Analyze bundle size
   ```

### Code Quality Guidelines

1. **TypeScript**: All new code must be strongly typed
2. **Component props**: Define interfaces for all component props
3. **Error handling**: Handle errors gracefully, especially in blog functions
4. **Accessibility**: Include proper ARIA labels and semantic HTML
5. **SEO**: Include proper meta tags and semantic structure

### Breaking Changes to Watch

1. **Next.js updates**: App Router is still evolving
2. **Tailwind CSS v4**: New features and breaking changes
3. **React 19**: New hooks and patterns
4. **MDX updates**: Changes in MDX compilation

## 🔧 Common Tasks

### Adding a New Page

1. **Create page file**: `src/app/new-page/page.tsx`
2. **Add navigation**: Update `Navigation.tsx` if needed
3. **Follow layout pattern**:

```typescript
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function NewPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      {/* Page content */}
      <Footer />
    </main>
  )
}
```

### Adding a New Component

1. **Create component file**: `src/components/ComponentName.tsx`
2. **Define TypeScript interface**
3. **Follow naming conventions**
4. **Export as default**

### Updating Styles

1. **Use existing design tokens**: Prefer `nexus-*` color classes
2. **Add custom utilities**: Add to `globals.css` if needed
3. **Test responsive behavior**: Check mobile, tablet, desktop
4. **Verify accessibility**: Ensure proper contrast ratios

### Modifying Blog System

1. **Update types**: Modify `src/types/blog.ts` first
2. **Update utilities**: Modify `src/lib/blog.ts` accordingly
3. **Update MDX components**: Modify `mdx-components.tsx` for styling
4. **Test content**: Verify existing posts still work

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**
   - Check TypeScript errors: `npx tsc --noEmit`
   - Verify all imports are correct
   - Ensure all required props are provided

2. **Blog Posts Not Showing**
   - Check frontmatter format
   - Verify file is in `content/blog/`
   - Check console for parsing errors

3. **Images Not Loading**
   - Verify image paths are correct
   - Check `next.config.ts` for allowed domains
   - Ensure images exist in `public/images/`

4. **Styling Issues**
   - Check Tailwind classes are valid
   - Verify custom CSS in `globals.css`
   - Test in different screen sizes

### Debug Tools

```bash
# Type checking
npx tsc --noEmit

# Bundle analysis
npm run build
npx @next/bundle-analyzer

# Development debugging
npm run dev -- --inspect
```

### Environment Issues

- **Node.js version**: Ensure Node.js 18.x or later
- **Package conflicts**: Clear `node_modules` and reinstall
- **Cache issues**: Clear Next.js cache with `rm -rf .next`

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🤝 Getting Help

When encountering issues:

1. Check this documentation first
2. Search existing issues in the repository
3. Review Next.js and Tailwind documentation
4. Create detailed issue reports with:
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment information
   - Code snippets if applicable 