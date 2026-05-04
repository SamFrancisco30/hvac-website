---
name: Premium Arctic Commercial
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#44474e'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#465f88'
  primary: '#000a1e'
  on-primary: '#ffffff'
  primary-container: '#002147'
  on-primary-container: '#708ab5'
  inverse-primary: '#aec7f6'
  secondary: '#ad2c00'
  on-secondary: '#ffffff'
  secondary-container: '#d83900'
  on-secondary-container: '#fffbff'
  tertiary: '#070b0d'
  on-tertiary: '#ffffff'
  tertiary-container: '#1e2224'
  on-tertiary-container: '#85898c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aec7f6'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#2d476f'
  secondary-fixed: '#ffdbd1'
  secondary-fixed-dim: '#ffb5a0'
  on-secondary-fixed: '#3b0900'
  on-secondary-fixed-variant: '#872000'
  tertiary-fixed: '#e0e3e6'
  tertiary-fixed-dim: '#c3c7ca'
  on-tertiary-fixed: '#181c1e'
  on-tertiary-fixed-variant: '#43474a'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  h1:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  button:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  section-padding: 80px
---

## Brand & Style

The design system is engineered for a premium Canadian HVAC service provider, focusing on the intersection of industrial reliability and high-end commercial sophistication. The brand personality is authoritative yet accessible, evoking a sense of "expert precision" and "unfailing warmth" in a harsh northern climate. 

The aesthetic follows a **Corporate / Modern** style with **Minimalist** influences. It prioritizes clarity and high-end photographic storytelling. The visual language avoids the cluttered "service technician" tropes in favor of a clean, architectural approach that speaks to property managers and luxury homeowners alike. Every interaction is designed to feel intentional, heavy-duty, and impeccably maintained.

## Colors

The palette is anchored by **Deep Navy Blue**, representing stability and corporate professionalism. **Sunset Orange** is used exclusively for primary actions and critical alerts, providing a high-contrast "heat" signature against the "cool" blue.

- **Primary (Deep Navy):** Used for headers, footers, and primary brand surfaces.
- **Secondary (Sunset Orange):** Reserved for Call-to-Actions (CTAs) and vital status indicators.
- **Surface/Neutral:** Pure White (#FFFFFF) is the primary canvas, supported by a "Frost" light gray (#F4F7FA) for subtle section differentiation.
- **Typography:** Deep Navy for headlines; a softer Charcoal (#333333) for long-form body text to improve readability.

## Typography

The design system utilizes **Inter** for its systematic, utilitarian precision. The typographic hierarchy is aggressive to ensure clarity for users who may be in emergency situations (e.g., heating failure). 

Headlines are set with tight letter-spacing and bold weights to command authority. Body copy utilizes a generous line-height to maintain a "clean" feel. Labels and small metadata use increased letter-spacing and all-caps styling to differentiate technical specifications from narrative content.

## Layout & Spacing

This design system employs a **Fixed Grid** model on desktop (12 columns) and a fluid model on mobile. A strict 8px spatial scale governs all padding and margins.

- **Whitespace:** Ample negative space is used to separate service categories and increase the "high-end" feel. 
- **Sectioning:** Large vertical padding (80px to 120px) separates major content blocks to prevent visual fatigue.
- **Alignment:** Consistent left-alignment for headlines and body text to reinforce the systematic, professional nature of the brand.

## Elevation & Depth

Visual hierarchy is achieved primarily through **Tonal Layers** and crisp, low-opacity shadows. 

- **Surface Levels:** The base is Pure White. Secondary containers (like cards or sidebars) use the "Frost" light gray or a thin 1px border (#E5E9F0).
- **Shadows:** Use a "Commercial Lift" shadow for interactive cards—a very soft, diffused shadow (0px 12px 24px rgba(0, 33, 71, 0.08)). 
- **Interactive States:** On hover, elements should elevate slightly with a more pronounced shadow and a subtle Sunset Orange accent on the border or icon.

## Shapes

The design system uses a **Soft** shape language. This moderate rounding (4px to 8px) balances the rigid, technical nature of HVAC equipment with a modern, approachable service experience.

- **Buttons:** 4px border radius for a sharp, professional look.
- **Cards & Inputs:** 8px border radius to soften the container and make the interface feel more contemporary.
- **Icons:** Use thick, 2px stroke-weight icons with slight corner rounding to match the "Inter" typeface's geometry.

## Components

- **Primary Buttons:** Sunset Orange background with Pure White text. Use a heavy 600 weight and 16px vertical padding. No gradients; solid fills only.
- **Secondary Buttons:** Deep Navy stroke (2px) with Navy text. Used for less urgent actions like "View Specs."
- **Service Cards:** White background with a subtle "Frost" border. Features a high-resolution image at the top and a prominent Deep Navy headline.
- **Inputs:** Large, accessible touch targets (min 48px height) with 1px borders. Focus states transition the border color to Sunset Orange.
- **Trust Badges:** A specialized component for displaying "24/7 Emergency Service" or "Certified Technicians," using a Deep Navy background and Sunset Orange icon.
- **Status Indicators:** Use Sunset Orange for "Emergency" or "Action Needed" and a soft Green for "System Optimized."
- **Data Tables:** High-density, clean rows with Deep Navy headers for commercial maintenance logs and equipment specifications.