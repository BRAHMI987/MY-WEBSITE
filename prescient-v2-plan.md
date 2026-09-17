# Prescient Global Insights v2: design read, dials, system

Written before the code, per the Taste skill's process. Companion to `index.html`.

## Design read

Reading this as: a B2B research-firm landing page for sceptical insights managers and brand directors at CPG, pharma and real-estate companies, with a cinematic, evidence-first dark language, leaning toward native CSS plus a Three.js scroll-driven camera, Archivo for interface and data, and Prescient's own purple and orange.

Mode (Impeccable): Persuade. The visitor decides to request a briefing call.

## Dials

| Dial | Value | Why |
|---|---|---|
| DESIGN_VARIANCE | 7 | Copy alternates sides through the fly-through, an asymmetric solutions grid, one off-centre chart close. Not chaos: the buyer is reading for risk. |
| MOTION_INTENSITY | 8 | One authored moment: the camera flight through the study. Everything else is a 160 to 240ms transition or nothing. |
| VISUAL_DENSITY | 3 | Section padding 96 to 128px, one idea per viewport inside the flight. |

## The one bold thing

Scrolltide's best templates share a mechanism: a pinned section several viewports tall, a camera or playhead that scroll drives, plates stacked in depth so the nearest leaves frame first, chapters of copy fading through it and switching sides so the picture is never covered, and the pointer adding a small drift on top. Astera, "loose stars drift and settle until the spiral resolves into one constellation, for brands whose whole pitch is turning scattered signal into a figure", is almost Prescient's pitch verbatim.

So the page opens with a seven-viewport flight through a study:

| Scroll | Camera passes | Copy |
|---|---|---|
| 0 to 12% | A cloud of respondent points, cool white with a few orange | Hero |
| 17 to 31% | An orange ring the path flies through. Bullseye sampling. | 01 Target audience, right |
| 36 to 52% | Nine translucent plates stacked in depth, each a lattice of rows and columns. The nearest leaves frame first. | 02 Build your survey, left |
| 57 to 72% | Five coloured clusters on either side of the path | 03 Uncover insights, right |
| 78 to 100% | A floor grid and five bars that rise as the camera arrives, tallest orange | 04 Tell your story, left |

Scroll position is the playhead. A short damping loop smooths it. The pointer adds a small drift to the camera on fine-pointer devices. Reduced motion or no WebGL replaces the flight with a static chart poster and the chapters flow as ordinary columns.

## System

Scales borrowed from the Linear DESIGN.md in the Awesome Design library (structure only, colours are Prescient's):

- Type: display 56 to 80px at 600 with -0.03em tracking, h2 40px, h3 22 to 28px, body 16 to 18px, small 14px, caption 12px. Archivo throughout. Newsreader italic for the single respondent verbatim.
- Spacing: 4, 8, 12, 16, 24, 32, 48, section 96 to 128.
- Radii: 8px controls, 12px cards, 16px plates. One scale, no pills.
- Colour: night `#1B0B36` ground, violet `#5B2D91` surface, signal `#F5811E` as the only accent, paper `#FBFAF8` text, lilac `#C9B8E8` secondary text. Contrast checked in v1: paper on night 17.5:1, signal on night 7.0:1, lilac on night 10:1, ink on signal 6.9:1.
- Theme: dark, locked. The use scene is an insights manager at a desk after hours with the lights low, and additive particles need a dark ground.
- Icons: Tabler outline, 1.75 stroke, inlined from the library package.

## What the skills flagged and how it was resolved

- Taste and Impeccable disagree on step numbering. Both allow it when the sequence carries information. The four steps are a real sequence, so 01 to 04 stay. Nothing else is numbered.
- Both ban eyebrow labels. None are used. The hero's brand line is the one permitted brand strip.
- Taste bans three equal feature cards. Solutions are an asymmetric six-cell grid with two cells carrying plates.
- Taste requires one label per CTA intent. Navigation and hero say "Brief us on your problem"; the form's submit is "Send the brief".
- Taste forbids invented statistics. The proof bar carries only the four verified figures. The case study keeps its marked slots.
- Emil's rules: entrances ease out from a visible default, UI transitions stay under 240ms, buttons scale to 0.97 on press, hover effects are gated behind a fine-pointer query, exit is faster than enter.
- Impeccable's craft floor: selection colour, caret, scrollbar, focus ring and tabular numerals are themed from the palette.
