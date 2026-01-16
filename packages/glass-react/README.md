# @prismcraft/glass-react

React adapter for `@prismcraft/glass-core`.

## Install

```bash
npm install @prismcraft/glass-react @prismcraft/glass-core
```

## Usage

```tsx
import "@prismcraft/glass-core/tokens.css";
import "@prismcraft/glass-core/glass.css";
import "@prismcraft/glass-core/components.css";

import { GlassProvider, GlassCard, GlassButton, GlassModal } from "@prismcraft/glass-react";

export function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <GlassProvider theme="dark" accent="purple">
      <GlassCard title="React Glass" subtitle="Thin components over CSS">
        <GlassButton variant="accent" onClick={() => setOpen(true)}>Accent</GlassButton>
        <GlassModal open={open} title="Modal" onClose={() => setOpen(false)}>
          Modal content
        </GlassModal>
      </GlassCard>
    </GlassProvider>
  );
}
```

## Accent per button

```tsx
<GlassButton accent="blue">Blue</GlassButton>
<GlassButton accent="orange">Orange</GlassButton>
```


