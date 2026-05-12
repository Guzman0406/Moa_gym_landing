/** @param {import('@domain/entities/Review').Review[]} reviews */
export function toReviewViewModels(reviews) {
  return reviews.map((r) => ({
    id:           r.id,
    author:       r.author,
    rating:       r.rating,
    text:         r.text,
    date:         r.date,
    isLocalGuide: r.isLocalGuide,
  }));
}
