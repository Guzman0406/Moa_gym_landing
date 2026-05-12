export class ISupplementRepository {
  /** @returns {Promise<import('../entities/Supplement').Supplement[]>} */
  async getSupplements() {
    throw new Error('ISupplementRepository.getSupplements() not implemented');
  }
}
