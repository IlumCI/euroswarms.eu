/* Euroswarms v3 — shared chrome: doc band, nav, footer, sigil, section rules, helpers. */

const ES_NAV = [
  ['Home', 'index.html', 'Domus'],
  ['Research', 'research.html', 'Opera'],
  ['Models', 'models.html', 'Archivum'],
  ['Publications', 'publications.html', 'Acta'],
  ['About', 'about.html', 'Doctrina'],
  ['Volunteer', 'volunteer.html', 'Officium'],
  ['Contact', 'contact.html', 'Litterae'],
];

const ES_REV = 'REV 05';
const ES_LS_KEY = 'es_site_tweaks_v2';

function esReadStored(defaults) {
  try {
    const s = JSON.parse(localStorage.getItem(ES_LS_KEY) || '{}');
    const out = {};
    for (const k of Object.keys(defaults)) if (k in s) out[k] = s[k];
    return out;
  } catch (e) { return {}; }
}

function useSiteTweaks(defaults) {
  const initial = React.useMemo(() => ({ ...defaults, ...esReadStored(defaults) }), []);
  const [t, rawSet] = useTweaks(initial);
  const setTweak = React.useCallback((keyOrEdits, val) => {
    rawSet(keyOrEdits, val);
    try {
      const edits = (typeof keyOrEdits === 'object' && keyOrEdits !== null) ? keyOrEdits : { [keyOrEdits]: val };
      const cur = JSON.parse(localStorage.getItem(ES_LS_KEY) || '{}');
      localStorage.setItem(ES_LS_KEY, JSON.stringify({ ...cur, ...edits }));
    } catch (e) {}
  }, [rawSet]);
  return [t, setTweak];
}

function Blink() { return <span className="x-blink" aria-hidden="true">█</span>; }

/* ── Union Sigil — 12 stars, bearing scale, centre mark ──
   Twelve stars for the Union, in EU flag gold; the 72-tick ring reads as a
   bearing scale rather than a seal. Ticks in line, cardinals and centre in
   signal. The gold is emblem, not accent — it appears nowhere else. */
/* scaleOpacity and starOpacity are separate on purpose: the hero needs the
   bearing scale to recede behind the headline while the stars stay properly
   gold. One opacity over the whole mark drags #ffcc00 to olive. */
function Sigil({ size = 520, spin = true, scaleOpacity = 1, starOpacity = 1 }) {
  const s = size, c = s / 2;
  const star = (cx, cy, r) => {
    let d = '';
    for (let i = 0; i < 5; i++) {
      const a = (i * 4 * Math.PI) / 5;
      d += (i === 0 ? 'M' : 'L') + (cx + r * Math.sin(a)).toFixed(2) + ' ' + (cy - r * Math.cos(a)).toFixed(2);
    }
    return d + 'Z';
  };
  const stars = [];
  const R = s * 0.30;
  for (let i = 0; i < 12; i++) {
    const a = (i * Math.PI) / 6;
    stars.push(star(c + R * Math.sin(a), c - R * Math.cos(a), s * 0.028));
  }
  const ticks = [];
  for (let i = 0; i < 72; i++) {
    const a = (i * Math.PI) / 36;
    const major = i % 18 === 0;
    const r1 = s * 0.44, r2 = major ? s * 0.395 : (i % 6 === 0 ? s * 0.415 : s * 0.43);
    ticks.push([c + r1 * Math.sin(a), c - r1 * Math.cos(a), c + r2 * Math.sin(a), c - r2 * Math.cos(a), major]);
  }
  return (
    <svg width={s} height={s} viewBox={'0 0 ' + s + ' ' + s} style={{ display: 'block' }} aria-hidden="true">
      <g className={spin ? 'x-sigil-spin' : ''}>
        <g opacity={scaleOpacity}>
          <circle cx={c} cy={c} r={s * 0.46} fill="none" stroke="var(--x-line)" strokeWidth="1" />
          <circle cx={c} cy={c} r={s * 0.44} fill="none" stroke="var(--x-line-soft)" strokeWidth="1" />
          <circle cx={c} cy={c} r={s * 0.36} fill="none" stroke="var(--x-line-soft)" strokeWidth="1" />
          <circle cx={c} cy={c} r={s * 0.24} fill="none" stroke="var(--x-line-soft)" strokeWidth="1" />
          <circle cx={c} cy={c} r={s * 0.10} fill="none" stroke="var(--x-signal-dim)" strokeWidth="1" />
          {ticks.map((t2, i) => (
            <line key={i} x1={t2[0]} y1={t2[1]} x2={t2[2]} y2={t2[3]}
              stroke={t2[4] ? 'var(--x-signal-dim)' : 'var(--x-line)'} strokeWidth="1" />
          ))}
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const a = (i * Math.PI) / 6, r = s * 0.36;
            return <line key={i} x1={c - r * Math.sin(a)} y1={c + r * Math.cos(a)} x2={c + r * Math.sin(a)} y2={c - r * Math.cos(a)} stroke="var(--x-line-soft)" strokeWidth="1" />;
          })}
        </g>
        <g opacity={starOpacity}>
          {stars.map((d, i) => <path key={i} d={d} fill="var(--x-eu-gold)" />)}
        </g>
      </g>
      <circle cx={c} cy={c} r={s * 0.014} fill="var(--x-signal)" opacity={scaleOpacity} />
    </svg>
  );
}

