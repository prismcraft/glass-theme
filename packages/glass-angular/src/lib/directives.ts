import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[glassCard]',
  standalone: true,
})
export class GlassCardDirective {
  @HostBinding('class')
  get klass(): string {
    return 'glass glass-card glass-hover';
  }
}

@Directive({
  selector: '[glassButton]',
  standalone: true,
})
export class GlassButtonDirective {
  @HostBinding('class')
  get klass(): string {
    return 'glass glass-button';
  }
}

@Directive({
  selector: '[glassInput]',
  standalone: true,
})
export class GlassInputDirective {
  @HostBinding('class')
  get klass(): string {
    return 'glass-input';
  }
}
