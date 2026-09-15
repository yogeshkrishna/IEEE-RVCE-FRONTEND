# IEEE RVCE — Website Redesign

A new frontend for the IEEE Student Branch at **RV College of Engineering, Bengaluru**.

Find a community, explore past events, meet the people behind the branch, or learn how to join. Built around clear navigation, real branch photographs and a design that feels welcoming.

## Explore the website

- **Home:** clickable photo postcards, branch highlights and an interactive community explorer.
- **Communities:** discover twelve societies, councils and groups, each with its own page.
- **Events:** search the archive, filter by year or format, and browse activities on a calendar.
- **People and recognition:** explore the committee directory, awards and photo gallery.
- **Membership:** find joining information and answers to common questions.
- **Contact:** prepare an email to the branch about membership, events or collaboration.

Pages have their own URLs. Event searches can be bookmarked and shared. The layout adapts to phones, tablets and desktops, with keyboard navigation and reduced-motion support.

## Built with

| Technology | Purpose |
| --- | --- |
| Next.js App Router | Pages, routing and image optimisation |
| React and TypeScript | Components and interactive features |
| Custom CSS | Layout, typography, colour and animation |
| Vercel | Hosting |

Fonts and photographs are served locally. The frontend runs without API keys or a database.

## Run locally

Install **Node.js 24**, then run:

```sh
git clone https://github.com/yogeshkrishna/IEEE-RVCE-FRONTEND.git
cd IEEE-RVCE-FRONTEND
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

To build and run the production version:

```sh
npm run build
npm start
```

## Project structure

```text
src/
├── app/          Pages and styles
├── components/   Shared UI and interactive features
└── lib/          Community content and event records

public/images/    Branch photographs and branding
scripts/          Route verification
```

Community descriptions and homepage content live in `src/lib/content.ts`. Event records live in `src/lib/events.ts`.

## Current scope

This repository contains the **public website frontend**. Content is stored locally; accounts, publishing tools and CMS integration are not connected yet.

The event directory contains selected historical records, clearly marked as archived. Articles have not been published yet. The contact form prepares a draft for the visitor’s email app—it does not send messages itself.

See [Content Sources](CONTENT-SOURCES.md) for photography credits and information about the branch records.

## Checks

The production build, TypeScript checks and route checks pass. Responsive and interactive testing covers Chromium at screen widths from **320 to 1440 pixels**. Testing in Safari, Firefox and standalone Edge remains outstanding.

```sh
npm run typecheck

# With the production server running:
node scripts/check-routes.mjs http://localhost:3000
```

See [Verification](VERIFICATION.md) for the full testing notes.
