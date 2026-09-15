# IEEE RVCE — Common Ground

A responsive website frontend for the IEEE Student Branch at RV College of Engineering, Bengaluru. Common Ground brings the branch’s communities, events and stories into one welcoming place, with a focus on clear navigation, practical interactions and a distinct visual identity.

Warm ivory, expressive typography and real branch photography sit alongside blue, navy and complementary accents. The experience carries the same design across the homepage, community directories, event archive and individual detail pages.

## Run and build

Use Node.js 24 and npm:

```sh
git clone https://github.com/yogeshkrishna/IEEE-RVCE-FRONTEND.git
cd IEEE-RVCE-FRONTEND
npm ci
npm run dev -- --port 3010
```

Open [localhost:3010](http://localhost:3010) to view the development site.

For a production build:

```sh
npm run build
npm run typecheck
npm run start -- --port 3012
```

The production site runs at [localhost:3012](http://localhost:3012). No environment variables or external services are needed to run the frontend locally.

## What is included

| Destination | Functionality |
| --- | --- |
| `/` | Welcome page, interactive photo postcards, keyboard-accessible society explorer and branch highlights |
| `/about` | Branch story and an introduction to its community |
| `/team` | Committee directory and a link to the alumni archive |
| `/awards` | Historical branch and chapter recognition |
| `/gallery` | Branch photographs with full-image links |
| `/societies` | Search twelve communities and filter by community type |
| `/societies/[slug]` | Individual community pages with interests, topics and related events |
| `/affinities` | Dedicated Women in Engineering and SIGHT directory |
| `/events` | Event archive with keyword, year and format filters, chronological sorting and shareable selections |
| `/events/[id]` | Event overviews, dates, subject tags, related events and source records |
| `/calendar` | Month navigation, multi-day events, mobile agenda and shareable month views |
| `/membership` | Membership guidance, useful links and frequently asked questions |
| `/articles` | A space for future publications and a way to propose an article |
| `/contact` | Branch contact details, campus location and email-draft preparation |

Pages have their own routes and can be opened directly or bookmarked. Shared navigation marks the active section, while the mobile menu supports keyboard controls and focus restoration. Event filters remain in the URL so selections survive refresh and browser Back.

## Design and implementation

Built with Next.js App Router, React, TypeScript and custom CSS. Pages are prerendered, with small client components handling search, calendars, postcards and menus.

- **Palette:** `src/app/palette.css` defines the blue identity and complementary content colors.
- **Homepage styling:** `src/app/light.css` and `src/app/globals.css`.
- **Interior page styling:** `src/app/pages.css`.
- **Shared layout:** `src/components/navigation.tsx`, `footer.tsx` and `brand.tsx`.
- **Community content:** `src/lib/content.ts` contains society descriptions and homepage records.
- **Event content:** `src/lib/events.ts` contains archive records and timezone-stable date formatting.
- **Typography:** Fraunces, DM Sans and Manrope are served locally.
- **Photography:** Local WebP assets use responsive Next.js image delivery. The first hero image is preloaded.

Native form controls and disclosure elements keep everyday interactions familiar. Responsive layouts, visible keyboard focus and reduced-motion styles are built into the interface.

## Content and project scope

This repository contains the public frontend. Content is stored locally, with authentication, society publishing, media uploads and CMS integration left for a future backend integration.

The event directory currently includes fifteen selected records from 2022–2024, with links to the complete branch archive. Events are labelled as past activities. Community recommendations are matched by subject and do not imply that a particular chapter hosted an event.

Committee details reflect the source website and include a source-date notice. The article section is ready for future publications. Content provenance and editorial notes are documented in [CONTENT-SOURCES.md](CONTENT-SOURCES.md).

The contact form validates input and prepares an email draft. Visitors review and send it through their own email application; the frontend does not store or deliver messages. Article proposals use the same email-based approach.

## Deployment

The project is configured for Vercel’s Next.js workflow. For a new deployment:

1. Import the GitHub repository into Vercel.
2. Use the repository root as the project directory.
3. Select Next.js, Node.js 24.x and `npm run build` as the build command.
4. Keep the default output settings. No environment variables are required for the current frontend.

With Git integration enabled, pushes to the configured production branch trigger a new deployment.

## Verification and compatibility

Build, TypeScript, route and responsive checks are recorded in [VERIFICATION.md](VERIFICATION.md). Browser verification covers Chromium at widths from 320 to 1440 pixels. Separate Firefox, Safari, Edge and physical-device testing remains outstanding.

With the production server running, check the routes with:

```sh
node scripts/check-routes.mjs http://localhost:3012
```

The script checks public page loads, internal destinations, primary headings, skip-link targets and HTTP 404 handling. Interactive checks cover navigation, event filters, calendar behaviour, postcards and contact-form validation.
