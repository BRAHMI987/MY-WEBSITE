---
name: awesome-design
description: Library of 74 DESIGN.md design-system files reverse-engineered from real products (Linear, Stripe, Vercel, Apple, Notion, Airbnb and more). Use when the user names a product whose look they want to borrow, asks for a design system or tokens before a build, or says "use the Linear design.md". Provides palette, type scale, spacing, radii, shadows, button and component patterns as a file to build against.
---

# Awesome Design: DESIGN.md library

A DESIGN.md is a plain-text design system in the Google Stitch format: colours, typography, spacing, radii, shadows and component rules that an agent reads before building UI. This folder holds one per product, at `design-md/<product>/DESIGN.md`.

## How to use it

1. Pick the product whose look fits the brief. Read only that one file: `design-md/<product>/DESIGN.md`. Do not load several at once.
2. Before writing any markup, extract and show the user a short list: type scale, spacing scale, radii, and button styles from the file.
3. Build on that system. Match its spacing scale, type scale and component patterns exactly.
4. The user's brand colours win over the file's colours. Keep the file's structure, swap its palette for the brand's, and say which tokens were overridden.
5. If something in the brief conflicts with the system, follow the system and tell the user what you overrode.
6. On a long build, re-state the type scale and spacing scale at the start of each new section rather than relying on memory of the file.

You are borrowing building blocks, not cloning the site. Never copy a product's logo, copy, imagery or name into the user's page.

## Available systems

airbnb airtable apple binance bmw bmw-m bugatti cal claude clay clickhouse cohere coinbase composio cursor dell-1996 elevenlabs expo ferrari figma framer hashicorp hp ibm intercom kraken lamborghini linear.app lovable mastercard meta minimax mintlify miro mistral.ai mongodb nike nintendo-2001 notion nvidia ollama opencode.ai pinterest playstation posthog raycast renault replicate resend revolut runwayml sanity sentry shopify slack spacex spotify starbucks stripe supabase superhuman tesla theverge together.ai uber vercel vodafone voltagent warp webflow wired wise x.ai zapier 

Each folder also has a short README.md describing the product's design language.
