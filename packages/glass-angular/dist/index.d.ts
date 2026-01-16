import { GlassThemeMode, GlassAccent } from '@prismcraft/glass-core';

declare class GlassCardDirective {
    get klass(): string;
}
declare class GlassButtonDirective {
    get klass(): string;
}
declare class GlassInputDirective {
    get klass(): string;
}

declare class GlassThemeService {
    private readonly doc;
    constructor(doc: Document);
    setTheme(mode: GlassThemeMode): void;
    setAccent(accent: GlassAccent): void;
    setReducedTransparency(enabled: boolean): void;
}

export { GlassButtonDirective, GlassCardDirective, GlassInputDirective, GlassThemeService };
