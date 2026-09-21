import { ReviewCard } from '../ui/ReviewCard';

export const ReviewsSection = ({ reviews }) => {
  return (
    <section className="w-full py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
            Misafirlerimizin Deneyimleri
          </span>
          <h2 className="font-headline-lg text-headline-lg lg:text-display-md text-primary font-serif">
            Ağızdan Ağıza Yayılan Lezzet
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews?.map((review, index) => (
            <ReviewCard key={review.id || index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};
