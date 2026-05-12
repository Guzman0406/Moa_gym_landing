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
              <span className={styles.cardHint}>Escríbenos →</span>
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

          {/* Mapa + Rating integrado */}
          <div className={styles.rightCol}>
            <FadeIn delay={0.1}>
              <div className={styles.infoCard}
                style={{ background: '#111', border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden', padding: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
                {/* Header */}
                <div style={{ padding: '1.25rem 1.5rem 0.75rem' }}>
                  <div className={styles.infoHeader} style={{ marginBottom: '0.25rem' }}>
                    <div className={styles.infoIcon} style={{ background: `${NEON}20` }}>
                      <MapPin size={18} style={{ color: NEON }} />
                    </div>
                    <h3 className={[styles.infoTitle, 'bc'].join(' ')}>UBICACIÓN</h3>
                  </div>
                  <p className={styles.address} style={{ margin: '0 0 0.75rem' }}>
                    {gym.address}<br />{gym.cityState}
                  </p>
                </div>
                {/* Mapa */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.3763723436423!2d-93.09965389999999!3d16.7579402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd9004115ae23%3A0xc05e83511edd533e!2sMoa!5e0!3m2!1ses-419!2smx!4v1778564703087!5m2!1ses-419!2smx"
                  width="100%"
                  height="220"
                  style={{ border: 0, display: 'block', filter: 'grayscale(20%) contrast(1.05)', flexShrink: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Moa Gym"
                />
                {/* Rating strip */}
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '1rem 1.5rem',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  marginTop: 'auto',
                }}>
                  <div>
                    <div className={styles.ratingRow}>
                      <span className={[styles.ratingNum, 'bc'].join(' ')} style={{ color: NEON, fontSize: '1.8rem' }}>
                        {gym.rating}
                      </span>
                      <div className={styles.ratingStars}>
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={13} fill={NEON} stroke="none" />
                        ))}
                      </div>
                    </div>
                    <p className={styles.ratingLabel}>Calificación en Google Maps</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p className={[styles.ratingCount, 'bc'].join(' ')} style={{ fontSize: '1.4rem', margin: '0 0 0.15rem' }}>{gym.reviewCount}+</p>
                    <p className={styles.ratingLabel}>reseñas verificadas</p>
                  </div>
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
