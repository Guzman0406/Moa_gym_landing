'use client';

import { motion } from 'framer-motion';
import { Check, Shield } from 'lucide-react';
import FadeIn from '@presentation/components/ui/FadeIn';
import SectionHeading from '@presentation/components/ui/SectionHeading';
import { NEON } from '@presentation/constants';
import styles from './Plans.module.css';

export default function Plans({ plans }) {
  const scrollToContact = () =>
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="planes" style={{ background: '#0A0A0A', padding: '7rem 0' }}>
      <div className={styles.inner}>

        <SectionHeading
          eyebrow="Precios claros"
          title="ELIGE TU"
          highlight="MEMBRESÍA"
          sub="Sin letras chiquitas. Sin cobros ocultos. Acceso inmediato desde el primer día."
        />

        <div className={styles.grid}>
          {plans.map((plan, idx) => (
            <FadeIn key={plan.id} delay={idx * 0.1}>
              <motion.article
                className={styles.card}
                style={{
                  background:   plan.highlighted ? '#111' : '#0D0D0D',
                  border:       plan.highlighted ? `2px solid ${NEON}` : '1px solid rgba(255,255,255,0.08)',
                  transform:    plan.highlighted ? 'scale(1.04)' : 'scale(1)',
                  boxShadow:    plan.highlighted ? `0 0 50px ${NEON}25` : 'none',
                }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
              >
                {/* "Más popular" banner */}
                {plan.highlighted && (
                  <div
                    className={[styles.popularBadge, 'bc'].join(' ')}
                    style={{ background: NEON, color: '#000' }}
                  >
                    Más popular
                  </div>
                )}

                <div className={styles.cardBody}>
                  <h3 className={[styles.planName, 'bc'].join(' ')}>
                    {plan.name}
                  </h3>

                  <div className={styles.priceRow}>
                    <span className={styles.currency}>$</span>
                    <span
                      className={[styles.price, 'bc'].join(' ')}
                      style={{ color: plan.highlighted ? NEON : '#fff' }}
                    >
                      {plan.price}
                    </span>
                  </div>
                  <p className={styles.period}>{plan.period}</p>

                  {plan.savings && (
                    <span
                      className={styles.savings}
                      style={{ background: `${NEON}20`, color: NEON }}
                    >
                      {plan.savings}
                    </span>
                  )}

                  <hr className={styles.divider} />

                  <ul className={styles.features}>
                    {plan.features.map((f, i) => (
                      <li key={i} className={styles.feature}>
                        <Check size={15} style={{ color: NEON, flexShrink: 0 }} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    onClick={scrollToContact}
                    className={[styles.cta, 'bc'].join(' ')}
                    style={{
                      background: plan.highlighted ? NEON              : 'rgba(255,255,255,0.07)',
                      color:      plan.highlighted ? '#000'            : '#fff',
                      border:     plan.highlighted ? 'none'            : '1px solid rgba(255,255,255,0.15)',
                    }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Empezar ahora →
                  </motion.button>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p className={styles.trust}>
            <Shield size={14} style={{ color: NEON }} />
            Sin contratos forzosos · Pago en efectivo o transferencia · Cancelación en cualquier momento
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
