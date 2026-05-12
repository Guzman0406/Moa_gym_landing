import { Plan } from '@domain/entities/Plan';
import { PLANS_DATA } from '../data/plans.data';

export class InMemoryPlanRepository {
  async getPlans() {
    return PLANS_DATA.map((d) => new Plan(d));
  }
}
