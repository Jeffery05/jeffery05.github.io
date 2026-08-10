import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './home.module.css';

const NAME = 'Jeffery Hu';
const FOCUS = 'Software Engineering · Quant Trading';
const EDU = 'Computer Science, University of Waterloo';

const STAR_COUNT = 70;
const WAVE_BANDS = 26;
const HORIZON = 0.5; // fraction of canvas height
const SAND_TOP = 0.88; // where the shoreline sits
const RISE_SECONDS = 3.2; // how long the sun takes to clear the water

const easeOutCubic = x => 1 - Math.pow(1 - x, 3);
const mix = (a, b, m) => Math.round(a + (b - a) * m);

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = e => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return reduced;
}

/* Sunset beach drawn on canvas — sky, stars, sun, sea and a washing
   shoreline, all in the site palette so nothing has to be loaded. */
function BeachCanvas({ heroRef, nameRef }) {
  const canvasRef = useRef(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let raf = null;
    let w = 0;
    let h = 0;
    let t = 0;
    let stars = [];
    let bands = [];
    let horizonPx = 0;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      measure();
    }

    /* The waterline is pinned just under the name so the name reads against
       sky and both subtitle lines sit on the water, at any viewport size.
       offsetTop/offsetHeight are layout values, so the hero's entrance
       transform doesn't skew them. */
    function measure() {
      const hero = heroRef && heroRef.current;
      const name = nameRef && nameRef.current;
      const raw =
        hero && name
          ? hero.offsetTop + name.offsetTop + name.offsetHeight + 14
          : h * HORIZON;
      horizonPx = Math.max(h * 0.2, Math.min(raw, h * 0.7));
    }

    function layout() {
      const sunR = Math.max(26, Math.min(w, h) * 0.055);
      return {
        horizon: horizonPx,
        sandTop: h * SAND_TOP,
        sunX: w * (w < 700 ? 0.74 : 0.72),
        sunR,
      };
    }

    function seed() {
      const { horizon } = layout();
      stars = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * horizon * 0.92,
        r: 0.3 + Math.random() * 1.1,
        phase: Math.random() * Math.PI * 2,
        speed: 0.6 + Math.random() * 1.4,
      }));

      bands = Array.from({ length: WAVE_BANDS }, (_, i) => {
        const p = i / (WAVE_BANDS - 1); // 0 at horizon, 1 at shoreline
        return {
          p,
          amp: 0.8 + p * 9,
          len: 120 + p * 240,
          speed: 0.3 + p * 1.3,
          phase: Math.random() * Math.PI * 2,
          // Scattered glints make the sun's path shimmer instead of reading
          // as one solid stripe.
          glints: Array.from({ length: 3 + Math.round(p * 6) }, () => ({
            off: Math.random() * 2 - 1,
            len: 0.12 + Math.random() * 0.4,
            phase: Math.random() * Math.PI * 2,
          })),
        };
      });
    }

    function draw() {
      const { horizon, sandTop, sunX, sunR } = layout();

      /* On arrival the sun sits just under the waterline and climbs out of
         it, taking the whole scene's brightness up with it. Once it lands it
         holds there — this only plays once, on load. */
      const lift = reduced ? 1 : easeOutCubic(Math.min(t / RISE_SECONDS, 1));
      const bright = 0.4 + 0.6 * lift;
      // Starts with a sliver showing above the water and climbs well clear
      // of the horizon.
      const sunY = horizon + sunR * 0.75 - sunR * 4.75 * lift;

      // Sky: deep navy overhead warming towards the horizon as the sun climbs.
      const sky = ctx.createLinearGradient(0, 0, 0, horizon);
      sky.addColorStop(0, `rgb(${mix(9, 28, lift)}, ${mix(13, 40, lift)}, ${mix(21, 70, lift)})`);
      sky.addColorStop(
        0.62,
        `rgb(${mix(14, 62, lift)}, ${mix(19, 80, lift)}, ${mix(28, 116, lift)})`
      );
      sky.addColorStop(
        1,
        `rgb(${mix(20, 168, lift)}, ${mix(17, 134, lift)}, ${mix(11, 82, lift)})`
      );
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, w, horizon);

      // Stars, fading as they near the horizon and as the sky brightens.
      stars.forEach(s => {
        const twinkle = 0.35 + 0.35 * Math.sin(t * s.speed + s.phase);
        ctx.globalAlpha = twinkle * (1 - s.y / horizon) * 1.1 * (1 - 0.4 * lift);
        ctx.fillStyle = '#E8EAF0';
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      // Sun glow, then the disc itself.
      const glow = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, sunR * 6);
      glow.addColorStop(0, `rgba(226, 193, 104, ${0.55 * bright})`);
      glow.addColorStop(0.35, `rgba(201, 168, 76, ${0.22 * bright})`);
      glow.addColorStop(0.7, `rgba(201, 168, 76, ${0.07 * bright})`);
      glow.addColorStop(1, 'rgba(201, 168, 76, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(sunX - sunR * 6, sunY - sunR * 6, sunR * 12, sunR * 12);

      ctx.fillStyle = `rgb(${mix(201, 240, lift)}, ${mix(168, 214, lift)}, ${mix(76, 130, lift)})`;
      ctx.globalAlpha = 0.85 * (0.6 + 0.4 * lift);
      ctx.beginPath();
      ctx.arc(sunX, sunY, sunR, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;

      // Sea.
      const sea = ctx.createLinearGradient(0, horizon, 0, sandTop);
      sea.addColorStop(0, `rgb(${mix(16, 58, lift)}, ${mix(26, 86, lift)}, ${mix(44, 132, lift)})`);
      sea.addColorStop(1, `rgb(${mix(8, 22, lift)}, ${mix(13, 38, lift)}, ${mix(23, 68, lift)})`);
      ctx.fillStyle = sea;
      ctx.fillRect(0, horizon, w, sandTop - horizon);

      // Wave bands. Spacing is eased so they bunch up near the horizon,
      // which is what sells the depth.
      bands.forEach(band => {
        const y = horizon + Math.pow(band.p, 1.7) * (sandTop - horizon);
        const offset = t * band.speed * 30 + band.phase;

        ctx.beginPath();
        for (let x = 0; x <= w; x += 6) {
          const yy = y + Math.sin((x + offset) / band.len * Math.PI * 2) * band.amp;
          if (x === 0) ctx.moveTo(x, yy);
          else ctx.lineTo(x, yy);
        }
        // Tinted close to the water itself so the ripples read as texture
        // rather than as pale blue lines drawn across it, and tapered out
        // near the shore so nothing ends on a hard edge.
        ctx.strokeStyle = `rgb(${mix(28, 70, lift)}, ${mix(44, 100, lift)}, ${mix(68, 146, lift)})`;
        ctx.globalAlpha =
          (0.05 + band.p * 0.07) *
          (0.5 + 0.5 * lift) *
          (1 - Math.pow(band.p, 3) * 0.85);
        ctx.lineWidth = 0.6 + band.p * 0.9;
        ctx.stroke();

        // The sun's reflection, drawn as scattered glints rather than a
        // continuous line so it shimmers.
        const spread = sunR * (0.6 + band.p * 4.2);
        ctx.strokeStyle = `rgb(${mix(201, 236, lift)}, ${mix(168, 206, lift)}, ${mix(76, 122, lift)})`;
        ctx.lineCap = 'round';
        band.glints.forEach(g => {
          const cx = sunX + g.off * spread + Math.sin(t * 1.3 + g.phase) * spread * 0.12;
          const half = g.len * spread * 0.4;
          ctx.globalAlpha =
            (0.85 - band.p * 0.42) *
            (0.45 + 0.55 * Math.abs(Math.sin(t * 1.7 + g.phase))) *
            bright *
            // Fade the reflection out before it reaches the sand.
            (1 - Math.pow(band.p, 2.5) * 0.9);
          ctx.lineWidth = 1.2 + band.p * 1.8;
          ctx.beginPath();
          for (let x = cx - half; x <= cx + half; x += 5) {
            const yy = y + Math.sin((x + offset) / band.len * Math.PI * 2) * band.amp;
            if (x <= cx - half) ctx.moveTo(x, yy);
            else ctx.lineTo(x, yy);
          }
          ctx.stroke();
        });
        ctx.lineCap = 'butt';
      });
      ctx.globalAlpha = 1;

      // Shoreline: the foam edge washes up the sand and slides back.
      const wash = Math.sin(t * 0.5) * h * 0.02;
      const edgeY = sandTop + wash;
      const edgeAt = x =>
        edgeY +
        Math.sin((x + t * 22) / 620 * Math.PI * 2) * 6 +
        Math.sin((x + t * 11) / 260 * Math.PI * 2) * 3;

      // Wet sand, darkest right at the waterline where it stays soaked.
      ctx.beginPath();
      ctx.moveTo(0, h);
      ctx.lineTo(0, edgeAt(0));
      for (let x = 0; x <= w; x += 8) ctx.lineTo(x, edgeAt(x));
      ctx.lineTo(w, h);
      ctx.closePath();
      const sand = ctx.createLinearGradient(0, edgeY, 0, h);
      sand.addColorStop(0, `rgb(${mix(12, 26, lift)}, ${mix(13, 27, lift)}, ${mix(16, 34, lift)})`);
      sand.addColorStop(1, `rgb(${mix(16, 38, lift)}, ${mix(17, 39, lift)}, ${mix(21, 48, lift)})`);
      ctx.fillStyle = sand;
      ctx.fill();

      ctx.globalAlpha = 1;
    }

    function step() {
      t += 0.016;
      draw();
      raf = requestAnimationFrame(step);
    }

    function start() {
      if (raf === null) raf = requestAnimationFrame(step);
    }

    function stop() {
      if (raf !== null) {
        cancelAnimationFrame(raf);
        raf = null;
      }
    }

    resize();
    seed();
    draw();
    if (!reduced) start();

    const onResize = () => {
      resize();
      seed();
      draw();
    };
    // Don't burn frames on a tab nobody is looking at.
    const onVisibility = () => {
      if (document.hidden) stop();
      else if (!reduced) start();
    };

    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibility);
    // Web fonts change the name's height, which moves the waterline.
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(onResize).catch(() => {});
    }

    return () => {
      stop();
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [reduced, heroRef, nameRef]);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}

export default function Home() {
  const heroRef = useRef(null);
  const nameRef = useRef(null);

  return (
    <div className={styles.home}>
      <BeachCanvas heroRef={heroRef} nameRef={nameRef} />

      <motion.div
        ref={heroRef}
        className={styles.hero}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <h1 ref={nameRef} className={styles.name}>{NAME}</h1>
        <p className={styles.focusLine}>{FOCUS}</p>
        <p className={styles.eduLine}>{EDU}</p>

        <div className={styles.actions}>
          <Link to="achievements" className={styles.btn}>Experience</Link>
          <Link to="projects" className={styles.btn}>View Work</Link>
        </div>
      </motion.div>
    </div>
  );
}
