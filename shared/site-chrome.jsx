/* Euroswarms v2 — shared chrome: frame, nav, footer, sigil, tweaks, helpers. */

const ES_NAV = [
  ['Home', 'index.html', 'Domus'],
  ['Research', 'research.html', 'Opera'],
  ['Models', 'models.html', 'Archivum'],
  ['Publications', 'publications.html', 'Acta'],
  ['About', 'about.html', 'Doctrina'],
  ['Volunteer', 'volunteer.html', 'Officium'],
  ['Contact', 'contact.html', 'Litterae'],
];

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

/* ── The Concordia Sigil — 12 stars, concentric rings, radial ticks ── */
function Sigil({ size = 520, spin = true, opacity = 1 }) {
  const s = size, c = s / 2;
  const star = (cx, cy, r) => {
    let d = '';
    for (let i = 0; i < 5; i++) {
      const a = (i * 4 * Math.PI) / 5;
      const x = cx + r * Math.sin(a);
      const y = cy - r * Math.cos(a);
      d += (i === 0 ? 'M' : 'L') + x.toFixed(2) + ' ' + y.toFixed(2);
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
    const r1 = s * 0.44, r2 = i % 6 === 0 ? s * 0.41 : s * 0.428;
    ticks.push([c + r1 * Math.sin(a), c - r1 * Math.cos(a), c + r2 * Math.sin(a), c - r2 * Math.cos(a)]);
  }
  return (
    <svg width={s} height={s} viewBox={'0 0 ' + s + ' ' + s} style={{ display: 'block', opacity }} aria-hidden="true">
      <g className={spin ? 'x-sigil-spin' : ''}>
        <circle cx={c} cy={c} r={s * 0.46} fill="none" stroke="var(--x-gold-dim)" strokeWidth="1" />
        <circle cx={c} cy={c} r={s * 0.44} fill="none" stroke="var(--x-line)" strokeWidth="1" />
        <circle cx={c} cy={c} r={s * 0.36} fill="none" stroke="var(--x-line)" strokeWidth="1" />
        <circle cx={c} cy={c} r={s * 0.24} fill="none" stroke="var(--x-line)" strokeWidth="1" />
        <circle cx={c} cy={c} r={s * 0.10} fill="none" stroke="var(--x-gold-dim)" strokeWidth="1" />
        {ticks.map((t2, i) => (
          <line key={i} x1={t2[0]} y1={t2[1]} x2={t2[2]} y2={t2[3]} stroke={i % 6 === 0 ? 'var(--x-gold-dim)' : 'var(--x-line)'} strokeWidth="1" />
        ))}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const a = (i * Math.PI) / 6;
          const r = s * 0.36;
          return <line key={i} x1={c - r * Math.sin(a)} y1={c + r * Math.cos(a)} x2={c + r * Math.sin(a)} y2={c - r * Math.cos(a)} stroke="var(--x-line-soft)" strokeWidth="1" />;
        })}
        {stars.map((d, i) => <path key={i} d={d} fill="var(--x-gold)" />)}
      </g>
      <circle cx={c} cy={c} r={s * 0.012} fill="var(--x-gold)" />
    </svg>
  );
}

