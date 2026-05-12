/**
 * Fuente de datos estática del gimnasio.
 * Cambiar cualquier valor aquí se propaga a toda la UI sin tocar componentes.
 *
 * PENDIENTE: actualizar precios/planes cuando el dueño los confirme.
 */
export const GYM_DATA = {
  name:         'Moa Gym',
  slogan:       'Los límites solo existen en la mente',
  tagline:      'Un gym completo en Tuxtla. Equipamiento de calidad, asesoría real y una comunidad que te impulsa a ser mejor cada día.',
  address:      'Calz. Ignacio Zaragoza 1830, Hidalgo',
  cityState:    '29000 Tuxtla Gutiérrez, Chiapas',
  phone:        '961 188 0759',
  whatsapp:     '529611880759',        // formato internacional sin +
  facebook:     'https://facebook.com',
  instagram:    'https://instagram.com',
  rating:       5.0,
  reviewCount:  6,
  membersCount: 100,
  hoursLabel:   'Cerrado · Abre a las 6 a.m. del mar',
  hoursDetail: [
    { d: 'Lunes',     h: '06:00 – 22:00' },
    { d: 'Martes',    h: '06:00 – 22:00' },
    { d: 'Miércoles', h: '06:00 – 22:00' },
    { d: 'Jueves',    h: '06:00 – 22:00' },
    { d: 'Viernes',   h: '06:00 – 22:00' },
    { d: 'Sábado',    h: '07:00 – 21:00' },
  ],
  mapEmbedUrl:  'https://maps.google.com/maps?q=Calz.+Ignacio+Zaragoza+1830,+Hidalgo,+Tuxtla+Gutierrez,+Chiapas,+Mexico&output=embed&z=16',
  mapsLink:     'https://maps.google.com/?q=Calz.+Ignacio+Zaragoza+1830,+Hidalgo,+Tuxtla+Gutierrez,+Chiapas',
};
