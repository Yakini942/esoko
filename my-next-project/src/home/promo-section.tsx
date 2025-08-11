import React from "react";
import Link from "next/link";

export interface PromoItem {
  id: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  imageUrl?: string;
}

interface PromoSectionProps {
  promos: PromoItem[];
  heading?: string;
  background?: string;
}

export default function PromoSection({ promos, heading = "Promotions" }: PromoSectionProps) {
  return (
    <section className="relative bg-[#F9F3EF] py-12 px-4 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #D2C1B6 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative max-w-7xl mx-auto">
  <h2 className="text-3xl font-bold text-[#1B3C53] text-center mb-12">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {promos.map((promo) => (
            <div key={promo.id} className="bg-white/20 backdrop-blur-lg rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
              {promo.imageUrl && (
                <img src={promo.imageUrl} alt={promo.title} className="w-full h-32 object-cover" />
              )}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="font-semibold text-lg text-gray-700 mb-1">{promo.title}</div>
                  {promo.subtitle && <div className="text-sm text-gray-500 mb-2">{promo.subtitle}</div>}
                </div>
                {promo.ctaText && promo.ctaHref && (
                  <Link
                    href={promo.ctaHref}
                    className="mt-4 inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white font-semibold shadow-lg hover:scale-[1.03] hover:shadow-xl transition-all duration-200"
                  >
                    {promo.ctaText}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
