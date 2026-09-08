# Prescient Global Insights — "Signal" concept: design plan

Companion to `prescient-signal.html`. Written before the code, as the build prompt asks, then reviewed once.

## Colour

| Token | Hex | Role |
|---|---|---|
| `--night` | `#1B0B36` | Ground for every particle section. Deep enough that additive-blended points read as light, and orange text reaches 7.0:1 on it. |
| `--violet` | `#5B2D91` | Brand purple. Surfaces, hairlines on dark, the mid-point of the particle hue ramp. Never a text ground for orange. |
| `--signal` | `#F5811E` | Brand orange. One job per screen: the CTA in the hero, the ignited sample in step 1, the tallest bar in step 4, the focus ring everywhere. |
| `--paper` | `#FBFAF8` | Ground for the light register (solutions, quality, case study, industries, trust). |
| `--ink` | `#171717` | Text on paper. |
| `--rule` | `#D8D2E4` | Hairlines and table borders on paper. |

The logo file at prescientgi.com could not be fetched from the build environment, so `--violet` and `--signal` are still the pack's approximations. Overwrite the two values at the top of the stylesheet once sampled; the particle ramp is derived from them at runtime.

Contrast (WCAG ratios, checked, not guessed):

| Pair | Ratio |
|---|---|
| paper on night | 17.5:1 |
| signal on night | 7.0:1 |
| paper on violet | 9.0:1 |
| signal on violet | 3.6:1 — large text and controls only, never body copy |
| ink on signal (CTA) | 6.9:1 |
| ink on paper | 17.2:1 |

## Type

- **Archivo** (variable, Google Fonts) for everything in the interface and every number. `font-variant-numeric: tabular-nums lining-nums` is set at the root, so figures align in the proof bar and in the case-study result without per-element overrides.
- **Newsreader** italic for exactly one element: the respondent verbatim in the case study. It is the only serif on the page, and it is used for the only human voice on the page.
- Scale: 5 steps (display, h1, h2, body, small). Body measure capped at 62ch.

## Wireframe

```
┌──────────────────────────────────────────────────────┐
│ ◆ Prescient        Process Solutions Quality Contact  [Brief us] │  fixed, night
├──────────────────────────────────────────────────────┤
│                                                      │
│   What do your customers know                        │  night · particle state 1
│   that you don't?                                    │  (turbulent cloud, curl drift)
│   We design, script and program custom surveys …     │
│   [ Brief us on your problem ]                       │
├──────────────────────────────────────────────────────┤
│  350+            1.5M+           24/7          31     │  night · tabular figures
│  completed…      respondents…    client…       Clutch │
├──────────────────────────────────────────────────────┤
│ 01 Target audience  ·                                │  pinned, 4 scenes
│    two sentences    ·   particles, right two-thirds  │  states 2 → 5
│    one detail       ·   sample → grid → clusters →   │  hold 100vh, morph 70vh
│                     ·   bar chart                    │
├──────────────────────────────────────────────────────┤
│ What business problem are you trying to solve?       │  paper
│  ▸ Product innovation   │ Method                     │  vertical tablist,
│    Custom surveys       │ Typical deliverable        │  arrow-key navigable
│    Pricing studies …    │                            │
├──────────────────────────────────────────────────────┤
│ How we protect data quality                          │  paper
│  Sampling ─────────────────────────── plain text     │  definition rows,
│  Speeders ─────────────────────────── plain text     │  hairline rules
│  Straightliners / Attention checks / Open-end coding │
├──────────────────────────────────────────────────────┤
│ One study                                            │  paper
│  Challenge      Method       Result  [the number]    │  slots marked for
│  “verbatim in Newsreader”                            │  Prescient to fill
├──────────────────────────────────────────────────────┤
│ Industries: Medical & pharma · CPG · Real estate     │  paper, three columns
├──────────────────────────────────────────────────────┤
│ Trust: Clutch · Platforms · Panels · Data handling   │  paper
├──────────────────────────────────────────────────────┤
│ Brief us on your problem                             │  night · state 6
│  name / company / email / the business question      │  particles settle into
│  [ Request a briefing call ]                         │  the mark
└──────────────────────────────────────────────────────┘
```

## Three principles specific to this brief

1. **The particle field is the argument, so nothing else is allowed to move.** No hover lifts, no entrance animations, no gradient washes. If a reader's eye goes anywhere other than the field and the copy, something has gone wrong.
2. **Every number is one of four.** 350+, 1.5M+, 24/7, 31. They appear in the proof bar and the trust layer, spelled identically. The case study's result and the compliance statement are visibly marked as slots for Prescient to fill rather than being invented. A research firm's site that fabricates a figure loses the pitch.
3. **The buyer is reading for risk.** Headline in second person, mechanism in the sentence under it, a data-quality section that names speeders, straightliners and attention checks in plain language. Method transparency is the differentiator a sceptical insights manager is actually looking for.

## Review: what read as the generic default, and what changed

- **First draft used the brand violet as the dark ground.** Additive particles on `#5B2D91` look washed, and orange on it fails body-text contrast. Changed to a night ground derived from the violet, keeping `#5B2D91` as a surface and accent.
- **First draft had one card grid for solutions, one for industries, one for trust.** That is three identical rounded grids, which the brief forbids. Solutions became a vertical tablist with a single reveal panel. Data quality became hairline-ruled definition rows. Industries became three text columns with no boxes. Trust became a two-column list. Only the four proof figures share a repeated form, and they are figures, not cards.
- **First draft put "Learn more" style secondary links on each step.** Removed. The page has one CTA verb repeated twice: "Brief us on your problem" in the hero and "Request a briefing call" on the form.
- **The logo mark is unavailable to the build.** State 6 samples an offscreen canvas. If `LOGO_MASK_SRC` is set to the real mark's URL it samples the image and takes its colours; otherwise it samples the wordmark set in Archivo so the mechanism is demonstrated with nothing invented.

## Slots to fill before this is shown outside the company

- Exact `--violet` and `--signal` hexes from the logo file.
- `LOGO_MASK_SRC` in the script header.
- The case-study challenge, method, result figure and respondent verbatim.
- The data-handling and compliance statements in the trust layer.
- The form endpoint (`data-endpoint` on the form).
- The Clutch profile URL.
