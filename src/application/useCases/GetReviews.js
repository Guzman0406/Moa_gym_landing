export class GetReviews {
  constructor(repo) { this.repo = repo; }
  execute() { return this.repo.getReviews(); }
}
