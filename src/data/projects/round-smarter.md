# Round Smarter — CV Project Information

> Ready-to-use content for your CV/Resume. Copy the version that best fits your role target.

---

## 📌 Project Overview (For Your Own Reference)

**Round Smarter** is an **AI-powered physician rounding assistant** — a web application designed for doctors and healthcare providers to streamline their daily hospital rounds. It digitizes and automates the entire clinical documentation workflow: from managing a patient census (list of admitted patients), viewing rich clinical records (labs, medications, vitals, therapy, events), to **AI-generating SOAP notes and medical orders** using an integrated chat-based AI interface.

- **Live domain:** `https://dev.roundsmarter.com`
- **Organization:** MMFinfotech Technologies
- **Type:** Healthcare SaaS / AI-assisted clinical documentation
- **My Role:** Frontend Developer

---

## 🏗️ Architecture & Tech Stack

| Layer               | Technology                          |
| ------------------- | ----------------------------------- |
| Framework           | React 19 (latest)                   |
| Build Tool          | Vite 6.1                            |
| UI Library          | Material UI (MUI) v6                |
| Styling             | Tailwind CSS 3.4 + custom MUI theme |
| State Management    | Redux Toolkit + React Context API   |
| Routing             | React Router DOM v7                 |
| HTTP Client         | Axios (with interceptor pattern)    |
| Client-Side DB      | DexieJS (IndexedDB)                 |
| Form Handling       | Formik + Yup                        |
| Markdown Rendering  | react-markdown + remark-gfm         |
| Voice Input         | react-speech-recognition            |
| Virtualization      | react-window (FixedSizeList)        |
| Concurrency Control | p-limit                             |
| Containerization    | Docker + Nginx                      |
| Code Quality        | ESLint + Prettier                   |

---

## ✅ Key Features Built

