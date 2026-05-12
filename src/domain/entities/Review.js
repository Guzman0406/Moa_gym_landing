/**
 * Entidad de dominio: Reseña de cliente.
 */
export class Review {
  constructor({ id, author, rating, text, date, isLocalGuide }) {
    this.id          = id;
    this.author      = author;
    this.rating      = rating;       // número 1-5
    this.text        = text;
    this.date        = date;         // string descriptivo, e.g. "Hace un año"
    this.isLocalGuide = isLocalGuide; // boolean
  }
}
