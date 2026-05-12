export class IReviewRepository {
  /** @returns {Promise<import('../entities/Review').Review[]>} */
  async getReviews() {
    throw new Error('IReviewRepository.getReviews() not implemented');
  }
}
