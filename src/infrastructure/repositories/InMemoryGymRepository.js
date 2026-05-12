import { Gym } from '@domain/entities/Gym';
import { GYM_DATA } from '../data/gym.data';

export class InMemoryGymRepository {
  async getGym() {
    return new Gym(GYM_DATA);
  }
}
