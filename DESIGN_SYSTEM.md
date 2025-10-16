# Design System Documentation

## Overview

This design system ensures consistent styling across the Finansguiden.se platform. All colors, buttons, and interactive elements should use semantic tokens from this system rather than inline Tailwind classes.

---

## 🎨 Color System

### Semantic Tokens (HSL)

All colors are defined as HSL values in `src/index.css` and configured in `tailwind.config.ts`.

```css
/* Primary colors */
--primary: [hsl values]
--primary-foreground: [hsl values]

/* Secondary colors */
--secondary: [hsl values]
--secondary-foreground: [hsl values]

/* Accent colors */
--accent: [hsl values]
--accent-foreground: [hsl values]

/* Muted colors */
--muted: [hsl values]
--muted-foreground: [hsl values]

/* Destructive colors */
--destructive: [hsl values]
--destructive-foreground: [hsl values]
```

### Usage Rules

✅ **CORRECT:**
```tsx
<Button className="bg-primary text-primary-foreground">Click me</Button>
<div className="text-muted-foreground">Helper text</div>
```

❌ **WRONG:**
```tsx
<Button className="bg-blue-600 text-white">Click me</Button>
<div className="text-gray-500">Helper text</div>
```

---

## 🔘 Button System

### Core Button Classes

#### `.fg-btn` - Primary CTA Button

The default button for primary actions (loans, credit cards, general CTAs).

**Properties:**
- Background: Primary gradient/color
- Text: White
- Hover: Darker shade
- Transition: Smooth
- Full specificity with `!important` for reliability

**Usage:**
```tsx
// Standalone button
<Button className="fg-btn">Ansök nu</Button>

// Full width button
<Button className="fg-btn w-full">Ansök hos X</Button>

// With link
<Button asChild className="fg-btn">
  <a href="/url" target="_blank" rel="nofollow noopener">
    Ansök nu
  </a>
</Button>
```

**Where it's used:**
- Loan application CTAs
- Credit card applications
- Primary conversion buttons
- General "Jämför" buttons

---

#### `.fg-btn--business` - Business Loan CTA

Specialized variant for business loan contexts.

**Properties:**
- Background: Emerald/green tones
- Text: White
- Hover: Darker emerald
- Same specificity as `.fg-btn`

**Usage:**
```tsx
<Button className="fg-btn--business">
  Ansök om företagslån
</Button>

<Button size="lg" className="fg-btn--business shadow-lg">
  Jämför företagslån nu
</Button>
```

**Where it's used:**
- `src/components/ForetagslanComparisonTable.tsx`
- `src/components/RichForetagslan.tsx`
- Business loan pages only

---

#### `.fg-btn--secondary` - Secondary CTA

Variant for secondary actions alongside primary CTAs.

**Properties:**
- Border: 2px primary color
- Text: Primary color
- Background: Transparent
- Hover: Filled primary background with white text
- Same specificity as `.fg-btn`

**Usage:**
```tsx
<Button className="fg-btn--secondary">
  Läs guide
</Button>

<Button size="lg" className="fg-btn--secondary text-lg px-8">
  Kostnadsfri rådgivning
</Button>
```

**Where it's used:**
- `src/components/RichPrivatlan.tsx` - Hero section
- `src/components/RichAndraTjanster.tsx` - Hero and final CTA sections
- `src/components/RichLanUtanUc.tsx` - Hero section and FI.se link
- `src/components/RichForetagslan.tsx` - Hero section
- All secondary CTAs next to primary `.fg-btn` buttons

---

### Button Isolation with `data-fg-card`

To prevent legacy styles from leaking into design system buttons, add `data-fg-card` to parent containers:

```tsx
<Card data-fg-card className="border-l-4 border-l-green-500">
  <CardHeader>...</CardHeader>
  <CardContent>
    <Button className="fg-btn w-full">
      Ansök hos {provider.name}
    </Button>
  </CardContent>
</Card>
```

**CSS Rule (in `src/index.css`):**
```css
[data-fg-card] .fg-btn,
[data-fg-card] .fg-btn--business {
  /* Ensures buttons in cards always use design system */
  background: var(--primary) !important;
  color: white !important;
}
```

