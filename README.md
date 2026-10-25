# AMD Engineer Solution — Civil Engineering & Construction Website

A modern, fully responsive multi-page marketing website for a civil engineering and
construction business, built with **React + Vite**, **Tailwind CSS**, **React Router DOM**
and **Lucide React**.

> All company names, statistics, projects, testimonials, team profiles and contact details in
> this project are **sample/demo content**. Replace them with verified company information
> before going live.

## Features

- Sticky, responsive header with transparent-over-hero behaviour and animated mobile menu
- Three-image automatic hero slider with arrows, dots, touch swipe and pause-on-hover
- Animated statistics counters, scroll-reveal animations and reduced-motion support
- 10 civil engineering services, 8 detailed project case studies and a filterable portfolio
- Dynamic project detail routes (`/projects/:slug`) with accessible image lightbox
- Testimonial carousel, work-process timeline and multiple call-to-action banners
- Contact form and free-quote form with full client-side validation and demo submission
- SEO-friendly page titles, meta descriptions, Open Graph tags and a custom favicon
- Accessible navigation, semantic markup, visible focus states and descriptive alt text

## Tech Stack

| Tool | Purpose |
| --- | --- |
| [React 19](https://react.dev/) | UI library |
| [Vite](https://vite.dev/) | Build tool and dev server |
| [Tailwind CSS 3](https://tailwindcss.com/) | Styling |
| [React Router DOM](https://reactrouter.com/) | Multi-page routing |
| [Lucide React](https://lucide.dev/) | SVG icons |

## Getting Started

This frontend loads **all content from the backend API** (see the companion
`AsssimBackend` Express project). Start the backend first, then the frontend.

```bash
# 1. Install dependencies
npm install

# 2. Make sure the backend API is running (default http://localhost:4000)

# 3. Start the local development server
npm run dev

# 4. Create an optimised production build
npm run build

# 5. Preview the production build locally
npm run preview

# 6. Run the linter
npm run lint
```

The dev server runs at the URL printed in the terminal (typically `http://localhost:5173`).
In development, Vite proxies `/api` requests to the backend (configurable via the
`VITE_API_PROXY` environment variable in `vite.config.js`).

## Project Structure

```
src/
├── components/     Reusable UI (Navbar, Footer, HeroSlider, forms, cards, sliders...)
├── context/        ContentContext.jsx — fetches and provides all API content
├── hooks/          useSEO, useInView
├── pages/          Home, About, Services, Projects, ProjectDetails, Team, Contact,
│                   Quote, Privacy, Terms, NotFound
├── services/       api.js — thin fetch layer over the backend REST API
├── utils/          validation.js
├── App.jsx         Route definitions, layout and content loading/error states
├── index.css       Tailwind layers, design tokens and utility classes
└── main.jsx        App entry with BrowserRouter + ContentProvider
```

## Customising Content

All editable content now lives in the backend, not the frontend:

- **Company details, stats, values, process, SEO:** `AsssimBackend/data/seed.json` → `site`
- **Services:** `AsssimBackend/data/seed.json` → `services`
- **Projects & galleries:** `AsssimBackend/data/seed.json` → `projects`
- **Team members:** `AsssimBackend/data/seed.json` → `team`
- **Testimonials:** `AsssimBackend/data/seed.json` → `testimonials`
- **Home hero slides:** `AsssimBackend/data/seed.json` → `heroSlides`
- **Form dropdown options:** `AsssimBackend/data/seed.json` → `formOptions`
- **Photography (direct image URLs):** `AsssimBackend/data/seed.json` → `images` and each item

After editing `seed.json`, run `npm run seed` in the backend to regenerate `data/db.json`.

### Brand colours

Defined in `tailwind.config.js`:

| Token | Hex |
| --- | --- |
| Primary (deep navy) | `#142B45` |
| Secondary (construction orange) | `#F28C28` |
| Background | `#FFFFFF` |
| Light background | `#F4F6F8` |
| Main text | `#252B33` |
| Muted text | `#6B7280` |

## Backend API

The website is a client of the Express backend (`AsssimBackend`). The API base URL defaults to
`/api` and is proxied to `http://localhost:4000` in development. For a deployed backend, set:

```bash
VITE_API_URL=https://your-api.example.com/api
```

Content endpoints consumed by the app:

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/api/content` | Bootstrap payload (site, images, services, projects, team, testimonials, hero slides, form options) |
| GET | `/api/services` / `/api/services/:slug` | Services list / single service |
| GET | `/api/projects` / `/api/projects/:slug` | Projects list (supports `?category=`) / single project |
| GET | `/api/projects/:slug/related` | Related projects |
| GET | `/api/team` / `/api/testimonials` | Team members / testimonials |
| POST | `/api/contact` / `/api/quote` | Contact / quotation form submissions |

## Images

All photographs are loaded from public [Unsplash](https://unsplash.com/) direct image URLs, so
no local image assets are required. Each image has descriptive `alt` text, lazy loading below
the fold and a graceful fallback if an image fails to load. Replace the URLs in the backend
`data/seed.json` with your own licensed project photography before launch.

## Notes

- `npm run build` completes without errors and outputs to `dist/`.
- The frontend shows a loading screen until `/api/content` resolves, and an error screen with a
  retry action if the backend is unreachable.
- Contact details such as the phone number, email and map location are placeholders.