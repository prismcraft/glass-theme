type GlassThemeMode = 'light' | 'dark' | 'system';
type GlassAccent = 'blue' | 'purple' | 'green' | 'orange' | 'pink' | 'teal';
/**
 * Sets theme attributes on the target root (defaults to <html>).
 * This is optional; the theme also works by setting attributes yourself.
 */
declare function setTheme(mode: GlassThemeMode, target?: HTMLElement): void;
declare function setAccent(accent: GlassAccent, target?: HTMLElement): void;
declare function setReducedTransparency(enabled: boolean, target?: HTMLElement): void;

export { type GlassAccent, type GlassThemeMode, setAccent, setReducedTransparency, setTheme };
