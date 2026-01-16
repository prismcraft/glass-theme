import * as react_jsx_runtime from 'react/jsx-runtime';
import React, { PropsWithChildren } from 'react';
import { GlassThemeMode, GlassAccent } from '@prismcraft/glass-core';

type GlassProviderProps = PropsWithChildren<{
    theme?: GlassThemeMode;
    accent?: GlassAccent;
    reducedTransparency?: boolean;
    /**
     * Set attributes on this element. Defaults to document.documentElement.
     * Useful if you want multiple isolated themes.
     */
    target?: HTMLElement | null;
}>;
declare function GlassProvider(props: GlassProviderProps): react_jsx_runtime.JSX.Element;
type GlassCardProps = PropsWithChildren<{
    className?: string;
    title?: string;
    subtitle?: string;
}>;
declare function GlassCard({ className, title, subtitle, children }: GlassCardProps): react_jsx_runtime.JSX.Element;
type GlassButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    variant?: 'default' | 'accent';
    accent?: GlassAccent;
};
declare function GlassButton({ className, variant, accent, ...rest }: GlassButtonProps): react_jsx_runtime.JSX.Element;
type GlassInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    className?: string;
};
declare function GlassInput({ className, ...rest }: GlassInputProps): react_jsx_runtime.JSX.Element;
type GlassModalProps = PropsWithChildren<{
    open: boolean;
    title?: string;
    onClose?: () => void;
    className?: string;
}>;
declare function GlassModal({ open, title, onClose, className, children }: GlassModalProps): react_jsx_runtime.JSX.Element | null;

export { GlassButton, type GlassButtonProps, GlassCard, type GlassCardProps, GlassInput, type GlassInputProps, GlassModal, type GlassModalProps, GlassProvider, type GlassProviderProps };
