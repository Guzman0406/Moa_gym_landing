/**
 * Entidad de dominio: Suplemento en venta.
 */
export class Supplement {
  constructor({ id, name, brand, description, price, currency, imageUrl, category, tag, macros }) {
    this.id          = id;
    this.name        = name;
    this.brand       = brand;
    this.description = description;
    this.price       = price;       // string, e.g. "$899"
    this.currency    = currency;    // string, e.g. "MXN"
    this.imageUrl    = imageUrl;    // URL o ruta /public/images/supplements/
    this.category    = category;    // "proteína" | "pre-entreno" | "fuerza" | etc.
    this.tag         = tag;         // etiqueta corta para badge, e.g. "Proteína"
    this.macros      = macros;      // string[] | null, e.g. ["25g proteína", "5g carbs"]
  }
}
