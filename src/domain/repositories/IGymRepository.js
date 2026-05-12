/**
 * Interfaz (contrato) del repositorio de Gym.
 * Las implementaciones concretas viven en /infrastructure.
 */
export class IGymRepository {
  /** @returns {Promise<import('../entities/Gym').Gym>} */
  async getGym() {
    throw new Error('IGymRepository.getGym() not implemented');
  }
}
