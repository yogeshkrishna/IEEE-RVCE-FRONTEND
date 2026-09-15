# Version 2 verification

Checked locally on 14 September 2026.

## Build

- `npm run build`: passes; homepage and not-found page prerender successfully.
- `npm run typecheck`: passes.
- Reproducible dependencies are recorded in `package-lock.json`.

## Browser and visual checks

- Inspected the new welcome hero at desktop and mobile sizes.
- Checked viewport widths 320, 390, 768, 1024 and 1440 CSS pixels: no horizontal document overflow.
- Checked mobile menu opening and Escape closing with focus restored to the toggle.
- Checked SIGHT selection and keyboard wraparound to CS with focus following the selection.
- Checked one primary heading, valid in-page navigation targets and no broken loaded images.
- Confirmed the old FIG. 01 / CONNECTED POSSIBILITIES label is absent from the new hero.
- Corrected a missing space caused by the mobile line-break treatment.

## Theme refinement

- Short italic section labels replace numbering and capitals.
- Paper surfaces and muted discipline colors replace the dark explorer; the awards use soft sage. The dark ending now shares the hero’s cream, sage and serif typography.
- The previous exact V1 contact-style comparison no longer applies: the user requested this theme update.
- Rechecked 320, 390, 768, 1024 and 1440px viewports without horizontal overflow. Corrected the narrow-screen Sensors monogram to prevent clipping.

## Postcards and theme switch

- Verified the full postcard cycle (original → recognition → workshop → conference → original), using mouse click, Enter and Space.
- Both shield controls stay synchronized. Switching the footer shield leaves the URL and scroll position unchanged; clicking the wordmark still navigates home and preserves the selected palette.
- Compared geometry for the hero, facts, explorer, event covers, awards, contact heading and email across themes: unchanged.
- Checked both themes at 320, 390, 768, 1024 and 1440px, without horizontal document overflow.
- The development log identified the extension-injected body attributes behind the reported hydration warning. Tolerance is scoped to the body node. Edge itself was not exposed to the browser tool, so the fix was checked through code and the available Chromium preview.
- Double-clicking during an animation advances exactly once. All four photos load and the stack keeps a stable 280px height at the tested 320px viewport. Reduced-motion switching is implemented; OS motion-preference emulation was not available.

## Scope of checks

Checks used the available Chromium-based in-app browser and local Next.js server. These are not a full accessibility audit, Lighthouse certification or physical-device / Safari / Firefox testing. Reduced-motion styling is implemented, but OS preference emulation was not available. No public Vercel deployment was performed.

The original V1 verification report remains with `ver1_spectrum`; its spectrum-animation checks do not apply to this version’s new hero.


## Blue palette refinement — 15 September 2026

- Replaced the monochromatic hue conversion with explicit primary-blue and complementary accent values. Green default swatches are unchanged.
- Confirmed warm ivory page background, honey/sage/terracotta event posters and powder-blue awards through computed browser styles.
- Darkened the society category and body copy after measuring their contrast against the paper panel.
- No changes to layout, postcard behavior or theme-toggle behavior.
