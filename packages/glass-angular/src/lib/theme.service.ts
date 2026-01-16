import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { setAccent, setReducedTransparency, setTheme, type GlassAccent, type GlassThemeMode } from '@prismcraft/glass-core';

@Injectable({
  providedIn: 'root',
})
export class GlassThemeService {
  constructor(@Inject(DOCUMENT) private readonly doc: Document) {}

  setTheme(mode: GlassThemeMode): void {
    setTheme(mode, this.doc.documentElement);
  }

  setAccent(accent: GlassAccent): void {
    setAccent(accent, this.doc.documentElement);
  }

  setReducedTransparency(enabled: boolean): void {
    setReducedTransparency(enabled, this.doc.documentElement);
  }
}


