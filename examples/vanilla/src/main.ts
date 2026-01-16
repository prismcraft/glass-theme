import '@prismcraft/glass-core/tokens.css';
import '@prismcraft/glass-core/glass.css';
import '@prismcraft/glass-core/components.css';
import './demo.css';

import { setAccent, setTheme } from '@prismcraft/glass-core';

const app = document.querySelector<HTMLDivElement>('#app')!;
app.className = 'glass-app demo-page';

app.innerHTML = `
  <div class="demo-container">
    <div class="demo-header demo-reveal">
      <div>
        <div class="demo-kicker">Prismcraft Glass</div>
        <div class="demo-title">Build luminous UI in minutes</div>
        <div class="demo-subtitle">
          A CSS-first glass system with tiny helpers. Switch accents, swap themes,
          and keep the surface rich while staying readable.
        </div>
      </div>
      <div class="demo-actions">
        <button class="glass glass-button glass-accent">Get Started</button>
        <button class="glass glass-button" data-modal-open="tokens">View Tokens</button>
      </div>
    </div>

    <div class="demo-grid">
      <div class="demo-stack">
        <div class="glass glass-card glass-hover demo-card demo-hero demo-reveal">
          <div class="glass-title">Vanilla Glass</div>
          <div class="glass-subtitle">CSS-first theme + optional helper</div>
          <div style="height: 14px"></div>

          <div class="demo-actions" style="margin-bottom:14px;">
            <button class="glass glass-button" data-accent="blue">Blue</button>
            <button class="glass glass-button" data-accent="purple">Purple</button>
            <button class="glass glass-button" data-accent="green">Green</button>
            <button class="glass glass-button" data-accent="orange">Orange</button>
          </div>

          <div class="demo-actions" style="margin-bottom:14px;">
            <button class="glass glass-button" data-theme="light">Light</button>
            <button class="glass glass-button" data-theme="dark">Dark</button>
            <button class="glass glass-button" data-theme="system">System</button>
          </div>

          <input class="glass-input" placeholder="Search components, tokens, or recipes..." />

          <div class="demo-stats">
            <div class="demo-stat">
              <strong>16</strong>
              Active tokens
            </div>
            <div class="demo-stat">
              <strong>120ms</strong>
              Hover lift
            </div>
            <div class="demo-stat">
              <strong>2.1kb</strong>
              JS helper
            </div>
          </div>
        </div>

        <div class="glass glass-card glass-hover demo-card demo-reveal" data-delay="2">
          <div style="font-weight:600; margin-bottom:10px;">Motion + depth</div>
          <div class="demo-bars">
            <div class="demo-bar"><span style="width:72%"></span></div>
            <div class="demo-bar"><span style="width:46%"></span></div>
            <div class="demo-bar"><span style="width:88%"></span></div>
          </div>
          <div class="demo-tags">
            <div class="demo-tag">Blur layers</div>
            <div class="demo-tag">Soft borders</div>
            <div class="demo-tag">Noise texture</div>
          </div>
        </div>
      </div>

      <div class="demo-stack">
        <div class="glass glass-card glass-hover demo-card demo-reveal" data-delay="3">
          <div style="font-weight:600; margin-bottom:10px;">Live status</div>
          <div style="opacity:0.8; margin-bottom:12px;">
            Theme and accent changes ripple across the layout instantly.
          </div>
          <div class="demo-tags">
            <div class="demo-tag">Theme: <span id="theme-label">system</span></div>
            <div class="demo-tag">Accent: <span id="accent-label">purple</span></div>
          </div>
        </div>

        <div class="glass glass-card glass-hover demo-card demo-reveal" data-delay="4">
          <div style="font-weight:600; margin-bottom:10px;">Shipping today</div>
          <ul style="margin:0; padding-left:18px; opacity:0.85;">
            <li>Vanilla + React + Angular</li>
            <li>Token-driven theming</li>
            <li>Clean CSS exports</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="glass-backdrop" data-modal="tokens" style="display:none;">
    <div class="glass glass-modal" role="dialog" aria-modal="true">
      <div class="glass-modal-header">
        <div class="glass-modal-title">Theme Tokens</div>
        <button class="glass glass-button" data-modal-close>Close</button>
      </div>
      <div class="glass-modal-body">
        <div class="demo-tags" style="margin-top:0;">
          <div class="demo-tag">--glass-text</div>
          <div class="demo-tag">--glass-bg</div>
          <div class="demo-tag">--glass-surface</div>
          <div class="demo-tag">--glass-border</div>
          <div class="demo-tag">--glass-accent</div>
          <div class="demo-tag">--glass-blur-md</div>
        </div>
        <div style="margin-top:12px; opacity:0.8;">
          Tokens update instantly when you switch theme or accent.
        </div>
        <div class="glass-modal-footer">
          <button class="glass glass-button" data-modal-close>Close</button>
        </div>
      </div>
    </div>
  </div>
`;

const themeLabel = document.querySelector<HTMLSpanElement>('#theme-label');
const accentLabel = document.querySelector<HTMLSpanElement>('#accent-label');
const tokenModal = document.querySelector<HTMLDivElement>('[data-modal="tokens"]');

setTheme('dark');
setAccent('purple');
if (themeLabel) themeLabel.textContent = 'dark';
if (accentLabel) accentLabel.textContent = 'purple';

app.addEventListener('click', (e) => {
  const t = e.target as HTMLElement;
  const accent = t.getAttribute('data-accent');
  const theme = t.getAttribute('data-theme');
  const modalOpen = t.getAttribute('data-modal-open');
  const modalClose = t.hasAttribute('data-modal-close');
  if (accent) {
    setAccent(accent as any);
    if (accentLabel) accentLabel.textContent = accent;
  }
  if (theme) {
    setTheme(theme as any);
    if (themeLabel) themeLabel.textContent = theme;
  }
  if (modalOpen === 'tokens' && tokenModal) {
    tokenModal.style.display = 'grid';
  }
  if (modalClose && tokenModal) {
    tokenModal.style.display = 'none';
  }
  if (tokenModal && t === tokenModal) {
    tokenModal.style.display = 'none';
  }
});


