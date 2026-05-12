/**
 * Planes de membresía.
 * PENDIENTE: confirmar precios con el dueño antes de publicar.
 * Referencia de precios del diseño HTML: $450/mes, $1,200/3 meses, $4,200/año.
 */
export const PLANS_DATA = [
  {
    id:          'mensual',
    name:        'Mensual',
    price:       '450',
    period:      '/ mes',
    savings:     null,
    highlighted: false,
    ctaLabel:    'Empezar ahora',
    features: [
      'Acceso a sala de pesas',
      'Equipamiento completo',
      'Acceso a locker',
      'Horario completo (16 h diarias)',
      'Comunidad Moa Gym',
    ],
  },
  {
    id:          'trimestral',
    name:        'Trimestral',
    price:       '1,200',
    period:      '/ 3 meses',
    savings:     'Ahorra $150 vs mensual',
    highlighted: true,
    ctaLabel:    'Empezar ahora',
    features: [
      'Todo lo del Plan Mensual',
      'Asesoría nutricional incluida',
      'Seguimiento de progreso',
      'Acceso ilimitado sin restricciones',
      'Evaluación física inicial',
    ],
  },
  {
    id:          'anual',
    name:        'Anual',
    price:       '4,200',
    period:      '/ año',
    savings:     'Ahorra $1,200 vs mensual',
    highlighted: false,
    ctaLabel:    'Empezar ahora',
    features: [
      'Todo lo del Plan Trimestral',
      'Descuento en suplementos (10%)',
      'Invitado gratis 1 vez/mes',
      'Acceso a clases grupales',
      'Prioridad en eventos Moa',
    ],
  },
];
