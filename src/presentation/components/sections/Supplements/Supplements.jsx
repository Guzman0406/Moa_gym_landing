'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import FadeIn from '@presentation/components/ui/FadeIn';
import SectionHeading from '@presentation/components/ui/SectionHeading';
import { NEON } from '@presentation/constants';
import styles from './Supplements.module.css';

export default function Supplements({ supplements }) {
  return (
    <section id="suplementos" style={{ background: '#000', padding: '7rem 0' }}>
      <div className={styles.inner}>

        <SectionHeading
          eyebrow="Tienda interna"
          title="SUPLEMENTOS"
          highlight="PREMIUM"
          sub="Disponibles en mostrador. Calidad comprobada, precios directos al consumidor."
        />

        <div className={styles.grid}>
          {supplements.map((s, idx) => (
            <FadeIn key={s.id} delay={idx * 0.12}>
              <motion.article
                className={styles.card}
                style={{ background: '#111', border: '1px solid rgba(255,255,255,0.08)' }}
                whileHover={{
                  y:         -8,
                  boxShadow: `0 20px 60px ${NEON}20`,
                  borderColor: `${NEON}30`,
                }}
                transition={{ duration: 0.25 }}
              >
                {/* Imagen */}
                <div className={styles.imageWrap}>
                  <Image
                    src={s.imageUrl}
                    alt={s.name}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.5s' }}
                    sizes="(max-width:900px) 100vw, 33vw"
                    className={styles.img}
                  />
                  <div className={styles.imageOverlay} />

                  {/* Tag */}
                  <span
                    className={[styles.tag, 'bc'].join(' ')}
                    style={{ background: NEON, color: '#000' }}
                  >
                    {s.tag || s.category}
                  </span>
                </div>

                {/* Info */}
                <div className={styles.info}>
                  <h3 className={[styles.name, 'bc'].join(' ')}>{s.name}</h3>
                  <p className={styles.desc}>{s.description}</p>

                  {/* Macro pills */}
                  {s.macros && (
                    <div className={styles.macros}>
                      {s.macros.map((m, i) => (
                        <span
                          key={i}
                          className={styles.macroPill}
                          style={{ background: `${NEON}15`, color: NEON, border: `1px solid ${NEON}30` }}
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className={styles.footer}>
                    <div>
                      <span className={[styles.price, 'bc'].join(' ')} style={{ color: NEON }}>
                        {s.price}
                      </span>
                      {s.currency && (
                        <span className={styles.currency}>{s.currency}</span>
                      )}
                    </div>
                    <motion.a
                      href={`https://wa.me/529611880759?text=Hola%2C%20quiero%20info%20sobre%20${encodeURIComponent(s.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={[styles.ctaBtn, 'bc'].join(' ')}
                      style={{ background: `${NEON}20`, color: NEON, border: `1px solid ${NEON}40` }}
                      whileHover={{ scale: 1.05 }}
                    >
                      Pedir
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>

        <p className={styles.note}>
          * Precios e inventario sujetos a cambio. Contáctanos para disponibilidad.
        </p>
      </div>
    </section>
  );
}
