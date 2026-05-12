/**
 * Convierte entidades de dominio en ViewModels (plain objects serializables).
 * Estos DTOs son los únicos que cruzan el límite Server → Client en Next.js.
 */

/** @param {import('@domain/entities/Gym').Gym} gym */
export function toGymViewModel(gym) {
  return {
    name:         gym.name,
    slogan:       gym.slogan,
    tagline:      gym.tagline,
    address:      gym.address,
    cityState:    gym.cityState,
    phone:        gym.phone,
    whatsapp:     gym.whatsapp,
    facebook:     gym.facebook,
    instagram:    gym.instagram,
    rating:       gym.rating,
    reviewCount:  gym.reviewCount,
    membersCount: gym.membersCount,
    hoursLabel:   gym.hoursLabel,
    hoursDetail:  gym.hoursDetail,
    mapEmbedUrl:  gym.mapEmbedUrl,
    mapsLink:     gym.mapsLink,
  };
}

/** @param {import('@domain/entities/Plan').Plan[]} plans */
export function toPlanViewModels(plans) {
  return plans.map((p) => ({
    id:          p.id,
    name:        p.name,
    price:       p.price,
    period:      p.period,
    features:    p.features,
    highlighted: p.highlighted,
    ctaLabel:    p.ctaLabel,
    savings:     p.savings ?? null,
  }));
}

/** @param {import('@domain/entities/Supplement').Supplement[]} supplements */
export function toSupplementViewModels(supplements) {
  return supplements.map((s) => ({
    id:          s.id,
    name:        s.name,
    brand:       s.brand,
    description: s.description,
    price:       s.price,
    currency:    s.currency ?? null,
    imageUrl:    s.imageUrl,
    category:    s.category,
    tag:         s.tag ?? null,
    macros:      s.macros ?? null,
  }));
}
