# Glass Theme Monorepo

A CSS-first **glassmorphism** theme with thin adapters for **VanillaJS**, **React**, and **Angular**.

## Packages

- `@prismcraft/glass-core` - tokens + utilities + optional tiny DOM helper
- `@prismcraft/glass-react` - React provider + a few thin components
- `@prismcraft/glass-angular` - Angular directives + service

> Packages are published under `@prismcraft`.

## Quick start

```bash
pnpm install
pnpm build
```

## Vanilla

```ts
import "@prismcraft/glass-core/tokens.css";
import "@prismcraft/glass-core/glass.css";
import "@prismcraft/glass-core/components.css";
```

```html
<div class="glass glass-card">Hello glass</div>
```

## React

```tsx
import "@prismcraft/glass-core/tokens.css";
import "@prismcraft/glass-core/glass.css";
import "@prismcraft/glass-core/components.css";

import { GlassProvider, GlassCard } from "@prismcraft/glass-react";

export function App(){
  return (
    <GlassProvider theme="dark" accent="purple">
      <GlassCard>Hi</GlassCard>
    </GlassProvider>
  );
}
```

## Angular

Add the CSS imports (e.g. in `styles.css`):

```css
@import "@prismcraft/glass-core/tokens.css";
@import "@prismcraft/glass-core/glass.css";
@import "@prismcraft/glass-core/components.css";
```

Then:

```html
<div glassCard>Angular glass card</div>
<button glassButton>Click</button>
```

## Publishing

This repo uses Changesets:

```bash
pnpm changeset
pnpm version-packages
pnpm release
```

Before publishing, make sure you're logged into npm as `mgrigajtis` or update the scope to your own.


