// src/index.ts
function getRoot(el) {
  return el ?? document.documentElement;
}
function setTheme(mode, target) {
  const root = getRoot(target);
  if (mode === "system") {
    root.removeAttribute("data-theme");
    return;
  }
  root.setAttribute("data-theme", mode);
}
function setAccent(accent, target) {
  const root = getRoot(target);
  root.setAttribute("data-accent", accent);
}
function setReducedTransparency(enabled, target) {
  const root = getRoot(target);
  if (enabled) root.setAttribute("data-glass", "reduced");
  else root.removeAttribute("data-glass");
}
export {
  setAccent,
  setReducedTransparency,
  setTheme
};