function VisitorCounter() {
  const start = new Date('2026-01-01T00:00:00');
  const n = 4213588 + Math.floor((Date.now() - start.getTime()) / 86400000) * 1371;
  const s = String(n).padStart(8, '0');
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
      <span className="x-mono" style={{ fontSize: '0.6rem' }}>Visitors since MCMXCI</span>
      <span style={{ display: 'inline-flex', border: '1px solid var(--x-line)' }}>
        {s.split('').map((d, i) => (
          <span key={i} style={{ display: 'inline-block', width: '1.15em', textAlign: 'center', background: 'var(--x-panel-2)', color: 'var(--x-gold)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 600, padding: '0.12rem 0', borderRight: i < 7 ? '1px solid var(--x-line)' : 'none' }}>{d}</span>
        ))}
      </span>
    </span>
  );
}

function Sec({ n, latin, title }) {
  return (
    <div className="x-sec">
      <span className="rule"></span>
      <h2>{title}</h2>
      <span className="rule"></span>
    </div>
  );
}

function GlyphRule() {
  return <div className="x-glyph-rule" aria-hidden="true"><span>✶ ✶ ✶</span></div>;
}

function Btn({ href, variant = '', onClick, children }) {
  const cls = 'x-btn' + (variant ? ' ' + variant : '');
  return href
    ? <a className={cls} href={href}>{children}</a>
    : <button className={cls} onClick={onClick}>{children}</button>;
}

/* ── Chrome ── */

function SiteNav({ current, t }) {
  const archive = t && t.theme === 'archive';
  return (
    <header className="x-nav">
      <div className="x-nav-inner">
        <a href="index.html" style={{ borderBottom: 'none', display: 'flex', alignItems: 'center', backgroundColor: archive ? 'var(--x-blue-deep)' : 'transparent', padding: archive ? '0.35rem 1rem' : 0 }}>
          <img src="assets/full-nobg.png" alt="Euroswarms" style={{ height: '116px', width: 'auto', display: 'block' }} />
        </a>
        <nav className="x-nav-links" style={{ justifyContent: 'center' }}>
          {ES_NAV.map(([label, href], i) => (
            <React.Fragment key={href}>
              {i > 0 && <span aria-hidden="true" className="x-nav-sep" style={{ color: 'var(--x-gold-dim)', fontSize: '0.5rem', alignSelf: 'center' }}>◆</span>}
              <a href={href} className={current === href ? 'on' : ''}>{label}</a>
            </React.Fragment>
          ))}
        </nav>
      </div>
    </header>
  );
}

function SiteFooter({ t }) {
  const col = { fontFamily: 'var(--font-serif)', fontSize: '1.1rem', margin: '0 0 1rem', color: 'var(--x-fg)' };
  const lnk = { display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--x-muted)', borderBottom: 'none', marginBottom: '0.65rem' };
  return (
    <footer className="x-footer">
      <div className="x-wrap" style={{ padding: '3.5rem 3rem 2.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1.2fr) repeat(3, minmax(150px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
          <div>
            <Sigil size={110} spin={t.motion} />
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.05rem', color: 'var(--x-muted)', margin: '1rem 0 0', maxWidth: '22rem' }}>
              "A decision system whose conclusions cannot be traced has no place in consequential decision processes."
            </p>
          </div>
          <div>
            <h3 style={col}>Research</h3>
            <a style={lnk} href="https://github.com/IlumCI/Metamodel" target="_blank">MetaModel</a>
            <a style={lnk} href="https://github.com/Euroswarms-Institute/Stable-Cognition" target="_blank">Stable Cognition</a>
            <a style={lnk} href="research.html">All Research</a>
          </div>
          <div>
            <h3 style={col}>Registry</h3>
            <a style={lnk} href="models.html">Model Registry</a>
            <a style={lnk} href="https://huggingface.co/Euroswarms" target="_blank">Hugging Face</a>
            <a style={lnk} href="publications.html">Publications</a>
          </div>
          <div>
            <h3 style={col}>Contact</h3>
            <a style={lnk} href="contact.html">Correspondence</a>
            <a style={lnk} href="volunteer.html">Appointments</a>
            <a style={lnk} href="https://github.com/IlumCI/euroswarms.eu" target="_blank">Site Source</a>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--x-line)', paddingTop: '1.5rem' }}>
          <span className="x-mono" style={{ fontSize: '0.62rem' }}>© 2026 Euroswarms R&amp;D Division — Independent research in agentic &amp; causal systems</span>
        </div>
      </div>
    </footer>
  );
}

function SiteFrame({ current, t, setTweak, extraTweaks, children }) {
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', t.theme === 'archive' ? 'archive' : 'void');
  }, [t.theme]);
  return (
    <React.Fragment>
      <div className="x-frame" aria-hidden="true"></div>
      <SiteNav current={current} t={t} />
      <main>{children}</main>
      <SiteFooter t={t} />
      <TweaksPanel>
        <TweakSection label="Surface" />
        <TweakRadio label="Theme" value={t.theme} options={['void', 'archive']} onChange={(v) => setTweak('theme', v)} />
        <TweakSection label="Apparatus" />
        <TweakToggle label="Sigil motion" value={t.motion} onChange={(v) => setTweak('motion', v)} />
        {extraTweaks}
      </TweaksPanel>
    </React.Fragment>
  );
}

/* Standard page intro */
function PageHead({ n, latin, refCode, title, lede }) {
  return (
    <div style={{ borderBottom: '1px solid var(--x-line)' }}>
      <div className="x-wrap" style={{ padding: '4.5rem 3rem 3.5rem', position: 'relative', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2.8rem, 5vw, 4.2rem)', lineHeight: 1.06, letterSpacing: '0', margin: '0 auto 1.5rem', maxWidth: '18em' }}>{title}</h1>
        {lede && <p style={{ fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '46rem', margin: '0 auto' }}>{lede}</p>}
      </div>
    </div>
  );
}

Object.assign(window, {
  ES_NAV, useSiteTweaks, Blink, Sigil, VisitorCounter,
  Sec, GlyphRule, Btn, SiteNav, SiteFooter, SiteFrame, PageHead,
});
