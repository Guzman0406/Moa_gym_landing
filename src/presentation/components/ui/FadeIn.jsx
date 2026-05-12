'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Wrapper de animación: fade-up al entrar en viewport.
 * @param {number}  delay     - segundos de retraso
 * @param {number}  y         - desplazamiento vertical inicial (px)
 * @param {string}  className - clases CSS adicionales
 */
export default function FadeIn({ children, delay = 0, y = 40, className = '' }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
