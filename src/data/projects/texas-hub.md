# Texas Hub Admin Dashboard — CV Project Description

> **Ready-to-use content for Claude or your CV. Copy any section you need.**

---

## Full Project Summary (for Claude / AI tools)

**Project Name:** Texas Hub Admin Dashboard
**Type:** Frontend Admin Panel / Internal Business Tool
**Domain:** E-commerce / Warehouse Management
**Tech Stack:** React 19, Vite 7, Redux Toolkit (RTK Query), Material UI (MUI v7), React Router v7, React Hook Form, Yup, Axios, CKEditor 5, html5-qrcode, Moment.js, React Toastify, Iconify

---

### What the Project Does

Texas Hub Admin is a **full-featured internal admin dashboard** built for managing an e-commerce business. It is deployed at `https://texas-hub.com/dev-dashboard-2025` and supports three environments: **development, staging, and production**, each managed via Vite build modes.

The dashboard allows admin users to:

1. **Authenticate securely** — Login with email/password, OTP verification (two-factor auth flow), forgot password, reset password, and change password. Session management uses js-cookie with JWT Bearer tokens passed via Axios interceptors.

2. **Manage Users** — Create, edit, delete users with full form validation. Supports admin-initiated password reset per user via a dedicated modal.

3. **Manage Products (with Variations)** — Add products manually with multi-currency pricing (USD, EUR, ILS), product attributes (lens dimensions, case code, lens type for eyewear), images, category assignment, stock status, and SKU-based variations. Also supports **bulk CSV import** for products and variations.

4. **Manage Orders with Barcode Scanning** — Warehouse staff can open any pending order and enter a **Scanning Mode** where they scan product barcodes (physically via barcode scanner gun or via webcam/camera using html5-qrcode) to verify and collect order items. The system tracks scanned vs. total quantity per item in real time, provides audio feedback (success/error beeps), and allows the admin to **complete the order collection** and **update order status** (Pending > Collecting > Collected > Completed/Cancelled).

5. **View Dashboard Analytics** — Overview stats (total users, products, orders), an order status distribution chart, recent orders list, and quick action shortcuts.

6. **Edit Legal Content** — Update Terms & Conditions and Privacy Policy via a rich text editor (CKEditor 5).

---

### Architecture & Technical Highlights

- **RTK Query** is used as the primary data-fetching and caching layer, with a single `baseApi` instance powered by a custom `axiosBaseQuery`. All domain API modules (authApi, ordersApi, productsApi, usersApi, dashboardApi) inject endpoints into this single base, sharing Axios interceptors, cache, and middleware.
- **Tag-based cache invalidation** ensures stale data is never shown — e.g., scanning an item invalidates the order detail cache so scan counts refresh automatically.
- **React Hook Form + Yup** handles all form validation with complex nested schemas (e.g., product variations with per-currency pricing validation).
- **Protected routing** with PrivateRoute (JWT auth check) and PublicRoute (redirect authenticated users) using React Router v7.
- **Lazy loading** with React.lazy + custom Loadable HOC for all page-level components, keeping the initial bundle small.
- **Multi-environment builds** configured in Vite with .env.staging and .env.production files and corresponding npm scripts (build:staging, build:prod).
- **Custom hooks**: useTimer (OTP countdown), useResponsive (MUI breakpoint-based responsive logic), useCurrency (currency formatting), useScrollToTop.
- **SKU sanitization** before every API scan call — strips non-printable ASCII characters and whitespace to prevent barcode scanner encoding artifacts from corrupting the payload.
- **Camera barcode scanner integration** using html5-qrcode library — opens a dialog with webcam/phone camera to scan barcodes without a physical scanner.

---

## CV / Resume Bullet Points

Use these in your Projects section on your CV. Pick the ones most relevant to the role.

---

### Option A — Concise (2-4 lines, suitable for a 1-page CV)

**Texas Hub Admin Dashboard** | React, Redux Toolkit, Material UI, Vite
_Frontend Admin Panel for E-commerce and Warehouse Management_

- Built a full-stack-integrated admin dashboard with React 19 and RTK Query for managing users, products (with multi-currency pricing), and orders for an e-commerce platform.
- Implemented a real-time warehouse order collection system featuring barcode scanner integration (hardware scanner + camera-based via html5-qrcode), live scan progress tracking, and automated cache invalidation using RTK Query's tag system.
- Architected a scalable API layer with a single RTK Query base instance, injected domain endpoints (auth, orders, products, users), and shared Axios interceptors for JWT authentication and 401 redirect handling.

---

### Option B — Detailed (suitable for a 2-page CV or project portfolio)

