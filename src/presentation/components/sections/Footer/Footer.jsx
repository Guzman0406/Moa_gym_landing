import Image from 'next/image';
import { MapPin, Phone, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { NEON } from '@presentation/constants';
import styles from './Footer.module.css';

const NAV_ITEMS = [
  { id: 'inicio',      label: 'Inicio'      },
  { id: 'nosotros',    label: 'Nosotros'    },
  { id: 'suplementos', label: 'Suplementos' },
  { id: 'planes',      label: 'Membresías'  },
  { id: 'contacto',    label: 'Contacto'    },
];

export default function Footer({ gym }) {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div className={styles.inner}>
        <div className={styles.grid}>

          {/* ── Brand ────────────────────────────────────────── */}
          <div>
            <div className={styles.brand}>
              <Image
                src="/images/logo.png"
                alt="Moa Gym"
                width={120}
                height={48}
                style={{ objectFit: 'contain', objectPosition: 'left center', transform: 'scale(3.5) translateY(3px)', transformOrigin: 'left center' }}
              />
            </div>
            <p className={styles.brandDesc}>
              El mejor gym de Tuxtla Gutiérrez. Equipamiento premium, precios justos y resultados reales.
            </p>
            <div className={styles.social}>
              {[
                { icon: Facebook,       href: gym.facebook,                              label: 'Facebook'  },
                { icon: Instagram,      href: gym.instagram,                             label: 'Instagram' },
                { icon: MessageCircle,  href: `https://wa.me/${gym.whatsapp}`,           label: 'WhatsApp'  },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={styles.socialLink}
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}
                >
                  <Icon size={16} color="rgba(255,255,255,0.55)" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Navegación ───────────────────────────────────── */}
          <div>
            <h4 className={[styles.colTitle, 'bc'].join(' ')}>Navegación</h4>
            <nav>
              {NAV_ITEMS.map(({ id, label }) => (
                <a key={id} href={`#${id}`} className={styles.navLink}>
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* ── Contacto ─────────────────────────────────────── */}
          <div>
            <h4 className={[styles.colTitle, 'bc'].join(' ')}>Contacto</h4>
            <div className={styles.contactList}>
              <div className={styles.contactRow}>
                <MapPin size={15} color="rgba(255,255,255,0.30)" />
                <span>{gym.address}, Hidalgo, {gym.cityState}</span>
              </div>
              <div className={styles.contactRow}>
                <Phone size={15} color="rgba(255,255,255,0.30)" />
                <a href={`tel:${gym.phone.replace(/\s/g, '')}`} className={styles.contactLink}>
                  {gym.phone}
                </a>
              </div>
              <div className={styles.contactRow}>
                <Clock size={15} color="rgba(255,255,255,0.30)" />
                <span>Lun–Sáb: 6:00 AM – 10:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* ── Copyright ────────────────────────────────────────── */}
        <div className={styles.bottom}>
          <p>© {year} Moa Gym. Todos los derechos reservados.</p>
          <p>Tuxtla Gutiérrez, Chiapas · México</p>
        </div>
      </div>
    </footer>
  );
}
