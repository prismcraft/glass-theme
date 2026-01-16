// src/index.tsx
import { createContext, useEffect, useMemo } from "react";
import { setAccent, setReducedTransparency, setTheme } from "@prismcraft/glass-core";
import { jsx, jsxs } from "react/jsx-runtime";
var GlassContext = createContext({
  theme: "system",
  accent: "purple",
  reducedTransparency: false
});
function GlassProvider(props) {
  const theme = props.theme ?? "system";
  const accent = props.accent ?? "purple";
  const reducedTransparency = props.reducedTransparency ?? false;
  const target = props.target ?? (typeof document !== "undefined" ? document.documentElement : null);
  useEffect(() => {
    if (!target) return;
    setTheme(theme, target);
    setAccent(accent, target);
    setReducedTransparency(reducedTransparency, target);
  }, [theme, accent, reducedTransparency, target]);
  const value = useMemo(() => ({ theme, accent, reducedTransparency }), [theme, accent, reducedTransparency]);
  return /* @__PURE__ */ jsx(GlassContext.Provider, { value, children: props.children });
}
function cx(...values) {
  return values.filter(Boolean).join(" ");
}
function GlassCard({ className, title, subtitle, children }) {
  return /* @__PURE__ */ jsxs("div", { className: cx("glass", "glass-card", "glass-hover", className), children: [
    (title || subtitle) && /* @__PURE__ */ jsxs("div", { style: { marginBottom: 10 }, children: [
      title && /* @__PURE__ */ jsx("div", { className: "glass-title", children: title }),
      subtitle && /* @__PURE__ */ jsx("div", { className: "glass-subtitle", children: subtitle })
    ] }),
    children
  ] });
}
function GlassButton({ className, variant = "default", accent, ...rest }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      "data-accent": accent,
      className: cx("glass", "glass-button", variant === "accent" && "glass-accent", className),
      ...rest
    }
  );
}
function GlassInput({ className, ...rest }) {
  return /* @__PURE__ */ jsx("input", { className: cx("glass-input", className), ...rest });
}
function GlassModal({ open, title, onClose, className, children }) {
  if (!open) return null;
  return /* @__PURE__ */ jsx("div", { className: "glass-backdrop", onClick: onClose, children: /* @__PURE__ */ jsxs("div", { className: cx("glass", "glass-modal", className), onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxs("div", { className: "glass-modal-header", children: [
      /* @__PURE__ */ jsx("div", { className: "glass-modal-title", children: title }),
      /* @__PURE__ */ jsx("button", { className: "glass glass-button", onClick: onClose, children: "Close" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "glass-modal-body", children })
  ] }) });
}
export {
  GlassButton,
  GlassCard,
  GlassInput,
  GlassModal,
  GlassProvider
};