**Texas Hub Admin Dashboard** | React 19, Vite 7, Redux Toolkit (RTK Query), Material UI v7, React Router v7, React Hook Form, Yup, Axios, CKEditor 5, html5-qrcode

_Internal admin panel for an e-commerce business supporting user management, product catalog, order processing, and warehouse operations._

- **Barcode Scanning Workflow:** Designed and implemented a full warehouse order collection feature where staff scan product barcodes (via physical scanner gun or webcam/camera) to verify items against an order. System tracks scanned vs. required quantity per item in real time with audio feedback and auto-updates via RTK Query cache invalidation.
- **State Management Architecture:** Built a centralized RTK Query API layer with a custom axiosBaseQuery wrapping an Axios singleton (with Bearer token interceptors). Used tag-based cache invalidation across 13 entity types (AUTH, PROFILE, PRODUCT, ORDER, USER, etc.) to ensure consistent, auto-refreshing UI without manual useEffect polling.
- **Product Management with CSV Import:** Built a complex product creation form with multi-currency pricing (USD/EUR/ILS), product variation management (SKU, color, images, warehouse, inventory), and bulk import via CSV upload using multipart/form-data mutations.
- **Secure Authentication Flow:** Implemented complete auth lifecycle — login, OTP two-factor verification, forgot/reset/change password — with react-hook-form + Yup schema validation and js-cookie session management.
- **Performance Optimization:** Used React.lazy + custom Loadable HOC for route-level code splitting; Vite multi-environment build pipeline (dev/staging/prod) with separate environment variable files.
- **Rich Text Editing:** Integrated CKEditor 5 for admin-editable legal content (Terms & Conditions, Privacy Policy) with direct API mutation and cache invalidation.

---

### Option C — One Liner (for a skills/projects summary table)

| Project                   | Tech                           | Description                                                                                             |
| ------------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------- |
| Texas Hub Admin Dashboard | React 19, RTK Query, MUI, Vite | E-commerce admin panel with barcode scanning, user/product/order management, and multi-currency pricing |

---

## Tech Stack Summary

| Category               | Technologies                                            |
| ---------------------- | ------------------------------------------------------- |
| **Framework**          | React 19, Vite 7                                        |
| **State Management**   | Redux Toolkit, RTK Query                                |
| **UI Library**         | Material UI (MUI) v7, Iconify                           |
| **Routing**            | React Router v7                                         |
| **Forms & Validation** | React Hook Form, Yup                                    |
| **HTTP Client**        | Axios (with interceptors)                               |
| **Barcode Scanning**   | html5-qrcode (camera), hardware barcode scanner support |
| **Rich Text Editor**   | CKEditor 5                                              |
| **Date Handling**      | Moment.js                                               |
| **Notifications**      | React Toastify                                          |
| **Build Tool**         | Vite (multi-env: dev / staging / prod)                  |
| **Linting**            | ESLint 9                                                |

---

## Key Features

1. OTP-based Two-Factor Authentication
2. User CRUD with admin-initiated password reset
3. Product catalog with multi-currency pricing (USD, EUR, ILS) and variation management
4. Bulk product & variation import via CSV
5. Warehouse order collection with real-time barcode scanning (hardware + camera)
6. SKU sanitization to handle barcode scanner encoding artifacts
7. RTK Query tag-based auto-caching and invalidation
8. Multi-environment Vite build pipeline (dev / staging / prod)
9. Lazy-loaded routes with custom Loadable HOC
10. CKEditor-powered legal content management (T&C, Privacy Policy)
11. Responsive layout with MUI Grid and custom useResponsive hook
12. Order status workflow: Pending > Collecting > Collected > Completed/Cancelled

# Texas Hub Web — CV Project Entry

> **Ready to paste into your CV / share with Claude for formatting.**

---

## Project Overview (reference)

| Field            | Details                                                                                   |
| ---------------- | ----------------------------------------------------------------------------------------- |
| **Project Name** | Texas Hub Web                                                                             |
| **Type**         | Customer-Facing E-Commerce Web Application                                                |
| **Tech Stack**   | React 19, Vite 7, Redux Toolkit, MUI v7, Axios, React Hook Form, Yup, React Router DOM v7 |
| **Domain**       | B2B / B2C Product Ordering Platform                                                       |
| **Environment**  | Multi-environment (development / staging / production via Vite modes)                     |
| **Deployed At**  | https://texas-hub.com/dev-web                                                             |

---

## CV-Ready Project Description

### Version A — Concise (1–2 lines, for skill-based CV)