/* Access odometer. Deterministic drift from a fixed epoch — no backend, and the
   figure must not jump between pages within a session. */
function VisitorCounter() {
  const epoch = Date.UTC(2026, 0, 1);
  const n = 4213588 + Math.floor((Date.now() - epoch) / 86400000) * 1371;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
      <span className="x-mono" style={{ fontSize: '0.56rem' }}>Recorded accesses</span>
      <CountUp to={n} pad={8} duration={2000} render={(s) => (
        <span style={{ display: 'inline-flex', border: '1px solid var(--x-line)' }}>
          {s.split('').map((d, i) => (
            <span key={i} style={{
              display: 'inline-block', width: '1.15em', textAlign: 'center',
              background: 'var(--x-panel-2)', color: 'var(--x-signal)',
              fontFamily: 'var(--font-mono)', fontSize: '0.76rem', fontWeight: 600,
              padding: '0.1rem 0', borderRight: i < 7 ? '1px solid var(--x-line)' : 'none',
            }}>{d}</span>
          ))}
        </span>
      )} />
    </span>
  );
}

/* Numbered article heading. `n` and `latin` are rendered as the article index —
   in v2 both props were accepted and silently dropped. */
function Sec({ n, latin, title }) {
  return (
    <div className="x-sec">
      {n && <span className="idx">{n}</span>}
      <h2>{title}</h2>
      <span className="rule"></span>
      {latin && <span className="latin">{latin}</span>}
    </div>
  );
}

function GlyphRule({ label = 'Section break' }) {
  return (
    <div className="x-glyph-rule" aria-hidden="true">
      <span><i className="x-dot off" />{label}<i className="x-dot off" /></span>
    </div>
  );
}

function Btn({ href, variant = '', onClick, children }) {
  const cls = 'x-btn' + (variant ? ' ' + variant : '');
  return href
    ? <a className={cls} href={href}>{children}</a>
    : <button className={cls} onClick={onClick}>{children}</button>;
}

/* ── Chrome ── */

/* Document-control band. The form of a classification marking, stating the
   opposite: everything here is released and unrestricted. */
function DocBand({ docRef }) {
  return (
    <div className="x-docband">
      <div className="x-docband-inner">
        <i className="x-dot live" />
        <b>Public release — unrestricted</b>
        <span className="hide-sm">Euroswarms R&amp;D Division</span>
        <span className="rule hide-sm"></span>
        <span className="hide-sm">{docRef || 'ES/RD/2026'}</span>
        <span>{ES_REV}</span>
      </div>
    </div>
  );
}

