# Nexus Mutual Clone

A modern Next.js website showcasing crypto insurance services, built as a clone of the Nexus Mutual platform. This project demonstrates a full-featured insurance website with blog functionality, product pages, and responsive design.

## 🚀 Tech Stack

- **Framework**: [Next.js 15.3.4](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4.1.10](https://tailwindcss.com/)
- **Content**: [MDX](https://mdxjs.com/) for blog posts
- **UI Components**: Custom React components
- **Package Manager**: npm

## 📁 Project Structure

```
NexusMutualClone/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── blog/              # Blog listing and dynamic routes
│   │   ├── claims/            # Claims information page
│   │   ├── contact/           # Contact page
│   │   ├── cover-products/    # Product pages
│   │   ├── globals.css        # Global styles and Tailwind imports
│   │   ├── layout.tsx         # Root layout component
│   │   └── page.tsx           # Homepage
│   ├── components/            # Reusable React components
│   │   ├── Navigation.tsx     # Header navigation
│   │   ├── Footer.tsx         # Footer component
│   │   └── Button.tsx         # Reusable button component
│   ├── lib/                   # Utility functions
│   │   └── blog.ts           # Blog content management
│   └── types/                 # TypeScript type definitions
│       └── blog.ts           # Blog-related types
├── content/
│   └── blog/                  # MDX blog posts
├── public/
│   └── images/                # Static assets
├── mdx-components.tsx         # MDX component overrides
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── package.json              # Dependencies and scripts
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18.x or later
- npm (comes with Node.js)

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd NexusMutualClone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design System

### Brand Colors

The project uses a custom color palette defined in `globals.css`:

- **Nexus Dark**: `#002332` - Primary dark blue
- **Nexus Green**: `#0ab682` - Primary green for accents
- **Nexus Yellow**: `#ffd200` - Primary yellow for CTAs
- **Nexus Grey**: `rgb(247, 249, 253)` - Light background

### Typography

- **Font Family**: Proximanova, Montserrat, system fonts
- **Font Sizes**: Responsive typography using Tailwind classes
- **Desktop/Laptop**: Minimum 16px font size, 18px for menu items

### Components

- **Button**: Multi-variant button component with primary, secondary, and secondary-white styles
- **Navigation**: Responsive header with dropdown menus
- **Footer**: Comprehensive footer with links and company information

## 📖 Content Management

### Blog Posts

Blog posts are written in MDX format and stored in `content/blog/`. Each post requires frontmatter:

```yaml
---
title: "Your Post Title"
date: "2024-01-01"
featuredImage: "/images/blog/your-image.jpg"
excerpt: "Brief description of the post"
author: "Author Name"
tags: ["tag1", "tag2"]
---
```

### Adding New Blog Posts

1. Create a new `.mdx` file in `content/blog/`
2. Add required frontmatter
3. Write content using MDX syntax
4. Images should be placed in `public/images/blog/`

## 🚀 Deployment

### Build Process

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### Environment Considerations

- Static images are served from `public/images/`
- External images are configured for `cdn.prod.website-files.com`
- No environment variables currently required

## 🔧 Configuration Files

- **`next.config.ts`**: Next.js configuration with MDX support and image domains
- **`tailwind.config.ts`**: Tailwind CSS configuration
- **`tsconfig.json`**: TypeScript compiler configuration
- **`mdx-components.tsx`**: Custom MDX component styling

## 📱 Features

- ✅ Responsive design (mobile-first)
- ✅ Blog system with MDX
- ✅ SEO-friendly structure
- ✅ TypeScript for type safety
- ✅ Custom design system
- ✅ Image optimization
- ✅ Smooth scrolling navigation

## 🤝 Contributing

When contributing to this project:

1. Follow the existing code style and patterns
2. Use TypeScript for all new components
3. Follow the established component structure
4. Test responsive design on multiple screen sizes
5. Ensure accessibility best practices

## 📄 License

This project is for demonstration purposes. Please respect the original Nexus Mutual branding and trademarks. 