**Texas Hub Web** — Customer-facing e-commerce portal built with **React 19**, **Redux Toolkit**, and **Material UI**. Features product browsing, a unified cart (products + spare parts), checkout, OTP-based authentication, multi-currency support, and a personal dashboard with order tracking and address management.

---

### Version B — Detailed Bullet Points (Recommended for most CVs)

**Texas Hub Web** _(Customer E-Commerce Portal)_
**Tech Stack:** React 19, Vite 7, Redux Toolkit, Material UI (MUI v7), Axios, React Hook Form, Yup, React Router DOM v7, JavaScript (ES Modules)

- Developed a **full-featured customer-facing e-commerce web application** for browsing, ordering, and managing products and spare parts.
- Implemented **role-based route protection** with three route guard types: Public Routes, Authenticated Public Routes, and Private Dashboard Routes using React Router DOM v7.
- Built a **unified cart system** using Redux Toolkit handling both regular products (by variation ID) and spare parts (by item ID) as a single merged cart state with real-time quantity and price recalculation.
- Integrated **JWT-based authentication** with cookie persistence (js-cookie) including secure session management (access token, refresh token, role, country), auto token injection via Axios interceptors, and automatic logout on 401 responses.
- Implemented a **complete OTP-based forgot/reset password flow** — forgot password → OTP verification → reset password → change password.
- Built a **user dashboard** with quick statistics (total orders, cart items, cart total), quick-action navigation, and profile info fetching via Redux async thunks.
- Developed **multi-currency support** with country-based currency configuration (USD, CAD, ILS, EUR) including localized symbol positioning, thousand separators, and decimal formatting.
- Used **React Hook Form + Yup** for robust client-side form validation across login, forgot password, OTP verify, shipping address, billing address, and password change forms.
- Applied **lazy loading with Suspense** (React.lazy + custom Loadable wrapper) for all dashboard and auth pages to improve initial load performance.
- Implemented **product listing with filters** — REST API-driven product list and filter data with search, pagination, and status-based filtering.
- Built a **spare parts ordering module** — a dedicated flow for customers to request spare parts separate from the main product cart.
- Managed **multi-environment builds** (development, staging, production) using Vite mode flag with separate .env files and environment-specific API base URLs and router basenames.
- Configured a **centralized Axios instance** with request interceptors for auth header injection and response interceptors for API error handling and auto-session cleanup.
- Implemented **order management** — order listing with pagination and status filtering, detailed order info view, and post-order placement confirmation page.
- Built **address management** — separate shipping and billing address forms with country-code selection and comprehensive validation, stored and retrieved via REST API.

---

### Version C — Summary Paragraph (for portfolio / LinkedIn About)

Texas Hub Web is a production-grade customer e-commerce portal developed using React 19 and Vite 7. The application enables customers to browse and filter products, manage a unified shopping cart supporting both products and spare parts, complete checkout, and track orders — all from a secure, authenticated user dashboard. The architecture follows a feature-based structure with Redux Toolkit for global state management, Axios interceptors for centralized API communication, and React Hook Form with Yup for schema-driven form validation. The project supports multi-currency pricing (USD, EUR, ILS, CAD) based on the authenticated user's country, and employs role-aware route guards, JWT-cookie session management, and lazy-loaded routes for performance. The codebase is built for multi-environment deployment (dev / staging / production) with environment-specific Vite configurations.

---

## Tech Stack Tags (for skills section)

React 19 | Vite 7 | Redux Toolkit | React Router DOM v7 | Material UI (MUI v7) | Axios | React Hook Form | Yup | JavaScript (ES Modules) | REST API Integration | JWT Authentication | Cookie-based Session Management | Lazy Loading / Code Splitting | Multi-environment Deployment | Responsive Web Design

---

## Key Modules Summary

| Module             | Details                                                         |
| ------------------ | --------------------------------------------------------------- |
| **Auth**           | Login, OTP verify, Forgot / Reset / Change Password             |
| **Products**       | Browse, filter, paginate, add to cart (by variation)            |
| **Spare Parts**    | Separate spare-parts order form and cart                        |
| **Cart**           | Unified cart (products + spare parts), real-time totals         |
| **Checkout**       | Full checkout flow with billing/shipping address                |
| **Orders**         | Order listing, filtering by status, detailed order view         |
| **Dashboard**      | Stats cards, quick actions, profile info                        |
| **Addresses**      | Separate shipping and billing address management                |
| **Multi-currency** | Country-based: USD, CAD, EUR, ILS                               |
| **Session**        | JWT + js-cookie, auto-sync on profile fetch                     |
| **Routing**        | Public / Auth-only / Authenticated-public / Private (dashboard) |
| **Build**          | Vite multi-mode: dev, staging, production                       |
