import Link from "next/link";

export default function CartEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-24">
      <div className="text-6xl mb-4 text-[--color-secondary]">🛒</div>
      <h2 className="text-2xl font-bold mb-2 text-[--color-primary]">Your cart is empty</h2>
      <p className="mb-6 text-gray-500">Browse products to find what you like.</p>
      <Link href="/products" className="px-6 py-3 rounded-lg bg-[--color-secondary] text-white font-semibold hover:bg-[--color-primary]">Continue Shopping</Link>
    </div>
  );
}
