import { Anton, Barlow_Condensed, Barlow } from 'next/font/google';
import './globals.css';

/* ── Anton — solo para el heading masivo del hero ────────────────── */
const anton = Anton({
  subsets:  ['latin'],
  weight:   '400',
  variable: '--font-anton',
  display:  'swap',
});

/* ── Barlow Condensed — headings, nav, botones ───────────────────── */
const barlowCondensed = Barlow_Condensed({
  subsets:  ['latin'],
  weight:   ['400', '600', '700', '800', '900'],
  style:    ['normal', 'italic'],
  variable: '--font-bc',
  display:  'swap',
});

/* ── Barlow — cuerpo de texto ────────────────────────────────────── */
const barlow = Barlow({
  subsets:  ['latin'],
  weight:   ['300', '400', '500', '600'],
  variable: '--font-barlow',
  display:  'swap',
});

export const metadata = {
  title:       'Moa Gym — Tuxtla Gutiérrez',
  description: 'El gym más completo de Tuxtla. Equipamiento premium, asesoría real y una comunidad que te impulsa a ser mejor cada día.',
};

export default function RootLayout({ children }) {
  const fontVars = [
    anton.variable,
    barlowCondensed.variable,
    barlow.variable,
  ].join(' ');

  return (
    <html lang="es" className={fontVars}>
      <body>{children}</body>
    </html>
  );
}
