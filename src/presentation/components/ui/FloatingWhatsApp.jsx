'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { NEON } from '@presentation/constants';

export default function FloatingWhatsApp({ whatsapp }) {
  const href = `https://wa.me/${whatsapp}?text=Hola%2C%20me%20interesa%20una%20membres%C3%ADa%20en%20Moa%20Gym`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="bc"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.95 }}
      style={{
        position:       'fixed',
        bottom:         '1.5rem',
        right:          '1.5rem',
        zIndex:         200,
        display:        'flex',
        alignItems:     'center',
        gap:            '0.5rem',
        padding:        '0.75rem 1.25rem',
        borderRadius:   '999px',
        background:     NEON,
        color:          '#000',
        fontWeight:     800,
        fontSize:       '0.8rem',
        letterSpacing:  '0.06em',
        textTransform:  'uppercase',
        boxShadow:      `0 4px 24px rgba(204,255,0,0.50)`,
        textDecoration: 'none',
      }}
    >
      <MessageCircle size={18} />
      <span className="hidden-mobile">¡Únete!</span>
    </motion.a>
  );
}
