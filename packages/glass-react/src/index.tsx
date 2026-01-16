import React, { createContext, useEffect, useMemo } from 'react';
import type { PropsWithChildren } from 'react';
import { setAccent, setReducedTransparency, setTheme, type GlassAccent, type GlassThemeMode } from '@prismcraft/glass-core';

export type GlassProviderProps = PropsWithChildren<{
  theme?: GlassThemeMode;
  accent?: GlassAccent;
  reducedTransparency?: boolean;
  /**
   * Set attributes on this element. Defaults to document.documentElement.
   * Useful if you want multiple isolated themes.
   */
  target?: HTMLElement | null;
}>;

type GlassCtx = {
  theme: GlassThemeMode;
  accent: GlassAccent;
  reducedTransparency: boolean;
};

const GlassContext = createContext<GlassCtx>({
  theme: 'system',
  accent: 'purple',
  reducedTransparency: false,
});

export function GlassProvider(props: GlassProviderProps) {
  const theme = props.theme ?? 'system';
  const accent = props.accent ?? 'purple';
  const reducedTransparency = props.reducedTransparency ?? false;
  const target = props.target ?? (typeof document !== 'undefined' ? document.documentElement : null);

  useEffect(() => {
    if (!target) return;
    setTheme(theme, target);
    setAccent(accent, target);
    setReducedTransparency(reducedTransparency, target);
  }, [theme, accent, reducedTransparency, target]);

  const value = useMemo(() => ({ theme, accent, reducedTransparency }), [theme, accent, reducedTransparency]);
  return <GlassContext.Provider value={value}>{props.children}</GlassContext.Provider>;
}

type ClassValue = string | undefined | null | false;
function cx(...values: ClassValue[]): string {
  return values.filter(Boolean).join(' ');
}

export type GlassCardProps = PropsWithChildren<{
  className?: string;
  title?: string;
  subtitle?: string;
}>;

export function GlassCard({ className, title, subtitle, children }: GlassCardProps) {
  return (
    <div className={cx('glass', 'glass-card', 'glass-hover', className)}>
      {(title || subtitle) && (
        <div style={{ marginBottom: 10 }}>
          {title && <div className="glass-title">{title}</div>}
          {subtitle && <div className="glass-subtitle">{subtitle}</div>}
        </div>
      )}
      {children}
    </div>
  );
}

export type GlassButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  variant?: 'default' | 'accent';
  accent?: GlassAccent;
};

export function GlassButton({ className, variant = 'default', accent, ...rest }: GlassButtonProps) {
  return (
    <button
      data-accent={accent}
      className={cx('glass', 'glass-button', variant === 'accent' && 'glass-accent', className)}
      {...rest}
    />
  );
}

export type GlassInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export function GlassInput({ className, ...rest }: GlassInputProps) {
  return <input className={cx('glass-input', className)} {...rest} />;
}

export type GlassModalProps = PropsWithChildren<{
  open: boolean;
  title?: string;
  onClose?: () => void;
  className?: string;
}>;

export function GlassModal({ open, title, onClose, className, children }: GlassModalProps) {
  if (!open) return null;
  return (
    <div className="glass-backdrop" onClick={onClose}>
      <div className={cx('glass', 'glass-modal', className)} onClick={(e) => e.stopPropagation()}>
        <div className="glass-modal-header">
          <div className="glass-modal-title">{title}</div>
          <button className="glass glass-button" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="glass-modal-body">{children}</div>
      </div>
    </div>
  );
}


