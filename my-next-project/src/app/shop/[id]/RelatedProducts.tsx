'use client';

import Link from 'next/link';
import Image from 'next/image';

interface RelatedProductsProps {
  images: string[];
}

export default function RelatedProducts({ images }: RelatedProductsProps) {
  return (
    <section className="mt-14">
      <h2 className="text-2xl font-bold text-[#1B3C53] mb-4">You May Also Like</h2>
      <div className="md:hidden -mx-4 px-4">
        <div className="flex gap-4 overflow-x-auto pb-2">
          {images.slice(0, 6).map((img, i) => (
            <Link key={i} href={`/shop/${i + 100}`} className="min-w-[200px]">
              <article className="bg-[#D2C1B6] p-3 rounded-lg shadow-md">
                <div className="aspect-[4/3] bg-white/50 rounded flex items-center justify-center overflow-hidden">
                  <Image src={img} alt="Related" width={200} height={150} className="h-full w-auto object-contain" />
                </div>
                <h3 className="mt-2 text-sm font-semibold text-[#1B3C53] line-clamp-2">Product {i + 1}</h3>
                <p className="text-[#1B3C53] font-bold">${(99 + i).toFixed(2)}</p>
              </article>
            </Link>
          ))}
        </div>
      </div>
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
        {images.slice(0, 4).map((img, i) => (
          <Link key={i} href={`/shop/${i + 200}`}>
            <article className="bg-[#D2C1B6] p-4 rounded-lg shadow-md hover:scale-[1.02] transition-transform">
              <div className="aspect-[4/3] bg-white/50 rounded flex items-center justify-center overflow-hidden">
                <Image src={img} alt="Related" width={200} height={150} className="h-full w-auto object-contain" />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-[#1B3C53] line-clamp-2">Product {i + 1}</h3>
              <p className="text-[#1B3C53] font-bold">${(149 + i).toFixed(2)}</p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
