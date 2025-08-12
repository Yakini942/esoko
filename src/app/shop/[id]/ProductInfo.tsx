'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import Stars from './Stars';

interface ProductInfoProps {
  title: string;
  rating: number;
  reviewsCount: number;
  price: number;
  oldPrice?: number;
  inStock: boolean;
  features: string[];
  onAddToCart?: (quantity: number) => void;
}

export default function ProductInfo({
  title,
  rating,
  reviewsCount,
  price,
  oldPrice,
  inStock,
  features,
  onAddToCart,
}: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);

  return (
    <section>
      <h1 className="text-2xl sm:text-3xl font-bold text-[#1B3C53]">{title}</h1>
      <div className="mt-2 flex items-center gap-2">
        <Stars value={rating} />
        <Link href="#reviews" className="text-sm text-[#456882] hover:underline">
          {reviewsCount} reviews
        </Link>
      </div>

      <div className="mt-4 flex items-end gap-3">
        <p className="text-3xl font-bold text-[#1B3C53]">${price.toFixed(2)}</p>
        {typeof oldPrice === 'number' && (
          <p className="text-lg text-[#1B3C53]/70 line-through">${oldPrice.toFixed(2)}</p>
        )}
      </div>

      <p className={`mt-2 text-sm font-semibold ${inStock ? 'text-[#4CAF50]' : 'text-[#E74C3C]'}`}>
        {inStock ? 'In Stock' : 'Out of Stock'}
      </p>

      <ul className="mt-4 list-disc pl-5 space-y-1 text-[#1B3C53]">
        {features.map((f) => (
          <li key={f} className="text-sm">{f}</li>
        ))}
      </ul>

      <div className="mt-6 flex items-center gap-3">
        <div className="inline-flex items-center border border-[#456882]/30 rounded-md overflow-hidden">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-3 py-2 text-[#1B3C53] hover:text-[#456882]"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <div className="px-4 py-2 text-[#1B3C53] min-w-[3rem] text-center">{quantity}</div>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="px-3 py-2 text-[#1B3C53] hover:text-[#456882]"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <button
          onClick={() => setWishlist((w) => !w)}
          className={`p-2 rounded-md border transition-colors ${
            wishlist
              ? 'bg-[#456882] text-white border-[#456882]'
              : 'text-[#1B3C53] border-[#456882]/40 hover:text-[#456882]'
          }`}
          aria-pressed={wishlist}
          aria-label="Toggle wishlist"
          title="Save for later"
        >
          <Heart className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-4">
        <button
          className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#456882] text-white font-semibold hover:bg-[#1B3C53]"
          onClick={() => onAddToCart?.(quantity)}
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
}
