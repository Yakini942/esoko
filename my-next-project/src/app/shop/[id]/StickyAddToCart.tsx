'use client';

export default function StickyAddToCart({ price, onAddToCart }: { price: number; onAddToCart?: () => void }) {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 bg-white border-t border-[#456882]/20 shadow-[0_-4px_12px_rgba(0,0,0,0.06)] p-3 flex items-center justify-between">
      <div className="text-[#1B3C53] font-bold">${price.toFixed(2)}</div>
      <button className="px-5 py-2 rounded-md bg-[#456882] text-white font-semibold hover:bg-[#1B3C53]" onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}
