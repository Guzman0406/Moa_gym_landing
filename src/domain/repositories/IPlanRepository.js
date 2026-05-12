export class IPlanRepository {
  /** @returns {Promise<import('../entities/Plan').Plan[]>} */
  async getPlans() {
    throw new Error('IPlanRepository.getPlans() not implemented');
  }
}
