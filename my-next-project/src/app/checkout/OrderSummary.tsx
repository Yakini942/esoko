// src/components/checkout/OrderSummary.tsx
"use client";

import React from "react";

type Props = {
  items?: { id: string; name: string; qty: number; price: number; image?: string }[];
  onApplyCoupon?: (code: string) => void;
};

export default function OrderSummary({ items = [], onApplyCoupon }: Props) {
  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  const shipping = subtotal > 100 ? 0 : 7.5; // example
  const taxes = subtotal * 0.18;
  const total = subtotal + shipping + taxes;

  return (
    <aside className="p-4 rounded-lg bg-[var(--color-neutral)] shadow-md">
      <h4 className="text-lg font-semibold text-[var(--color-primary)]">Order Summary</h4>
      <div className="mt-3 space-y-2 text-sm">
        <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
        <div className="flex justify-between"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
        <div className="flex justify-between"><span>Taxes</span><span>${taxes.toFixed(2)}</span></div>
        <div className="border-t border-[var(--color-bg)] pt-3 flex justify-between font-bold text-[var(--color-primary)]">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-sm mb-1">Coupon</label>
        <div className="flex gap-2">
          <input className="flex-1 p-2 rounded-md border border-[var(--color-neutral)] bg-white" placeholder="CODE" />
          <button className="btn-primary px-3 rounded-md">Apply</button>
        </div>
      </div>
    </aside>
  );
}
