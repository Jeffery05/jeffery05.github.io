import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import pAIgeImg from './images/pAIge.png';
import InflectorImg from './images/Inflector.png';
import MeetUpImg from './images/MeetUp.png';
import SnapTimeImg from './images/SnapTime Logo.png';
import TrashDashImg from './images/TrashDash2.png';
import TrafficImg from './images/Traffic_System.jpg';
import MathBlitzImg from './images/MathBlitz.png';
import styles from './projects.module.css';

const FILTERS = ['All', 'Finance', 'Hackathon'];

const projects = [
  {
    id: 'mathblitz',
    title: 'MathBlitz',
    tech: 'TypeScript · Next.js · React · Supabase · Tailwind',
    tag: 'Finance',
    featured: true,
    desc: "Mental math trainer for quant interviews — timed drills with configurable operations and number ranges, live head-to-head races, and group leaderboards over invite codes. Installs as a PWA so it actually works on a phone.",
    img: MathBlitzImg,
    links: [
      { label: 'Website', href: 'https://jeffery-mathblitz.vercel.app/' },
    ],
  },
  {
    id: 'paige',
    title: 'pAIge',
    tech: 'Python · JavaScript · SQL · HTML/CSS',
    tag: 'Finance',
    featured: false,
    desc: "AI portfolio generator — built this when I was curious whether LLMs could read a LinkedIn profile and spit out a working website. Turns out they can.",
    img: pAIgeImg,
    links: [
      { label: 'Devpost', href: 'https://devpost.com/software/paige' },
      { label: 'GitHub', href: 'https://github.com/Jeffery05/pAIge' },
    ],
  },
  {
    id: 'inflector',
    title: 'Inflector',
    tech: 'JavaScript · HTML/CSS',
    tag: 'Finance',
    featured: false,
    desc: "Live inflation budgeting tool — built during a hackathon. Understanding CPI data differently after OSFI was a trip.",
    img: InflectorImg,
    links: [
      { label: 'Website', href: 'https://inflector.jefferyhu.me/' },
      { label: 'Devpost', href: 'https://devpost.com/software/inflector-the-inflation-projector' },
      { label: 'GitHub', href: 'https://github.com/Jeffery05/New-Ignition-Hacks' },
    ],
  },
  {
    id: 'meetup',
    title: 'Meet Up',
    tech: 'Python · JavaScript · SQL · HTML/CSS',
    tag: 'Hackathon',
    featured: false,
    desc: "Event planning platform that actually kills the 'what time works for everyone?' group chat.",
    img: MeetUpImg,
    links: [
      { label: 'Demo', href: 'https://www.youtube.com/watch?v=Sja8227G8SQ' },
      { label: 'GitHub', href: 'https://github.com/Jeffery05/MeetUp' },
    ],
  },
  {
    id: 'snaptime',
    title: 'SnapTime',
    tech: 'React.js · Node.js · SQLite',
    tag: 'Hackathon',
    featured: false,
    desc: "Picture scavenger hunt that actually gets people outside. Best hackathon project I've shipped.",
    img: SnapTimeImg,
    links: [
      { label: 'Devpost', href: 'https://devpost.com/software/snaptime' },
      { label: 'Demo', href: 'https://youtu.be/5mdBK-Gabrk' },
      { label: 'GitHub', href: 'https://github.com/snaptime-app' },
    ],
  },
  {
    id: 'trashdash',
    title: 'TrashDash',
    tech: 'Python · SQL · HTML/CSS',
    tag: 'Hackathon',
    featured: false,
    desc: "Gamified litter cleanup platform for communities. Civic tech with a leaderboard.",
    img: TrashDashImg,
    links: [
      { label: 'Devpost', href: 'https://devpost.com/software/trashdash' },
      { label: 'GitHub', href: 'https://github.com/Jeffery05/Hack-The-Valley' },
    ],
  },
  {
    id: 'traffic',
    title: 'Traffic Management System',
    tech: 'C++',
    tag: null,
    featured: false,
    desc: "Bare-metal C++ traffic light controller — full gate, streetlight, traffic light, and reset button logic.",
    img: TrafficImg,
    links: [
      { label: 'GitHub', href: 'https://github.com/Jeffery05/TrafficLight' },
    ],
  },
];

function ProjectCard({ project, featured }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  return (
    <motion.div
      ref={ref}
      className={`${styles.card} ${featured ? styles.featured : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <img className={styles.cardImg} src={project.img} alt={project.title} />
      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>{project.title}</div>
        <div className={styles.cardTech}>{project.tech}</div>
        <p className={styles.cardDesc}>{project.desc}</p>
        <div className={styles.cardLinks}>
          {project.links.map(l => (
            <a key={l.label} href={l.href} className={styles.link} target="_blank" rel="noopener noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const visible = projects.filter(p => filter === 'All' || p.tag === filter);

  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <p className="section-title">Work</p>

      <div className={styles.filterBar}>
        {FILTERS.map(f => (
          <button
            key={f}
            className={`${styles.filterBtn} ${filter === f ? styles.active : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className={styles.projectGrid}>
        <AnimatePresence>
          {visible.map(p => (
            <ProjectCard
              key={p.id}
              project={p}
              featured={p.featured && filter === 'All'}
            />
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
