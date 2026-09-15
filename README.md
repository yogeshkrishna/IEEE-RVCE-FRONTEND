# IEEE RVCE — Common Ground

A complete public-facing Next.js frontend, expanded from the original homepage concept. The permanent visual identity pairs warm ivory with confident blue, navy, honey, coral, lilac and turquoise. The shield and IEEE wordmark form one home link. There is no theme toggle or alternate green mode.

## Run and build

Use Node.js 24 and npm from this folder:

```sh
npm ci
npm run dev -- --port 3010
```

Open http://localhost:3010. Both localhost and 127.0.0.1 are explicitly allowed for local development resources.

For production:

```sh
npm run build
npm run typecheck
npm run start -- --port 3012
```

## What is included

| Destination         | Functionality                                                                                                                  |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `/`                 | Original welcome, interactive photo postcards, keyboard-accessible society explorer, event highlights and dark closing section |
| `/about`            | Branch story and links to people, recognition and photographs                                                                  |
| `/team`             | Thirteen people from the original site's committee directory, with a source-date notice and alumni archive link                |
| `/awards`           | Historical branch and chapter recognition                                                                                      |
| `/gallery`          | Four archival photographs with full-image links                                                                                |
| `/societies`        | Search all twelve communities and filter by community type                                                                     |
| `/societies/[slug]` | Twelve individual community pages with topics and related branch events                                                        |
| `/affinities`       | Dedicated WIE and SIGHT directory                                                                                              |
| `/events`           | Fifteen selected archived events; keyword, year and format filters; chronological sorting; URL-persisted selections            |
| `/events/[id]`      | Event overview, dates, subject tags, related events and original record links                                                  |
| `/calendar`         | Month navigation, month picker, event links, multi-day events, mobile agenda and shareable month URLs                          |
| `/membership`       | Membership journey, official guidance and accessible FAQ disclosures                                                           |
| `/articles`         | Honest empty state and an email link to propose a contribution                                                                 |
| `/contact`          | Contact details, campus map link, validated email-draft preparation                                                            |

The shared header uses actual page routes. It marks the active section, closes the mobile menu after navigation, supports Escape, and restores focus to the menu toggle. Footer links expose all major pages. Deep links, refresh and browser Back work.

## Design and implementation

- Permanent palette: `src/app/palette.css`. Swatch IDs keep the original content mappings; their values now define the blue identity.
- Homepage styling: `src/app/light.css` and `src/app/globals.css`.
- Interior page styling: `src/app/pages.css`.
- Shared navigation and footer: `src/components/navigation.tsx`, `footer.tsx`, and `brand.tsx`.
- Communities and homepage content: `src/lib/content.ts`.
- Event records and timezone-stable date formatting: `src/lib/events.ts`.
- Fonts: locally served Fraunces, DM Sans and Manrope.
- Photography: local WebP images with responsive Next.js image delivery. The hero preloads its first image.
- Known pages are prerendered. Small client components handle search, calendars, postcards and menus.

## Frontend scope and backend handoff

The project runs without environment variables, accounts, databases or API keys. Authentication, society publishing dashboards, media uploads and CMS integration remain the backend team's scope.

The contact form prepares a `mailto:` draft; the visitor reviews and sends it in their email application. The website does not claim to send or store a message. Article proposals also use email. No submission is sent during automated testing.

Events are clearly labelled as archival and registration is closed. Fifteen records are curated locally; the full original archive remains linked. Related community events are matched by subject, not claimed as that chapter's hosted events. The original article directory has no published entries. Committee roles mirror the source site, which does not state its committee term. See `CONTENT-SOURCES.md` before replacing content with current records.

## Deploy to Vercel

1. Push this folder's current source to your GitHub repository.
2. Import the repository into Vercel and select this directory as the root if it is nested.
3. Select Next.js, Node.js 24.x, and build command `npm run build`. Leave the output directory at its default.
4. No environment variables are required for this frontend.

No public deployment or Git push was performed for this revision. Older deployment ZIPs are earlier snapshots; use the current source folder or the new blue-site archive supplied with this revision.

## Verification and compatibility

See `VERIFICATION.md` for the checks actually performed. The available browser was Chromium; real Firefox, Safari, Edge and physical-device tests were not available. Next.js's installed documentation lists Chrome 111+, Edge 111+, Firefox 111+ and Safari 16.4+ as its baseline browser support.

### Repeat the route checks

With the production server running:

```sh
node scripts/check-routes.mjs http://localhost:3012
```

This checks all prerendered public routes, internal destinations and 404 handling.
