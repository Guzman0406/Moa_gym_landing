/**
 * Entidad de dominio: Gym.
 * Representa el negocio central — sin acoplamiento a framework ni UI.
 */
export class Gym {
  constructor({
    name,
    slogan,
    tagline,
    address,
    cityState,
    phone,
    whatsapp,
    facebook,
    instagram,
    rating,
    reviewCount,
    membersCount,
    hoursLabel,
    hoursDetail,
    mapEmbedUrl,
    mapsLink,
  }) {
    this.name         = name;
    this.slogan       = slogan;
    this.tagline      = tagline;
    this.address      = address;
    this.cityState    = cityState;
    this.phone        = phone;
    this.whatsapp     = whatsapp;
    this.facebook     = facebook;
    this.instagram    = instagram;
    this.rating       = rating;
    this.reviewCount  = reviewCount;
    this.membersCount = membersCount;
    this.hoursLabel   = hoursLabel;
    this.hoursDetail  = hoursDetail;
    this.mapEmbedUrl  = mapEmbedUrl;
    this.mapsLink     = mapsLink;
  }
}
