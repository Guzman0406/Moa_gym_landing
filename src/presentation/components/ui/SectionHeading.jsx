import { Zap } from 'lucide-react';
import { NEON } from '@presentation/constants';
import FadeIn from './FadeIn';
import styles from './SectionHeading.module.css';

export default function SectionHeading({ eyebrow, title, highlight, sub }) {
  return (
    <FadeIn className={styles.wrap}>
      {eyebrow && (
        <span className={styles.eyebrow} style={{ borderColor: `${NEON}50`, color: NEON, background: `${NEON}12` }}>
          <Zap size={12} />
          {eyebrow}
        </span>
      )}
      <h2 className={[styles.title, 'bc'].join(' ')}>
        {title}{' '}
        {highlight && <span style={{ color: NEON }}>{highlight}</span>}
      </h2>
      {sub && <p className={styles.sub}>{sub}</p>}
    </FadeIn>
  );
}
