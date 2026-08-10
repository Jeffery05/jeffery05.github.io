import { motion } from 'framer-motion';
import portrait from './images/JefferyWebPhoto.JPG';
import github from './images/GitHub.png';
import devpost from './images/DevPost.jpg';
import linkedin from './images/LinkedIn.png';
import gmail from './images/Gmail Logo.png';
import styles from './about.module.css';

const skills = {
  'Programming Languages': ['Python', 'Java', 'kdb+/q', 'C++', 'SQL', 'VBA', 'R'],
  'Data & AI': [
    'Pandas', 'NumPy', 'Apache Spark (PySpark)', 'XGBoost', 'CatBoost',
    'Databricks', 'Azure', 'Linux', 'Claude', 'Bloomberg Terminal',
  ],
};

const socialLinks = [
  { href: 'https://www.linkedin.com/in/jeffery-hu/', img: linkedin, label: 'LinkedIn' },
  { href: 'mailto:jefferyhu8@gmail.com', img: gmail, label: 'Email' },
  { href: 'https://github.com/Jeffery05', img: github, label: 'GitHub' },
  {
    href: 'https://devpost.com/jeffery-hu',
    img: devpost,
    label: 'DevPost',
  },
];

export default function About() {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <p className="section-title">About</p>
      <div className={styles.about}>
        <div className={styles.hero}>
          <div className={styles.bio}>
            <h1>Jeffery Hu</h1>
            <p>
              I'm a Computer Science student at the University of Waterloo, pursuing a dual
              specialization in Artificial Intelligence and Business. Over the past two years I've
              worked across quantitative trading desks, software teams, and a research lab — trading
              corporate investment-grade bonds at TransMarket Group, building electronic FX analytics
              at CIBC, running transaction cost analysis at OTPP, and developing ML-driven crypto
              signals under the director of the Cheriton School of Computer Science. Outside of
              internships, I compete internationally in case competitions for Wilfrid Laurier, lead a
              team building a vega-neutral dispersion strategy at FARMSA, and built a financial
              literacy app used by 1,706 students with developmental disabilities at Blueprint.
            </p>
            <p>
              When I'm not coding or at a desk, I run (just finished my first half marathon!), follow
              geopolitics obsessively, and watch too many movies.
            </p>
          </div>
          <div className={styles.portrait}>
            <img src={portrait} alt="Jeffery Hu" />
          </div>
        </div>

        <div className={styles.skills}>
          <p className="section-title">Skills</p>
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className={styles.skillGroup}>
              <span className={styles.skillLabel}>{group}</span>
              <div className={styles.pills}>
                {items.map(skill => (
                  <span key={skill} className={styles.pill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <p className="section-title">Find Me</p>
          <div className={styles.social}>
            {socialLinks.map(({ href, img, label }) => (
              <a
                key={label}
                href={href}
                className={styles.socialLink}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              >
                <img src={img} alt={label} />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
