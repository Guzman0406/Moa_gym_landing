'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Users, TrendingUp, Shield, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import FadeIn from '@presentation/components/ui/FadeIn';
import SectionHeading from '@presentation/components/ui/SectionHeading';
import { NEON } from '@presentation/constants';
import styles from './WhyUs.module.css';

const FEATURES = [
  {
    icon: Target,
    title: 'Equipamiento Completo',
    desc: 'Discos, mancuernas, máquinas funcionales y zona cardio. Todo lo que necesitas en un solo lugar.',
  },
  {
    icon: Users,
    title: 'Comunidad Real',
    desc: 'Más de 100 miembros que se entrenan, motivan y crecen juntos. Aquí no estás solo.',
  },
  {
    icon: TrendingUp,
    title: 'Asesoría Personalizada',
    desc: 'Entrenadores que diseñan tu plan según tus objetivos. Sin plantillas genéricas.',
  },
  {
    icon: Shield,
    title: 'Precio Justo',
    desc: 'La mejor relación calidad-precio en Tuxtla. Gimnasio premium sin costos inflados.',
  },
];

/* Dirección de la animación de slides */
const slideVariants = {
  enter:  (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit:   (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
};

/* ── Carrusel de fotos del gym ───────────────────────────────────── */
function GymCarousel({ photos, gym }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  /* Auto-advance cada 4 s si hay más de una foto */
  useEffect(() => {
    if (photos.length <= 1) return;
    const id = setInterval(() => {
      setDirection(1);
      setCurrent((i) => (i + 1) % photos.length);
    }, 4000);
    return () => clearInterval(id);
  }, [photos.length]);

  const go = (dir) => {
    setDirection(dir);
    setCurrent((i) => (i + dir + photos.length) % photos.length);
  };

  return (
    <div className={styles.carouselWrap}>
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={styles.slide}
        >
          <Image
            src={photos[current]}
            alt={`Moa Gym foto ${current + 1}`}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width:900px) 100vw, 50vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay degradado */}
      <div className={styles.imageOverlay} />

      {/* Botones prev / next */}
      {photos.length > 1 && (
        <>
          <button
            className={styles.navBtn}
            style={{ left: '0.75rem' }}
            onClick={() => go(-1)}
            aria-label="Foto anterior"
          >
            <ChevronLeft size={18} color="#fff" />
          </button>
          <button
            className={styles.navBtn}
            style={{ right: '0.75rem' }}
            onClick={() => go(1)}
            aria-label="Foto siguiente"
          >
            <ChevronRight size={18} color="#fff" />
          </button>

          {/* Dots */}
          <div className={styles.dots}>
            {photos.map((_, i) => (
              <button
                key={i}
                className={styles.dot}
                style={{
                  background: i === current ? NEON : 'rgba(255,255,255,0.35)',
                  width:      i === current ? '20px' : '6px',
                }}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                aria-label={`Foto ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {/* Tarjeta de dirección */}
      <div
        className={styles.addressCard}
        style={{ background: 'rgba(0,0,0,0.75)', border: '1px solid rgba(255,255,255,0.10)' }}
      >
        <div className={styles.addressIcon} style={{ background: NEON }}>
          <MapPin size={18} color="#000" />
        </div>
        <div>
          <p className={styles.addressTitle}>{gym?.address}</p>
          <p className={styles.addressSub}>{gym?.cityState}</p>
        </div>
      </div>
    </div>
  );
}

/* ── WhyUs ───────────────────────────────────────────────────────── */
export default function WhyUs({ gym, photos }) {
  return (
    <section id="nosotros" style={{ background: '#0A0A0A', padding: '7rem 0' }}>
      <div className={styles.inner}>

        <SectionHeading
          eyebrow="¿Por qué Moa?"
          title="UN GYM PENSADO PARA"
          highlight="RESULTADOS"
          sub="No somos una franquicia. Somos un espacio donde cada peso, cada máquina y cada asesoría está diseñada para que crezcas."
        />

        <div className={styles.grid}>

          {/* Carrusel de fotos */}
          <FadeIn>
            <GymCarousel photos={photos} gym={gym} />
          </FadeIn>

          {/* Feature cards */}
          <div className={styles.features}>
            {FEATURES.map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  className={styles.feature}
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                  whileHover={{ scale: 1.02, borderColor: `${NEON}30` }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className={styles.iconWrap}
                    style={{ background: `${NEON}20` }}
                    whileHover={{ background: NEON }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon size={20} style={{ color: NEON }} />
                  </motion.div>
                  <div>
                    <h3 className={[styles.featureTitle, 'bc'].join(' ')}>{title}</h3>
                    <p className={styles.featureDesc}>{desc}</p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
