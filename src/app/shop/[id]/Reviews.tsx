'use client';

import Pagination from '../pagination';
import Stars from './Stars';

export default function Reviews({ rating = 4.6 }: { rating?: number }) {
  return (
    <section id="reviews" className="mt-14">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-[#1B3C53]">Customer Reviews</h2>
          <div className="mt-1 flex items-center gap-2">
            <Stars value={rating} />
            <span className="text-sm text-[#1B3C53]">{rating} average</span>
          </div>
        </div>
        <button className="self-start md:self-auto inline-flex items-center justify-center px-4 py-2 rounded-md bg-white text-[#1B3C53] border border-[#456882]/40 hover:bg-[#F9F3EF] font-semibold transition-colors">
          Write a Review
        </button>
      </div>

      <div className="mt-6 grid gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <article key={i} className="p-4 rounded-md bg-[#F9F3EF]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#D2C1B6]" />
                <div>
                  <p className="text-sm font-semibold text-[#1B3C53]">Reviewer {i + 1}</p>
                  <Stars value={4.0 - i * 0.5} />
                </div>
              </div>
              <span className="text-xs text-[#1B3C53]/70">Verified Purchase</span>
            </div>
            <p className="mt-3 text-sm text-[#333333]">
              Excellent performance and build quality. Battery lasts all day. Highly recommend for professionals.
            </p>
          </article>
        ))}
      </div>

      <div className="mt-6">
        <Pagination currentPage={1} totalPages={3} onPageChange={() => {}} />
      </div>
    </section>
  );
}
