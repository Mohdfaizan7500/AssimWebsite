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

```bash
# 1. Install dependencies
npm install

# 2. Start the local development server
npm run dev

# 3. Create an optimised production build
npm run build

# 4. Preview the production build locally
npm run preview

# 5. Run the linter
npm run lint
```

The dev server runs at the URL printed in the terminal (typically `http://localhost:5173`).

## Project Structure

```
src/
├── components/     Reusable UI (Navbar, Footer, HeroSlider, forms, cards, sliders…)
├── data/           Editable content: services.js, projects.js, team.js, testimonials.js,
│                   site.js (company info + SEO), images.js (image URLs)
├── hooks/          useSEO, useInView
├── pages/          Home, About, Services, Projects, ProjectDetails, Team, Contact,
│                   Quote, Privacy, Terms, NotFound
├── services/       api.js — form submission layer (swap the demo for a real backend)
├── utils/          validation.js
├── App.jsx         Route definitions and layout
├── index.css       Tailwind layers, design tokens and utility classes
└── main.jsx        App entry with BrowserRouter
```

## Customising Content

- **Company details, stats, values, process, SEO:** `src/data/site.js`
- **Services:** `src/data/services.js`
- **Projects & galleries:** `src/data/projects.js`
- **Team members:** `src/data/team.js`
- **Testimonials:** `src/data/testimonials.js`
- **Photography (direct image URLs):** `src/data/images.js` and each data file

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

## Connecting a Real Backend

Form submissions flow through `src/services/api.js`. By default (no API configured) they are
**simulated** and no data leaves the browser. To connect a real endpoint, set an environment
variable in a `.env` file:

```bash
VITE_API_URL=https://your-api.example.com
```

The contact form will then `POST` JSON to `POST /contact` and the quotation form to
`POST /quote`. Adjust the endpoint paths inside `src/services/api.js` as needed.

## Images

All photographs are loaded from public [Unsplash](https://unsplash.com/) direct image URLs, so
no local image assets are required. Each image has descriptive `alt` text, lazy loading below
the fold and a graceful fallback if an image fails to load. Replace the URLs in `src/data/`
with your own licensed project photography before launch.

## Notes

- `npm run build` completes without errors and outputs to `dist/`.
- Contact details such as the phone number, email and map location are placeholders.
- The demo message shown after form submission clearly states that no backend is connected.