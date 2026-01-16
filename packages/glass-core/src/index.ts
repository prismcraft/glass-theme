export type GlassThemeMode = 'light' | 'dark' | 'system';
export type GlassAccent = 'blue' | 'purple' | 'green' | 'orange' | 'pink' | 'teal';

function getRoot(el?: HTMLElement): HTMLElement {
  return el ?? document.documentElement;
}

/**
 * Sets theme attributes on the target root (defaults to <html>).
 * This is optional; the theme also works by setting attributes yourself.
 */
export function setTheme(mode: GlassThemeMode, target?: HTMLElement): void {
  const root = getRoot(target);
  if (mode === 'system') {
    root.removeAttribute('data-theme');
    return;
  }
  root.setAttribute('data-theme', mode);
}

export function setAccent(accent: GlassAccent, target?: HTMLElement): void {
  const root = getRoot(target);
  root.setAttribute('data-accent', accent);
}

export function setReducedTransparency(enabled: boolean, target?: HTMLElement): void {
  const root = getRoot(target);
  if (enabled) root.setAttribute('data-glass', 'reduced');
  else root.removeAttribute('data-glass');
}
