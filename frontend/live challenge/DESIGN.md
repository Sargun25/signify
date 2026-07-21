---
name: Paper Archive ASL
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#45483e'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0f0'
  outline: '#76786d'
  outline-variant: '#c6c8ba'
  surface-tint: '#56633b'
  primary: '#56633b'
  on-primary: '#ffffff'
  primary-container: '#8c9b6e'
  on-primary-container: '#26320f'
  inverse-primary: '#bdcd9c'
  secondary: '#645d56'
  on-secondary: '#ffffff'
  secondary-container: '#ebe1d8'
  on-secondary-container: '#6a635c'
  tertiary: '#7d525f'
  on-tertiary: '#ffffff'
  tertiary-container: '#b98896'
  on-tertiary-container: '#46232e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9e9b6'
  primary-fixed-dim: '#bdcd9c'
  on-primary-fixed: '#141f01'
  on-primary-fixed-variant: '#3e4b26'
  secondary-fixed: '#ebe1d8'
  secondary-fixed-dim: '#cec5bc'
  on-secondary-fixed: '#1f1b16'
  on-secondary-fixed-variant: '#4c463f'
  tertiary-fixed: '#ffd9e2'
  tertiary-fixed-dim: '#eeb8c7'
  on-tertiary-fixed: '#30111c'
  on-tertiary-fixed-variant: '#623b47'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  display-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  title-md:
    fontFamily: Quicksand
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  body-lg:
    fontFamily: Quicksand
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 26px
  body-md:
    fontFamily: Quicksand
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  label-sm:
    fontFamily: Quicksand
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 64px
  card-padding: 24px
---

## Brand & Style

The design system is centered on a "Paper Archive" aesthetic, blending the tactile charm of a physical workbook with the sophisticated clarity of a modern learning app. The brand personality is patient, scholarly, and exceptionally gentle, specifically tailored for the focused environment of ASL learning. 

The visual style utilizes a high-end **Minimalist** approach with subtle **Tactile** influences. It avoids the coldness of digital interfaces by using cream-based backgrounds and paper-like textures. The goal is to evoke a sense of calm progress, where learning a new language feels as organized and rewarding as filing a beautifully labeled card into a curated collection.

A central mascot—a soft, 3D character with exaggerated, expressive hands—acts as the primary instructor. This character should be rendered with a matte, clay-like finish in the system's sage and pink tones, ensuring that hand positions (the core of the curriculum) are the most visually prominent element.

## Colors

The palette is rooted in organic, muted tones to reduce eye strain during long study sessions.

- **Primary (Sage Green):** Used for primary actions, progress indicators, and "correct" states. It represents growth and focus.
- **Secondary (Cream):** The foundation of the design system. This replaces pure white for all backgrounds to create the "paper" feel.
- **Tertiary (Muted Pink):** Used for highlights, secondary call-to-outs, and feminine or soft accents within the mascot and illustrations.
- **Neutral (Charcoal):** Reserved for high-contrast typography and structural borders. It provides the "ink" to the "paper."

Color is applied in flat, matte blocks. Gradients are avoided entirely to maintain the archival, printed aesthetic.

## Typography

Typography balances character with accessibility. **Bricolage Grotesque** provides a distinctive, slightly quirky personality for headlines, mimicking the look of vintage typesetting. **Quicksand** is used for all body text and instructional content; its rounded terminals and generous x-height ensure maximum legibility, which is critical when students are glancing between text and hand-sign animations.

- **Headlines:** Use Charcoal for maximum contrast against Cream backgrounds.
- **Body Text:** Maintains a slightly heavier weight (Medium 500) to ensure readability on mobile screens.
- **Labels:** Always Uppercase with slight letter spacing to reinforce the "tabbed archive" look.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop and a fluid, single-column approach on mobile. The "Paper Archive" model uses structured, visible vertical and horizontal alignments that suggest a grid-based physical folder.

- **The Shelf:** Content is organized into "cards" or "folders" that sit on a structural grid. 
- **Margins:** Generous whitespace (20px minimum on mobile) is used to prevent the interface from feeling cluttered, allowing the ASL video/animation content to breathe.
- **Rhythm:** An 8px linear scale governs all padding and margins to maintain a tight, mathematical rigor behind the soft colors.

## Elevation & Depth

This design system eschews modern shadows in favor of **Tonal Layers** and **Low-Contrast Outlines**.

- **Surface Tiers:** Depth is created by stacking slightly different shades of Cream and Sage. A card might be a shade lighter than the background it sits on.
- **Structural Lines:** Instead of drop shadows, 1px solid borders in a slightly darker version of the background color (or thin Charcoal lines) define the edges of UI elements.
- **Z-Index:** Content "stacked" on top of other content should use a hard-edged, offset stroke (1px or 2px) to simulate the physical thickness of a card or paper tab.

## Shapes

The shape language is "Soft-Geometric." While the "Paper Archive" theme suggests rectangular cards, the corners are softened to level `1` (0.25rem - 0.75rem) to maintain the friendly, approachable nature of a learning app.

Tabs are a signature shape in this system. Component tops often feature "Folder Tabs" (asymmetrical rounded tops) to categorize content. Buttons and input fields use the same soft rounding to remain consistent with the card containers.

## Components

- **Primary Buttons:** Solid Sage Green with Charcoal text. Use a thick 2px Charcoal bottom-border to simulate a tactile "pressable" card.
- **Learning Cards:** Cream background with a 1px Charcoal or Muted Sage border. The top of the card should feature a "tab" containing the lesson title or category.
- **Chips/Tags:** Muted Pink backgrounds with Charcoal text, using the same soft rounding as cards.
- **Input Fields:** Thick-bordered boxes with Quicksand placeholder text. Focus states transition the border from Charcoal to Sage Green.
- **Progress Bars:** A "segmented" track that looks like a series of small paper tickets or tabs being filled in.
- **The Mascot Container:** ASL demonstrations should be housed in a large, central card with a subtle grain texture, ensuring the character's hands are the focal point against a high-contrast background.