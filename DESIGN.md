---
name: DevShelf Kinetic Workbench
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#464554'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#767586'
  outline-variant: '#c7c4d7'
  surface-tint: '#494bd6'
  primary: '#4648d4'
  on-primary: '#ffffff'
  primary-container: '#6063ee'
  on-primary-container: '#fffbff'
  inverse-primary: '#c0c1ff'
  secondary: '#00687a'
  on-secondary: '#ffffff'
  secondary-container: '#57dffe'
  on-secondary-container: '#006172'
  tertiary: '#6b38d4'
  on-tertiary: '#ffffff'
  tertiary-container: '#8455ef'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d0bcff'
  on-tertiary-fixed: '#23005c'
  on-tertiary-fixed-variant: '#5516be'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.005em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.01em
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: -0.01em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

The design system is engineered specifically for early-career developers and bootcamp students aged 18–30. The aesthetic balances developer-native precision (inspired by Linear and GitHub) with an inviting, accessible clarity that neutralizes cognitive overload. Instead of feeling stark, clinical, or overly technical, the system projects warmth, structural transparency, and deliberate progress.

Visual direction blends **Modern Corporate SaaS** with **Subtle Mechanical Tactility**:
- Crisp lineation and deliberate density, allowing students to navigate curated resources efficiently.
- Uncluttered whitespace paired with friendly typography to dispel the intimidation often associated with developer documentation.
- High-chroma resource identity badges that act as instant cognitive anchors across dense lists and resource grids.
- Soft dimensional layering using crisp micro-borders and diffuse elevation rather than heavy skeumorphism.

## Colors

The palette establishes an energetic, focused environment anchored by indigo and cyan, supported by categorical taxonomy colors for resource identification.

### Light Mode (Default)
- **Primary Canvas**: `#F8FAFC` (Slate 50) creates an anti-glare, calm foundation.
- **Surface Elevation**: `#FFFFFF` for elevated cards, inputs, and flyouts.
- **Key Strokes & Dividers**: `#E2E8F0` for structural division and hairline borders.
- **Primary Text**: `#0F172A` (Slate 900) ensures maximum contrast and readability.
- **Secondary / Supporting Text**: `#64748B` (Slate 500) for metadata, labels, and timestamps.
- **Primary Interactive**: `#6366F1` (Indigo 500), deepening to `#4F46E5` (Indigo 600) on hover/focus.
- **Secondary Interactive / Accent**: `#06B6D4` (Cyan 500), paired with `#0D9488` (Teal 600) for highlights.

### Resource Classification Badges (Semantic Category Scale)
- **Video**: Foreground `#EF4444`, Background `#FEE2E2`, Border `#FCA5A5`
- **Article**: Foreground `#3B82F6`, Background `#DBEAFE`, Border `#93C5FD`
- **Documentation**: Foreground `#10B981`, Background `#D1FAE5`, Border `#6EE7B7`
- **Course**: Foreground `#F59E0B`, Background `#FEF3C7`, Border `#FCD34D`
- **Tool**: Foreground `#8B5CF6`, Background `#EDE9FE`, Border `#C4B5FD`

### System Feedback States
- **Success**: `#10B981` (Surface: `#ECFDF5`)
- **Warning**: `#F59E0B` (Surface: `#FFFBEB`)
- **Error / Danger**: `#EF4444` (Surface: `#FEF2F2`)

### Dark Mode Adaptations
- **Base Canvas**: `#0F172A` (Deep Slate)
- **Cards & Layer 1 Containers**: `#1E293B`
- **Borders & Dividers**: `#334155`
- **Primary Text**: `#F8FAFC`
- **Secondary Text**: `#94A3B8`
- **Badge Adjustments**: Badges shift to semi-translucent 15% opacity fills of the base hue with 30% border opacity and brightened pastel text (e.g., Video: text `#F87171`, background `rgba(239, 68, 68, 0.15)`).

## Typography

The typographic hierarchy uses a tripartite structure:
1. **Plus Jakarta Sans** for page headers, card headings, and modal titles. Its slightly rounded terminals remove rigidity while maintaining structural maturity.
2. **Inter** handles high-density user interface contexts, table layouts, standard body paragraphs, and descriptive text for maximum legibility at small sizes.
3. **JetBrains Mono** surfaces technical metadata, terminal commands, code snippets, keyboard shortcuts, and resource destination URLs.

Rules:
- Headings never exceed `700` weight to prevent heaviness.
- Code blocks and badge texts use optical vertical alignment to account for monospaced cap-height variance.
- Line heights stay strictly within 1.35x to 1.5x ratios to preserve layout density without sacrificing reading stamina.

## Layout & Spacing

The layout is built on a responsive 12-column grid using an 8-point spatial system, with 4-point micro-adjustments for compact developer interface elements.

- **Desktop (1024px and up)**: 12-column grid with a `1.5rem` (24px) column gutter and `2rem` (32px) screen margins. Maximum container width is constrained to `1280px` for optimal viewing distance and focus.
- **Tablet (768px – 1023px)**: 8-column layout with `1.25rem` (20px) gutters and `1.5rem` (24px) margins. Side panels collapse into off-canvas navigation drawers.
- **Mobile (below 768px)**: 4-column layout with `1rem` (16px) gutters and `1rem` (16px) canvas margins. Complex multi-action cards stack vertically into single-column layouts.

