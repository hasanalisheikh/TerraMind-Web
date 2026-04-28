# TerraMind — Marketing site

Single-page marketing site for TerraMind. Static HTML, no build step.

**Stack:** Plain HTML/CSS/JS · Google Fonts (Fraunces + Manrope) · Inline SVG · Vercel for hosting

---

## Quick start

```bash
git clone <your-repo-url>
cd terramind-site
```

Open `index.html` in your browser. That's it — there's no build step.

For live reload while editing, install the **Live Server** extension in VS Code (by Ritwick Dey), then right-click `index.html` → *Open with Live Server*. Edits save and reload instantly.

---

## File structure

```
.
├── index.html       # The whole site — HTML, CSS, JS, all inline
├── README.md        # This file
├── .gitignore       # OS junk + editor files
└── vercel.json      # Vercel config (caching, headers)
```

Everything is in `index.html` on purpose. One file, easy to grep, easy to deploy. If the file grows past ~2,000 lines, split CSS into `styles.css` and JS into `script.js` — but not before then.

---

## Editing the site

### Common edits

| What you want to change | Where to find it |
|---|---|
| Hero headline | Search `id="heroHeadline"` and the `raw` string in the `<script>` tag |
| Hero lede / eyebrow date | Search `class="lede"` and `class="eyebrow"` |
| Three platform layers | Search `class="agent-card"` (three of them) |
| Crop / region tiles | Search `class="for-list"` |
| Vision paragraph | Search `class="vision-body"` |
| Founders | Search `class="founder-card"` |
| CTA copy | Search `class="cta-section"` |
| Footer | Search `<footer>` near the bottom |
| Brand colours | Top of the `<style>` block, the `:root` CSS variables |

### Brand tokens

Defined as CSS custom properties at the top of the stylesheet:

- `--paper` — main background (warm off-white)
- `--ink` — primary text (near-black)
- `--green` / `--green-deep` — primary brand green
- `--navy` — accent navy
- `--gold` — warm tertiary used in "if frost" branches
- `--serif` — Fraunces (display)
- `--sans` — Manrope (body)

Change one variable at the top, the whole site updates.

---

## Deploy to Vercel

Recommended path — free, fast, auto-deploys on every git push.

1. Push the repo to GitHub (private is fine).
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click *Add New → Project* → import the repo.
4. Vercel auto-detects it as static HTML. Click *Deploy*.
5. You get `terramind.vercel.app` (or similar) within ~30 seconds.
6. Custom domain: *Project Settings → Domains → Add* → follow DNS instructions.

Every `git push` to `main` auto-deploys. Pull requests get preview URLs automatically.

### Alternative: Netlify

Same flow at [netlify.com](https://netlify.com). Drag-and-drop the folder into their dashboard, or connect via GitHub.

---

## Things still to fill in before publishing

- [ ] Real founder names + bios + initials in `.founder-avatar`
- [ ] Real contact email (currently `[email protected]`)
- [ ] Real LinkedIn URL (currently `#`)
- [ ] Decide on `terramind.ai` / `terramind.co.nz` / `terramind.com`
- [ ] Verify any te reo Māori usage with a fluent speaker
- [ ] Test the page on a real phone (375px width) before going live
- [ ] Consider adding a Tally / Typeform pilot-application link if you want structured leads vs. inbox

---

## Performance notes

- No external scripts or trackers. One Google Fonts call. Page weight is tiny.
- All animations use CSS transforms or SMIL — no JS animation libraries.
- The atmospheric backgrounds are CSS gradients + inline SVG noise, no image assets.
- Lighthouse should score 95+ on every metric out of the box.

If you add tracking (PostHog, Plausible, Fathom), put the script tag just before `</body>` and document it here.

---

## Accessibility

- Semantic HTML throughout (`nav`, `section`, `article`, `footer`)
- All decorative SVGs have `aria-hidden="true"`
- Focus styles inherit from browser defaults — fine for now, worth a pass before launch
- `prefers-reduced-motion` is **not yet** respected. Animation-heavy sections (hero pulses, marquee, traveling data dots, rotating rings) will play regardless. Add a media query before launch if accessibility is a priority.

---

## License

All rights reserved · © 2026 TerraMind
