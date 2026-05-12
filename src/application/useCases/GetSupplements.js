export class GetSupplements {
  constructor(repo) { this.repo = repo; }
  execute() { return this.repo.getSupplements(); }
}
