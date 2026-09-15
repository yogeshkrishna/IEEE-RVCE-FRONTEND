# IEEE RVCE — Common Ground (version 2)

A responsive Next.js landing page with a warm cream and forest-green palette, expressive serif typography and real branch photography. The society explorer uses warm paper tones and muted discipline colors. Soft sage links the facts and awards to the welcome. The closing section keeps its dark layout with cream text, sage accents and the same serif typography as the opening. Section labels use short italic titles without numbers or all-caps styling.

## Postcards and the hidden color switch

Click the top hero postcard to send it to the back. The original photograph remains first, followed by the three supplied branch images. The same control works with Enter and Space; reduced-motion users get an immediate change. Repeated clicks during a transition are ignored.

Click only the RV shield in the header or footer to switch between the default green palette and a blue palette. The IEEE RVCE wordmark still links home. The setting is intentionally local to the current page session; reloading starts green. Colors change throughout the site, including society and event artwork, while the photos and layout stay unchanged.

## Blue palette

Blue mode uses deep blue and navy for the primary identity, with the same warm ivory paper as green mode. Society cards retain apricot, sage, lilac, honey, rose and sea-glass colors. Event posters use honey, sage and terracotta; the awards use powder blue and brass details, and the dark ending pairs ivory type with pale blue and gold. This is a curated complementary palette, not a global hue conversion. The green mode and all layouts remain unchanged.

## Run independently

Use Node.js 24 and npm. From this folder:

```sh
npm ci
npm run dev -- --port 3001
```

Open http://localhost:3001. The separate `ver1_spectrum` snapshot can run on port 3002; changes in either folder do not affect the other. If dependencies are already installed, skip `npm ci`.

## Production checks

```sh
npm run build
npm run typecheck
npm run start -- --port 3001
```

Stop the development server before starting production on the same port.

## Deploy to Vercel

1. Push the contents of this `ver2_common_ground` folder to a GitHub repository, including `package-lock.json`. Do not commit `node_modules` or `.next`.
2. Import the repository in Vercel. Choose Next.js and set Root Directory to this project’s folder if it is nested in the repository.
3. Use Node.js 24.x, build command `npm run build` and the default output settings.
4. Deploy. No environment variables, API keys, CMS account or database are required for this frontend.

The adjacent `ver2_common_ground-vercel-ready.zip` contains portable source, local assets and these guides; it excludes dependencies and generated builds. Extract it, run `npm ci`, and follow the same steps. This project has not been published by the assistant.

## Where to edit

- `src/components/welcome.tsx`: welcome hero and opening copy.
- `src/components/postcard-stack.tsx`: photo order, captions and postcard interaction.
- `src/components/brand.tsx` and `theme-provider.tsx`: shield action, home link and shared theme state.
- `src/app/palette.css`: exact default paint values and the alternate blue palette. Swatch names refer to the original hex color; edit their values to tune either theme.
- `src/lib/theme-color.ts`: resolves palette-aware society and event colors, with a fallback for future content.
- `src/app/light.css`: version 2’s palette, hero and light-theme adaptations; the closing section uses coordinated dark tokens.
- `src/app/globals.css`: shared component layouts and the original design foundation, now using palette tokens.
- `src/app/page.tsx`: homepage sections and copy.
- `src/lib/content.ts`: society descriptions, archived events, awards and official destination links.
- `src/components/society-explorer.tsx`: keyboard-accessible society selector.
- `src/components/navigation.tsx`: sticky navigation and mobile menu.
- `src/app/layout.tsx`: metadata and locally bundled fonts.

Colors: cream `#faf9f5`, forest `#233e35`, green `#557b60`, sage `#dce8d8`; the dark ending uses `#191e1b`, cream `#f4f1e7` and sage `#b9cda4`. Fonts are Fraunces, Manrope and DM Sans, served locally. The former spectrum component remains in the source for reference but is not imported or rendered by this version.

## Scope and future integration

This is the public homepage frontend. Authentication, society dashboards, CMS, database and media uploads remain the separate backend team’s work. No pretend login or registration flow is included. Sanity can later supply the content objects; update existing official-site links when the new detail routes are available.

Events and the 2020 group photograph are explicitly archival. Replace these with approved current branch content when available. See `CONTENT-SOURCES.md` for provenance and `VERIFICATION.md` for checks and limitations.

## Local development issue notice

The reported issue was traced in the Next.js development log to Grammarly injecting `data-new-gr-c-s-check-loaded` and `data-gr-ext-installed` attributes onto the body before React hydrated it. The body now has a narrowly scoped `suppressHydrationWarning`; mismatches inside page components remain visible. Refresh any tab still showing the old warning. Next.js development diagnostics are not part of the production build.