---

## 🎯 Shadcn Button Variants

When using shadcn's Button component, prefer design system classes over built-in variants for primary CTAs:

### Standard Shadcn Variants (for secondary actions)

```tsx
// Outline - borders only
<Button variant="outline">Sekundär action</Button>

// Ghost - minimal styling
<Button variant="ghost">Subtle action</Button>

// Destructive - red/danger
<Button variant="destructive">Radera</Button>

// Link - looks like link
<Button variant="link">Läs mer</Button>
```

### Primary CTAs → Use Design System

```tsx
// ❌ Don't use for primary CTAs
<Button variant="default">Ansök nu</Button>

// ✅ Use design system class
<Button className="fg-btn">Ansök nu</Button>
```

---

## 📐 Design System Architecture

### File Structure

```
src/
├── index.css                    # Design tokens, .fg-btn definitions
├── tailwind.config.ts           # Tailwind theme configuration
└── components/
    ├── ui/
    │   └── button.tsx          # Shadcn button component
    └── [feature-components]/   # Use .fg-btn in CTAs
```

### CSS Specificity Strategy

All design system classes use `!important` to override:
1. Legacy inline styles
2. Tailwind utility classes
3. Component-specific styles
4. Third-party overrides

**Why:** Ensures consistency during migration from legacy to design system.

---

## 🚀 Migration Checklist

### ✅ Migrated Components

These components now use the design system:

- [x] `LoanComparisonTable.tsx` - All CTAs use `.fg-btn`
- [x] `AgeVerificationModal.tsx` - Primary button uses `.fg-btn`
- [x] `ForetagslanComparisonTable.tsx` - Uses `.fg-btn--business`
- [x] `RichPrivatlan.tsx` - Hero CTA uses `.fg-btn`
- [x] `RichAndraTjanster.tsx` - All CTAs use `.fg-btn`
- [x] `RichForetagslan.tsx` - Hero CTA uses `.fg-btn--business`
- [x] `RichLanUtanUc.tsx` - Hero CTA uses `.fg-btn`

### 🔄 Remaining Components (Low Priority)

These have decorative colors (non-interactive):
- `CasinoNavigationKasinos.tsx` - Badge colors only
- `ModernNavigation.tsx` - Badge colors only
- `RichKreditkort.tsx` - May need review

---

## 📝 Best Practices

### 1. Always Use Semantic Tokens

```tsx
// ✅ Good
<div className="bg-primary text-primary-foreground">Content</div>
<p className="text-muted-foreground">Helper text</p>

// ❌ Bad
<div className="bg-blue-600 text-white">Content</div>
<p className="text-gray-500">Helper text</p>
```

### 2. Button Priority Hierarchy

```tsx
// Primary action - design system
<Button className="fg-btn">Ansök nu</Button>

// Secondary action - outline
<Button variant="outline">Läs mer</Button>

// Tertiary action - ghost
<Button variant="ghost">Avbryt</Button>

// Danger action - destructive
<Button variant="destructive">Ta bort</Button>
```

### 3. Responsive Button Widths

```tsx
// Full width on mobile, auto on desktop
<Button className="fg-btn w-full md:w-auto">Ansök</Button>

// Always full width
<Button className="fg-btn w-full">Ansök</Button>

// Always auto width
<Button className="fg-btn">Ansök</Button>
```

### 4. Button with Icons

```tsx
import { ArrowRight, CheckCircle } from 'lucide-react';

<Button className="fg-btn">
  <CheckCircle className="w-4 h-4 mr-2" />
  Ansök godkänd
</Button>

<Button className="fg-btn">
  Läs mer
  <ArrowRight className="w-4 h-4 ml-2" />
</Button>
```

### 5. External Links Best Practice

```tsx
// Always use asChild for external links
<Button asChild className="fg-btn">
  <a 
    href="https://external-site.com" 
    target="_blank" 
    rel="nofollow noopener noreferrer"
  >
    Besök partner
  </a>
</Button>
```

