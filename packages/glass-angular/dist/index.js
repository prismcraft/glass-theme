var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
var __decorateParam = (index, decorator) => (target, key) => decorator(target, key, index);

// src/lib/directives.ts
import { Directive, HostBinding } from "@angular/core";
var GlassCardDirective = class {
  get klass() {
    return "glass glass-card glass-hover";
  }
};
__decorateClass([
  HostBinding("class")
], GlassCardDirective.prototype, "klass", 1);
GlassCardDirective = __decorateClass([
  Directive({
    selector: "[glassCard]",
    standalone: true
  })
], GlassCardDirective);
var GlassButtonDirective = class {
  get klass() {
    return "glass glass-button";
  }
};
__decorateClass([
  HostBinding("class")
], GlassButtonDirective.prototype, "klass", 1);
GlassButtonDirective = __decorateClass([
  Directive({
    selector: "[glassButton]",
    standalone: true
  })
], GlassButtonDirective);
var GlassInputDirective = class {
  get klass() {
    return "glass-input";
  }
};
__decorateClass([
  HostBinding("class")
], GlassInputDirective.prototype, "klass", 1);
GlassInputDirective = __decorateClass([
  Directive({
    selector: "[glassInput]",
    standalone: true
  })
], GlassInputDirective);

// src/lib/theme.service.ts
import { Injectable, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { setAccent, setReducedTransparency, setTheme } from "@prismcraft/glass-core";
var GlassThemeService = class {
  constructor(doc) {
    this.doc = doc;
  }
  setTheme(mode) {
    setTheme(mode, this.doc.documentElement);
  }
  setAccent(accent) {
    setAccent(accent, this.doc.documentElement);
  }
  setReducedTransparency(enabled) {
    setReducedTransparency(enabled, this.doc.documentElement);
  }
};
GlassThemeService = __decorateClass([
  Injectable({
    providedIn: "root"
  }),
  __decorateParam(0, Inject(DOCUMENT))
], GlassThemeService);
export {
  GlassButtonDirective,
  GlassCardDirective,
  GlassInputDirective,
  GlassThemeService
};
