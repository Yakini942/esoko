import { useState } from 'react';

interface FilterSidebarProps {
  categories: string[];
  priceRange: { min: number; max: number };
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  price: number;
  setPrice: (price: number) => void;
}

export default function FilterSidebar({
  categories,
  priceRange,
  selectedCategory,
  setSelectedCategory,
  price,
  setPrice,
}: FilterSidebarProps) {
  return (
    <aside className="bg-[#F9F3EF] rounded-lg p-6 border border-[#456882]/20 w-full max-w-xs">
      <h2 className="text-xl font-bold text-[#234052] mb-4">Filters</h2>
      <div className="mb-6">
        <div className="font-semibold text-[#234052] mb-2">Categories</div>
        <div className="flex flex-col gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-3 py-2 rounded text-left ${selectedCategory === cat ? 'bg-[#456882] text-white font-bold' : 'bg-[#F9F3EF] text-[#234052]'}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <div className="font-semibold text-[#234052] mb-2">Price Range</div>
        <input
          type="range"
          min={priceRange.min}
          max={priceRange.max}
          value={price}
          onChange={e => setPrice(Number(e.target.value))}
          className="w-full accent-[#234052]"
        />
        <div className="flex justify-between text-xs text-[#234052] mt-1">
          <span>${priceRange.min}</span>
          <span>${priceRange.max}</span>
          <span>${price}</span>
        </div>
      </div>
    </aside>
  );
}