Spacing rhythm:
- Spacing inside atomic components (buttons, tags, inputs) relies on `space-xs` (4px) and `space-sm` (8px).
- Spacing between adjacent form controls and card internal sections relies on `space-md` (16px).
- Structural gaps between resource grid cards and major screen sections leverage `space-lg` (24px) and `space-xl` (32px).

## Elevation & Depth

Visual hierarchy uses **tonal surfaces backed by hairline borders and ambient shadows**. High-contrast outlines provide structural clarity, while gentle shadows communicate interactive elevation.

- **Base Layer (Canvas)**: Non-elevated surface (`#F8FAFC` light / `#0F172A` dark).
- **Surface Layer (Cards, Tables, Panels)**: Elevated one tier (`#FFFFFF` light / `#1E293B` dark), flanked by a persistent `1px` solid border (`#E2E8F0` light / `#334155` dark). Shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.05)`.
- **Interactive Hover Layer (Cards, Dropdowns)**: Surfaces elevate with an interactive translation of `translateY(-1px)`. Shadow expands to `0 4px 12px -2px rgba(99, 102, 241, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.06)`, infusing a faint primary indigo ambient glow.
- **Overlay Layer (Modals, Popovers, Drawers)**: Surface `#FFFFFF` light / `#1E293B` dark. Shadow: `0 20px 25px -5px rgba(15, 23, 42, 0.12), 0 10px 10px -5px rgba(15, 23, 42, 0.04)`. Accompanied by a backdrop blur scrim (`rgba(15, 23, 42, 0.4)` with `backdrop-filter: blur(4px)`).

## Shapes

The design system adopts a balanced roundness hierarchy to ensure controls feel modern and ergonomic, while structural cards remain stable and orderly.

- **Inputs, Buttons, and Selects**: Radius is locked at `0.5rem` (8px). This creates crisp interactive targets without appearing sharp or overly pill-shaped.
- **Resource Cards and Containers**: Apply `rounded-lg` (`1rem` / 16px) for main resource cards, modal wrappers, and side-panels, yielding a soft and welcoming aesthetic.
- **Badges and Status Indicators**: Badges utilize `0.375rem` (6px) for technical density, or `9999px` (full pill) strictly for active presence tags (e.g., online status, live cohort indicators).

## Components

### Buttons
- **Primary**: Background `#6366F1`, text `#FFFFFF`, border `transparent`. Hover: `#4F46E5`. Active: `#4338CA`. Height 40px, padding horizontal 16px, border radius 8px, font `Inter` SemiBold (14px). Focus ring: `2px` offset with `rgba(99, 102, 241, 0.4)`.
- **Secondary**: Background `transparent`, text `#0F172A` (dark: `#F8FAFC`), border `1px solid #E2E8F0` (dark: `#334155`). Hover: background `#F1F5F9` (dark: `#1E293B`).
- **Ghost/Tertiary**: Text `#64748B`, background `transparent`. Hover: `#F1F5F9`, text `#0F172A`.

### Resource Badges / Chips
- Compact dimensions: padding `2px 8px`, border radius `6px`. Font is `JetBrains Mono` 11px Medium or `Inter` 12px Medium.
- Border is `1px solid` colored according to the resource type token.
- Left-aligned icon (12px) paired with category label: Video (coral/red), Article (sky blue), Docs (emerald), Course (amber), Tool (purple).

### Cards (Resource & Progress)
- Background `#FFFFFF` (dark: `#1E293B`), border `1px solid #E2E8F0` (dark: `#334155`), border radius 16px (`rounded-lg`).
- Padding: `20px` internal space.
- Layout: Top header displaying the Category Badge alongside a bookmark/favorite action button; body containing a `Plus Jakarta Sans` 18px SemiBold title, short descriptive text in `Inter` 14px Slate 500, and a footer featuring a monospace URL indicator and cohort tagging.

### Input Fields & Search
- Height 40px, radius 8px, border `1px solid #E2E8F0` (dark: `#334155`), background `#FFFFFF` (dark: `#0F172A`).
- Left-aligned search icon with text `#64748B`.
- Integrated keyboard shortcut tag (`⌘K` or `Ctrl+K`) right-aligned using `JetBrains Mono` 11px with background `#F1F5F9` (dark: `#1E293B`) and radius 4px.
- Focus state: border `#6366F1` and a `3px` halo of `rgba(99, 102, 241, 0.15)`.

### Checkboxes & Radio Buttons
- Custom box 18x18px, border radius 4px (checkbox) or 50% circular (radio).
- Default: border `1.5px solid #CBD5E1`.
- Checked: background `#6366F1`, border `#6366F1`, containing a white SVG check/dot icon.
- Focus-visible: outline `2px solid rgba(99, 102, 241, 0.4)`.

### Lists & Technical Data Tables
- Clean hairline rows separated by `1px solid #E2E8F0` (dark: `#334155`).
- Hover row state: background `#F8FAFC` (dark: `#1E293B / 50%`).
- Monospace fields (URLs, IDs, CLI flags) rendered with `code-md` styling on subtle pill containers (`#F1F5F9` light / `#1E293B` dark).