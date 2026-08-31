# Portfolio — IT & Automation Freelancer

A fast, accessible **single-page portfolio** built with **Vue 3 + TypeScript + Vite**.

Designed around a **Metal (Kim / 金)** aesthetic from the Five Elements system:
minimalist surfaces, hairline borders, precise geometry, and a champagne-gold
metallic accent — light & dark themes included.

## Highlights

- **One-page layout** with sticky nav + scroll-spy highlighting
- **Bilingual** — English (default, global audience) / Vietnamese, one-tap toggle
- **Dark / light mode** with system-preference detection and `localStorage` persistence
- **Accessible** — skip link, semantic landmarks, keyboard focus states, `prefers-reduced-motion` respected
- **Performance-minded** — no CSS framework, system + Google fonts, scroll-reveal via `IntersectionObserver`
- **SEO / social** — meta description, Open Graph tags, theme-color
- **Content-driven** — all copy lives in `src/data/content.ts`; components stay presentational

## Service lines featured

Web Development (Landing pages, Shopify / WooCommerce) · No-code / Low-code
(Webflow, Bubble) · Automation / RPA (Zapier, Make, n8n) · Data Dashboard / ETL
(Looker Studio, Power BI) · QA & Performance Testing on demand.

## Getting started

```bash
npm install
npm run dev        # start dev server
npm run build      # type-check + production build → dist/
npm run preview    # preview the production build
```

## Structure

```
src/
├─ App.vue                 # page sections (hero, about, services, work, process, contact)
├─ main.ts                 # app entry
├─ style.css               # design tokens + global styles ("Metal" system)
├─ components/
│  ├─ SiteHeader.vue       # sticky nav, theme + language toggles, mobile menu
│  └─ AppIcon.vue          # inline SVG icon set
├─ composables/
│  ├─ useTheme.ts          # light/dark theme state
│  ├─ useI18n.ts           # locale state + t() helper
│  ├─ useReveal.ts         # v-reveal scroll animation directive
│  └─ useScrollSpy.ts      # active-section tracking for nav
└─ data/
   └─ content.ts           # all copy + typed content model
```

## Customizing

- **Copy & content** → `src/data/content.ts`
- **Colors, fonts, spacing** → CSS custom properties at the top of `src/style.css`
- **Fonts** → `<link>` in `index.html` (Space Grotesk + Inter)
