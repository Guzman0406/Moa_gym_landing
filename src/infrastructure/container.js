/**
 * Composition Root / DI Container.
 *
 * Único punto donde las capas superiores conocen las implementaciones concretas.
 * Cambiar de InMemory a un repo HTTP/CMS se hace solo aquí.
 */
import { InMemoryGymRepository }        from './repositories/InMemoryGymRepository';
import { InMemoryPlanRepository }       from './repositories/InMemoryPlanRepository';
import { InMemorySupplementRepository } from './repositories/InMemorySupplementRepository';
import { InMemoryReviewRepository }     from './repositories/InMemoryReviewRepository';

import { GetGym }         from '@application/useCases/GetGym';
import { GetPlans }       from '@application/useCases/GetPlans';
import { GetSupplements } from '@application/useCases/GetSupplements';
import { GetReviews }     from '@application/useCases/GetReviews';

const gymRepo        = new InMemoryGymRepository();
const planRepo       = new InMemoryPlanRepository();
const supplementRepo = new InMemorySupplementRepository();
const reviewRepo     = new InMemoryReviewRepository();

export const container = {
  getGym:         new GetGym(gymRepo),
  getPlans:       new GetPlans(planRepo),
  getSupplements: new GetSupplements(supplementRepo),
  getReviews:     new GetReviews(reviewRepo),
};
