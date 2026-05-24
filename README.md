# Nakul Yadav — Portfolio

> **React.js & Frontend Developer** · Building Scalable, Production-Grade Web Applications

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](./LICENSE)

Personal portfolio website showcasing my projects, experience, and skills — with a built-in **Gemini AI assistant** that answers questions about me in real time.

🔗 **Live Site:** _coming soon_

---

## ✨ Features

- **AI Chat Assistant** — Powered by Google Gemini API, trained on my resume and experience data
- **Smooth Scroll** — Lenis-based buttery-smooth scrolling experience
- **Framer Motion Animations** — Page transitions, section reveals, and micro-interactions
- **Multi-Page Layout** — Home, About, Projects, and Contact pages via Next.js App Router
- **SEO Optimised** — Dynamic sitemap, robots.txt, Open Graph meta tags
- **Fully Responsive** — Mobile-first design across all screen sizes
- **Dark Mode** — Elegant dark theme with glassmorphism UI elements

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion 12 |
| Smooth Scroll | Lenis |
| AI | Google Gemini API (`@google/generative-ai`) |
| Markdown | react-markdown |
| UI Primitives | Headless UI |
| Linting | ESLint 9 + eslint-config-next |
| Deployment | Vercel |

---

## 📁 Project Structure

```
nakul-portfolio/
├── public/                   # Static assets & llms.txt
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── about/            # About page
│   │   ├── contact/          # Contact page
│   │   ├── projects/         # Projects page
│   │   ├── api/
│   │   │   └── ai-chat/      # Gemini AI chat API route
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   ├── robots.ts         # SEO robots config
│   │   └── sitemap.ts        # Dynamic sitemap
│   ├── components/
│   │   ├── ai-assistant/     # AI chat UI components
│   │   ├── layout/           # Navbar, Footer, Providers
│   │   ├── sections/         # Hero, Projects, Experience, TechStack, CTA, AI Preview
│   │   └── ui/               # Reusable UI primitives
│   ├── data/                 # Static site content (personal, projects, experience, skills)
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions
│   └── types/                # TypeScript type definitions
├── .env.example              # Environment variable template
├── next.config.ts
├── tailwind.config (via postcss)
└── tsconfig.json
```

---

## 🚀 Getting Started (Local Development)

### Prerequisites

- **Node.js** v20 or higher
- **npm** v10 or higher
- A **Google Gemini API key** ([get one free here](https://aistudio.google.com/app/apikey))

### 1. Clone the repository

```bash
git clone https://github.com/nakul9520/my-portfolio.git
cd my-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.example .env.local
```

Open `.env.local` and add your Gemini API key:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Environment Variables

| Variable | Required | Description |
|---|---|---|
| `GEMINI_API_KEY` | ✅ Yes | Google Gemini API key for the AI chat assistant |

> **Note:** Never commit `.env.local` to version control. It is already excluded via `.gitignore`.

---

## 🌿 Branch Strategy

This project follows a **GitHub Flow** branching model:

```
main          ← Production branch (auto-deploys to Vercel)
  └── dev     ← Integration branch (Vercel preview deployments)
        └── feature/*   ← Feature branches, merged to dev via PR
        └── hotfix/*    ← Critical fixes, merged to main + dev
```

**Commit message convention** (Conventional Commits):
```
feat:     New feature
fix:      Bug fix
chore:    Maintenance / dependency updates
docs:     Documentation changes
style:    Formatting, no logic change
refactor: Code refactoring
```

---

## ☁️ Deployment

This project is deployed on **Vercel**.

To deploy your own fork:

1. Push the repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import from GitHub
3. Select this repo — Vercel auto-detects Next.js
4. Add the environment variable: `GEMINI_API_KEY`
5. Set **Production Branch** to `main`
6. Click **Deploy**

---

## 📬 Contact

- **Email:** nakulyadav9520@gmail.com
- **LinkedIn:** [linkedin.com/in/nakulydv](https://www.linkedin.com/in/nakulydv)
- **GitHub:** [github.com/nakul9520](https://github.com/nakul9520)
- **Location:** Indore, MP, India

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

> You are welcome to use this code as reference or inspiration, but please do not directly copy the personal content (bio, projects, experience data).
