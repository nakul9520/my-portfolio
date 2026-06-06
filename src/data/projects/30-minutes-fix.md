---
id: "30-minutes-fix"
title: "30 Minutes Fix"
subtitle: "A premium React-based repair booking platform with custom calendar scheduling, Stripe & PayPal checkouts, device diagnostics canvas patterns, and automated dynamic SEO sitemaps."
category: "Repair Booking & E-Commerce SaaS"
role: "Lead Frontend Developer"
duration: "April 2024 - Present"
featured: true
order: 1
liveUrl: "https://30minutesfix.com"
githubUrl: ""
techStack: ["React.js", "Redux Toolkit", "Formik", "MUI (Material UI)", "Vite", "Google Maps API", "Stripe SDK", "react-window"]
highlights: ["Multi-Step Repair Booking Flow", "Canvas-based Pattern Lock Diagnostic Tool", "Dynamic Calendars & Geolocation Scheduling", "Virtualized High-Throughput Search", "Automated Dynamic Multi-Section XML Sitemap Generator"]
impact:
  - "Minimized rendering bottlenecks and API query volume through debounced virtualized dropdown list components (react-window)"
  - "Designed a robust dynamic sitemap pipeline fetching slugs directly from REST API endpoints to boost Google SEO visibility"
  - "Created a secure, client-side pattern drawing interface to save technician diagnostic unlocking codes without plaintext exposure"
gallery:
  - type: "image"
    url: "/images/projects/30-minutes-fix-dashboard.png"
    caption: "Dynamic main dashboard view"
---

# Project Overview
30 Minutes Fix is an enterprise-grade device repair booking and parts e-commerce web application designed to orchestrate complex hardware servicing workflows. Operating across multiple channels—including on-site repairs ("we come to you"), mail-in diagnostics, local pickups, and in-store walk-ins—the platform guides users through an intuitive booking wizard. Clients select their device brand, series, model, and physical issues, getting instant estimated pricing before final checkout.

Additionally, the site acts as an e-commerce hub for "Do-It-Yourself" (DIY) replacement parts, screens, batteries, and charging ports. The client dashboard offers tracking of repair logs, order tracking, warranty profiles, and customer loyalty rewards.

# The Challenge & Business Problem
* **Dynamic Geolocation and On-Site Scheduling:** On-site repairs require capturing clean, parsed address details, verifying service areas, and providing calendar slots to avoid technician scheduling conflicts.
* **Instant Checkout Calculations:** With multiple payment flows (pay in full, deposit-split, store credit, promo codes, and lifetime warranty addons), total amounts must recalculate client-side without page load stuttering or state sync conflicts.
* **Stalling rendering on high-throughput search lists:** Search menus housing thousands of dynamic parts and device models caused screen freezes and massive API traffic on standard typing filters.
* **Diagnostic Screen Lock Security:** To complete post-repair diagnostics, technicians need the client's screen pattern. Standard inputs made storing patterns difficult and insecure.
* **Static Page Indexing for SEO:** With thousands of dynamic routing configurations, normal client-side rendering was invisible to search engine crawlers, hurting organic visibility.

# The Solution & Architecture
The system is built on Vite and React 18, leveraging Material UI v5 and custom styling sheets for a modern, responsive design.

