'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Users, Clock, Star } from 'lucide-react';
import { NEON } from '@presentation/constants';
import styles from './FactStrip.module.css';

/* ── Hook de conteo animado con easeOutExpo ──────────────────────── */
function useCountUp(target, duration = 1400, started = false) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    // Resetear al salir de vista
    if (!started) {
      cancelAnimationFrame(rafRef.current);
      setCount(0);
      return;
    }

    const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
    const startTime   = performance.now();

    const tick = (now) => {
      const elapsed  = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(easeOutExpo(progress) * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
      else setCount(target);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration, started]);

  return count;
}

/* ── Stat individual ─────────────────────────────────────────────── */
function Stat({ icon: Icon, target, suffix, label, started, delay = 0 }) {
  const [localStarted, setLocalStarted] = useState(false);

  useEffect(() => {
    // Reset al salir de vista; re-animar al entrar
    if (!started) {
      setLocalStarted(false);
      return;
    }
    const t = setTimeout(() => setLocalStarted(true), delay);
    return () => clearTimeout(t);
  }, [started, delay]);

  const count = useCountUp(target, 1400, localStarted);

  return (
    <motion.div
      className={styles.stat}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.45, delay: delay / 1000 + 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Icon size={24} strokeWidth={1.5} color="rgba(0,0,0,0.5)" />
      <p className={[styles.value, 'bc'].join(' ')} aria-live="polite">
        {count}
        <span className={styles.suffix}>{suffix}</span>
      </p>
      <p className={[styles.label, 'bc'].join(' ')}>{label}</p>
    </motion.div>
  );
}

/* ── FactStrip ───────────────────────────────────────────────────── */
export default function FactStrip({ gym }) {
  const ref    = useRef(null);
  // once: false → re-anima cada vez que el usuario vuelve a esta sección
  const inView = useInView(ref, { once: false, amount: 0.5 });
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setStarted(inView);
  }, [inView]);

  const stats = [
    { icon: Trophy, target: 5,                suffix: '+', label: 'Años de Experiencia', delay: 0   },
    { icon: Users,  target: gym.membersCount,  suffix: '+', label: 'Miembros Activos',    delay: 100 },
    { icon: Clock,  target: 16,                suffix: 'h', label: 'Horario Diario',      delay: 200 },
    { icon: Star,   target: 5,                 suffix: '★', label: 'Calificación Google', delay: 300 },
  ];

  return (
    <section ref={ref} style={{ background: NEON }} aria-label="Datos del gimnasio">
      <div className={styles.inner}>
        {stats.map((s, i) => (
          <Stat key={i} {...s} started={started} />
        ))}
      </div>
    </section>
  );
}
