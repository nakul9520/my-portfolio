import type { SkillGroup } from '@/types/portfolio';

export const skillGroups: SkillGroup[] = [
  {
    category: 'Core Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frameworks',
    skills: ['React.js', 'Next.js', 'Vite', 'Webpack'],
  },
  {
    category: 'State Management',
    skills: ['Redux Toolkit', 'RTK Query', 'React Context API', 'Zustand'],
  },
  {
    category: 'UI Libraries',
    skills: ['Tailwind CSS', 'Material UI', 'Headless UI', 'Framer Motion'],
  },
  {
    category: 'API & Auth',
    skills: ['REST API', 'Axios', 'JWT', 'Firebase', 'Firestore'],
  },
  {
    category: 'Performance',
    skills: ['Code Splitting', 'Lazy Loading', 'Virtualization', 'ISR', 'Caching'],
  },
  {
    category: 'SEO & Analytics',
    skills: ['JSON-LD Schema', 'Open Graph', 'Google Analytics 4', 'GTM', 'Sitemap'],
  },
  {
    category: 'Build & DevOps',
    skills: ['Docker', 'CI/CD', 'Vercel', 'GitHub Pages', 'Vite'],
  },
  {
    category: 'Testing & Tools',
    skills: ['Jest', 'Cypress', 'Postman', 'ESLint', 'Git', 'Jira'],
  },
  {
    category: 'AI Tools',
    skills: ['Gemini AI', 'Claude', 'GitHub Copilot', 'ChatGPT'],
  },
];

/* Flat list for the marquee animation on the homepage */
export const allSkills: string[] = [
  'React.js', 'Next.js', 'TypeScript', 'JavaScript',
  'Redux Toolkit', 'RTK Query', 'Tailwind CSS', 'Node.js',
  'Docker', 'Vite', 'REST APIs', 'Firebase',
  'Material UI', 'Headless UI', 'Framer Motion', 'JWT',
  'Google Maps API', 'Web Speech API', 'DexieJS', 'Axios',
  'Jest', 'Cypress', 'JSON-LD', 'Google Analytics 4',
  'CI/CD', 'Vercel', 'Git', 'Jira',
];
