import { Supplement } from '@domain/entities/Supplement';
import { SUPPLEMENTS_DATA } from '../data/supplements.data';

export class InMemorySupplementRepository {
  async getSupplements() {
    return SUPPLEMENTS_DATA.map((d) => new Supplement(d));
  }
}
