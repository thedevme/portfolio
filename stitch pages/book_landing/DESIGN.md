# Design System Document: Architectural Clarity

## 1. Overview & Creative North Star: "The Digital Blueprint"
The Creative North Star for this design system is **The Digital Blueprint**. We are moving away from the "boxed-in" nature of standard SaaS templates toward a high-end editorial experience that feels architectural, intentional, and airy. 

The system utilizes a crisp light aesthetic that prioritizes readability and structural honesty. We achieve a "premium" feel not through heavy decoration, but through **intentional asymmetry**, **masterful whitespace**, and **tonal depth**. By utilizing a sophisticated scale of indigo and slate, we create a hierarchy that feels curated rather than automated.

## 2. Colors: Tonal Architecture
Color is used here as a structural element, not just an accent. We rely on a sophisticated palette of indigos and slates to define the "weight" of information.

### The "No-Line" Rule
**Explicit Instruction:** Traditional 1px solid borders for sectioning are strictly prohibited. Boundaries must be defined solely through background color shifts or subtle tonal transitions. Use `surface-container-low` (#f2f4f6) sections against a `surface` (#f7f9fb) background to create natural division.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine architectural vellum.
*   **Base:** `surface` (#f7f9fb) – The primary canvas.
*   **Deepest Recess:** `surface-container-lowest` (#ffffff) – Used for primary content cards to create a "pop" against the off-white base.
*   **Structural Layering:** Instead of a flat grid, use `surface-container` (#eceef0) for sidebars or navigation rails to ground the interface.

### The "Glass & Gradient" Rule
To elevate the experience, use **Glassmorphism** for floating elements (like navigation bars or hovering menus). Use `surface` at 80% opacity with a 12px backdrop-blur. 
**Signature Textures:** For main CTAs or high-impact hero sections, apply a subtle linear gradient (135°) transitioning from `primary` (#2f1bc8) to `primary_container` (#493fdf). This adds "soul" and depth that static hex codes cannot provide.

## 3. Typography: Editorial Authority
The typography system balances the technical precision of **Inter** with the geometric character of **Manrope**.

*   **Display & Headlines (Manrope):** These are your architectural anchors. Use `display-lg` (3.5rem) with tighter letter-spacing (-0.02em) to create a bold, editorial look. High contrast between headlines and body text is essential for the "Architectural" feel.
*   **Titles & Body (Inter):** Inter provides a neutral, high-readability counter-balance. Use `title-lg` (1.375rem) for section headers and `body-lg` (1rem) for long-form content. 
*   **The Hierarchy Goal:** Use `on_surface_variant` (#454652) for secondary body text to reduce visual noise, ensuring the `on_surface` (#191c1e) headers command attention.

## 4. Elevation & Depth: Tonal Layering
We reject the "drop shadow" defaults of the early web. Depth is earned through light and material.

*   **The Layering Principle:** Stack `surface-container-lowest` cards on top of a `surface-container-low` background. This creates a soft, natural "lift" without a single shadow.
*   **Ambient Shadows:** For floating modals or dropdowns, use a shadow with a 32px blur and 4% opacity. The shadow color must be a tinted version of `on_surface` (#191c1e), not pure black, to mimic natural light diffusion.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline_variant` (#c5c5d4) at **15% opacity**. Never use a 100% opaque border.
*   **Glassmorphism:** Use semi-transparent `surface` colors on top of rich background content to create a "frosted glass" effect, integrating layers rather than separating them.

## 5. Components: Precision Elements

### Buttons
*   **Primary:** Solid `primary` (#2f1bc8) with `on_primary` (#ffffff) text. Use `md` (0.375rem) corner radius. For hover states, transition to `primary_container`.
*   **Secondary:** A "Ghost" style. Use `secondary_container` (#d5e3fc) background with `on_secondary_fixed_variant` (#3a485b) text. No border.

### Cards & Lists
*   **Forbid Dividers:** Do not use line-rules between list items. Use 16px–24px of vertical whitespace or a subtle background shift on hover (`surface_container_high`).
*   **Cards:** Use `surface_container_lowest` (#ffffff) with an `xl` (0.75rem) radius for a modern, soft architectural feel.

### Input Fields
*   **Style:** Minimalist. Use a `surface_container_low` background with a bottom-only `outline` at 20% opacity. 
*   **Focus State:** The bottom border transforms into a 2px `primary` line.

### Additional Component: The "Architectural Rail"
Replace standard top-navs with a slim, left-aligned "Rail" using `surface_container_low`. Use `label-md` for vertical navigation text to maintain an editorial layout.

## 6. Do’s and Don’ts

### Do:
*   **Use Asymmetry:** Place content off-center or use varying column widths to create visual interest.
*   **Embrace Whitespace:** If you think there is enough space, add 20% more.
*   **Focus on Type Scale:** Let the size of the font, rather than a bold color, tell the user what is important.

### Don't:
*   **No Hard Outlines:** Never use `#757684` at 100% opacity for a container border.
*   **No Pure Black:** Ensure all "black" text uses `on_surface` (#191c1e) to maintain the soft, premium indigo-slate feel.
*   **Don't Over-Elevate:** Avoid high-z-index shadows. If everything floats, nothing is important. Use tonal shifts first.