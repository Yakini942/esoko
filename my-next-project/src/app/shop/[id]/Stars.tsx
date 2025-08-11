'use client';

import { Star } from 'lucide-react';

export default function Stars({ value = 4.5 }: { value?: number }) {
  const full = Math.floor(value);
  const hasHalf = value - full >= 0.5;
  return (
    <div className="flex items-center" aria-label={`Rating ${value} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < full;
        const half = !filled && hasHalf && i === full;
        return (
          <Star
            key={i}
            className={`h-4 w-4 ${filled || half ? 'text-[#C6A15B]' : 'text-[#C6A15B]/30'}`}
            fill={filled ? '#C6A15B' : half ? '#C6A15B' : 'none'}
          />
        );
      })}
    </div>
  );
}
