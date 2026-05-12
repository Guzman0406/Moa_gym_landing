/**
 * Entidad de dominio: Plan de membresía.
 */
export class Plan {
  constructor({ id, name, price, period, features, highlighted, ctaLabel, savings }) {
    this.id          = id;
    this.name        = name;
    this.price       = price;       // string, e.g. "450" | "1,200"
    this.period      = period;      // e.g. "/ mes" | "/ 3 meses" | "/ año"
    this.features    = features;    // string[]
    this.highlighted = highlighted; // boolean — resaltado visualmente
    this.ctaLabel    = ctaLabel;
    this.savings     = savings;     // string | null — e.g. "Ahorra $150 vs mensual"
  }
}
