/**
 * Suplementos en venta.
 * Imágenes: Unsplash temporales — reemplazar con fotos reales en /public/images/supplements/.
 * Precios: referencia del diseño. Confirmar con el dueño.
 */

import {
  SUPP_WHEY,
  SUPP_PRE,
  SUPP_CREA,
} from '@presentation/constants';

export const SUPPLEMENTS_DATA = [
  {
    id:          'proteina-whey',
    name:        'Proteína Whey',
    brand:       'Premium',
    description: 'Alta concentración de proteína para una recuperación muscular óptima tras cada sesión.',
    price:       '$899',
    currency:    'MXN',
    tag:         'Proteína',
    imageUrl:    SUPP_WHEY,
    category:    'proteína',
    macros:      ['25g proteína', '5g carbs', '2g grasa'],
  },
  {
    id:          'pre-entreno',
    name:        'Pre-Entreno',
    brand:       'Premium',
    description: 'Energía, concentración y resistencia máxima antes de cada entrenamiento.',
    price:       '$649',
    currency:    'MXN',
    tag:         'Energía',
    imageUrl:    SUPP_PRE,
    category:    'pre-entreno',
    macros:      ['200mg cafeína', '3g beta-alanina'],
  },
  {
    id:          'creatina',
    name:        'Creatina Monohidratada',
    brand:       'Premium',
    description: 'Aumenta fuerza y rendimiento en entrenamientos de alta intensidad. Sin rellenos.',
    price:       '$449',
    currency:    'MXN',
    tag:         'Fuerza',
    imageUrl:    SUPP_CREA,
    category:    'fuerza',
    macros:      ['5g creatina', '0g azúcar'],
  },
];
