import type { Experience } from '@/types/portfolio';

export const experiences: Experience[] = [
  {
    id: 'mmf-infotech',
    company: 'MMF Infotech Technologies Pvt. Ltd.',
    role: 'React.js Developer',
    period: 'April 2023 – Present',
    startDate: 'April 2023',
    endDate: 'Present',
    location: 'Indore, MP',
    type: 'Full-time',
    summary:
      'Developing and delivering production-grade frontend applications including Healthcare SaaS, E-commerce platforms, and a corporate AI services website using React, Next.js, and Redux Toolkit.',
    achievements: [
      'Architected a centralized RTK Query API layer with a single base instance, shared Axios interceptors (JWT + 401 handling), and tag-based cache invalidation — eliminating manual polling across all domain modules.',
      'Built a real-time warehouse barcode scanning system supporting hardware scanner input and camera-based scanning (html5-qrcode) with live scan-progress tracking and automatic order status transitions.',
      'Implemented Next.js App Router project from scratch with two-level dynamic service routing, JSON-LD schema markup (6 schema types), ISR blog caching, and environment-aware sitemap/robots configuration.',
      'Delivered AI-assisted physician rounding SaaS, multi-currency e-commerce admin + customer portals, and a B2B corporate website across dev/staging/production environments.',
    ],
    techStack: [
      'React.js', 'Next.js', 'TypeScript', 'Redux Toolkit', 'RTK Query',
      'Docker', 'Tailwind CSS', 'DexieJS', 'Web Speech API',
    ],
    current: true,
  },
  {
    id: 'oshi-tech',
    company: 'Oshi Tech Solution',
    role: 'Frontend Developer',
    period: 'January 2021 – April 2023',
    startDate: 'January 2021',
    endDate: 'April 2023',
    location: 'Dhamnod, MP',
    type: 'Full-time',
    summary:
      'Developed multi-module React.js web applications covering authentication, user management, real-time communication, and location-based features for a large-scale SPA platform.',
    achievements: [
      'Developed real-time features including live chat, WebRTC voice/video calling, and location sharing via Google Maps API.',
      'Used Firestore as a real-time database and Firebase for push notifications across multi-user platform.',
      'Implemented JWT-based session management and role-based access control (RBAC) serving admin, teacher, and student account types.',
      'Built responsive, accessible UI layouts using Material UI — collaborated closely with backend developers and UI/UX designers.',
    ],
    techStack: [
      'React.js', 'Material UI', 'Firebase', 'Firestore', 'Google Maps API',
      'Redux', 'JWT', 'REST APIs', 'WebRTC',
    ],
    current: false,
  },
];
