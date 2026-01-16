# @prismcraft/glass-core

Framework-agnostic **glass theme**.

## Install

```bash
pnpm add @prismcraft/glass-core
```

## Use (CSS)

```ts
import "@prismcraft/glass-core/tokens.css";
import "@prismcraft/glass-core/glass.css";
import "@prismcraft/glass-core/components.css";
```

```html
<div class="glass glass-card">Hello</div>
```

## Optional helper

```ts
import { setTheme, setAccent } from "@prismcraft/glass-core";
setTheme("dark");
setAccent("purple");
```


