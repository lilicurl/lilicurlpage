# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Liliana Castellanos (lilicurlpage), built with Next.js 15.5.6, React 19.1.0, TypeScript, and Tailwind CSS 4. The project uses the Next.js App Router architecture with Turbopack for faster builds.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production with Turbopack
npm run build

# Start production server
npm start
```

Development server runs at http://localhost:3000

## Project Structure

### Application Architecture

- **App Router**: Uses Next.js App Router (`app/` directory)
  - `app/page.tsx`: Main landing page that composes section components
  - `app/layout.tsx`: Root layout with font configuration (Montserrat, Poppins) and metadata
  - `app/globals.css`: Global styles including CSS variables for theming and custom utilities

### Component Organization

- **Section Components** (`components/`): Page sections as client components
  - `home.tsx`: Hero section with animated canvas network visualization
  - `about.tsx`: About Me section
  - `portfolio.tsx`: Portfolio section (currently placeholder)
  - `nav.tsx`: Navigation menu using Radix UI NavigationMenu

- **UI Components** (`components/ui/`): shadcn/ui components
  - Pre-configured Radix UI primitives (Button, NavigationMenu, Alert, AlertDialog, Accordion)
  - Styled with Tailwind CSS using the `cn()` utility

### Styling System

- **Tailwind CSS 4** with PostCSS plugin architecture
- **Font Configuration**: Montserrat (headings) and Poppins (body text) loaded via `next/font/google`
- **Design Tokens**: CSS variables in `globals.css` for colors, spacing, and theming
- **Dark Mode**: Configured via `class` strategy in `tailwind.config.ts`
- **Custom Utilities**:
  - `.gradient-text`: Blue-purple-pink gradient text effect
  - CSS variables for consistent theming (light/dark mode support)

### TypeScript Configuration

- Path alias `@/*` maps to project root for clean imports
- Target: ES2017 with strict mode enabled
- Configured for Next.js with incremental compilation

## Key Implementation Details

### Client-Side Interactivity

All section components are marked `'use client'` because they:
- Use React hooks (useState, useEffect, useRef)
- Implement canvas animations (home.tsx)
- Handle browser-only APIs

### Canvas Animation (Home Section)

The home hero section includes a custom network visualization:
- 50 animated nodes with physics-based movement
- Dynamic connections between nearby nodes (< 100px distance)
- Responsive canvas that resizes with window
- Implemented using Canvas API and requestAnimationFrame

### Navigation

Single-page app with anchor links for navigation:
- Home: `/`
- About: `#about`
- Portfolio: `#portfolio`
- External routes planned: `/experience`, `/contact`
- Uses `scroll-mt-20` utility for proper anchor positioning with fixed navigation

### Styling Utilities

The `lib/utils.ts` provides the `cn()` helper that merges clsx and tailwind-merge for conditional class application, commonly used in UI components.

## Technology Stack

- **Framework**: Next.js 15.5.6 with Turbopack
- **UI Library**: React 19.1.0
- **Styling**: Tailwind CSS 4, tailwindcss-animate
- **Component Library**: Radix UI primitives (@radix-ui/react-*)
- **Utilities**:
  - class-variance-authority (CVA for component variants)
  - clsx & tailwind-merge (class merging)
  - lucide-react (icons)

## Notes for Development

- All components use the `@/*` alias for imports
- shadcn/ui components are pre-installed in `components/ui/`
- The site uses a gradient aesthetic (pink, purple, blue tones)
- Content is currently in Spanish (lang="es") with some English text
- No test suite or linting configured yet
