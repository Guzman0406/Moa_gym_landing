'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Flame, Star } from 'lucide-react';
import { NEON, HERO_IMG } from '@presentation/constants';
import styles from './Hero.module.css';

/* Variantes de animación */
const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 40 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function Hero({ gym }) {
  return (
    <section id="inicio" className={styles.hero}>

      {/* ── Foto de fondo ─────────────────────────────────────── */}
      <div className={styles.bgWrap}>
        {/*
         * FOTO REAL: cuando llegue la foto de la mujer entrenando,
         * reemplaza HERO_IMG por '/images/hero-bg.jpg'
         */}
        <Image
          src={HERO_IMG}
          alt="Moa Gym"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
        />
        {/* Overlay oscuro */}
        <div className={styles.overlay} />
        {/* Glow verde inferior-izquierdo */}
        <div
          className={styles.glow}
          style={{ background: `radial-gradient(circle, ${NEON}, transparent 70%)` }}
        />
      </div>

      {/* ── Contenido ─────────────────────────────────────────── */}
      <div className={styles.inner}>
        <div className={styles.content}>

          {/* Pill de ubicación */}
          <motion.div {...fadeUp(0.1)}>
            <span
              className={styles.pill}
              style={{ borderColor: `${NEON}60`, color: NEON, background: `${NEON}10` }}
            >
              <Flame size={12} />
              Tuxtla Gutiérrez, Chiapas
            </span>
          </motion.div>

          {/* Heading masivo — Barlow Condensed 900 */}
          <motion.h1 {...fadeUp(0.2)} className={[styles.heading, 'bc'].join(' ')}>
            IMPOSSIBLE<br />
            IS{' '}
            <em className={styles.accent}>NOTHING.</em>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p {...fadeUp(0.35)} className={styles.sub}>
            {gym.tagline}
          </motion.p>

          {/* Prueba social */}
          <motion.div {...fadeUp(0.45)} className={styles.social}>
            <div className={styles.avatars} aria-hidden="true">
              <span className={styles.av}>A</span>
              <span className={styles.av}>B</span>
              <span className={styles.av}>C</span>
            </div>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill={NEON} stroke="none" />
              ))}
            </div>
            <span className={styles.socialText}>
              {gym.rating} · +{gym.membersCount} miembros activos
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div {...fadeUp(0.55)} className={styles.actions}>
            <motion.button
              className={[styles.btnPrimary, 'bc'].join(' ')}
              style={{ background: NEON, color: '#000' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => document.getElementById('planes')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Membresías
              <ArrowRight size={16} />
            </motion.button>

            <motion.button
              className={[styles.btnOutline, 'bc'].join(' ')}
              whileHover={{ borderColor: NEON, color: NEON }}
              whileTap={{ scale: 0.96 }}
              onClick={() => document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conoce el Gym
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className={styles.scrollHint}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <span className={[styles.scrollLabel, 'bc'].join(' ')}>Scroll</span>
        <ChevronDown size={18} color="rgba(255,255,255,0.3)" />
      </motion.div>
    </section>
  );
}
