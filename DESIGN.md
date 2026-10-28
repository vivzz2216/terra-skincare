---
name: Terra
description: Reference-led skincare campaign with playful type and everyday ritual imagery.
colors:
  plum: "#351639"
  cream: "#fffaf1"
  yellow: "#fff17b"
  lilac: "#cfaff0"
  yellow-hover: "#ffe958"
  product-surface: "#fff9ef"
  essentials-surface: "#f2e9fa"
  care-surface: "#f8edb6"
typography:
  display:
    fontFamily: "Fredoka, sans-serif"
    fontSize: "clamp(76px, 8.3vw, 124px)"
    fontWeight: 700
    lineHeight: 0.85
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Fredoka, sans-serif"
    fontSize: "clamp(42px, 4.2vw, 64px)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    lineHeight: 1.65
  label:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 700
rounded:
  button: "50px"
  small-button: "30px"
  image: "0px"
spacing:
  section: "100px"
  product-gap: "28px"
  mobile-gutter: "7%"
components:
  button-primary:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.plum}"
    rounded: "{rounded.button}"
    padding: "17px 28px"
  button-primary-hover:
    backgroundColor: "{colors.yellow-hover}"
  button-cream:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.plum}"
    rounded: "{rounded.button}"
    padding: "17px 28px"
---

# Design System: Terra

## Overview

The supplied terra reference is the visual authority: lilac campaign photography, butter-yellow actions, warm ivory breathing room and deep plum lettering. Rounded Fredoka display type supplies the playful character; DM Sans keeps product details direct.

**Key Characteristics:**
- Reference-led campaign hero and generated concept product/lifestyle photography.
- Open editorial sections and square product surfaces.
- Rounded interactive actions and a simple three-step ritual.

## Colors

### Primary
- **Deep Plum:** text, outlines and selection background.
- **Butter Yellow:** primary actions, campaign sticker and small decorative rays; the hover variant deepens its warmth.

### Secondary
- **Lilac:** announcement and closing campaign fields.

### Neutral
- **Warm Cream:** page background and the lifestyle section's action.
- **Product Ivory, Essentials Lilac and Care Butter:** distinct product and editorial section surfaces, as defined in the frontmatter.

## Typography

Use Fredoka for the wordmark, hero, section titles and product names. Use DM Sans for navigation, descriptions, prices and actions. Display and headline tokens describe the desktop hero and product-section title; other editorial titles vary with their composition. Mobile hero type is (66px), with line height (0.84). Body copy within sections is generally (13–15px), with compact product detail at (12px).

## Layout

Desktop sections use (7–8%) horizontal gutters and generous vertical rhythm, typically (80–110px). The compact product strip and main catalog use three columns; lifestyle imagery and copy form a full-width split. At (1000px), gaps and image heights tighten. At (650px), catalog, routine and lifestyle sections stack, with (7%) gutters; the hero separates copy above its bottom-anchored campaign image. Preserve the product panel's natural (1:2) proportions within its square-edged surface.

## Elevation & Depth

Flat color fields, photography and thin dividers provide depth. There are no elevated product cards. The photo caption uses a small text shadow for legibility. Buttons lift (3px) on hover; reveals use the existing exponential easing and respect reduced motion.

## Shapes

Pill actions and the circular tilted sticker contrast with rectangular imagery. Product cards remain open on their section surface, with no rounded container or enclosing shadow.

## Components

### Buttons and links

Primary actions use the yellow pill token with bold DM Sans and a directional arrow. The lifestyle action uses cream. Small actions use a smaller pill (30px radius). Editorial links use a single bottom rule and a directional arrow. Keyboard links expose an offset purple focus outline (3px).

### Product and routine rows

Product imagery sits above an unboxed name/price row, description and underlined action. Compact catalog links pair a product cutout with text. Routine steps use a top divider, small numbered label and Fredoka title.

### Navigation

The cream header pairs a Fredoka wordmark with small bold links; hover draws a plum underline. Mobile spacing tightens and the bag icon is hidden.

## Do's and Don'ts

### Do:
- Do preserve the supplied reference palette, rounded lettering and photographic direction.
- Do keep product panels proportionate and editorial copy open on section backgrounds.
- Do retain keyboard focus and reduced-motion behavior.

### Don't:
- Don't replace the product and lifestyle photography with generic decorative cards.
- Don't add enclosing shadows or rounded product containers.
