import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "round-smarter",
    title: "Round Smarter",
    subtitle:
      "AI-Powered Physician Rounding Assistant for streamlined clinical documentation.",
    description:
      "A dynamic Healthcare SaaS web application designed for doctors to manage patient censuses, view clinical records (vitals, labs, medications), and automate SOAP note generation via an integrated AI chat interface.",
    challenge:
      "Physicians required hands-free note dictation during rounds without interrupting workflows, while the client needed to load huge lists of active patients and run batch note generation without locking the thread or causing database lag.",
    solution:
      "Developed the React 19 app using Vite. Implemented IndexedDB caching via DexieJS (with 7-day TTL) for static medicine catalogs, mapped virtual lists using react-window, integrated voice transcription APIs, and containerized the system using Docker and Nginx.",
    impact: [
      "Engineered a high-performance patient list with react-window virtualization to render 100+ records smoothly at high frame rates",
      "Integrated DexieJS (IndexedDB) with a 7-day TTL caching strategy to reduce duplicate API queries for medical and diagnosis catalogs",
      "Built a hands-free voice-to-text dictation feature using react-speech-recognition to capture clinical notes on-the-go",
      "Configured multi-stage Docker builds with Nginx to deploy static assets across separate development, staging, and production zones",
    ],
    techStack: [
      "React 19",
      "Vite 6.1",
      "Material UI (MUI v6)",
      "Redux Toolkit",
      "React Router v7",
      "Axios",
      "DexieJS (IndexedDB)",
      "Formik",
      "react-speech-recognition",
      "react-window",
      "Docker",
      "Nginx",
    ],
    highlights: [
      "Patient Census Dashboard (Virtualized)",
      "AI Chat Panel with Markdown & Voice dictation",
      "Structured SOAP Note Generation & Revision",
      "IndexedDB Caching via DexieJS",
      "Multi-stage Docker & Nginx Deployment",
    ],
    featured: true,
    order: 1,
    category: "Healthcare SaaS",
    role: "Frontend Developer",
    duration: "April 2023 - Present",
    links: {
      live: "https://app.roundsmarter.com",
    },
  },
  {
    id: "texas-hub",
    title: "Texas Hub",
    subtitle:
      "An enterprise E-commerce suite featuring a customer portal and a warehouse admin panel with camera/hardware barcode scanning.",
    description:
      "A production-grade dual-application suite built for an e-commerce business. It comprises an internal admin dashboard for warehouse shipping and multi-currency catalog management, and a customer-facing portal with a unified shopping cart and order tracking.",
    challenge:
      "The warehouse management side required real-time barcode scanning that prevented scan conflicts between concurrent packaging sessions. The client-facing website required localized multi-currency checkout, route-splitting for bundle sizes, and role-based route guards.",
    solution:
      "Developed both systems using React 19, Vite 7, and Material UI. Built a unified shopping cart utilizing Redux Toolkit, integrated html5-qrcode for webcam barcode scanning, set up Axios request/response interceptors for JWT session management, and configured tag-based cache invalidation via RTK Query.",
    impact: [
      "Implemented real-time barcode scanning (hardware scanner & camera-based html5-qrcode) to eliminate warehouse inventory scan conflicts",
      "Unified regular products and spare parts under a single, high-performance Redux Toolkit cart slice with dynamic price recalculation",
      "Established secure role-based routing (Public, Auth-only, Private) across all portals utilizing React Router DOM",
      "Optimized initial script payload size using React.lazy code-splitting and a custom Loadable higher-order fallback component",
    ],
    techStack: [
      "React 19",
      "Vite 7",
      "Redux Toolkit",
      "RTK Query",
      "Material UI (MUI v7)",
      "Axios",
      "html5-qrcode",
      "CKEditor 5",
      "Yup",
      "React Router v7",
    ],
    highlights: [
      "Warehouse Barcode Scanning (Camera + Gun)",
      "Single RTK Query baseApi Architecture",
      "Unified Shopping Cart (Products + Parts)",
      "Multi-Currency Support (USD, CAD, EUR, ILS)",
      "Role-Based Routing Guards",
    ],
    featured: true,
    order: 2,
    category: "E-commerce & Warehouse Management",
    role: "React.js Developer",
    duration: "November 2023 - March 2024",
    links: {
      live: "https://texas-hub.com",
    },
  },
  {
    id: "mmf-infotech-ai",
    title: "MMF Infotech AI",
    subtitle: "MMF Infotech — AI & Automation Corporate Website",
    description:
      "A high-performance corporate marketing website and lead-generation engine for an AI automation and IT services firm. It features multi-level dynamic service pages, a headless WordPress blog, and interactive case study displays.",
    challenge:
      "The platform required a complex dynamic catalog representing 20+ sub-services, full GDPR cookie compliance, GSAP scroll animations running at 60fps, and headless WordPress API synchronization with dynamic meta tags for SEO.",
    solution:
      "Architected the Next.js App Router website using a two-level dynamic routing structure, headless WordPress CMS with Incremental Static Regeneration (ISR), GSAP ScrollTrigger + Lenis smooth scroll provider, and a consent-first tracking policy via CookieYes.",
    impact: [
      "Configured 6 JSON-LD Schema types (Organization, WebSite, Service, FAQPage, LocalBusiness) to achieve maximum search engine indexing",
      "Built a headless WordPress blog integration with Incremental Static Regeneration (ISR revalidate: 60) for near-instant page loading",
      "Engineered smooth 60fps animations by syncing GSAP ScrollTrigger timelines directly to the Lenis requestAnimationFrame ticker",
      "Implemented a GDPR-compliant CookieYes consent flow that blocks GTM/GA4 scripting hooks until visitor approval is verified",
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS v4",
      "GSAP",
      "Lenis",
      "Swiper.js",
      "React Hook Form",
      "Yup",
      "WordPress REST API",
      "JSON-LD Schema",
    ],
    highlights: [
      "Multi-Level Dynamic Service Pages",
      "Headless WordPress Blog Integration",
      "GSAP & Lenis Smooth Animations",
      "Advanced Schema JSON-LD SEO Infrastructure",
      "GDPR CookieYes Consent Flow",
    ],
    featured: true,
    order: 3,
    category: "B2B AI Services",
    role: "Next.js & Frontend Developer",
    duration: "April 2023 - Present",
    gallery: [
      {
        type: "video",
        url: "https://res.cloudinary.com/df2wabyza/video/upload/v1780915113/home-page_nrjs09.mp4",
        thumbnail: "/projects/mmf-ai/home-page.webp",
        caption:
          "Home page — animated hero, services overview & lead generation",
      },
      {
        type: "video",
        url: "https://res.cloudinary.com/df2wabyza/video/upload/v1780915143/service-pages_hgeijs.mp4",
        thumbnail: "/projects/mmf-ai/home-page.webp",
        caption:
          "Multi-level dynamic service pages with GSAP scroll animations",
      },
      {
        type: "image",
        url: "/projects/mmf-ai/home-page.webp",
        caption: "MMF Infotech AI — Home page",
      },
      {
        type: "image",
        url: "/projects/mmf-ai/get-quote.webp",
        caption:
          "Get Quote form — lead generation with React Hook Form & Yup validation",
      },
    ],
    links: {
      live: "https://mmfinfotech.ai",
    },
  },
  {
    id: "30-minutes-fix",
    title: "30 Minutes Fix",
    subtitle:
      "A premium React-based repair booking platform with custom calendar scheduling, Stripe & PayPal checkouts, device diagnostics canvas patterns, and automated dynamic SEO sitemaps.",
    description:
      "A large-scale multi-module SPA for a device repair platform covering repair booking, DIY parts e-commerce, protection plans, insurance quotes, and a user dashboard using React 18, Vite, Redux Toolkit, and MUI v5.",
    challenge:
      "The platform needed to manage 18+ Redux slices for a complex multi-step booking engine while integrating multiple payment providers (Stripe, ZipPay, PayPal) with different success/failure redirect flows.",
    solution:
      "Built a multi-step booking engine (device → brand → model → issue → Stripe checkout) with slug-based dynamic routing. Integrated Google Maps geolocation for nearest-store routing, Google OAuth, Intercom live chat, and auto-generated sitemaps.",
    impact: [
      "Minimized rendering bottlenecks and API query volume through debounced virtualized dropdown list components (react-window)",
      "Designed a robust dynamic sitemap pipeline fetching slugs directly from REST API endpoints to boost Google SEO visibility",
      "Created a secure, client-side pattern drawing interface to save technician diagnostic unlocking codes without plaintext exposure",
    ],
    techStack: [
      "React.js",
      "Redux Toolkit",
      "Formik",
      "MUI (Material UI)",
      "Vite",
      "Google Maps API",
      "Stripe SDK",
      "react-window",
    ],
    highlights: [
      "Multi-Step Repair Booking Flow",
      "Canvas-based Pattern Lock Diagnostic Tool",
      "Dynamic Calendars & Geolocation Scheduling",
      "Virtualized High-Throughput Search",
      "Automated Dynamic Multi-Section XML Sitemap Generator",
    ],
    featured: true,
    order: 4,
    category: "Repair Booking & E-Commerce SaaS",
    role: "Lead Frontend Developer",
    duration: "April 2024 - Present",
    links: {
      live: "https://30minutesfix.com",
    },
  },
  {
    id: "zixisoft",
    title: "Zixisoft",
    subtitle:
      "A static web application for an IT company featuring dual-portal registration for Agencies and Developers with smooth animations and custom form validation.",
    description:
      "A freelance project built for Zixisoft IT Company — a static web application that bridges agencies looking to post jobs with developers seeking opportunities. The platform features two distinct registration and login flows, a live job listings board, and an agency job-creation form, all wrapped in a modern animated interface.",
    challenge:
      "The platform needed to serve two completely different user types — Agencies and Developers — each with their own registration, login, and dashboard flows. Both form sets required thorough custom validation to prevent erroneous submissions, while the UI had to feel polished and engaging without a heavy backend.",
    solution:
      "Built the entire application with React JS and Vite for rapid, optimised development. Implemented separate Agency and Developer registration/login portals with distinct routing, integrated smooth page and component-level animations for a modern feel, and authored comprehensive client-side form validations for both user types to ensure data accuracy before submission.",
    impact: [
      "Delivered the full project on time and within budget as a freelance engagement",
      "Designed and implemented dual-portal architecture (Agency + Developer) with isolated routing and validation logic",
      "Built a dynamic job listings board and an agency-facing job-creation form with end-to-end custom validation",
      "Achieved a modern, engaging UX through smooth animations integrated across all key pages and transitions",
    ],
    techStack: [
      "React.js",
      "Vite",
      "React Router",
      "CSS Animations",
      "Custom Form Validation",
    ],
    highlights: [
      "Dual-Portal Agency & Developer Registration",
      "Custom Client-Side Form Validation",
      "Smooth Page & Component Animations",
      "Live Job Listings Board",
      "Agency Job Creation Form",
    ],
    featured: true,
    order: 5,
    category: "Freelance · Corporate Web App",
    role: "Freelance Frontend Developer",
    duration: "2024",
    gallery: [
      {
        type: "video",
        url: "https://res.cloudinary.com/df2wabyza/video/upload/v1780915450/zixisoft-home-page_ousxuk.mp4",
        thumbnail: "/projects/zixisoft/home-thumb.webp",
        caption: "Home page overview with animated hero section",
      },
      {
        type: "video",
        url: "https://res.cloudinary.com/df2wabyza/video/upload/v1780915468/hire-team-page_tgnsih.mp4",
        thumbnail: "/projects/zixisoft/hire-team-thumb.webp",
        caption: "Hire Team page — agency job listings & creation flow",
      },
      {
        type: "video",
        url: "https://res.cloudinary.com/df2wabyza/video/upload/v1780915444/for-developer-page_u2sfcd.mp4",
        thumbnail: "/projects/zixisoft/home-thumb.webp",
        caption: "For Developer page — job opportunities & developer flow",
      },
      {
        type: "image",
        url: "/projects/zixisoft/agency-register.webp",
        caption: "Agency registration form with custom validation",
      },
      {
        type: "image",
        url: "/projects/zixisoft/developer-register.webp",
        caption: "Developer registration form with custom validation",
      },
      {
        type: "image",
        url: "/projects/zixisoft/login.webp",
        caption: "Login page — clean and minimal auth interface",
      },
    ],
    links: {
      live: "https://zixi-soft-frontend.vercel.app/",
    },
  },
  {
    id: "nexxusone",
    title: "Nexxusone",
    subtitle:
      "A scalable, real-time security management platform unifying public safety operations across multiple specialized user roles with live communication, case management, and location tracking.",
    description:
      "Nexxusone is a mission-critical security management platform designed to streamline public safety operations. It provides a single pane of glass for Super Admins, Agencies, Officers, Dispatchers, and End Users — unifying real-time voice/video communication, live officer location tracking, dynamic case filing workflows, and collaborative workspaces within a single adaptive interface.",
    challenge:
      "The platform required complex, asynchronous integrations for low-latency real-time data — including Firestore data streams, Agora SDK's multi-step authentication and token generation flow, and composite real-time map rendering — all while supporting granular, role-based access control across five distinct user types without degrading performance or UX consistency.",
    solution:
      "Architected the entire frontend as the sole developer using React.js and Material-UI. Established a persistent Firebase/Firestore connection layer for immediate state sync, navigated and implemented the full Agora SDK token flow for secure voice/video channels, and built a composite real-time location feature by fusing Google Maps API with live Firestore data streams for zero-drift officer tracking.",
    impact: [
      "Sole frontend architect — designed and delivered the entire UI/UX from the ground up with no prior codebase to build on",
      "Engineered a persistent, low-latency Firebase/Firestore real-time data engine powering live case updates, chat, and state synchronisation across all roles",
      "Successfully implemented the Agora SDK authentication and token generation flow, enabling secure, high-quality voice and video communication channels",
      "Built a composite live location feature merging Google Maps API with Firestore streams, achieving real-time officer tracking with zero-drift accuracy",
      "Reduced emergency response decision latency and enhanced cross-role collaboration through a unified, role-aware command interface",
    ],
    techStack: [
      "React.js",
      "Material-UI (MUI)",
      "Firebase",
      "Firestore",
      "Redux Toolkit",
      "Agora SDK",
      "Google Maps API",
      "Places API",
      "REST APIs",
      "GitHub",
      "Jira",
    ],
    highlights: [
      "Multi-Role Architecture (5 User Types)",
      "Real-Time Firebase/Firestore Data Engine",
      "Agora SDK Chat, Voice & Video Integration",
      "Live Officer Location Tracking (Google Maps + Firestore)",
      "Dynamic Case Filing & Collaborative Workspaces",
    ],
    featured: true,
    order: 6,
    category: "Public Safety SaaS",
    role: "Sole Frontend Architect",
    duration: "May 2023 - Feb 2024",
    gallery: [
      // — Super Admin —
      {
        type: "image",
        url: "/projects/nexxusone/super-admin/Login.webp",
        caption: "Super Admin — Login",
      },
      {
        type: "image",
        url: "/projects/nexxusone/super-admin/agency-list.webp",
        caption: "Super Admin — Agency List",
      },
      {
        type: "image",
        url: "/projects/nexxusone/super-admin/Live.webp",
        caption: "Super Admin — Live Operations View",
      },
      {
        type: "image",
        url: "/projects/nexxusone/super-admin/Workspace Created.webp",
        caption: "Super Admin — Workspace Created",
      },
      {
        type: "image",
        url: "/projects/nexxusone/super-admin/Guidelines.webp",
        caption: "Super Admin — Guidelines Management",
      },
      {
        type: "image",
        url: "/projects/nexxusone/super-admin/Support.webp",
        caption: "Super Admin — Support Panel",
      },
      // — Officer —
      {
        type: "image",
        url: "/projects/nexxusone/officer/Dashboard.webp",
        caption: "Officer — Dashboard",
      },
      {
        type: "image",
        url: "/projects/nexxusone/officer/Officer's Profile.webp",
        caption: "Officer — Profile View",
      },
      {
        type: "image",
        url: "/projects/nexxusone/officer/Inbox officer.webp",
        caption: "Officer — Inbox (Officer View)",
      },
      {
        type: "image",
        url: "/projects/nexxusone/officer/video-call.webp",
        caption: "Officer — Video Call",
      },
      {
        type: "image",
        url: "/projects/nexxusone/officer/Inbox files.webp",
        caption: "Officer — Inbox Files",
      },
      {
        type: "image",
        url: "/projects/nexxusone/officer/File missing.webp",
        caption: "Officer — Missing File Report",
      },
      {
        type: "image",
        url: "/projects/nexxusone/officer/schedule.webp",
        caption: "Officer — Schedule View",
      },
      // — Agency —
      {
        type: "image",
        url: "/projects/nexxusone/agency/Chat Queue-1.webp",
        caption: "Agency — Chat Queue (Active)",
      },
      {
        type: "image",
        url: "/projects/nexxusone/agency/Chat Queue.webp",
        caption: "Agency — Chat Queue Overview",
      },
      {
        type: "image",
        url: "/projects/nexxusone/agency/Officers.webp",
        caption: "Agency — Officers Management",
      },
      {
        type: "image",
        url: "/projects/nexxusone/agency/Push Notification.webp",
        caption: "Agency — Push Notification Panel",
      },
      // — Dispatcher —
      {
        type: "image",
        url: "/projects/nexxusone/dispatcher/Main.webp",
        caption: "Dispatcher — Main Dashboard",
      },
      {
        type: "image",
        url: "/projects/nexxusone/dispatcher/Live.webp",
        caption: "Dispatcher — Live Operations Map",
      },
      {
        type: "image",
        url: "/projects/nexxusone/dispatcher/Workspace Received.webp",
        caption: "Dispatcher — Workspace Received",
      },
    ],
    links: {
      live: "https://www.nexxusone.ca",
    },
  },
];
