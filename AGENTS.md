<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

---

# 🧠 PROJECT MEMORY — Nakul Yadav Portfolio

> **AI Agent Instructions:** Read this entire file before making ANY changes to this project.
> This is the single source of truth. Do NOT re-analyze the whole codebase — trust this document.
> Update this file whenever a major feature is added, changed, or removed.

---

## 📌 Project Identity

- **Project:** Personal developer portfolio for Nakul Yadav
- **Status:** 🚀 Live on Vercel
- **Live URL:** https://nakul-yadav-portfolio.vercel.app
- **GitHub:** https://github.com/nakul9520/my-portfolio
- **Local path:** `m:\nakul\nakul-portfolio`

---

## 🛠️ Tech Stack (Exact Versions)

| Tech           | Version                         | Notes                                          |
| -------------- | ------------------------------- | ---------------------------------------------- |
| Next.js        | 16.2.6                          | App Router, React Compiler enabled             |
| React          | 19.2.4                          |                                                |
| TypeScript     | ^5                              | Strict mode                                    |
| Tailwind CSS   | ^4                              | via `@tailwindcss/postcss` — v4 syntax, NOT v3 |
| Framer Motion  | ^12.40.0                        | For all animations                             |
| Lenis          | ^1.3.23                         | Smooth scroll                                  |
| Gemini AI      | `@google/generative-ai ^0.24.1` | AI chat assistant                              |
| react-markdown | ^10.1.0                         | For rendering AI responses                     |
| Headless UI    | ^2.2.10                         | UI primitives                                  |
| Speed Insights | `@vercel/speed-insights ^2.0.0` | Vercel real-user performance monitoring        |
| ESLint         | ^9                              | `eslint-config-next`                           |

**⚠️ TAILWIND v4 WARNING:** This uses Tailwind CSS v4 — syntax is different from v3. No `tailwind.config.js`, config is in `postcss.config.mjs`. Use v4 class syntax.

---

## 📁 Project Structure (Key Files)

```
src/
├── app/
│   ├── page.tsx              ← Home page (Hero + all sections)
│   ├── layout.tsx            ← Root layout (metadata, fonts, Providers)
│   ├── globals.css           ← All global styles + Tailwind v4 imports
│   ├── about/page.tsx        ← About page
│   ├── contact/
│   │   ├── page.tsx          ← Contact page
│   │   └── ContactForm.tsx   ← Contact form component
│   ├── projects/page.tsx     ← Projects page
│   ├── api/ai-chat/route.ts  ← Gemini AI API route (POST)
│   ├── robots.ts             ← SEO robots config
│   └── sitemap.ts            ← Dynamic sitemap
│
├── components/
│   ├── ai-assistant/
│   │   └── AIAssistant.tsx   ← Full AI chat UI (floating button + modal)
│   ├── layout/
│   │   ├── Navbar.tsx        ← Top navigation
│   │   ├── Footer.tsx        ← Footer
│   │   └── Providers.tsx     ← App-level providers wrapper
│   ├── sections/             ← Homepage sections (in order):
│   │   ├── HeroSection.tsx
│   │   ├── TechStackSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── AIPreviewSection.tsx
│   │   └── CTASection.tsx
│   └── ui/
│       ├── Badge.tsx         ← Reusable badge component
│       └── Button.tsx        ← Reusable button component
│
├── config/
│   └── site.ts               ← ⭐ CENTRAL CONFIG — url, name, description, routes, GA ID
│                                 Import siteConfig + absoluteUrl() everywhere URL is needed
│
├── data/                     ← ALL site content lives here (NOT hardcoded in components)
│   ├── personal.ts           ← Name, bio, email, socials, location
│   ├── projects.ts           ← Projects list with tech, links, descriptions
│   ├── experience.ts         ← Work experience timeline
│   ├── skills.ts             ← Tech skills / stack list
│   └── ai-context.ts        ← Context fed to Gemini AI (7.8KB — full resume context)
│
├── hooks/
│   ├── useAIChat.ts          ← AI chat state management hook
│   └── useLenis.ts           ← Smooth scroll initialization hook
│
├── lib/
│   ├── gemini.ts             ← Gemini AI client setup
│   └── mongodb.ts            ← MongoDB client (for contact form submissions)
│
└── types/
    ├── portfolio.ts          ← TypeScript types for all portfolio data
    └── ai.ts                 ← TypeScript types for AI chat
```

