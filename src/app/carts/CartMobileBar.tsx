export default function CartMobileBar({ total = 0 }: { total?: number }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[--color-warm] shadow-lg p-4 flex items-center justify-between z-50 md:hidden">
      <div className="font-bold text-lg text-[--color-primary]">Total: ${total.toFixed(2)}</div>
      <button className="px-6 py-2 rounded-lg bg-[--color-secondary] text-white font-semibold hover:bg-[--color-primary]">Checkout</button>
    </div>
  );
}
