# TerraMind — Marketing site

Marketing site for TerraMind, an agricultural intelligence platform for horticulture growers.

**Stack:** Next.js 16 · TypeScript · Tailwind v4 · Fraunces + Manrope · Vercel

---

## Quick start

```bash
cd terramind-next
npm install
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000).

---

## Structure

```
terramind-next/     # Active Next.js project
  src/
    app/            # layout.tsx, page.tsx, globals.css
    components/     # Nav, Hero, sections, etc.
    hooks/          # useScrolled, useReveal, useParallax
terramind-site/     # Original static HTML (reference only)
```

---

## Deploy

Vercel auto-deploys on every push to `main`.
Set **Root Directory** to `terramind-next` in Vercel project settings.

---

## License

All rights reserved · © 2026 TerraMind
