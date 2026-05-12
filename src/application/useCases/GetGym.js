export class GetGym {
  /** @param {import('@domain/repositories/IGymRepository').IGymRepository} repo */
  constructor(repo) {
    this.repo = repo;
  }
  execute() {
    return this.repo.getGym();
  }
}
