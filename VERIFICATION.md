# Verification — multipage blue revision

Checked locally on 15 September 2026. This report supersedes the earlier green/blue toggle checks.

## Build and route integrity

- Production Next.js build passes, including TypeScript and static generation.
- Separate `npm run typecheck` passes.
- Known public pages are prerendered; there are twelve community detail routes and fifteen event detail routes.
- Git whitespace check passes.

## Browser checks performed

Used the Chromium-based Codex browser against the local production server.

- Home, event directory, community directory, calendar, contact and membership at 320, 390, 768, 1024 and 1440 CSS pixels: no horizontal overflow, one main landmark and one primary heading per page, no broken loaded images.
- Every community detail, every event detail, About, Affinities, Articles, Awards, Gallery and People at 320 and 1440 pixels: no horizontal overflow, one primary heading, no broken loaded images. Together these make 96 page/viewport checks.
- Desktop homepage and event directory, plus the mobile community directory, visually inspected.
- Event search, empty state and clearing filters; format filtering and oldest-first sorting.
- Event detail navigation and browser Back preserve the filtered URL; reload restores the same selection.
- Community keyword and type filters return the expected Robotics and WIE records.
- February 2024 has 29 days, March has 31. Calendar month changes, archive entries, multi-day placement and browser Back work.
- Contact required fields block an empty submission. Valid input produces an encoded mailto link. Editing the input clears the obsolete draft. No email was opened or sent.
- Membership FAQ expands and displays its answer.
- Mobile menu opens, Escape closes it and restores focus. Selecting an event-page link closes the menu.
- All four hero postcards cycle with click, Enter and Space.
- Society keyboard End selects SIGHT; ArrowRight wraps to CS; Discover opens the community's own page.
- Clicking the header shield returns home. No color-theme buttons remain; the blue heading renders immediately in the permanent palette.
- No browser warnings or errors during the production route sweep.

## Fixes and compatibility measures

- Replaced in-page header anchors and homepage outbound detail links with Next.js routes.
- Removed the theme provider, toggle button and alternate-theme selector. CSS delivers blue on the first paint, without waiting for JavaScript.
- Fixed blocked local Next.js development resources with explicit localhost and 127.0.0.1 allowed origins. Retested the postcard interaction in development successfully.
- Replaced deprecated Next.js Image `priority` with `preload` for the first hero image.
- Invalid event filter values fall back to supported options; invalid calendar month values fall back to the latest archived month.
- Dates use UTC explicitly, avoiding local timezone date shifts. Calendar calculations use UTC and support leap years.
- Native selects, month input, details/summary and form validation; no third-party widget library. Browsers without a month picker can accept a YYYY-MM value.
- Mobile menu has bounded viewport height and internal scrolling. Dynamic viewport sizing has a conventional vh fallback.
- Added the Safari backdrop-filter prefix, focus styling for fields/disclosures, forced-color borders, reduced-motion treatment and print styles.
- Reveal effects leave content visible when IntersectionObserver is unavailable. Postcards have an overflow fallback.
- Event cards are included in the server-rendered Suspense fallback, making archive content available while filters load.

## Limits

These checks do not establish universal browser compatibility. Firefox, Safari/WebKit, standalone Edge, physical devices, OS-level reduced motion and high-contrast emulation were not available in the connected browser. The installed Next.js guide lists Chrome 111+, Edge 111+, Firefox 111+ and Safari 16.4+ as framework baselines. This is not a full accessibility certification or Lighthouse audit.

Content is a local archive, not a live CMS. Registration, authentication, uploading and message delivery are not implemented. No public deployment was performed.

## Final regression pass

- `node scripts/check-routes.mjs http://127.0.0.1:3012`: passes for 39 public routes, 44 internal destinations and three unknown routes returning HTTP 404.
- Rejects whitespace-only names/messages with visible feedback. Editing input clears draft/error feedback.
- Partial/unsupported year parameters fall back to the complete archive.
- Back-to-top anchor now targets the document body instead of the sticky header; production screenshot confirms returning to the page heading.

To rerun the HTTP checks, start the production server and run the script above. It checks direct route loads, primary headings, skip-link targets, removal of theme controls, internal destinations and unknown-route status codes.
