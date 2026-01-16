# @prismcraft/glass-core

CSS-first glass theme: tokens, utilities, and optional DOM helpers.

## Install

```bash
npm install @prismcraft/glass-core
```

## Usage

```ts
import "@prismcraft/glass-core/tokens.css";
import "@prismcraft/glass-core/glass.css";
import "@prismcraft/glass-core/components.css";
```

```html
<div class="glass glass-card">Hello glass</div>
<button class="glass glass-button">Click</button>
<input class="glass-input" placeholder="Type here..." />
```

```html
<div class="glass-backdrop">
  <div class="glass glass-modal">
    <div class="glass-modal-header">
      <div class="glass-modal-title">Modal title</div>
      <button class="glass glass-button">Close</button>
    </div>
    <div class="glass-modal-body">Modal content</div>
  </div>
</div>
```

## Theme and accent

You can set attributes yourself:

```html
<html data-theme="dark" data-accent="purple"></html>
```

Or use the helper functions:

```ts
import { setTheme, setAccent, setReducedTransparency } from "@prismcraft/glass-core";

setTheme("dark");
setAccent("orange");
setReducedTransparency(true);
```

## CSS exports

The following paths are published:

- `@prismcraft/glass-core/tokens.css`
- `@prismcraft/glass-core/glass.css`
- `@prismcraft/glass-core/components.css`


