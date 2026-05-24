/**
 * ============================================================
 * SITE CONFIG — Single Source of Truth
 * ============================================================
 * Update values here and they propagate across the ENTIRE site:
 *   - robots.ts       (sitemap URL, host)
 *   - sitemap.ts      (all page URLs)
 *   - layout.tsx      (metadataBase, OG URLs, canonical)
 *   - AIAssistant     (context)
 *   - Footer / Navbar (links)
 * ============================================================
 */

export const siteConfig = {
  /** Live production URL — change this when domain changes */
  url: 'https://nakul-yadav-portfolio.vercel.app',

  /** Site name — used in OG tags, browser tab, footer */
  name: 'Nakul Yadav Portfolio',

  /** Short description — used in meta description & OG */
  description:
    'React.js & Frontend Developer with 4+ years of experience building production-grade web applications across Healthcare SaaS, E-commerce, and B2B domains.',

  /** Open Graph image path (relative to /public) */
  ogImage: '/og-image.png',

  /** Author info */
  author: {
    name: 'Nakul Yadav',
    email: 'nakulyadav9520@gmail.com',
    github: 'https://github.com/nakul9520',
    linkedin: 'https://www.linkedin.com/in/nakulydv',
  },

  /** Google Analytics Measurement ID — set to empty string to disable */
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID ?? '',

  /** All app routes — update sitemap automatically */
  routes: {
    home:     '/',
    about:    '/about',
    projects: '/projects',
    contact:  '/contact',
  },
} as const;

/** Helper to build absolute URLs from a relative path */
export function absoluteUrl(path: string = '') {
  return `${siteConfig.url}${path}`;
}