---

## 🔍 Finding Inline Colors

### Regex Search Patterns

Use VS Code search (Ctrl+Shift+F) with regex enabled:

**Find buttons with inline backgrounds:**
```regex
<Button([^>]*?)className="([^"]*?)bg-(green|blue|emerald|indigo|orange)-\d{3}
```

**Find direct color values (HEX/RGB):**
```regex
className="[^"]*(#(?:[0-9a-fA-F]{3}){1,2}|rgb\(|hsl\()[^"]*"
```

**Find hover colors:**
```regex
hover:(bg|text)-(green|blue|red|gray)-\d{3}
```

---

## 🧪 Testing Design System

### Visual Regression Checklist

1. **Button visibility**: All CTAs have non-transparent backgrounds
2. **Hover states**: Buttons darken on hover
3. **Focus states**: Visible focus rings for accessibility
4. **Dark mode**: Colors adapt correctly
5. **Card isolation**: Legacy styles don't leak into design system buttons

### Manual Test Pages

Visit these routes to verify design system:
- `/privatlan` - Primary loan CTAs
- `/foretagslan` - Business loan CTAs  
- `/lan-utan-uc` - UC-free loan CTAs
- `/kreditkort` - Credit card CTAs
- `/andra-tjanster` - Service CTAs

### DevTools Inspection

```javascript
// Check if button uses design system
document.querySelector('.fg-btn')
  .computedStyleMap()
  .get('background-color')
// Should NOT be "rgba(0, 0, 0, 0)"
```

---

## 🎓 Common Patterns

### Pattern: Hero Section CTA

```tsx
<section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100">
  <div className="container mx-auto max-w-6xl text-center">
    <h1 className="text-4xl font-bold mb-6">Hero Title</h1>
    
    <div className="flex flex-wrap gap-4 justify-center mb-8">
      <Button asChild size="lg" className="fg-btn text-lg px-8 shadow-lg">
        <Link to="#compare">Jämför nu</Link>
      </Button>
      <Button variant="outline" size="lg" className="text-lg px-8">
        Läs guide
      </Button>
    </div>
  </div>
</section>
```

### Pattern: Card with CTA

```tsx
<Card data-fg-card className="border-l-4 border-l-green-500">
  <CardHeader>
    <CardTitle>{provider.name}</CardTitle>
    <CardDescription>Från {provider.rate}%</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-muted-foreground mb-4">
      Description text
    </p>
    <Button className="fg-btn w-full">
      Ansök hos {provider.name}
    </Button>
  </CardContent>
</Card>
```

### Pattern: Button Group

```tsx
<div className="flex gap-2 pt-2">
  <Button size="sm" className="fg-btn flex-1 text-xs">
    Ansök hos {name}
  </Button>
  <Button variant="outline" size="sm" className="text-xs px-3">
    Läs mer
  </Button>
</div>
```

---

## 🐛 Troubleshooting

### Button has transparent background

**Cause:** Legacy `.btn` class or missing `!important` in CSS
**Fix:** Add `data-fg-card` to parent Card component

### Button colors wrong in dark mode

**Cause:** Color not defined for both light/dark modes in index.css
**Fix:** Check that CSS variables exist for `:root` and `.dark`

### Hover state not working

**Cause:** Specificity issue or CSS order
**Fix:** Ensure `.fg-btn:hover` comes after `.fg-btn` in index.css

### Legacy styles still showing

**Cause:** Old inline classes not removed
**Fix:** Remove all `bg-*`, `text-white`, `hover:bg-*` from button className

---

## 📚 Related Documentation

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Shadcn/ui Button](https://ui.shadcn.com/docs/components/button)
- [Lucide Icons](https://lucide.dev/)
- [HSL Color Picker](https://hslpicker.com/)

---

## 🔄 Version History

- **v1.0** - Initial design system with `.fg-btn` and `.fg-btn--business`
- **Current** - 7 components migrated, system documented

---

**Last Updated:** 2025-10-16  
**Maintained by:** Development Team  
**Questions?** Check existing component implementations for reference patterns.