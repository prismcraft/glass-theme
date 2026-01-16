# @prismcraft/glass-angular

Angular adapter for `@prismcraft/glass-core` (standalone directives + theme service).

## Install

```bash
npm install @prismcraft/glass-angular @prismcraft/glass-core
```

## Usage

Import the CSS once (for example in `styles.css`):

```css
@import "@prismcraft/glass-core/tokens.css";
@import "@prismcraft/glass-core/glass.css";
@import "@prismcraft/glass-core/components.css";
```

Use the directives:

```html
<div glassCard>Angular glass card</div>
<button glassButton>Click</button>
<input glassInput placeholder="Type here..." />
```

Set theme or accent:

```ts
import { GlassThemeService } from "@prismcraft/glass-angular";

constructor(private readonly glass: GlassThemeService) {
  this.glass.setTheme("dark");
  this.glass.setAccent("orange");
}
```


