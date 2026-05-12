import { Review } from '@domain/entities/Review';
import { REVIEWS_DATA } from '../data/reviews.data';

export class InMemoryReviewRepository {
  async getReviews() {
    return REVIEWS_DATA.map((d) => new Review(d));
  }
}
