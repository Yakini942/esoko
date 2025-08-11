import React from "react";

interface CartItem {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  price: number;
  quantity: number;
}

export default function CartSummary({ items }: { items: CartItem[] }) {
  const subtotal = items.reduce((sum, i) => sum + i.quantity * i.price, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;
  return (
    <div className="bg-white rounded-lg shadow p-6 sticky top-24">
      <h2 className="text-lg font-bold mb-4 text-gray-800">Order Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal ({items.reduce((sum, i) => sum + i.quantity, 0)} items)</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Shipping</span>
        <span className="font-semibold text-green-600">Free</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Tax</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mt-4 text-xl font-bold text-gray-900">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <button className="w-full mt-6 py-3 rounded bg-[#234052] text-white font-semibold text-lg hover:bg-[#456882] transition">Proceed to Checkout</button>
    <div className="mt-4 text-xs text-gray-500 space-y-1">
      <div className="flex items-center gap-2">
        <span><svg width="16" height="16" fill="none"><path d="M6.5 11.5l-3-3 1.06-1.06L6.5 9.38l5.44-5.44 1.06 1.06-6.5 6.5z" fill="#22c55e"/></svg></span>
        <span>Secure checkout guaranteed</span>
      </div>
      <div className="flex items-center gap-2">
        <span><svg width="16" height="16" fill="none"><path d="M8 2v6h6M8 14a6 6 0 100-12 6 6 0 000 12z" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
        <span>Free returns within 30 days</span>
      </div>
      <div className="flex items-center gap-2">
        <span><svg width="16" height="16" fill="none"><path d="M8 14c3.314 0 6-2.239 6-5s-2.686-5-6-5-6 2.239-6 5c0 2.761 2.686 5 6 5zm0-7a2 2 0 110 4 2 2 0 010-4z" fill="#f59e42"/></svg></span>
        <span>24/7 customer support</span>
      </div>
      </div>
    </div>
  );
}
