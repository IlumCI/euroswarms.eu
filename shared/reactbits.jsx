/* Euroswarms v3 — React Bits components, adapted.
 *
 * Ported from reactbits.dev patterns to this site's constraints: no bundler
 * (Babel standalone in-browser), no motion library. The upstream versions lean
 * on GSAP/framer-motion; none of these five need it — rAF, IntersectionObserver
 * and CSS transitions cover it, and the CDN payload stays at three SRI-pinned
 * scripts.
 *
 * Motion is gated twice: prefers-reduced-motion, and the site's `motion` tweak
 * (via RBMotion context, provided by SiteFrame). When motion is off every
 * component renders its resolved end state immediately — never a blank.
 *
 * Exports (to window): RBMotion, useRBMotion, DecryptedText, CountUp,
 *   SurveyGrid, Reveal.
 */

const RBMotion = React.createContext(true);

function useRBMotion() {
  const enabled = React.useContext(RBMotion);
  const [reduce, setReduce] = React.useState(() =>
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  React.useEffect(() => {
    if (typeof window.matchMedia !== 'function') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduce(mq.matches);
    // Safari <14 only has the legacy listener API.
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', onChange);
      else mq.removeListener(onChange);
    };
  }, []);
  return enabled && !reduce;
}

/* Fire `fn` once, when `ref`'s element first crosses into view. Falls back to
 * firing immediately where IntersectionObserver is missing. */
function useInView(ref, fn, deps) {
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') return fn();
    let done = false;
    const io = new IntersectionObserver((entries) => {
      if (done || !entries.some((e) => e.isIntersecting)) return;
      done = true;
      io.disconnect();
      fn();
    }, { threshold: 0.25, rootMargin: '0px 0px -8% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, deps);
}

/* ── DecryptedText ────────────────────────────────────────────────────────────
 * Resolves left-to-right; unresolved glyphs churn. Reads as a channel
 * acquiring, not a cipher. Whitespace is never scrambled, so the text never
 * reflows mid-run. */

const RB_GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/·—';

function DecryptedText({ text, speed = 26, className, style, as: Tag = 'span' }) {
  const motion = useRBMotion();
  const ref = React.useRef(null);
  const rafRef = React.useRef(0);
  const [out, setOut] = React.useState(text);

  // Hold the scrambled placeholder only while motion is live; if the tweak
  // flips off mid-run, snap to the real text rather than freezing on noise.
  React.useEffect(() => {
    if (motion) return;
    cancelAnimationFrame(rafRef.current);
    setOut(text);
  }, [motion, text]);

  useInView(ref, () => {
    if (!motion) return;
    const start = performance.now();
    setOut(text.replace(/\S/g, ' '));
    const tick = (now) => {
      const settled = Math.floor((now - start) / speed);
      if (settled >= text.length) return setOut(text);
      let s = text.slice(0, settled);
      for (let i = settled; i < text.length; i++) {
        s += /\s/.test(text[i]) ? text[i] : RB_GLYPHS[(Math.random() * RB_GLYPHS.length) | 0];
      }
      setOut(s);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  }, [text, speed, motion]);

  React.useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  return <Tag ref={ref} className={className} style={style}>{out}</Tag>;
}

/* ── CountUp ──────────────────────────────────────────────────────────────────
 * Gauge behaviour: easeOutExpo to `to` on first view. `pad` zero-fills to a
 * fixed width so the odometer never changes size as it climbs. */

function CountUp({ to, duration = 1700, pad = 0, className, style, as: Tag = 'span', render }) {
  const motion = useRBMotion();
  const ref = React.useRef(null);
  const rafRef = React.useRef(0);
  const [n, setN] = React.useState(to);

  React.useEffect(() => {
    if (!motion) { cancelAnimationFrame(rafRef.current); setN(to); }
  }, [motion, to]);

  useInView(ref, () => {
    if (!motion) return;
    const start = performance.now();
    setN(0);
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setN(Math.round(to * eased));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  }, [to, duration, motion]);

  React.useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  const s = pad ? String(n).padStart(pad, '0') : String(n);
  return <Tag ref={ref} className={className} style={style}>{render ? render(s) : s}</Tag>;
}

/* ── SurveyGrid ───────────────────────────────────────────────────────────────
 * React Bits "Squares": a ruled plan-view grid drifting on the diagonal.
 * Canvas rather than a tiled background-image so the drift stays sub-pixel and
 * the whole thing costs one composited layer. Static grid when motion is off. */

function SurveyGrid({ cell = 46, speed = 0.14, className, style }) {
  const motion = useRBMotion();
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;
    let raf = 0, off = 0, w = 0, h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const r = cv.getBoundingClientRect();
      w = Math.max(1, r.width); h = Math.max(1, r.height);
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const line = getComputedStyle(cv).getPropertyValue('--rb-grid').trim() || '#2a2a2c';
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = line;
      ctx.lineWidth = 1;
      ctx.beginPath();
      // +0.5 keeps 1px rules on the pixel grid instead of straddling two.
      for (let x = -cell + (off % cell); x <= w + cell; x += cell) {
        ctx.moveTo(Math.round(x) + 0.5, 0); ctx.lineTo(Math.round(x) + 0.5, h);
      }
      for (let y = -cell + (off % cell); y <= h + cell; y += cell) {
        ctx.moveTo(0, Math.round(y) + 0.5); ctx.lineTo(w, Math.round(y) + 0.5);
      }
      ctx.stroke();
    };

    const tick = () => { off += speed; draw(); raf = requestAnimationFrame(tick); };

    resize(); draw();
    const ro = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(() => { resize(); draw(); }) : null;
    if (ro) ro.observe(cv); else window.addEventListener('resize', resize);
    if (motion) raf = requestAnimationFrame(tick);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (ro) ro.disconnect(); else window.removeEventListener('resize', resize);
    };
  }, [cell, speed, motion]);

  return (
    <canvas ref={canvasRef} className={className} aria-hidden="true"
      style={{ display: 'block', width: '100%', height: '100%', '--rb-grid': 'var(--x-line-soft)', ...style }} />
  );
}

/* ── Reveal ───────────────────────────────────────────────────────────────────
 * ScrollReveal, minus the blur — a soft focus-in reads decorative against this
 * theme's hard geometry, so it's opacity + an 8px lift only. `as="tr"` is
 * supported so table rows can register in sequence (AnimatedList behaviour)
 * without illegal wrapper elements inside <tbody>. */

function Reveal({ children, delay = 0, as: Tag = 'div', className, style, ...rest }) {
  const motion = useRBMotion();
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);

  useInView(ref, () => setShown(true), []);

  const cls = [
    'rb-reveal',
    motion ? (shown ? 'in' : '') : 'static',
    className || '',
  ].filter(Boolean).join(' ');

  return (
    <Tag ref={ref} className={cls}
      style={{ transitionDelay: motion && shown ? delay + 'ms' : undefined, ...style }}
      {...rest}>
      {children}
    </Tag>
  );
}

Object.assign(window, {
  RBMotion, useRBMotion, DecryptedText, CountUp, SurveyGrid, Reveal,
});
