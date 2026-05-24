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
  },
  {
    id: 'texas-hub',
    title: 'Texas Hub',
    subtitle: 'E-commerce Platform — Admin Panel & Customer Portal',
    description:
      'Two production applications for the same e-commerce platform: an internal admin panel with multi-currency catalog management and a customer-facing portal with unified cart, multi-currency checkout, and order tracking.',
    challenge:
      'The platform needed to handle multiple currencies (USD/EUR/ILS/CAD), a complex 4-stage order workflow, and a barcode scanning system that eliminated conflicts between concurrent warehouse sessions.',
    solution:
      'Designed a dual-input barcode scanning system (hardware scanner + webcam via html5-qrcode) with audio feedback and real-time item verification. Implemented RTK Query tag invalidation to eliminate scan-count conflicts between concurrent sessions.',
    impact: [
      '60–70% reduction in per-item verification time vs manual checklist',
      'Zero scan-count conflicts between concurrent warehouse sessions',
      'Supports 4 currencies: USD, CAD, EUR, ILS',
      'Lazy-loaded routes scoped initial bundle to auth/landing screens only',
    ],
    techStack: [
      'React.js', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'html5-qrcode',
      'JWT', 'Axios', 'Tailwind CSS', 'Vite',
    ],
    highlights: [
      'Dual-input barcode scanning system',
      'Multi-currency checkout (USD/CAD/EUR/ILS)',
      'RTK Query tag-based cache invalidation',
      'Role-based route guards (3 route types)',
      'Admin panel + customer portal',
    ],
    featured: true,
    order: 2,
  },
  {
    id: 'mmf-infotech-ai',
    title: 'MMF Infotech AI',
    subtitle: 'Corporate B2B AI Services Website',
    description:
      'A production B2B marketing website for an AI services company covering 5 service categories with 20+ sub-service pages. Built with Next.js App Router using SSG, ISR, CSR, and SSR rendering strategies.',
    challenge:
      'The site required full SEO optimization with complex schema markup, a headless WordPress blog with ISR caching, and environment-aware deployment with proper indexing flags.',
    solution:
      'Implemented full SEO infrastructure: 6 JSON-LD schema types (Organization, Service, FAQPage, LocalBusiness, etc.), dynamic sitemap, Open Graph, and ISR-cached headless WordPress blog with infinite scroll — deployed with environment-aware indexing flags.',
    impact: [
      '6 JSON-LD schema types for maximum search visibility',
      'ISR blog caching for performance with dynamic content',
      'Environment-aware sitemap/robots configuration',
      'Two-level dynamic service routing architecture',
    ],
    techStack: [
      'Next.js', 'TypeScript', 'App Router', 'ISR', 'SSG', 'SSR',
      'JSON-LD', 'WordPress API', 'Tailwind CSS',
    ],
    highlights: [
      '6 JSON-LD schema types',
      'ISR-cached WordPress blog',
      'Environment-aware SEO configuration',
      'Next.js App Router architecture',
      'B2B marketing website',
    ],
    featured: true,
    order: 3,
  },
  {
    id: '30-minutes-fix',
    title: '30 Minutes Fix',
    subtitle: 'Repair Booking Platform',
    description:
      'A large-scale multi-module SPA for a device repair platform covering repair booking, DIY parts e-commerce, protection plans, insurance quotes, and a user dashboard using React 18, Vite, Redux Toolkit, and MUI v5.',
    challenge:
      'The platform needed to manage 18+ Redux slices for a complex multi-step booking engine while integrating multiple payment providers (Stripe, ZipPay, PayPal) with different success/failure redirect flows.',
    solution:
      'Built a multi-step booking engine (device → brand → model → issue → Stripe checkout) with slug-based dynamic routing. Integrated Google Maps geolocation for nearest-store routing, Google OAuth, Intercom live chat, and auto-generated sitemaps.',
    impact: [
      '18+ Redux slices managing complex multi-module state',
      '3 payment providers: Stripe, ZipPay, PayPal',
      'Google Maps geolocation for nearest repair store',
      'Isolated dev/staging/production environments via Vite mode flags',
    ],
    techStack: [
      'React 18', 'Vite', 'Redux Toolkit', 'MUI v5', 'TypeScript',
      'Stripe', 'Google Maps API', 'Google OAuth', 'Intercom',
    ],
    highlights: [
      'Multi-step repair booking engine',
      '3 payment gateway integrations',
      'Google Maps nearest-store routing',
      '18+ Redux slices',
      'Multi-environment Vite deployment',
    ],
    featured: true,
    order: 4,
  },
];