* **State and API Caching:** Global state is managed using Redux Toolkit slices (`bookingSlice.jsx`, `diySlice.jsx`, `authSlice.jsx`) with dynamic async thunks. Network traffic is managed via an Axios instance ([AxiosDefault.jsx](file:///m:/nakul/work/30MinsFixWeb/src/utils/AxiosDefault.jsx)) with interceptors that attach JWT tokens from LocalStorage.
* **Third-Party API Integrations:**
  - **Google Maps & Places:** Powering [GooglePlaceAutocomplete.jsx](file:///m:/nakul/work/30MinsFixWeb/src/components/common/location/GooglePlaceAutocomplete.jsx) to fetch and parse components (postcode, city, state) and [LocationMap.jsx](file:///m:/nakul/work/30MinsFixWeb/src/components/common/location/LocationMap.jsx) to track physical shops.
  - **Stripe & PayPal:** Stripe Elements (`@stripe/react-stripe-js`) handles card transactions inside [BookingCheckout.jsx](file:///m:/nakul/work/30MinsFixWeb/src/components/booking/finalize-booking/checkout/BookingCheckout.jsx), while PayPal processes redirect integrations.
  - **Google OAuth:** Fast registration using `@react-oauth/google` at checkout.
* **Routing and Guards:** Dynamic routes map layout structures. Code-splitting using a custom [Loadable.jsx](file:///m:/nakul/work/30MinsFixWeb/src/components/common/loader/Loadable.jsx) HOC wraps `lazy()` routes inside `<Suspense>` loaders, reducing initial package weights. `PrivateRoute.jsx` verifies auth status and email validation (`is_email_verified === "2"`) before admitting users to dashboard portals.

# Key Features & Code Highlights

### Dynamic Geolocation Address Verification
The on-site booking module ([RepairYourLocationContent.jsx](file:///m:/nakul/work/30MinsFixWeb/src/components/booking/finalize-booking/RepairYourLocationContent.jsx)) connects Google's address auto-completion engine directly to Formik forms:
```javascript
const handlePlaceChange = useCallback((place, setFieldValue) => {
  const components = place.address_components;
  components?.forEach((component) => {
    if (component.types.includes("postal_code")) {
      setFieldValue("postcode", component.long_name);
    }
    if (component.types.includes("locality")) {
      setFieldValue("city", component.long_name);
    }
    if (component.types.includes("administrative_area_level_1")) {
      setFieldValue("state", component.long_name);
    }
  });
}, []);
```
This maps input parameters cleanly, with checkboxes to trigger manual text fallbacks if APIs fail.

### Canvas-Based Pattern Lock Diagnostic Capture
To capture lock patterns securely, the booking finalization step renders a canvas-drawing modal using `@alfalab/react-canvas-pattern-lock` inside [PatternLockModal.jsx](file:///m:/nakul/work/30MinsFixWeb/src/components/booking/finalize-booking/PatternLockModal.jsx):
```javascript
const handleComplete = (code) => {
  if (size(code) > 2) {
    setPassword(code.join(""));
    setCurrentState(THEME_STATE.SUCCESS);
  }
};
const handleSave = () => {
  setFieldValue("password", password);
  setOpen(false);
};
```
Technicians view the pattern codes natively, keeping user security high without storing raw plaintext passwords.

### Virtualized and Debounced Dropdown Search
To maintain high frame rates during searches, [SearchDIYProduct.jsx](file:///m:/nakul/work/30MinsFixWeb/src/components/common/SearchDIYProduct.jsx) runs a 1000ms debounce before dispatching calls and renders lists via virtual DOM windowing:
```javascript
const getSearchData = useCallback(async (query) => {
  setLoading(true);
  dispatch(searchDIYProduct({ search: query })).unwrap().then(() => {
    setLoading(false);
  });
}, [dispatch]);

const debounceFn = useMemo(() => debounce(getSearchData, 1000), [getSearchData]);

// Renders inside viewport
<FixedSizeList
  height={300}
  itemSize={55}
  itemCount={size(sortedModels)}
  overscanCount={5}
>
  {({ index, style }) => <SeriesList index={index} style={style} />}
</FixedSizeList>
```
Only the visible components render in the browser DOM, reducing memory profiles.

# Technical Decisions & Optimizations

### Rerendering Checks
Development uses `@welldone-software/why-did-you-render` to audit components and identify unnecessary redraws. Children components were decoupled from booking context hooks, and references were locked down with `useMemo` and `useCallback` triggers.

### Build and Environment Controls
The Vite configuration ([vite.config.js](file:///m:/nakul/work/30MinsFixWeb/vite.config.js)) handles proxy routing, uses checker threads for background lint tasks, and resolves the route base paths dynamically based on environment configs (`env.VITE_ROUTER_BASENAME`).

### Search Engine Optimization (SEO) Sitemaps
An automated node script [generate-sitemap.js](file:///m:/nakul/work/30MinsFixWeb/generate-sitemap.js) pulls current item lists directly from database REST endpoints at build time, generating independent XML files for Dynamic routes (`sitemap_booking.xml`, `sitemap_diy.xml`, etc.), and grouping them into a main `sitemap.xml` index.
