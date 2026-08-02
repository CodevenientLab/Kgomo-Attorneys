# Kgomo Attorneys — Pitch Site (React + Vite + TS)

A cold-pitch redesign concept for Kgomo Attorneys Inc (Mahikeng, North West).
Content is pulled from their public site + Google Maps listing; design is a
"case file / docket" identity built from their actual brand colors (extracted
from `public/logo-original.png`).

## Stack

- React 18 + TypeScript
- Vite
- Plain CSS (custom design system in `src/index.css`, ported 1:1 from the
  original HTML pitch) — no Tailwind, kept intentionally lightweight
- No external UI libraries; scroll-reveal handled by a small
  `useReveal` IntersectionObserver hook

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/   one component per section (Header, Hero, Standing, Docket, Team, Reputation, Process, Closing, Footer)
  hooks/        useReveal.ts — scroll-in-view reveal animation
  index.css     full design system (colors, type, layout) as plain CSS
  App.tsx       composes all sections
public/
  logo.png            firm logo, background removed for use on dark sections
  logo-original.png   firm logo as supplied
```

## Notes for the next pass

- Real photography for the firm/office is not yet in — currently text-only.
- Testimonial quote in the Reputation section is a placeholder framing line,
  not a real client quote — swap in an actual review once available.
- Practice area copy is paraphrased from their public practice-areas listing;
  confirm wording with the firm before sending final.