---

## 🔑 Environment Variables

| Variable         | Used In                                             | Purpose          |
| ---------------- | --------------------------------------------------- | ---------------- |
| `GEMINI_API_KEY` | `src/lib/gemini.ts`, `src/app/api/ai-chat/route.ts` | Google Gemini AI |
| `NEXT_PUBLIC_GA_ID` | `src/config/site.ts` | Google Analytics 4 Measurement ID |

- Local: `.env.local` (gitignored — never commit)
- Production: Set in Vercel dashboard
- Template: `.env.example` (committed, no real values)

---

## 🌿 Git Branch Strategy

```
main    ← Production (Vercel auto-deploys)
dev     ← Daily work branch (currently active)
feature/*   ← Per-feature branches → PR to dev
hotfix/*    ← Critical fixes → main + dev
```

**Current branch:** `dev`
**Commit convention:** Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`)

---

## 🎨 Design System

- **Theme:** Dark mode only
- **Primary accent:** Defined in `globals.css` as CSS custom properties
- **Animations:** Framer Motion for all enter/exit animations
- **Scroll:** Lenis smooth scroll, initialized in `useLenis` hook via `Providers.tsx`
- **Typography:** Defined in `layout.tsx` via `next/font`
- **Glassmorphism** effects used throughout UI

---

## 🤖 AI Assistant Details

- **Model:** Google Gemini (via `@google/generative-ai`)
- **Context source:** `src/data/ai-context.ts` — contains Nakul's full background
- **API route:** `POST /api/ai-chat`
- **UI:** Floating button → modal chat interface (`AIAssistant.tsx`)
- **State:** Managed by `useAIChat.ts` hook
- **Markdown rendering:** `react-markdown` for AI responses

---

## 📄 Content Data (Update these for content changes)

All content is in `src/data/`. To update:

- **Personal info / bio:** `personal.ts`
- **Projects:** `projects.ts`
- **Work experience:** `experience.ts`
- **Skills:** `skills.ts`
- **AI knowledge base:** `ai-context.ts` ← update this too when content changes

---

## 📝 Pages & Routes

| Route          | File                       | Status  |
| -------------- | -------------------------- | ------- |
| `/`            | `app/page.tsx`             | ✅ Done |
| `/about`       | `app/about/page.tsx`       | ✅ Done |
| `/projects`    | `app/projects/page.tsx`    | ✅ Done |
| `/contact`     | `app/contact/page.tsx`     | ✅ Done |
| `/api/ai-chat` | `app/api/ai-chat/route.ts` | ✅ Done |

---

## ⚠️ Known Issues / TODOs

- [ ] Contact form backend — `mongodb.ts` exists but email sending not fully wired
- [ ] Custom domain not yet configured — currently on vercel.app subdomain
- [ ] `og-image.png` not yet created — OG previews will be blank
- [ ] Google Analytics ID not set — add `NEXT_PUBLIC_GA_ID` in Vercel env vars
- [x] `resume.pdf` — using Google Drive URL in `personal.ts` → `resumeUrl` field (update URL there when resume changes)

---

## 🔄 HOW TO UPDATE THIS FILE

When you add a new feature, update the relevant sections above:

1. Add new file to the **Project Structure** section
2. Add new env vars to **Environment Variables** section
3. Add new routes to **Pages & Routes** section
4. Update **Status** if a TODO is resolved
5. Add new known issues to **Known Issues / TODOs**

**This keeps all future AI agents (and future you) in sync without re-reading the whole codebase.**
