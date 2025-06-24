# Components Documentation

This document provides detailed information about the component system used in the Nexus Mutual Clone project. All components are built with TypeScript and Tailwind CSS, following consistent patterns and design principles.

## 📋 Table of Contents

1. [Component Overview](#component-overview)
2. [Core Components](#core-components)
3. [Component Patterns](#component-patterns)
4. [Usage Examples](#usage-examples)
5. [Creating New Components](#creating-new-components)
6. [Best Practices](#best-practices)

## 🧩 Component Overview

The project uses a component-based architecture with the following principles:

- **TypeScript interfaces** for all component props
- **Tailwind CSS** for styling with custom design tokens
- **Responsive design** with mobile-first approach
- **Accessibility** with proper ARIA labels and semantic HTML
- **Consistent patterns** across all components

## 🎯 Core Components

### Button Component

**Location**: `src/components/Button.tsx`

A flexible button component that can render as either a `<button>` or `<a>` element based on props.

#### Props Interface

```typescript
interface ButtonProps {
  children: React.ReactNode       // Button content
  variant?: 'primary' | 'secondary' | 'secondary-white'
  size?: 'default' | 'large'
  onClick?: () => void           // Click handler (button only)
  disabled?: boolean             // Disabled state (button only)
  type?: 'button' | 'submit' | 'reset'
  className?: string             // Additional CSS classes
  href?: string                  // Link URL (renders as <a>)
  target?: string               // Link target
  rel?: string                  // Link relationship
}
```

#### Variants

- **primary**: Yellow background (`#ffd200`) with dark text
- **secondary**: Transparent with dark border, hovers to dark background
- **secondary-white**: Transparent with white border, hovers to yellow

#### Usage Examples

```typescript
// Primary button (CTA)
<Button variant="primary" size="large">
  Contact Us
</Button>

// Secondary button
<Button variant="secondary" onClick={handleClick}>
  Learn More
</Button>

// Link button
<Button 
  variant="secondary-white" 
  href="https://app.nexusmutual.io" 
  target="_blank"
  rel="noopener noreferrer"
>
  Open App
</Button>

// Submit button
<Button type="submit" disabled={isLoading}>
  {isLoading ? 'Loading...' : 'Submit'}
</Button>
```

### Navigation Component

**Location**: `src/components/Navigation.tsx`

The main site navigation with responsive design and dropdown menus.

#### Props Interface

```typescript
interface NavigationProps {
  background?: 'transparent' | 'blue'
}
```

#### Features

- **Responsive design**: Collapses to mobile menu on smaller screens
- **Dropdown menus**: "Learn" section with external links
- **Background variants**: Transparent (default) or blue background
- **External links**: Proper handling of target and rel attributes

#### State Management

```typescript
const [isLearnOpen, setIsLearnOpen] = useState(false)
```

The component manages dropdown state internally using React hooks.

#### Usage Examples

```typescript
// Default transparent navigation (homepage)
<Navigation />

// Blue background navigation (other pages)
<Navigation background="blue" />
```

### Footer Component

**Location**: `src/components/Footer.tsx`

Comprehensive site footer with links, company information, and social media.

#### Features

- **Multi-column layout**: Organized sections for different link types
- **Responsive design**: Stacks columns on mobile
- **Company information**: Address, contact details
- **External links**: Social media and partner links

#### Usage

```typescript
<Footer />
```

The Footer component requires no props and includes all necessary information internally.

## 🏗️ Component Patterns

### Standard Component Structure

All components follow this consistent pattern:

```typescript
'use client' // If client-side features needed

import React from 'react'
// Other imports...

// 1. TypeScript interface definition
interface ComponentProps {
  children: React.ReactNode
  variant?: string
  // ... other props
}

// 2. Component definition with TypeScript
export default function ComponentName({ 
  children,
  variant = 'default',
  ...otherProps 
}: ComponentProps) {
  // 3. Component logic and state
  const [state, setState] = useState(initialValue)
  
  // 4. Computed values and classes
  const className = `base-classes ${variantClasses[variant]}`
  
  // 5. Return JSX
  return (
    <div className={className}>
      {children}
    </div>
  )
}
```

### Variant Pattern

Components use a variant system for different visual styles:

```typescript
const variantStyles = {
  primary: 'bg-nexus-yellow text-nexus-dark',
  secondary: 'border-2 border-nexus-dark text-nexus-dark',
  'secondary-white': 'border-2 border-white text-white'
}

const className = `base-styles ${variantStyles[variant]}`
```

### Polymorphic Pattern (Button Example)

Components can render as different HTML elements based on props:

```typescript
// Renders as <button> when no href
if (!href) {
  return <button {...buttonProps}>{children}</button>
}

// Renders as <a> when href provided
return <a href={href} {...linkProps}>{children}</a>
```

### Responsive Design Pattern

All components use mobile-first responsive design:

```typescript
// Base styles (mobile)
const baseStyles = 'px-4 py-2 text-base'

// Add breakpoint-specific styles
const responsiveStyles = 'md:px-6 md:py-3 md:text-lg lg:px-8'

const className = `${baseStyles} ${responsiveStyles}`
```

## 💡 Usage Examples

### Page Layout Pattern

Standard layout for all pages:

```typescript
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Button from '../../components/Button'

export default function PageName() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Page content sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Content */}
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
```

### Hero Section Pattern

Common hero section with CTA:

```typescript
<section className="bg-nexus-dark text-white min-h-screen flex items-center">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        Hero Title
      </h1>
      <p className="text-xl mb-12">
        Hero description text
      </p>
      <Button variant="primary" size="large" href="/contact">
        Call to Action
      </Button>
    </div>
  </div>
</section>
```

### Card Layout Pattern

Responsive card grids:

```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {items.map((item) => (
    <div key={item.id} className="bg-white p-8 rounded-lg shadow-sm">
      <h3 className="text-xl font-bold mb-4">{item.title}</h3>
      <p className="text-gray-600 mb-6">{item.description}</p>
      <Button variant="secondary" href={item.link}>
        Learn More
      </Button>
    </div>
  ))}
</div>
```

## 🚀 Creating New Components

### Step-by-Step Process

1. **Create component file**: `src/components/ComponentName.tsx`
2. **Define TypeScript interface** for props
3. **Implement component** following established patterns
4. **Add Tailwind styling** using design tokens
5. **Test responsive behavior**
6. **Document usage** in this file

### Component Template

```typescript
'use client' // Only if needed

import React from 'react'

interface ComponentNameProps {
  children: React.ReactNode
  variant?: 'default' | 'variant1' | 'variant2'
  size?: 'small' | 'medium' | 'large'
  className?: string
  // Add other props as needed
}

export default function ComponentName({ 
  children,
  variant = 'default',
  size = 'medium',
  className = '',
  ...otherProps 
}: ComponentNameProps) {
  const baseStyles = 'base-component-styles'
  
  const variantStyles = {
    default: 'default-variant-styles',
    variant1: 'variant1-styles',
    variant2: 'variant2-styles'
  }
  
  const sizeStyles = {
    small: 'small-size-styles',
    medium: 'medium-size-styles',
    large: 'large-size-styles'
  }
  
  const combinedClassName = `
    ${baseStyles} 
    ${variantStyles[variant]} 
    ${sizeStyles[size]} 
    ${className}
  `.trim()
  
  return (
    <div className={combinedClassName} {...otherProps}>
      {children}
    </div>
  )
}
```

### Naming Conventions

- **Components**: PascalCase (`ComponentName.tsx`)
- **Props interfaces**: PascalCase with "Props" suffix (`ComponentNameProps`)
- **CSS classes**: kebab-case for custom classes
- **Variants**: lowercase with hyphens (`'primary'`, `'secondary-white'`)

## ✅ Best Practices

### TypeScript

```typescript
// ✅ Good: Specific prop types
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'secondary-white'
  size: 'default' | 'large'
  children: React.ReactNode
}

// ❌ Avoid: Any types
interface ButtonProps {
  variant: any
  size: any
  children: any
}
```

### Styling

```typescript
// ✅ Good: Use design tokens
className="bg-nexus-yellow text-nexus-dark"

// ❌ Avoid: Arbitrary values
className="bg-[#ffd200] text-[#002332]"

// ✅ Good: Responsive design
className="text-base md:text-lg lg:text-xl"

// ❌ Avoid: Fixed sizes
className="text-lg"
```

### Accessibility

```typescript
// ✅ Good: Proper ARIA labels
<button aria-label="Close menu" onClick={handleClose}>
  <CloseIcon />
</button>

// ✅ Good: Semantic HTML
<nav role="navigation">
  <ul>
    <li><a href="/home">Home</a></li>
  </ul>
</nav>
```

### Performance

```typescript
// ✅ Good: Memoize expensive computations
const expensiveValue = useMemo(() => 
  computeExpensiveValue(props), [props]
)

// ✅ Good: Use callback for event handlers
const handleClick = useCallback(() => {
  // Handle click
}, [dependency])
```

### Component Composition

```typescript
// ✅ Good: Composable components
<Card>
  <Card.Header>
    <Card.Title>Title</Card.Title>
  </Card.Header>
  <Card.Content>
    Content here
  </Card.Content>
</Card>

// ✅ Good: Props spreading for flexibility
<Button {...commonProps} variant="primary">
  Click me
</Button>
```

## 🔍 Testing Components

### Manual Testing Checklist

- [ ] Component renders without errors
- [ ] All props work as expected
- [ ] Responsive design works on mobile, tablet, desktop
- [ ] Accessibility features work (screen readers, keyboard navigation)
- [ ] All variants display correctly
- [ ] Interactive elements work (hover, focus, click)
- [ ] TypeScript compilation passes without errors

### Browser Testing

Test components in:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Accessibility Testing

- Use browser dev tools accessibility panel
- Test keyboard navigation
- Verify color contrast ratios
- Test with screen reader if possible 