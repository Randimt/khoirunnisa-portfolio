# Portfolio Architecture

This project is structured for a production-ready futuristic biomedical portfolio.

## Core folders

- `src/app/` — Next.js App Router pages, metadata, loading UI, page transitions.
- `src/components/portfolio/` — reusable portfolio-specific sections and interface components.
- `src/components/ui/` — shadcn/ui primitives.

## Current production features

- Futuristic dark biomedical interface direction.
- Framer Motion section transitions and interactive cards.
- Responsive TailwindCSS layout.
- SEO metadata in `src/app/layout.tsx`.
- Futuristic loading screen in `src/app/loading.tsx`.
- Smooth route/page transition in `src/app/template.tsx`.
- Reusable footer component in `src/components/portfolio/site-footer.tsx`.

## Animation performance notes

- Uses transform/opacity-based animations where possible.
- Heavy effects are mostly CSS gradients, SVG strokes, and Framer Motion transforms.
- `prefers-reduced-motion` support is configured in `globals.css`.