function SiteNav({ current }) {
  return (
    <header className="x-nav">
      <div className="x-nav-inner">
        <a href="index.html" className="x-nav-logo">
          <img src="assets/full-nobg.png" alt="Euroswarms" />
        </a>
        <nav className="x-nav-links">
          {ES_NAV.map(([label, href]) => (
            <a key={href} href={href} className={current === href ? 'on' : ''}>{label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function SiteFooter({ t }) {
  const col = { fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--x-muted)', margin: '0 0 1rem' };
  const lnk = { display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.66rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--x-muted)', borderBottom: 'none', marginBottom: '0.55rem' };
  return (
    <footer className="x-footer">
      <div className="x-wrap" style={{ padding: '3rem 3rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1.2fr) repeat(3, minmax(150px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
          <div>
            <Sigil size={96} spin={t.motion} />
            <p style={{ fontSize: '0.9rem', color: 'var(--x-muted)', margin: '1rem 0 0', maxWidth: '22rem' }}>
              A decision system whose conclusions cannot be traced has no place in consequential decision processes.
            </p>
          </div>
          <div>
            <h3 style={col}>Research</h3>
            <a style={lnk} href="https://github.com/IlumCI/Metamodel" target="_blank">MetaModel</a>
            <a style={lnk} href="https://github.com/Euroswarms-Institute/Stable-Cognition" target="_blank">Stable Cognition</a>
            <a style={lnk} href="research.html">All programmes</a>
          </div>
          <div>
            <h3 style={col}>Registry</h3>
            <a style={lnk} href="models.html">Model registry</a>
            <a style={lnk} href="https://huggingface.co/Euroswarms" target="_blank">Hugging Face</a>
            <a style={lnk} href="publications.html">Publications</a>
          </div>
          <div>
            <h3 style={col}>Correspondence</h3>
            <a style={lnk} href="contact.html">Channels</a>
            <a style={lnk} href="volunteer.html">Appointments</a>
            <a style={lnk} href="https://github.com/IlumCI/euroswarms.eu" target="_blank">Site source</a>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--x-line)', paddingTop: '1.25rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <span className="x-mono" style={{ fontSize: '0.58rem' }}>© 2026 Euroswarms R&amp;D Division — Independent research in agentic &amp; causal systems</span>
          {t.counter && <VisitorCounter />}
        </div>
      </div>
    </footer>
  );
}

function SiteFrame({ current, docRef, t, setTweak, extraTweaks, children }) {
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', t.theme === 'archive' ? 'archive' : 'void');
  }, [t.theme]);
  // Mirrored onto the root so pure-CSS animations honour the tweak too; the
  // React components read the context instead.
  React.useEffect(() => {
    document.documentElement.setAttribute('data-motion', t.motion ? 'on' : 'off');
  }, [t.motion]);
  return (
    <RBMotion.Provider value={!!t.motion}>
      <div className="x-frame" aria-hidden="true"><i /><i /><i /><i /></div>
      <DocBand docRef={docRef} />
      <SiteNav current={current} />
      <main>{children}</main>
      <SiteFooter t={t} />
      <TweaksPanel>
        <TweakSection label="Surface" />
        <TweakRadio label="Theme" value={t.theme} options={['void', 'archive']} onChange={(v) => setTweak('theme', v)} />
        <TweakSection label="Apparatus" />
        <TweakToggle label="Motion" value={t.motion} onChange={(v) => setTweak('motion', v)} />
        <TweakToggle label="Access counter" value={t.counter} onChange={(v) => setTweak('counter', v)} />
        {extraTweaks}
      </TweaksPanel>
    </RBMotion.Provider>
  );
}

/* Standard page intro. `refCode` is rendered as the document header — in v2 it
   was accepted and dropped. */
function PageHead({ n, latin, refCode, title, lede }) {
  return (
    <div style={{ borderBottom: '1px solid var(--x-line)' }}>
      {/* Top padding also clears the nav emblem's 46px overhang — see .x-nav-logo. */}
      <div className="x-wrap" style={{ padding: '4rem 3rem 2.75rem', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '1.1rem' }}>
          <span className="x-mono" style={{ color: 'var(--x-signal)' }}>{n}</span>
          <span className="x-mono">{latin}</span>
          <span style={{ flex: 1, borderTop: '1px solid var(--x-line-soft)' }} />
          {refCode && <DecryptedText className="x-mono" text={refCode} />}
        </div>
        <h1 style={{ fontSize: 'clamp(2.1rem, 4.2vw, 3.4rem)', fontWeight: 700, lineHeight: 1.04, letterSpacing: '-0.03em', textTransform: 'uppercase', margin: '0 0 1.25rem', maxWidth: '18em' }}>{title}</h1>
        {lede && <p style={{ fontSize: '1.02rem', lineHeight: 1.7, maxWidth: '52rem', margin: 0 }}>{lede}</p>}
      </div>
    </div>
  );
}

Object.assign(window, {
  ES_NAV, ES_REV, useSiteTweaks, Blink, Sigil, VisitorCounter,
  Sec, GlyphRule, Btn, DocBand, SiteNav, SiteFooter, SiteFrame, PageHead,
});
