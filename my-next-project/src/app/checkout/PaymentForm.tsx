// src/components/checkout/PaymentForm.tsx
"use client";

import React, { useState } from "react";
import { useCheckout } from "./CheckoutContext";

type Props = { onBack: () => void; onNext: () => void };

export default function PaymentForm({ onBack, onNext }: Props) {
  const { payment, setPayment } = useCheckout();
  const [method, setMethod] = useState<"card" | "paypal">(
    payment.method === "card" || payment.method === "paypal" ? payment.method : "card"
  );

  const [billingSame, setBillingSame] = useState<boolean>(
    payment.billingSameAsShipping ?? true
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPayment({ method, billingSameAsShipping: billingSame });
    // In production: create PaymentIntent / PaymentMethod via server
    onNext();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <div className="flex items-center gap-4">
          <label className={`p-3 rounded-lg border ${method === "card" ? "border-[var(--color-accent)]" : "border-gray-200"} cursor-pointer`}>
            <input
              type="radio"
              name="method"
              checked={method === "card"}
              onChange={() => setMethod("card")}
              className="sr-only"
            />
            <div className="flex items-center gap-3">
              <div className="font-semibold text-[var(--color-primary)]">Card</div>
              <div className="text-sm text-gray-500">Visa, MasterCard</div>
            </div>
          </label>

          <label className={`p-3 rounded-lg border ${method === "paypal" ? "border-[var(--color-accent)]" : "border-gray-200"} cursor-pointer`}>
            <input
              type="radio"
              name="method"
              checked={method === "paypal"}
              onChange={() => setMethod("paypal")}
              className="sr-only"
            />
            <div className="flex items-center gap-3">
              <div className="font-semibold text-[var(--color-primary)]">PayPal</div>
              <div className="text-sm text-gray-500">Pay with your PayPal account</div>
            </div>
          </label>
        </div>
      </div>

      {method === "card" && (
        <div className="p-4 rounded-md border border-[var(--color-neutral)] bg-[var(--color-bg)]">
          {/* Placeholder - in prod, mount Stripe Elements here */}
          <div className="text-sm text-gray-600 mb-3">Card details (test/demo mode). In production mount Stripe Elements or use Payment Request API.</div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input placeholder="Card number (test only)" className="p-2 border rounded-md bg-white" />
            <input placeholder="MM/YY" className="p-2 border rounded-md bg-white" />
            <input placeholder="CVC" className="p-2 border rounded-md bg-white" />
            <input placeholder="Name on card" className="p-2 border rounded-md bg-white" />
          </div>
        </div>
      )}

      <div className="flex items-center gap-3">
        <input
          id="billingSame"
          type="checkbox"
          checked={billingSame}
          onChange={() => setBillingSame((s) => !s)}
        />
        <label htmlFor="billingSame" className="text-sm text-gray-700">Billing address same as shipping</label>
      </div>

      <div className="flex justify-between items-center">
        <button type="button" onClick={onBack} className="px-4 py-2 rounded-md border border-gray-300">Back</button>
        <button type="submit" className="btn-primary rounded-md px-6 py-2">Review Order</button>
      </div>
    </form>
  );
}
