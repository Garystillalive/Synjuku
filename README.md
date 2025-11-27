# Synjuku Design System

A Zen, Renaissance-era print workshop aesthetic for embodied AI data craftsmanship.

## Design Philosophy

Synjuku is positioned as a craftsman workshop for embodied AI data—upstream, precise, monk-like, and quietly radical. The design system embodies the spirit of a Renaissance atelier and Zen print shop, not a Silicon Valley hype lab.

### Core Principles

1. **Calm, precise, and quiet** — Zen, not manic
2. **Serious but warm** — Approachable researchers, not cold corporate
3. **High-end and confident** — Never braggy or performative
4. **Long-game thinking** — Steady, unfazed by hype cycles

## Color Palette

The palette is intentionally tight and restrained, drawing from traditional East Asian printing and seal-making.

### Primary Colors

- **Seal Red** (`#780000`) — The red of a traditional stamp (印章红)
  - Used sparingly as highlight or focal point
  - Applied to dots, circles, underlines, and stamp motifs
  - CSS variable: `--seal-red`

- **Ink Black** (`#0f0f10`) — Not pure black, but ink gray (sumi-ink feel)
  - Primary text color
  - Used for headings and important content
  - CSS variable: `--ink-black`

- **Paper White** (`#fef6e7`) — Warm, slightly textured off-white
  - Background color
  - Evokes rice paper or high-end stationery
  - CSS variable: `--paper-white`

### Secondary Colors

- **Grey Olive** (`#87837c`) — Subtle neutral gray
  - Used for secondary text and UI elements
  - Maintains breathability in the design
  - CSS variable: `--grey-olive`

- **Ink Gray** (`#2a2a2a`) — Softer alternative to pure black
  - Body text color
  - Used for paragraphs and less prominent content
  - CSS variable: `--ink-gray`

### Usage Guidelines

- **Restraint is key** — The palette should feel minimal and intentional
- **Red as accent** — Use seal red sparingly to draw attention, not overwhelm
- **No gradients** — Avoid neon gradients or rainbow AI colors
- **Warm neutrals** — Maintain the paper-like warmth throughout

## Typography

Typography should feel serious, for people who read. Small, high-end text inspired by Surge AI and serious research toolmakers.

### Typefaces

**Primary Serif: Crimson Text**
- Used for headings (h1, h2, h3)
- Evokes traditional printed books
- Modern serif with gravitas
- Font weights: 400 (regular), 600 (semi-bold)
- Italic available for emphasis

**Primary Sans: Inter**
- Used for body text and UI elements
- Clean, minimal, highly readable
- Font weights: 300 (light), 400 (regular), 500 (medium)
- Avoids playful rounded fonts

### Type Scale

- **Hero Title**: `clamp(2.5rem, 5vw, 4rem)` — Large, impactful
- **Section Titles**: `clamp(1.75rem, 3vw, 2.5rem)` — Clear hierarchy
- **Subheadings**: `clamp(1.25rem, 2vw, 1.5rem)` — Moderate emphasis
- **Body Text**: `clamp(1rem, 1.5vw, 1.125rem)` — Comfortable reading
- **Small Text**: `clamp(0.875rem, 1.2vw, 1rem)` — Secondary information

### Typography Principles

- **Small, high-end text** — Feels serious, for people who read
- **Vertical rhythm** — Inspired by columns of traditional characters
- **Generous line-height** — 1.7–1.9 for body text, 1.2–1.4 for headings
- **Letter spacing** — Subtle negative tracking on headings (-0.02em)
- **No decorative fonts** — Avoid cheap "Asian restaurant" fonts or brush effects

## Layout & Composition

Inspired by traditional East Asian movable type and old book layouts.

### Grid System

- **Max-width containers**: 1200px–1400px for main content
- **Modular sections**: Vertical or modular sections with clear separation
- **Generous margins**: Breathing room around content
- **Grid-based layouts**: Content grids for multi-column sections

### Layout Principles

- **Minimal and structured** — Editorial, quiet, intentional
- **Grids and margins** — Clear structure without rigidity
- **Vertical rhythm** — Consistent spacing between elements
- **Borders and frames** — Thin rules around sections, subtle grid feel

### Section Structure

Each major section follows this pattern:

1. **Section Header**
   - Number (01, 02, etc.) in grey olive
   - Title in serif
   - Bottom border separator

2. **Content Area**
   - Grid-based or vertical list
   - Generous padding
   - Clear visual hierarchy

3. **Spacing**
   - Section padding: 6rem vertical, 2rem horizontal
   - Content gaps: 2rem–4rem between major elements

## Visual Motifs

### Red Stamp / Seal (印)

The seal motif is a recurring micro-brand element:

- **Circle marks** — Used to highlight selections or active states
- **Seal character** — The character "印" appears as a visual accent
- **Verification metaphor** — Represents verified, curated data
- **Appearance animation** — Stamps "appear" like ink hitting paper

### Red Dots

Small red circles used as:
- List item markers
- Emphasis points
- Navigation indicators
- Subtle pulse animation for attention

### Underlines & Borders

- **Red underlines** — Appear on hover for navigation links
- **Thin borders** — Subtle rules around sections and content blocks
- **Border transitions** — Change color on hover (black to red)

