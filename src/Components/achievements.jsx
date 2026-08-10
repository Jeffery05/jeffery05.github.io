import { useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Blueprint from './images/New UW Blueprint Logo.jpg';
import OSFI from './images/OSFI Logo.png';
import OTPP from './images/OTPP_mark.png';
import LCT from './images/LCT Logo.png';
import FARMSA from './images/UW_FARMSA.png';
import UW from './images/UW_Logo.png';
import TMG from './images/TMG.png';
import CIBC from './images/CIBC.png';
import styles from './achievements.module.css';

/* One chronological timeline, newest first. `start` drives the ordering and
   the year markers; sides alternate purely for layout. */
const timeline = [
  {
    id: 'tmg',
    location: 'Chicago, Illinois',
    kind: 'work',
    start: '2026-06',
    org: 'TransMarket Group',
    role: 'Quantitative Trading Intern — IG Bonds',
    date: 'Jun 2026 – Aug 2026',
    current: true,
    logo: TMG,
    tagline: 'Built an arbitrage strategy that generated $10K in desk PnL, and prototyped machine learning models for relative value trading.',
  },
  {
    id: 'cibc',
    location: 'Toronto, Canada',
    kind: 'work',
    start: '2026-01',
    org: 'CIBC Capital Markets',
    role: 'Quantitative Trading Intern — Electronic FX',
    date: 'Jan 2026 – Apr 2026',
    logo: CIBC,
    tagline: 'Built kdb+/q pipelines and dashboards that guided liquidity provider routing and surfaced informed flow on the electronic FX desk.',
  },
  {
    id: 'otpp',
    location: 'Toronto, Canada',
    kind: 'work',
    start: '2025-01',
    org: "Ontario Teachers' Pension Plan",
    role: 'Global Trading Intern',
    date: 'Jan 2025 – Apr 2025',
    logo: OTPP,
    tagline: 'Cut execution slippage by ~7bps on global futures flow, and built an agentic AI trade analysis tool that placed 1st of 40+ teams.',
  },
  {
    id: 'osfi',
    location: 'Toronto, Canada',
    kind: 'work',
    start: '2024-05',
    org: 'Office of the Superintendent of Financial Institutions',
    role: 'Data Science Intern',
    date: 'May 2024 – Aug 2024',
    logo: OSFI,
    tagline: 'Moved 4,000+ regulatory metrics from Power BI to PySpark, cutting processing time 20% and saving hundreds of supervisor hours.',
  },
  {
    id: 'research',
    location: 'Waterloo, Canada',
    kind: 'work',
    start: '2025-05',
    org: 'University of Waterloo',
    role: 'ML Research Assistant',
    date: 'May 2025 – Dec 2025',
    logo: UW,
    tagline: 'Trained XGBoost models on order book and exchange flow imbalances to predict short-horizon crypto price moves.',
  },
  {
    id: 'farmsa',
    location: 'Waterloo, Canada',
    kind: 'club',
    start: '2025-05',
    org: 'UW FARMSA',
    role: 'VP Quantitative Research',
    date: 'May 2025 – Dec 2025',
    logo: FARMSA,
    tagline: 'Led 10 analysts building a delta- and vega-neutral dispersion strategy, running it live with daily P&L and Greeks re-hedging.',
  },
  {
    id: 'blueprint',
    location: 'Waterloo, Canada',
    kind: 'club',
    start: '2024-05',
    org: 'UW Blueprint',
    role: 'Software Developer',
    date: 'May 2024 – Aug 2025',
    logo: Blueprint,
    tagline: 'Built a full-stack financial literacy platform now used by 1,706 students with developmental disabilities.',
  },
  {
    id: 'lct',
    location: 'Waterloo, Canada',
    kind: 'club',
    start: '2023-09',
    org: 'Laurier Case Team',
    role: 'International Competitor',
    date: 'Sep 2023 – Present',
    logo: LCT,
    tagline: 'Competed internationally in case competitions, placing 1st at ROCA Rotterdam and JDCC.',
  },
];

const awards = [
  {
    name: 'OTPP AgentX Hackathon 2025',
    placement: '1st / 40+ teams',
    scope: 'Internal engineering challenge — agentic AI tool for trade analysis',
  },
  {
    name: 'JDCC 2025 — Digital Strategy',
    placement: '1st / 9 universities',
    scope: "Canada's largest undergraduate case competition",
  },
  {
    name: 'ROCA Rotterdam 2025',
    placement: '1st / 16 universities',
    scope: '10 countries, 6-hour case format',
  },
  {
    name: 'MIPC McGill 2025',
    placement: 'Finalist — Top 5 / 100+ teams',
    scope: 'Global biodiversity sovereign fund pitch',
  },
];

/* First year in a date range, e.g. 'Jun 2026 – Aug 2026' -> '2026'. */
function startYear(date) {
  const match = /\d{4}/.exec(date);
  return match ? match[0] : '';
}

function TimelineCard({ data, side, row }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      data-year={startYear(data.date)}
      className={[
        styles.cardWrap,
        side === 'left' ? styles.left : styles.right,
        data.kind === 'club' ? styles.club : styles.work,
      ].join(' ')}
      /* Row is explicit so vertical order is exactly chronological; the
         column comes from the class so mobile can collapse it to one. */
      style={{ gridRow: row }}
      initial={{ opacity: 0, x: side === 'left' ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {/* Connector out to the spine: a rule and a node where it meets. */}
      <span className={styles.connector} aria-hidden="true" />
      <span className={styles.node} aria-hidden="true" />

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          {data.logo ? (
            <div className={styles.logoBox}>
              <img src={data.logo} alt={data.org} />
            </div>
          ) : (
            <div className={styles.logoBadge}>{data.logoBadge}</div>
          )}
          <div className={styles.cardMeta}>
            <div className={styles.cardRole}>{data.role}</div>
            <div className={styles.cardOrg}>{data.org}</div>
            <div className={styles.cardDate}>
              {data.date}
              <span className={styles.cardLocation}>{data.location}</span>
            </div>
          </div>
          {data.current && (
            <div className={styles.cardRight}>
              <span className={styles.currentBadge}>Current</span>
            </div>
          )}
        </div>
        <p className={styles.cardTagline}>{data.tagline}</p>
      </div>
    </motion.div>
  );
}

function Spine({ markers }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div className={styles.spineContainer} ref={ref}>
      <div className={`${styles.spine} ${inView ? styles.visible : ''}`} />
      {markers.map(({ year, top }) => (
        <span key={year} className={styles.spineYear} style={{ top }}>
          {year}
        </span>
      ))}
    </div>
  );
}

function AwardCard({ award, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      className={styles.awardCard}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35, delay: index * 0.08 }}
    >
      <div className={styles.awardPlacement}>{award.placement}</div>
      <div className={styles.awardName}>{award.name}</div>
      <div className={styles.awardScope}>{award.scope}</div>
    </motion.div>
  );
}

