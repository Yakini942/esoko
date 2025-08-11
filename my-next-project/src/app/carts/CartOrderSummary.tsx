export default function CartOrderSummary({ items = [] }: { items?: any[] }) {
  // Placeholder calculations
  const subtotal = items.reduce((sum, item) => sum + (item.quantity * (item.discountedPrice || item.price)), 0);
  const shipping = 8.99;
  const taxes = subtotal * 0.07;
  const total = subtotal + shipping + taxes;
  return (
    <aside className="bg-[--color-warm] rounded-lg shadow-md p-6 sticky top-24">
      <h2 className="text-lg font-bold mb-4 text-[--color-primary]">Order Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Estimated Shipping <a href="#" className="underline text-xs text-[--color-secondary]">Change</a></span>
        <span>${shipping.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Taxes</span>
        <span>${taxes.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mt-4 text-xl font-bold text-[--color-primary]">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <button className="w-full mt-6 py-3 rounded-lg bg-[--color-secondary] text-white font-semibold text-lg hover:bg-[--color-primary] transition">Proceed to Checkout</button>
      <div className="flex items-center justify-center mt-2 text-xs text-gray-500">
        <span role="img" aria-label="secure">🔒</span> Secure Checkout
      </div>
    </aside>
  );
}
