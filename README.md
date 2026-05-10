# Arclink Edge — Landing Page

Premium, SEO-optimized landing page for Arclink Edge IT Agency, Ahmedabad.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — animations
- **Lucide React** — icons
- **React Hook Form + Zod** — contact form validation

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Fill in your values in .env.local

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
arclink-edge/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata + JSON-LD
│   ├── page.tsx            # Homepage (assembles all sections)
│   ├── globals.css         # Global styles + CSS variables
│   ├── sitemap.ts          # Auto-generated sitemap.xml
│   ├── robots.ts           # robots.txt
│   ├── loading.tsx         # Page loading state
│   └── not-found.tsx       # Custom 404 page
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── LogoMarquee.tsx
│   │   ├── Services.tsx
│   │   ├── Stats.tsx
│   │   ├── CaseStudies.tsx
│   │   ├── Process.tsx
│   │   ├── TechStack.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Blog.tsx
│   │   ├── CTASection.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── BackToTop.tsx
│       ├── WhatsAppWidget.tsx
│       ├── CookieBanner.tsx
│       └── CustomCursor.tsx
├── lib/
│   ├── data.ts             # All static content / copy
│   ├── utils.ts            # Utility functions
│   ├── validations.ts      # Zod schemas
│   └── structured-data.ts  # JSON-LD schemas
└── types/
    └── index.ts            # TypeScript types
```

## Customization

All content lives in [`lib/data.ts`](lib/data.ts) — update services, case studies, testimonials, blog posts, and team info there without touching components.

Colors and design tokens are in [`app/globals.css`](app/globals.css) as CSS custom properties.

## Production Build

```bash
npm run build
npm run start
```

## SEO Features

- Full Next.js Metadata API in `app/layout.tsx`
- Open Graph + Twitter Card tags
- JSON-LD structured data (Organization, LocalBusiness, WebSite, BreadcrumbList, Services)
- Auto-generated `sitemap.xml` and `robots.txt`
- Semantic HTML5 throughout
- All images via `next/image` (WebP/AVIF + lazy loading)
