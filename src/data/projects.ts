import type { Project } from '@/types/portfolio';

export const projects: Project[] = [
  {
    id: 'round-smarter',
    title: 'Round Smarter',
    subtitle: 'AI-Powered Physician Rounding Assistant',
    description:
      'A Healthcare SaaS platform enabling physicians to manage patient census, view clinical records (labs, vitals, medications), and generate AI-assisted SOAP notes via a conversational chat interface.',
    challenge:
      'Physicians needed a fast, hands-free tool to generate clinical notes during rounds without disrupting their workflow. The platform had to handle 100+ patient records smoothly while minimizing repeat API calls in clinical environments with poor connectivity.',
    solution:
      'Built the complete frontend with IndexedDB caching via DexieJS to store master data client-side, reducing repeat API calls by 60–70% per session. Applied react-window virtualization for smooth rendering of large patient lists, and integrated Web Speech API for hands-free SOAP note dictation.',
    impact: [
      '60–70% reduction in repeat API calls via client-side IndexedDB caching',
      'Smooth patient list rendering at 100+ records via virtualization',
      'Hands-free SOAP note dictation via Web Speech API integration',
      'Multi-stage Docker builds cut image size significantly across environments',
    ],
    techStack: [
      'React.js', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'DexieJS',
      'Web Speech API', 'react-window', 'Docker', 'Nginx',
    ],
    highlights: [
      'Client-side IndexedDB caching with DexieJS',
      'AI-assisted SOAP note generation',
      'Hands-free voice dictation',
      'Multi-stage Docker containerization',
      'Healthcare SaaS architecture',
    ],
    featured: true,
    order: 1,
    category: 'Healthcare SaaS',
    role: 'React.js Developer',
    duration: 'April 2023 - Present',
    links: {
      live: 'https://nakul-yadav-portfolio.vercel.app', // Placeholder or real link
    },
  },
  {
    id: 'texas-hub',
    title: 'Texas Hub',
    subtitle: 'An enterprise E-commerce suite featuring a customer portal and a warehouse admin panel with camera/hardware barcode scanning.',
    description:
      'A production-grade dual-application suite built for an e-commerce business. It comprises an internal admin dashboard for warehouse shipping and multi-currency catalog management, and a customer-facing portal with a unified shopping cart and order tracking.',
    challenge:
      'The warehouse management side required real-time barcode scanning that prevented scan conflicts between concurrent packaging sessions. The client-facing website required localized multi-currency checkout, route-splitting for bundle sizes, and role-based route guards.',
    solution:
      'Developed both systems using React 19, Vite 7, and Material UI. Built a unified shopping cart utilizing Redux Toolkit, integrated html5-qrcode for webcam barcode scanning, set up Axios request/response interceptors for JWT session management, and configured tag-based cache invalidation via RTK Query.',
    impact: [
      'Implemented real-time barcode scanning (hardware scanner & camera-based html5-qrcode) to eliminate warehouse inventory scan conflicts',
      'Unified regular products and spare parts under a single, high-performance Redux Toolkit cart slice with dynamic price recalculation',
      'Established secure role-based routing (Public, Auth-only, Private) across all portals utilizing React Router DOM',
      'Optimized initial script payload size using React.lazy code-splitting and a custom Loadable higher-order fallback component',
    ],
    techStack: [
      'React 19', 'Vite 7', 'Redux Toolkit', 'RTK Query', 'Material UI (MUI v7)',
      'Axios', 'html5-qrcode', 'CKEditor 5', 'Yup', 'React Router v7',
    ],
    highlights: [
      'Warehouse Barcode Scanning (Camera + Gun)',
      'Single RTK Query baseApi Architecture',
      'Unified Shopping Cart (Products + Parts)',
      'Multi-Currency Support (USD, CAD, EUR, ILS)',
      'Role-Based Routing Guards',
    ],
    featured: true,
    order: 2,
    category: 'E-commerce & Warehouse Management',
    role: 'React.js Developer',
    duration: 'November 2023 - March 2024',
    links: {
      live: 'https://texas-hub.com',
    },
  },
  {
    id: 'mmf-infotech-ai',
    title: 'MMF Infotech AI',
    subtitle: 'MMF Infotech — AI & Automation Corporate Website',
    description:
      'A high-performance corporate marketing website and lead-generation engine for an AI automation and IT services firm. It features multi-level dynamic service pages, a headless WordPress blog, and interactive case study displays.',
    challenge:
      'The platform required a complex dynamic catalog representing 20+ sub-services, full GDPR cookie compliance, GSAP scroll animations running at 60fps, and headless WordPress API synchronization with dynamic meta tags for SEO.',
    solution:
      'Architected the Next.js App Router website using a two-level dynamic routing structure, headless WordPress CMS with Incremental Static Regeneration (ISR), GSAP ScrollTrigger + Lenis smooth scroll provider, and a consent-first tracking policy via CookieYes.',
    impact: [
      'Configured 6 JSON-LD Schema types (Organization, WebSite, Service, FAQPage, LocalBusiness) to achieve maximum search engine indexing',
      'Built a headless WordPress blog integration with Incremental Static Regeneration (ISR revalidate: 60) for near-instant page loading',
      'Engineered smooth 60fps animations by syncing GSAP ScrollTrigger timelines directly to the Lenis requestAnimationFrame ticker',
      'Implemented a GDPR-compliant CookieYes consent flow that blocks GTM/GA4 scripting hooks until visitor approval is verified',
    ],
    techStack: [
      'Next.js 16', 'React 19', 'Tailwind CSS v4', 'GSAP', 'Lenis',
      'Swiper.js', 'React Hook Form', 'Yup', 'WordPress REST API', 'JSON-LD Schema',
    ],
    highlights: [
      'Multi-Level Dynamic Service Pages',
      'Headless WordPress Blog Integration',
      'GSAP & Lenis Smooth Animations',
      'Advanced Schema JSON-LD SEO Infrastructure',
      'GDPR CookieYes Consent Flow',
    ],
    featured: true,
    order: 3,
    category: 'B2B AI Services',
    role: 'Next.js & Frontend Developer',
    duration: 'April 2023 - Present',
    links: {
      live: 'https://mmfinfotech.ai',
    },
  },
  {
    id: '30-minutes-fix',
    title: '30 Minutes Fix',
    subtitle: 'A premium React-based repair booking platform with custom calendar scheduling, Stripe & PayPal checkouts, device diagnostics canvas patterns, and automated dynamic SEO sitemaps.',
    description:
      'A large-scale multi-module SPA for a device repair platform covering repair booking, DIY parts e-commerce, protection plans, insurance quotes, and a user dashboard using React 18, Vite, Redux Toolkit, and MUI v5.',
    challenge:
      'The platform needed to manage 18+ Redux slices for a complex multi-step booking engine while integrating multiple payment providers (Stripe, ZipPay, PayPal) with different success/failure redirect flows.',
    solution:
      'Built a multi-step booking engine (device → brand → model → issue → Stripe checkout) with slug-based dynamic routing. Integrated Google Maps geolocation for nearest-store routing, Google OAuth, Intercom live chat, and auto-generated sitemaps.',
    impact: [
      'Minimized rendering bottlenecks and API query volume through debounced virtualized dropdown list components (react-window)',
      'Designed a robust dynamic sitemap pipeline fetching slugs directly from REST API endpoints to boost Google SEO visibility',
      'Created a secure, client-side pattern drawing interface to save technician diagnostic unlocking codes without plaintext exposure',
    ],
    techStack: [
      'React.js', 'Redux Toolkit', 'Formik', 'MUI (Material UI)', 'Vite',
      'Google Maps API', 'Stripe SDK', 'react-window',
    ],
    highlights: [
      'Multi-Step Repair Booking Flow',
      'Canvas-based Pattern Lock Diagnostic Tool',
      'Dynamic Calendars & Geolocation Scheduling',
      'Virtualized High-Throughput Search',
      'Automated Dynamic Multi-Section XML Sitemap Generator',
    ],
    featured: true,
    order: 4,
    category: 'Repair Booking & E-Commerce SaaS',
    role: 'Lead Frontend Developer',
    duration: 'April 2024 - Present',
    gallery: [
      {
        type: 'image',
        url: '/images/projects/30-minutes-fix-dashboard.png',
        caption: 'Dynamic main dashboard view',
      },
    ],
    links: {
      live: 'https://30minutesfix.com',
    },
  },
];
