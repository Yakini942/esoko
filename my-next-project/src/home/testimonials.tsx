import { Star } from "lucide-react";

export interface Testimonial {
  id: string;
  name: string;
  photoUrl: string;
  text: string;
  rating?: number; // 1–5
}

interface TestimonialsProps {
  heading?: string;
  testimonials: Testimonial[];
}

function Stars({ rating = 5 }: { rating?: number }) {
  const full = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <div
      className="flex items-center gap-1"
      aria-label={`${full} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < full;
        return (
          <Star
            key={i}
            className={`h-4 w-4 ${
              filled ? "text-[#456882]" : "text-[#456882]/30"
            }`}
            fill={filled ? "#456882" : "none"}
            strokeWidth={2}
          />
        );
      })}
    </div>
  );
}

export default function Testimonials({
  heading = "What Our Customers Say",
  testimonials,
}: TestimonialsProps) {
  return (
    <section className="relative bg-[#F9F3EF] py-20 px-4 sm:px-6 lg:px-8">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #D2C1B6 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B3C53] text-center mb-14 tracking-tight">
          {heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="group rounded-2xl shadow-md bg-white/80 backdrop-blur-sm border border-transparent hover:border-[#456882] hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full overflow-hidden bg-[#D2C1B6] flex-shrink-0 ring-2 ring-[#F9F3EF] group-hover:ring-[#456882] transition-colors duration-300">
                  <img
                    src={t.photoUrl}
                    alt={t.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-[#1B3C53] font-semibold">{t.name}</p>
                  <Stars rating={t.rating ?? 5} />
                </div>
              </div>
              <p className="mt-5 text-[#1B3C53]/80 leading-relaxed">
                {t.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