## Texture & Materials

### Paper Texture

The background evokes rice paper or textured print stock:

- **Subtle dot pattern** — Radial gradient creates paper-like texture
- **Warm background** — Paper white with slight grain
- **Layered sections** — Alternating backgrounds create depth

### Material References

- **Rice paper** — Warm, textured, high-end stationery feel
- **Ink printing** — Sumi-ink gray, not pure black
- **Block typesetting** — Grid-based, modular layout
- **Origami folds** — Subtle references in section transitions

## Animation & Interaction

Animations are deliberate, subtle, and intentional—no bouncy or playful motion.

### Animation Principles

- **Slow and precise** — Transitions feel intentional, not rushed
- **Ink-like appearance** — Elements "ink in" or "ink out"
- **Stamp effects** — Seals appear like stamps hitting paper
- **Subtle pulses** — Red dots pulse gently for attention

### Key Animations

1. **fadeInUp** — Content fades in from below (0.8s ease-out)
2. **sealAppear** — Seal marks scale and fade in (1.2s ease-out)
3. **dotPulse** — Red dots pulse gently (2s infinite)
4. **Hover transitions** — Borders and colors transition smoothly (0.3s ease)

### Interaction States

- **Hover** — Subtle color changes, border highlights, underline reveals
- **Active** — Red seal appears, content emphasizes
- **Focus** — Clear focus states for accessibility

## Components

### Header & Navigation

- Fixed position with backdrop blur
- Minimal navigation links
- Brand name with seal character
- Hover underlines in seal red

### Hero Section

- Full viewport height
- Large serif title
- Subtitle in grey olive
- Seal mark with animation
- Centered, spacious layout

### Content Sections

- Numbered headers (01, 02, etc.)
- Serif section titles
- Grid-based or vertical content
- Alternating background colors

### Method Items

- Left border accent
- Red dot marker
- Hover state changes border to red
- Clear typography hierarchy

### Philosophy Quote

- Centered, bordered block
- Italic serif text
- Seal mark at bottom
- Paper-like background

### Contact Section

- Centered content
- Email link with hover seal
- Border transitions to red
- Minimal, focused design

### Footer

- Subtle background
- Two-line text
- Centered or justified layout
- Small, quiet typography

## Responsive Design

### Breakpoints

- **Desktop**: 1200px+ — Full layout, multi-column grids
- **Tablet**: 768px–1199px — Adjusted spacing, single-column grids
- **Mobile**: 480px–767px — Stacked layout, reduced padding
- **Small Mobile**: <480px — Minimal padding, compact navigation

### Responsive Principles

- **Fluid typography** — `clamp()` for scalable text
- **Flexible grids** — Auto-fit grids adapt to screen size
- **Stacked layouts** — Content stacks vertically on mobile
- **Touch-friendly** — Adequate spacing for mobile interaction

## Anti-Patterns

### What to Avoid

❌ **Web3 / hacker house aesthetics**
- No neon gradients
- No dark mode crypto dashboards
- No meme-ish visuals

❌ **Silicon Valley templates**
- No giant rounded cards
- No cartoon-ish 3D blobs
- No stock-illustration people

❌ **Anime / kawaii tropes**
- No otaku Japanese aesthetics
- No cheap pan-Asian fonts
- No cliché brush effects

❌ **Hype-driven design**
- No loud attention-grabbing fonts
- No overblown promises
- No YC / crypto-bro energy

### What We Are

✅ **Serious research toolmaker**
- Like DeepMind, Surge AI, Scale AI
- Catalog-like, serious, small fonts
- Researcher-first approach

✅ **High-end craft**
- Like Muji-level calm and minimalism
- Like refined restaurant menus
- Like master denim maker or woodworker

✅ **Editorial and quiet**
- Like old printed books
- Like traditional East Asian layouts
- Like contemporary reinterpretation of history

## Tone of Voice

### Writing Style

- **Plain, calm, direct** — Say what it is, no overblown promises
- **Researcher explaining work** — Not a growth marketer
- **Technical but not show-offy** — Confident but never "bro-y"
- **Confident but never braggy** — Quietly powerful

### Key Phrases

- "We are craftsmen and researchers, not hustlers."
- "We quietly make the best training data we can, for the people who need it most."
- "Everyone wants to do everything; we just do this one piece, extremely well."

### What to Avoid

- "We are the best. Period."
- Overly dramatic hype language
- YC / crypto-bro energy
- Trying to sound like "the next Elon Musk"

## File Structure

```
Prototype_web/
├── index.html          # Main HTML structure
├── styles.css          # Complete design system CSS
└── README.md          # This design system documentation
```

## Usage

1. Open `index.html` in a modern web browser
2. All styles are contained in `styles.css`
3. No build process required — static HTML/CSS
4. Fonts loaded from Google Fonts (Crimson Text, Inter)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- CSS custom properties (variables) required
- Backdrop filter for header blur (graceful degradation)

## Future Considerations

- Consider adding subtle paper texture images
- Potential for custom seal mark SVG icons
- Could add more micro-interactions
- May benefit from print stylesheet for documentation

---

**Design System Version**: 1.0  
**Last Updated**: 2024  
**Maintained by**: Synjuku Design Team

