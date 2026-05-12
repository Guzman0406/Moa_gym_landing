'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NEON } from '@presentation/constants';
import styles from './Nav.module.css';

const NAV_ITEMS = [
  { id: 'inicio',      label: 'Inicio'       },
  { id: 'nosotros',    label: 'Nosotros'     },
  { id: 'suplementos', label: 'Suplementos'  },
  { id: 'planes',      label: 'Membresías'   },
  { id: 'contacto',    label: 'Contacto'     },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Nav({ phone }) {
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [activeSection,  setActiveSection]  = useState('inicio');
  const [scrolled,       setScrolled]       = useState(false);

  /* Barra de progreso de scroll */
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  /* Detectar scroll para cambiar fondo del nav */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  /* Sección activa con IntersectionObserver */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { threshold: 0.35 }
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (id) => {
    scrollTo(id);
    setActiveSection(id);
    setMenuOpen(false);
  };

  return (
    <>
      {/* ── Barra de progreso (3px neon) ──────────────────────── */}
      <motion.div
        className={styles.progress}
        style={{ scaleX, background: NEON }}
        aria-hidden="true"
      />

      {/* ── Navbar ────────────────────────────────────────────── */}
      <header
        className={[styles.nav, scrolled ? styles.scrolled : ''].join(' ')}
        style={scrolled ? {
          background:     'rgba(0,0,0,0.82)',
          backdropFilter: 'blur(20px)',
          borderBottom:   '1px solid rgba(255,255,255,0.07)',
        } : {}}
      >
        <div className={styles.inner}>

          {/* Logo */}
          <button
            className={styles.logo}
            onClick={() => handleNav('inicio')}
            aria-label="Moa Gym — inicio"
          >
            <Image
              src="/images/logo.png"
              alt="Moa Gym"
              width={160}
              height={52}
              style={{ objectFit: 'contain', objectPosition: 'left center', transform: 'scale(3.5) translateY(3px)', transformOrigin: 'left center' }}
              priority
            />
          </button>

          {/* Links desktop */}
          <nav className={styles.links} aria-label="Navegación principal">
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNav(id)}
                className={styles.link}
                style={{ color: activeSection === id ? NEON : 'rgba(255,255,255,0.6)' }}
              >
                {activeSection === id && (
                  <motion.span
                    layoutId="nav-pill"
                    className={styles.linkBg}
                    style={{ background: `${NEON}18` }}
                  />
                )}
                {label}
              </button>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className={styles.right}>
            <button
              onClick={() => handleNav('planes')}
              className={[styles.cta, 'bc'].join(' ')}
              style={{ background: NEON, color: '#000' }}
            >
              Únete →
            </button>
          </div>

          {/* Burger */}
          <button
            className={styles.burger}
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label="Abrir menú"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="drawer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className={styles.drawer}
              style={{ background: 'rgba(0,0,0,0.97)', borderTop: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className={styles.drawerInner}>
                {NAV_ITEMS.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => handleNav(id)}
                    className={[styles.drawerLink, 'bc'].join(' ')}
                    style={{
                      color:      activeSection === id ? NEON : 'rgba(255,255,255,0.7)',
                      background: activeSection === id ? `${NEON}12` : 'transparent',
                    }}
                  >
                    {label}
                  </button>
                ))}
                <button
                  onClick={() => handleNav('planes')}
                  className={[styles.drawerCta, 'bc'].join(' ')}
                  style={{ background: NEON, color: '#000' }}
                >
                  Únete Ahora
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