/* Node centre, measured from the top of a card wrapper — keep in step with
   the .node / .connector offsets in the stylesheet. */
const NODE_OFFSET = 34;

/* Newest first. Ties keep their declared order. */
const ordered = [...timeline].sort((a, b) => b.start.localeCompare(a.start));

export default function Achievements() {
  const timelineRef = useRef(null);
  const [markers, setMarkers] = useState([]);

  /* Put each year marker level with the first entry that started that year,
     rather than spacing them evenly — evenly spaced labels end up sitting
     beside entries from a different year. offsetTop is a layout value, so the
     cards' entrance transforms don't skew it. */
  useLayoutEffect(() => {
    const measure = () => {
      const wrapper = timelineRef.current;
      if (!wrapper) return;
      const firstOf = new Map();
      wrapper.querySelectorAll('[data-year]').forEach(el => {
        const year = el.dataset.year;
        if (!year) return;
        const top = el.offsetTop + NODE_OFFSET;
        if (!firstOf.has(year) || top < firstOf.get(year)) firstOf.set(year, top);
      });
      setMarkers(
        [...firstOf.entries()]
          .map(([year, top]) => ({ year, top }))
          .sort((a, b) => a.top - b.top)
      );
    };

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <p className="section-title">Experience</p>

      <div className={styles.legend}>
        <span className={styles.legendItem}>
          <i className={`${styles.legendDot} ${styles.legendWork}`} aria-hidden="true" />
          Work &amp; research
        </span>
        <span className={styles.legendItem}>
          <i className={`${styles.legendDot} ${styles.legendClub}`} aria-hidden="true" />
          Clubs &amp; leadership
        </span>
      </div>

      <div className={styles.timelineWrapper} ref={timelineRef}>
        <Spine markers={markers} />
        {ordered.map((item, i) => (
          <TimelineCard
            key={item.id}
            data={item}
            side={i % 2 === 0 ? 'left' : 'right'}
            row={i + 1}
          />
        ))}
      </div>

      <div className={styles.recognition}>
        <p className="section-title">Recognition</p>
        <div className={styles.awardsGrid}>
          {awards.map((a, i) => (
            <AwardCard key={a.name} award={a} index={i} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