1. **Patient Census Dashboard** — View and filter admitted patients (all, today's, seen) across facilities and dates with virtualized list rendering for performance
2. **AI Chat Panel** — Conversational AI interface to discuss patient records and generate clinical notes; supports markdown rendering and message threading
3. **SOAP Note Generation** — AI-assisted creation of structured clinical notes (Subjective, Objective, Assessment & Plan) with individual section regeneration and revision support
4. **Medical Order Management** — Create, review, and export patient orders with CSV download
5. **Voice Transcription Input** — Web Speech API integration allowing physicians to dictate notes hands-free
6. **Clinical Data Sections** — Dedicated views for Medications, Lab Results, Vital Signs, Therapy, Events/Hospital Course, Diagnosis, Barriers to Discharge, and Pain Management
7. **Batch Note Generation** — Background job to generate SOAP notes for all patients at once
8. **Prompt Management** — Physicians can customize AI prompts for SOAP notes and chat
9. **Client-Side Caching** — IndexedDB caching (via DexieJS) for diagnosis lists and medication data with 7-day TTL
10. **Auth System** — JWT-based session management with PrivateRoute/PublicRoute guards and automatic 401 redirect handling
11. **Multi-Environment Deployment** — Separate dev, staging, and production build pipelines; Dockerized with Nginx

---

## 📄 CV Bullet Points — Choose Your Format

---

### 🔹 Short Version (1–2 lines, for space-tight CVs)

**Round Smarter** | React 19, Redux Toolkit, MUI, Vite | _MMFinfotech Technologies_

> Developed an AI-powered physician rounding assistant SaaS application enabling doctors to manage patient census, view clinical records, and generate AI-assisted SOAP notes and medical orders through a conversational chat interface.

---

### 🔹 Medium Version (3–5 bullets, best for most CVs)

**Round Smarter** — AI-Powered Healthcare Web Application
_Frontend Developer | React 19 · Redux Toolkit · Material UI · Vite · Docker_

- Built a full-featured physician rounding assistant SaaS that digitizes hospital patient census management and automates clinical documentation using AI-generated SOAP notes
- Architected scalable state management using Redux Toolkit with 6 domain-specific slices (census, soapnote, order, auth, prompt, finishRound) and integrated React Context for page-level state
- Implemented an AI chat panel with markdown rendering, voice transcription input (Web Speech API), and streaming conversation history for clinician–AI interaction on patient records
- Engineered client-side IndexedDB caching (DexieJS) with TTL management to reduce redundant API calls for diagnosis and medication data, improving application performance
- Containerized the application using Docker with a multi-stage build (Node.js 20 + Nginx Alpine) supporting separate staging and production environments

---

### 🔹 Detailed Version (6–8 bullets, for senior/specialist roles)

**Round Smarter** — AI-Powered Physician Rounding Assistant (Healthcare SaaS)
_Frontend Developer | React 19 · Redux Toolkit · MUI v6 · Tailwind CSS · Vite 6 · DexieJS · Docker_

- Developed and maintained the complete frontend for a healthcare SaaS platform serving physicians during hospital rounds, covering patient census, clinical records, AI-generated clinical notes, and medical orders
- Designed a modular, feature-first component architecture under `components/census/` with sub-domains for patients, records, SOAP notes, orders, and prompt configuration
- Built a complex AI Chat Panel featuring message threading, AI response streaming, markdown + emoji rendering, and context-aware patient data display
- Implemented voice-to-text dictation using react-speech-recognition allowing physicians to dictate SOAP notes and chat messages hands-free
- Engineered a high-performance patient list with react-window (FixedSizeList) for virtualized rendering, and p-limit for controlled concurrency in batch SOAP note generation across all patients
- Created a centralized Axios factory with request/response interceptors for automatic JWT injection and 401-triggered session invalidation and redirect
- Integrated DexieJS (IndexedDB) with a 7-day TTL caching strategy for diagnosis and medication master data, significantly reducing server load
- Set up multi-stage Docker builds with Nginx serving the Vite-optimized static bundle, with separate environment configurations for development, staging, and production deployments

---

### 🔹 Role-Specific: React Developer Focus

- Built **Round Smarter**, a React 19 SPA using Vite, MUI v6, Redux Toolkit, and React Router v7 for a healthcare SaaS company
- Implemented lazy-loaded routes using `React.lazy` + `Suspense` via a custom `Loadable` HOC for optimized code splitting
- Handled complex forms using Formik + Yup validation across multiple SOAP note sections (Subjective, Objective, Assessment & Plan, Medications, Vitals, Lab Reports)
- Maintained clean API boundaries via a factory-pattern Axios instance with auth interceptors and ~90 centralized endpoint path constants

---

### 🔹 Role-Specific: Full-Stack / DevOps Awareness Focus

- Delivered **Round Smarter** — a Dockerized React frontend deployed on Nginx with multi-stage builds, configured for environment-specific deployments using Vite's `--mode` flag
- Managed data fetching and caching strategy including IndexedDB (DexieJS), optimistic state updates via Redux, and automatic session handling with JWT redirect
- Configured Nginx as a production reverse proxy with a custom `nginx.conf` for SPA routing and static asset serving

---

## 🛠️ Skills / Keywords to Add to Your CV Skills Section

`React.js` · `Redux Toolkit` · `Material UI (MUI)` · `Vite` · `Tailwind CSS` · `Axios` · `Formik` · `Yup` · `DexieJS (IndexedDB)` · `React Router` · `Docker` · `Nginx` · `REST APIs` · `JWT Authentication` · `Web Speech API` · `Healthcare SaaS`

---

## 📝 One-Line Summary (LinkedIn headline or profile intro)

> "Frontend Developer with hands-on experience building AI-integrated healthcare SaaS products using React 19, Redux Toolkit, and Material UI, deployed via Docker and Nginx."

---

_Generated from codebase analysis of: Round Smarter Frontend — MMFinfotech Technologies_
