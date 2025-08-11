

import { useState } from 'react';

interface FilterSidebarProps {
  background: string;
  priceRange: { min: number; max: number };
}

const categories = [
  'All Products',
  'Electronics',
  'Clothing',
  'Home & Garden',
  'Sports',
  'Books',
];

export default function FilterSidebar({ background, priceRange }: FilterSidebarProps) {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [price, setPrice] = useState(priceRange.max);
  const [sort, setSort] = useState('Featured');

  return (
    <aside className="bg-[#F9F3EF] rounded-lg p-6 border border-[#456882]/20 w-full max-w-xs">
      <h2 className="text-xl font-bold text-[#234052] mb-4">Filters</h2>
      <div className="mb-6">
        <div className="font-semibold text-[#234052] mb-2">Categories</div>
        <div className="flex flex-col gap-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2 text-[#234052]">
              <input
                type="radio"
                name="category"
                value={cat}
                checked={selectedCategory === cat}
                onChange={() => setSelectedCategory(cat)}
                className="accent-[#234052]"
              />
              <span className={selectedCategory === cat ? 'font-bold' : ''}>{cat}</span>
            </label>
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
