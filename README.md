# Hearts of Care Orphan Project

Responsive React + Vite frontend for Hearts of Care Orphan Project in Kampala, Uganda.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`, or preview it with `npm run preview`.

## Configuration

Everything organisation-specific lives in `src/data/siteConfig.js`. An empty string means
"not yet confirmed" — the UI hides the item and shows an honest "being confirmed" note
instead of an unfinished placeholder. Fill these in and every page updates:

| Field | Effect when empty |
| --- | --- |
| `email`, `phone` | Hidden; contact page shows a "being confirmed" note |
| `address` | Falls back to `location` |
| `social.*` | Social links hidden in the footer |
| `mission`, `vision`, `leadershipBio`, `leadershipPhoto` | About page shows a "being confirmed" state |
| `givingChannels` | Donate page shows a "channels being verified" card with WhatsApp/enquiry instead |
| `givingSheetUrl` | Download link hidden |

`stats` is the single source of truth for the 204 / 600 figures — they are read by the
home page, About, Impact, Programmes and Donate pages, so they can never drift apart.

## Environment variables

- `VITE_SITE_URL` — public origin (e.g. `https://heartsofcare.org`). Used for canonical URLs,
  Open Graph tags and share links. Defaults to `window.location.origin`.
- `VITE_API_BASE_URL` — backend origin. Until it is set, the enquiry and volunteer forms
  honestly report that nothing was sent or stored.

## Integrations and launch checklist

- Donation enquiries do not process payments. Add verified account details to
  `givingChannels` (or a PDF to `givingSheetUrl`) before advertising a giving path.
- Story examples are marked as demonstration content and carry `noindex` until they are
  replaced with approved, consented stories.
- All photography is illustrative stock media. Replace it with organisation-approved images
  before public launch, particularly any image that could identify a child.
- Inner-page hero images live in `src/data/pageHeroImages.js` (About, Programmes, Impact,
  Stories, Donate, Volunteer, Contact). Set `image: ""` on any entry to fall back to a
  text-only hero; `focus` controls the crop position on the image.
- Add `public/og-image.jpg` (1200×630) for link previews on WhatsApp, Facebook and X.
- `public/_redirects` is included for Netlify-style hosts so deep links such as
  `/stories/:id` resolve to the SPA. Add an equivalent rewrite for other hosts
  (e.g. Vercel `rewrites`, GitHub Pages `404.html`).
- The site is client-rendered. For richer crawler/social previews, add prerendering
  (e.g. `vite-plugin-prerender`) — metadata is already declared per route via `SEO.jsx`.

## Accessibility notes

- Skip link to `#main-content`, visible focus rings, `aria-expanded`/`aria-controls` on the
  menu and dropdown, and a dropdown that closes on outside click or `Escape`.
- Form fields set `aria-invalid` + `aria-describedby`, errors use `role="alert"`, and results
  use `role="status"` (success) or `role="alert"` (error).
- Brand links take their accessible name from the visible text.

## Included routes

`/`, `/about`, `/programmes`, `/impact`, `/stories`, `/stories/:storyId`, `/donate`,
`/volunteer`, `/contact`, and a `*` catch-all 404.
