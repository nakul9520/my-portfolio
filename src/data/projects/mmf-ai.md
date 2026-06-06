# MMF Infotech — AI & Automation Services Website (mmf-ai)

### CV-Ready Project Description

---

## 🏢 Project Overview

**Project Name:** MMF Infotech — AI & Automation Corporate Website  
**Live URL:** [mmfinfotech.ai](https://mmfinfotech.ai)  
**Type:** Production-grade B2B Marketing & Service website  
**Company:** MMF Infotech Technologies Pvt. Ltd., Indore, India  
**Role:** Frontend Developer (Next.js)

---

## 📝 Short Description (1–2 Lines for CV)

> Developed and maintained the official corporate website for **MMF Infotech** — an AI & automation services company — using **Next.js 16**, **React 19**, **GSAP**, and **Tailwind CSS**, focusing on performance, SEO, and smooth UX.

---

## 📝 Detailed Project Description (for CV / Portfolio)

Designed and developed a high-performance, SEO-optimised corporate website for **MMF Infotech Technologies Pvt. Ltd.**, an IT services company specialising in AI automation, data intelligence, full-stack engineering, ecommerce growth, and cloud/DevOps solutions. The website serves as the company's primary digital presence, marketing platform, and lead-generation engine.

The project encompasses a multi-page marketing website with dynamic service pages, a blog powered by a headless WordPress CMS, a contact/quote form with server actions, case studies, and geo-targeted city landing pages — all built with best-in-class Next.js App Router architecture.

---

## 🛠️ Tech Stack

| Category               | Technology                                                |
| ---------------------- | --------------------------------------------------------- |
| **Framework**          | Next.js 16 (App Router)                                   |
| **UI Library**         | React 19                                                  |
| **Styling**            | Tailwind CSS v4                                           |
| **Animations**         | GSAP 3 + ScrollTrigger, Lenis (smooth scroll)             |
| **UI Components**      | Headless UI, Swiper.js, Iconify                           |
| **Forms**              | React Hook Form + Yup validation                          |
| **CMS / Blog**         | Headless WordPress REST API                               |
| **Analytics**          | Google Analytics 4 (GA4), Google Tag Manager (GTM)        |
| **SEO**                | JSON-LD Schema, Open Graph, Twitter Card, dynamic sitemap |
| **Consent Management** | CookieYes                                                 |
| **Fonts**              | Raleway (headings) + Satoshi (body)                       |
| **Language**           | JavaScript (JSX)                                          |
| **Deployment**         | Production environment via `next start`                   |

---

## 🔑 Key Features Built

### 1. **Multi-Level Dynamic Service Pages**

- Built a two-level dynamic routing architecture: `/services/[serviceSlug]` and `/services/[serviceSlug]/[subServiceSlug]`
- Covers **5 service categories** with **20+ sub-services**: AI & Automation Consulting, AI Engineering & Data Intelligence, Full-Stack Engineering, Ecommerce & Growth Engineering, Cloud/DevOps & CI/CD
- Each page is fully SEO-optimised with unique metadata, dynamic Open Graph images, JSON-LD Service Schema, and canonical URLs

### 2. **Headless WordPress Blog Integration**

- Integrated a headless WordPress REST API (`blog.mmfinfotech.ai`) as a CMS for the blog section
- Built custom `getAllPosts()` and `getPostBySlug()` data-fetching utilities with ISR (`revalidate: 60`)
- Implemented infinite scroll on the blog listing page with Yoast SEO field extraction (meta title, description, OG image)
- Paginated post listing backed by `X-WP-Total` and `X-WP-TotalPages` headers

### 3. **Performance-Optimised Architecture**

- Used Next.js `dynamic()` imports to code-split below-the-fold sections, reducing initial JS bundle size
- Configured image optimisation with AVIF + WebP formats, responsive device sizes, and approved remote domains
- Removed `console.log` in production builds via Next.js compiler configuration
- Smooth scrolling implemented with **Lenis** synced to **GSAP RAF ticker** for 60fps animations

### 4. **Rich Animations & Micro-Interactions**

- Integrated **GSAP 3 + ScrollTrigger** for scroll-driven animations across home and service pages
- Implemented **Lenis smooth scroll** provider wrapping the entire app, with automatic scroll-to-top on route changes and ScrollTrigger cleanup on unmount
- Used **Swiper.js** for testimonial and content carousels

### 5. **Advanced SEO Infrastructure**

- Implemented multiple JSON-LD Schema types: `Organization`, `WebSite`, `Service`, `FAQPage`, `LocalBusiness`
- Dynamic sitemap generation (`/sitemap.xml`) — environment-aware (empty on staging, full on production)
- `robots.js` with environment-aware indexing flags (`NEXT_PUBLIC_ALLOW_INDEXING`)
- Open Graph image generation with `opengraph-image.js` for service pages
- Google Search Console verification, canonical tags, and full Next.js Metadata API usage

### 6. **Contact / Get Quote Forms**

- Built forms using **React Hook Form** with **Yup** schema validation
- Connected to backend via **Next.js Server Actions** for secure form submission
- Custom reusable UI components: `CMButton`, `CMInput`, `CMSelect`, `CMAutocomplete`, `Textarea`

### 7. **Geo-Targeted City Landing Pages**

- Created city-specific landing pages for local SEO with `LocalBusiness` JSON-LD schema and GeoCoordinates for each office location

### 8. **Third-Party Integrations**

- **Google Analytics 4** via `@next/third-parties` — loaded after interactive
- **Google Tag Manager** — loaded in body for event tracking
- **CookieYes** — loaded `beforeInteractive` as per GDPR consent-first strategy (before GTM/GA)
- **Calendly** scheduling link integration for discovery call bookings

### 9. **Multi-Environment Configuration**

- Separate `.env.development`, `.env.production` configurations
- Environment-based toggling for GA, GTM, CookieYes, indexing, and site URL
- `www` → non-`www` 301 permanent redirect via Next.js `redirects()` config for URL canonicalization

---

## 📁 Project Structure Highlights

```
src/
├── app/
│   ├── (main)/               # App routes (Home, About, Blog, Services, etc.)
│   │   ├── services/
│   │   │   └── [serviceSlug]/
│   │   │       └── [subServiceSlug]/  # Two-level dynamic service routes
│   │   ├── blog/[slug]/       # Individual blog post pages
│   │   ├── case-studies/      # Case study pages
│   │   ├── cities/            # Geo-targeted city pages
│   │   ├── contact-us/
│   │   └── get-quote/
│   ├── actions/               # Next.js Server Actions (form submission)
│   ├── sitemap.js             # Dynamic sitemap generation
│   └── robots.js              # SEO robots configuration
├── components/
│   ├── home/                  # Hero, WhatWeDo, AIIntegratedStacked, etc.
│   ├── services/              # Service banners, grids, sub-service layouts
│   ├── blog/                  # BlogCard, BlogBanner, InfinitePostGrid
│   ├── about-us/              # About page sections
│   ├── layout/                # Header & Footer
│   ├── seo/                   # JSON-LD Schema components
│   ├── ui/                    # Reusable UI (Button, Input, Select, etc.)
│   └── providers/             # SmoothScrollProvider, IconProvider
├── config/
│   ├── service/               # Per-category service content (AI, Cloud, etc.)
│   ├── navConfig.js           # Mega menu navigation config
│   ├── siteConfig.js          # Site-wide settings
│   └── officeLocations.js     # Office data for LocalBusiness schema
└── lib/
    ├── wordpress.js            # WordPress REST API data-fetching utilities
    └── validation.schema.js   # Yup form validation schemas
```

---

## 🎯 My Responsibilities

- Architected and implemented the full Next.js App Router project from scratch
- Built dynamic, SEO-optimised service and sub-service pages with JSON-LD schema markup
- Integrated headless WordPress REST API for the company blog with ISR caching
- Implemented GSAP + Lenis animations for a premium, interactive user experience
- Set up GA4, GTM, and CookieYes with environment-aware loading strategy
- Built reusable form components with React Hook Form + Yup validation
- Configured multi-environment deployment pipeline with Next.js
- Implemented dynamic sitemap, robots.txt, Open Graph metadata, and canonical URL strategy

---

## 📊 Impact / Highlights

- 🚀 **Production website** serving a live B2B AI services company
- 📈 Full **SEO infrastructure** (sitemap, 6 schema types, Open Graph, GA4) for organic growth
- ⚡ Optimised **load performance** via code splitting, ISR caching, AVIF/WebP images
- 🌍 **Multi-city local SEO** targeting to support geographic market expansion
- 🔐 **GDPR-compliant** cookie consent management (CookieYes before GTM/GA)
- 🎨 Premium **animation layer** with GSAP ScrollTrigger + Lenis smooth scroll
- 📝 **Headless WordPress blog** — decoupled CMS with ISR for fast, auto-updated content

---

## 🔗 Technologies for CV Keywords

`Next.js` · `React.js` · `JavaScript` · `Tailwind CSS` · `GSAP` · `Lenis` · `Swiper.js` · `React Hook Form` · `Yup` · `WordPress REST API` · `Headless CMS` · `ISR` · `Google Analytics 4` · `Google Tag Manager` · `JSON-LD Schema` · `SEO` · `Server Actions` · `App Router` · `Dynamic Routing` · `CookieYes` · `Headless UI` · `Open Graph`
