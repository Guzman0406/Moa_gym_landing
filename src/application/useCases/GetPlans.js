export class GetPlans {
  constructor(repo) { this.repo = repo; }
  execute() { return this.repo.getPlans(); }
}
