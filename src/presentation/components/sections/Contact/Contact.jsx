'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Phone, Facebook, Instagram, MapPin, Clock, ArrowRight, Star } from 'lucide-react';
import FadeIn from '@presentation/components/ui/FadeIn';
import SectionHeading from '@presentation/components/ui/SectionHeading';
import { NEON } from '@presentation/constants';
import styles from './Contact.module.css';

export default function Contact({ gym }) {
  const waLink = `https://wa.me/${gym.whatsapp}?text=Hola%2C%20me%20interesa%20una%20membres%C3%ADa%20en%20Moa%20Gym`;

  return (
    <section id="contacto" style={{ background: '#000', padding: '7rem 0' }}>
      <div className={styles.inner}>

        <SectionHeading
          eyebrow="Hablemos"
          title="¿LISTO PARA"
          highlight="EMPEZAR?"
          sub="Contáctanos por cualquier canal. Te respondemos rápido y sin rodeos."
        />

        {/* ── Tarjetas de contacto ─────────────────────────────── */}
        <div className={styles.contactGrid}>

          {/* WhatsApp — CTA principal */}
          <FadeIn delay={0}>
            <motion.a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardPrimary}
              style={{ background: '#111', border: '1px solid rgba(255,255,255,0.08)' }}
              whileHover={{ y: -6, boxShadow: `0 16px 50px ${NEON}40`, borderColor: `${NEON}60` }}
            >
              <div className={styles.cardIcon} style={{ background: NEON }}>
                <MessageCircle size={26} color="#000" />
              </div>
              <span className={styles.cardLabel}>WhatsApp</span>
              <p className={[styles.cardValue, 'bc'].join(' ')}>{gym.phone}</p>
              <span className={styles.cardCta} style={{ background: `${NEON}20`, color: NEON }}>
                Escríbenos →
              </span>
            </motion.a>
          </FadeIn>

          {/* Teléfono */}
          <FadeIn delay={0.1}>
            <motion.a
              href={`tel:${gym.phone.replace(/\s/g, '')}`}
              className={styles.cardSecondary}
              style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,0.08)' }}
              whileHover={{ y: -6, boxShadow: `0 16px 50px ${NEON}40`, borderColor: `${NEON}60` }}
            >
              <div className={styles.cardIcon} style={{ background: 'rgba(255,255,255,0.07)' }}>
                <Phone size={26} style={{ color: NEON }} />
              </div>
              <span className={styles.cardLabel}>Teléfono</span>
              <p className={[styles.cardValue, 'bc'].join(' ')}>{gym.phone}</p>
              <span className={styles.cardHint}>Llamar ahora</span>
            </motion.a>
          </FadeIn>

          {/* Facebook */}
          <FadeIn delay={0.2}>
            <motion.a
              href={gym.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardSecondary}
              style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,0.08)' }}
              whileHover={{ y: -6, boxShadow: `0 16px 50px ${NEON}40`, borderColor: `${NEON}60` }}
            >
              <div className={styles.cardIcon} style={{ background: 'rgba(255,255,255,0.07)' }}>
                <Facebook size={26} style={{ color: NEON }} />
              </div>
              <span className={styles.cardLabel}>Facebook</span>
              <p className={[styles.cardValue, 'bc'].join(' ')}>Moa Gym</p>
              <span className={styles.cardHint}>Seguir página</span>
            </motion.a>
          </FadeIn>

          {/* Instagram */}
          <FadeIn delay={0.3}>
            <motion.a
              href="https://www.instagram.com/moagym/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardSecondary}
              style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,0.08)' }}
              whileHover={{ y: -6, boxShadow: `0 16px 50px ${NEON}40`, borderColor: `${NEON}60` }}
            >
              <div className={styles.cardIcon} style={{ background: 'rgba(255,255,255,0.07)' }}>
                <Instagram size={26} style={{ color: NEON }} />
              </div>
              <span className={styles.cardLabel}>Instagram</span>
              <p className={[styles.cardValue, 'bc'].join(' ')}>@moagym</p>
              <span className={styles.cardHint}>Seguir perfil</span>
            </motion.a>
          </FadeIn>
        </div>

        {/* ── Info: horario + mapa + rating ───────────────────── */}
        <div className={styles.infoGrid}>

          {/* Horario */}
          <FadeIn>
            <div className={styles.infoCard}
              style={{ background: '#111', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className={styles.infoHeader}>
                <div className={styles.infoIcon} style={{ background: `${NEON}20` }}>
                  <Clock size={18} style={{ color: NEON }} />
                </div>
                <h3 className={[styles.infoTitle, 'bc'].join(' ')}>HORARIOS</h3>
              </div>
              <ul className={styles.hoursList}>
                {gym.hoursDetail.map((h) => (
                  <li key={h.d} className={styles.hour}
                    style={{ background: 'rgba(255,255,255,0.04)' }}>
                    <span className={styles.hourDay}>{h.d}</span>
                    <span className={styles.hourTime} style={{ color: NEON }}>{h.h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Dirección + Rating */}
          <div className={styles.rightCol}>
            <FadeIn delay={0.1}>
              <div className={styles.infoCard}
                style={{ background: '#111', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className={styles.infoHeader}>
                  <div className={styles.infoIcon} style={{ background: `${NEON}20` }}>
                    <MapPin size={18} style={{ color: NEON }} />
                  </div>
                  <h3 className={[styles.infoTitle, 'bc'].join(' ')}>DIRECCIÓN</h3>
                </div>
                <p className={styles.address}>{gym.address}<br />{gym.cityState}</p>
                <a
                  href={gym.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={[styles.mapsLink, 'bc'].join(' ')}
                  style={{ color: NEON }}
                >
                  Abrir en Google Maps <ArrowRight size={14} />
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className={styles.ratingCard}
                style={{ background: '#111', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div>
                  <div className={styles.ratingRow}>
                    <span className={[styles.ratingNum, 'bc'].join(' ')} style={{ color: NEON }}>
                      {gym.rating}
                    </span>
                    <div className={styles.ratingStars}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill={NEON} stroke="none" />
                      ))}
                    </div>
                  </div>
                  <p className={styles.ratingLabel}>Calificación en Google Maps</p>
                </div>
                <div className={styles.ratingRight}>
                  <p className={[styles.ratingCount, 'bc'].join(' ')}>{gym.reviewCount}+</p>
                  <p className={styles.ratingLabel}>reseñas verificadas</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* ── CTA Banner final ─────────────────────────────────── */}
        <FadeIn delay={0.3}>
          <div
            className={styles.ctaBanner}
            style={{ background: `linear-gradient(135deg, ${NEON}18, ${NEON}05)`, border: `1px solid ${NEON}30` }}
          >
            <div>
              <h3 className={[styles.ctaTitle, 'bc'].join(' ')}>
                Tu primer día es{' '}
                <span style={{ color: NEON }}>HOY.</span>
              </h3>
              <p className={styles.ctaSub}>Ven directamente al gym o contáctanos para apartar tu lugar.</p>
            </div>
            <motion.a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className={[styles.ctaBtn, 'bc'].join(' ')}
              style={{ background: NEON, color: '#000' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Contactar ahora <ArrowRight size={18} />
            </motion.a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
