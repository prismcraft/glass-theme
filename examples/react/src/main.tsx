import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import '@prismcraft/glass-core/tokens.css';
import '@prismcraft/glass-core/glass.css';
import '@prismcraft/glass-core/components.css';
import './demo.css';

import { GlassProvider, GlassCard, GlassButton, GlassInput, GlassModal } from '@prismcraft/glass-react';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('dark');
  const [accent, setAccent] = useState<'blue' | 'purple' | 'green' | 'orange'>('purple');
  const [showTokens, setShowTokens] = useState(false);

  return (
    <GlassProvider theme={theme} accent={accent}>
      <div className="glass-app demo-page">
        <div className="demo-container">
          <div className="demo-header demo-reveal">
            <div>
              <div className="demo-kicker">Prismcraft Glass</div>
              <div className="demo-title">Build luminous UI in minutes</div>
              <div className="demo-subtitle">
                A CSS-first glass system with light React wrappers. Switch accents, swap themes,
                and keep the surface rich while staying readable.
              </div>
            </div>
            <div className="demo-actions">
              <GlassButton variant="accent">Get Started</GlassButton>
              <GlassButton onClick={() => setShowTokens(true)}>View Tokens</GlassButton>
            </div>
          </div>

          <div className="demo-grid">
            <div className="demo-stack">
              <GlassCard
                className="demo-card demo-hero demo-reveal"
                title="React Glass"
                subtitle="Design system + composable utilities"
              >
                <div className="demo-actions" style={{ marginBottom: 14 }}>
                  <GlassButton accent="blue" onClick={() => setAccent('blue')}>Blue</GlassButton>
                  <GlassButton accent="purple" onClick={() => setAccent('purple')}>Purple</GlassButton>
                  <GlassButton accent="green" onClick={() => setAccent('green')}>Green</GlassButton>
                  <GlassButton accent="orange" onClick={() => setAccent('orange')}>Orange</GlassButton>
                </div>
                <div className="demo-actions" style={{ marginBottom: 14 }}>
                  <GlassButton onClick={() => setTheme('light')}>Light</GlassButton>
                  <GlassButton onClick={() => setTheme('dark')}>Dark</GlassButton>
                  <GlassButton onClick={() => setTheme('system')}>System</GlassButton>
                </div>
                <GlassInput placeholder="Search components, tokens, or recipes..." />
                <div className="demo-stats">
                  <div className="demo-stat">
                    <strong>16</strong>
                    Active tokens
                  </div>
                  <div className="demo-stat">
                    <strong>120ms</strong>
                    Hover lift
                  </div>
                  <div className="demo-stat">
                    <strong>2.1kb</strong>
                    React adapter
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="demo-card demo-reveal" data-delay="2">
                <div style={{ fontWeight: 600, marginBottom: 10 }}>Motion + depth</div>
                <div className="demo-bars">
                  <div className="demo-bar"><span style={{ width: '72%' }} /></div>
                  <div className="demo-bar"><span style={{ width: '46%' }} /></div>
                  <div className="demo-bar"><span style={{ width: '88%' }} /></div>
                </div>
                <div className="demo-tags">
                  <div className="demo-tag">Blur layers</div>
                  <div className="demo-tag">Soft borders</div>
                  <div className="demo-tag">Noise texture</div>
                </div>
              </GlassCard>
            </div>

            <div className="demo-stack">
              <GlassCard className="demo-card demo-reveal" data-delay="3">
                <div style={{ fontWeight: 600, marginBottom: 10 }}>Live status</div>
                <div style={{ opacity: 0.8, marginBottom: 12 }}>
                  Theme and accent changes ripple across the layout instantly.
                </div>
                <div className="demo-tags">
                  <div className="demo-tag">Theme: {theme}</div>
                  <div className="demo-tag">Accent: {accent}</div>
                </div>
              </GlassCard>

              <GlassCard className="demo-card demo-reveal" data-delay="4">
                <div style={{ fontWeight: 600, marginBottom: 10 }}>Shipping today</div>
                <ul style={{ margin: 0, paddingLeft: 18, opacity: 0.85 }}>
                  <li>Vanilla + React + Angular</li>
                  <li>Token-driven theming</li>
                  <li>Clean CSS exports</li>
                </ul>
              </GlassCard>
            </div>
          </div>
        </div>

        <GlassModal open={showTokens} title="Theme Tokens" onClose={() => setShowTokens(false)}>
          <div className="demo-tags" style={{ marginTop: 0 }}>
            <div className="demo-tag">--glass-text</div>
            <div className="demo-tag">--glass-bg</div>
            <div className="demo-tag">--glass-surface</div>
            <div className="demo-tag">--glass-border</div>
            <div className="demo-tag">--glass-accent</div>
            <div className="demo-tag">--glass-blur-md</div>
          </div>
          <div style={{ marginTop: 12, opacity: 0.8 }}>
            Tokens update instantly when you switch theme or accent.
          </div>
          <div className="glass-modal-footer">
            <GlassButton onClick={() => setShowTokens(false)}>Close</GlassButton>
          </div>
        </GlassModal>
      </div>
    </GlassProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);


