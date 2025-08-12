'use client';

import { useState, useMemo } from 'react';
import { LayoutGrid, List } from 'lucide-react';

export type SortOption = 'relevance' | 'price-asc' | 'price-desc' | 'newest';
export type ViewMode = 'grid' | 'list';

interface SortViewControlsProps {
  sort?: SortOption;
  view?: ViewMode;
  onSortChange?: (sort: SortOption) => void;
  onViewChange?: (view: ViewMode) => void;
  className?: string;
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'relevance', label: 'Relevance' },
  { value: 'price-asc', label: 'Price: Low → High' },
  { value: 'price-desc', label: 'Price: High → Low' },
  { value: 'newest', label: 'Newest' },
];

export default function SortViewControls({
  sort,
  view,
  onSortChange,
  onViewChange,
  className,
}: SortViewControlsProps) {
  const [internalSort, setInternalSort] = useState<SortOption>(sort ?? 'relevance');
  const [internalView, setInternalView] = useState<ViewMode>(view ?? 'grid');

  const currentSort = useMemo(() => sort ?? internalSort, [sort, internalSort]);
  const currentView = useMemo(() => view ?? internalView, [view, internalView]);

  const handleSort = (value: SortOption) => {
    setInternalSort(value);
    onSortChange?.(value);
  };
  const handleView = (value: ViewMode) => {
    setInternalView(value);
    onViewChange?.(value);
  };

  return (
    <div className={`w-full ${className ?? ''}`}>
      {/* Desktop: right-aligned inline controls */}
      <div className="hidden md:flex w-full items-center justify-end gap-3">
        <label className="text-sm text-[#1B3C53]">Sort by</label>
        <select
          value={currentSort}
          onChange={(e) => handleSort(e.target.value as SortOption)}
          className="text-sm px-3 py-2 rounded-md border border-[#456882]/30 bg-white text-[#1B3C53] focus:outline-none focus:ring-2 focus:ring-[#456882]/40"
        >
          {sortOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>

        <div className="ml-2 flex items-center gap-1">
          <button
            type="button"
            onClick={() => handleView('grid')}
            aria-pressed={currentView === 'grid'}
            title="Grid view"
            className={`p-2 rounded-md border transition-colors ${
              currentView === 'grid'
                ? 'border-[#456882] text-[#1B3C53]'
                : 'border-transparent text-[#1B3C53]/70 hover:text-[#456882]'
            }`}
          >
            <LayoutGrid className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => handleView('list')}
            aria-pressed={currentView === 'list'}
            title="List view"
            className={`p-2 rounded-md border transition-colors ${
              currentView === 'list'
                ? 'border-[#456882] text-[#1B3C53]'
                : 'border-transparent text-[#1B3C53]/70 hover:text-[#456882]'
            }`}
          >
            <List className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile: dropdown row */}
      <div className="md:hidden w-full flex items-center justify-between gap-3">
        <select
          value={currentSort}
          onChange={(e) => handleSort(e.target.value as SortOption)}
          className="flex-1 text-sm px-3 py-2 rounded-md border border-[#456882]/30 bg-white text-[#1B3C53] focus:outline-none focus:ring-2 focus:ring-[#456882]/40"
        >
          {sortOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => handleView('grid')}
            aria-pressed={currentView === 'grid'}
            title="Grid view"
            className={`p-2 rounded-md border transition-colors ${
              currentView === 'grid'
                ? 'border-[#456882] text-[#1B3C53]'
                : 'border-transparent text-[#1B3C53]/70 hover:text-[#456882]'
            }`}
          >
            <LayoutGrid className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => handleView('list')}
            aria-pressed={currentView === 'list'}
            title="List view"
            className={`p-2 rounded-md border transition-colors ${
              currentView === 'list'
                ? 'border-[#456882] text-[#1B3C53]'
                : 'border-transparent text-[#1B3C53]/70 hover:text-[#456882]'
            }`}
          >
            <List className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
