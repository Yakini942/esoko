// src/components/checkout/ReviewOrder.tsx
"use client";

import React, { useState } from "react";
import { useCheckout } from "./CheckoutContext";

type Props = { onBack: () => void; onPlaceOrder: () => Promise<void> | void };

export default function ReviewOrder({ onBack, onPlaceOrder }: Props) {
  const { shipping, payment } = useCheckout();
  const [loading, setLoading] = useState(false);

  async function place(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await onPlaceOrder(); // call server to create order & capture payment
    } catch (err) {
      console.error(err);
      // show toast or inline error
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <section className="p-4 rounded-md border bg-[var(--color-bg)]">
        <h3 className="font-semibold text-[var(--color-primary)]">Shipping</h3>
        <div className="text-sm text-gray-700 mt-2">
          <div>{shipping.fullName}</div>
          <div>{shipping.addressLine1} {shipping.addressLine2}</div>
          <div>{shipping.city} {shipping.state} {shipping.zip}</div>
          <div>{shipping.country}</div>
          <div className="mt-1 text-xs text-gray-500">Contact: {shipping.email} · {shipping.phone}</div>
        </div>
      </section>

      <section className="p-4 rounded-md border bg-[var(--color-bg)]">
        <h3 className="font-semibold text-[var(--color-primary)]">Payment</h3>
        <div className="text-sm text-gray-700 mt-2">
          <div>Method: {payment.method}</div>
          {payment.cardLast4 && <div>Card: **** **** **** {payment.cardLast4}</div>}
        </div>
      </section>

      <div className="flex justify-between items-center pt-4">
        <button onClick={onBack} className="px-4 py-2 rounded-md border border-gray-300">Back</button>
        <button onClick={place} className="btn-primary rounded-md px-6 py-2" disabled={loading}>
          {loading ? "Placing order..." : "Place Order"}
        </button>
      </div>
    </div>
  );
}
