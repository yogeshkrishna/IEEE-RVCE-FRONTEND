# Content sources

Public content reviewed on 14 September 2026. Editorial descriptions are newly written summaries; society descriptions explain their fields and do not claim unverified current projects or facilities.

## Official sources

| Content                                                                     | Source                                 |
| --------------------------------------------------------------------------- | -------------------------------------- |
| Branch purpose, awards, society/council and affinity links, contact details | https://www.ieee-rvce.org/#/           |
| Branch founded in 2017                                                      | https://www.ieee-rvce.org/#/about      |
| Archived event names and dates                                              | https://www.ieee-rvce.org/#/events     |
| Hack4Soc 2.0, 3–4 February 2024, 24-hour hackathon for societal causes      | https://www.ieee-rvce.org/#/events/151 |
| VLSI RoadShow, 16–17 March 2024                                             | https://www.ieee-rvce.org/#/events/153 |
| 3D Printing Workshop, 8–9 March 2024                                        | https://www.ieee-rvce.org/#/events/149 |
| Membership destination                                                      | https://www.ieee-rvce.org/#/membership |

The original navigation lists ten technical groups, including the Sensors Council, plus WIE and SIGHT. The frontend retains the council, affinity and humanitarian distinctions rather than labeling all twelve as technical societies.

The original award list names the 2024 Circuits and Systems Society and Power and Energy Society chapter awards, the 2023 Bangalore Section digital presence award, the 2022 Region 10 exemplary branch award, and the 2021 global student branch website contest win. The homepage displays these with their historical years.

## Local assets

| Local file                                                     | Original source / provenance                                                                                                                      |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `public/images/rvce-mark.png`                                  | https://www.ieee-rvce.org/assets/images/logos/ieee_rvce_new_white.png                                                                             |
| `public/images/community.webp`                                 | https://www.ieee-rvce.org/assets/images/fp/whoweare/IMG_20200222_173629.jpg — resized and encoded as WebP; archived branch group photograph, 2020 |
| Hero doodles, discipline diagrams and typographic event covers | Original code-native compositions for this redesign; illustrative rather than photographs or official event posters                               |
| Fraunces, Manrope and DM Sans                                  | Bundled through the `@fontsource-variable` packages; their font licenses are included in the installed packages                                   |

Brand marks and official photographs remain the property of their respective owners and are reused in the context of the requested branch website redesign. No competitor code, images or artwork were copied.

## Editorial maintenance

The homepage deliberately labels event cards and photography as archival. Replace the event objects with approved newer records when available. Existing-site statistics were not adopted as live counts. Leadership names and roles were omitted because their current accuracy was not established. The site includes no upcoming-event or active-recruitment claims.

## User-supplied postcard photographs

The user supplied three additional photographs for the hero on 14 September 2026. They are stored locally as `postcard-recognition.webp`, `postcard-workshop.webp` and `postcard-conference.webp`. The 2021 and CSITSS 2024 labels are visible in the corresponding photographs. The workshop photo is labeled as archival without an inferred date. Files were re-encoded to WebP without cropping the originals; responsive image framing is CSS-only.

These are the supplied award presentation, workshop group and conference inauguration images. No external asset service or credentials are required.

## Multipage revision — 15 September 2026

The original Home, Events, Membership and Articles pages were read in the browser. Their navigation confirmed separate Home, About Us, Events, Societies, Affinities, Membership and Articles routes, plus Calendar, executive committee and alumni sections.

- `src/lib/events.ts` includes fifteen selected event names and dates from `https://www.ieee-rvce.org/#/events`, with IDs 153, 149, 150, 152, 151, 154, 148, 147, 146, 134, 135, 138, 136, 122 and 126. Descriptions are newly written short summaries. Formats and topic labels are editorial classifications inferred from event names and visible keywords.
- The full legacy archive remains linked. Unclear or reversed date ranges seen in other source entries were not imported.
- `/team` transcribes the thirteen executive committee entries displayed on the original homepage. The source does not state a term, and the new page explicitly says so. Initials are typographic placeholders, not invented portraits. Alumni records remain linked to their source.
- Additional dated chapter/branch awards on `/awards` come from the original homepage's award list.
- The original Articles page displayed “Coming soon...” and no published entries. The new Articles page retains an honest empty state; it does not fabricate student authors or publications.
- Membership fees on the old page were not copied as current prices. Visitors are directed to the branch and IEEE's membership guidance for current information.
- Related events on community detail pages are matched by topics, without assigning an unverified host society.
- The four-photo album reuses the previously approved local photographs documented above.

Blue is now the permanent visual identity. The earlier green/blue switch described in historical notes is removed.
