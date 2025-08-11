// src/components/checkout/ShippingForm.tsx
"use client";

import React, { useState } from "react";
import { useCheckout } from "./CheckoutContext";

type Props = { onNext: () => void };

export default function ShippingForm({ onNext }: Props) {
  const { shipping, setShipping } = useCheckout();

  const [local, setLocal] = useState({
    fullName: shipping.fullName ?? "",
    email: shipping.email ?? "",
    phone: shipping.phone ?? "",
    addressLine1: shipping.addressLine1 ?? "",
    addressLine2: shipping.addressLine2 ?? "",
    city: shipping.city ?? "",
    state: shipping.state ?? "",
    zip: shipping.zip ?? "",
    country: shipping.country ?? "Rwanda",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setLocal((p) => ({ ...p, [name]: value }));
  }

  function validate() {
    const err: Record<string, string> = {};
    if (!local.fullName.trim()) err.fullName = "Full name is required";
    if (!local.email.match(/^\S+@\S+\.\S+$/)) err.email = "Valid email required";
    if (!local.addressLine1.trim()) err.addressLine1 = "Address required";
    if (!local.city.trim()) err.city = "City required";
    if (!local.zip.trim()) err.zip = "ZIP/Postal code required";
    setErrors(err);
    return Object.keys(err).length === 0;
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setShipping(local);
    onNext();
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[var(--color-primary)]">
            Full name
          </label>
          <input
            name="fullName"
            value={local.fullName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-[var(--color-neutral)] bg-[var(--color-bg)] p-2"
          />
          {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-[var(--color-primary)]">Email</label>
          <input
            name="email"
            value={local.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-[var(--color-neutral)] bg-[var(--color-bg)] p-2"
          />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--color-primary)]">Phone</label>
          <input
            name="phone"
            value={local.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-[var(--color-neutral)] bg-[var(--color-bg)] p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--color-primary)]">Country</label>
          <select
            name="country"
            value={local.country}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-[var(--color-neutral)] bg-[var(--color-bg)] p-2"
          >
            <option>Rwanda</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Kenya</option>
            <option>Uganda</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-[var(--color-primary)]">Address line 1</label>
          <input
            name="addressLine1"
            value={local.addressLine1}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-[var(--color-neutral)] bg-[var(--color-bg)] p-2"
          />
          {errors.addressLine1 && <p className="text-xs text-red-600 mt-1">{errors.addressLine1}</p>}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-[var(--color-primary)]">Address line 2</label>
          <input
            name="addressLine2"
            value={local.addressLine2}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-[var(--color-neutral)] bg-[var(--color-bg)] p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--color-primary)]">City</label>
          <input name="city" value={local.city} onChange={handleChange} className="mt-1 block w-full rounded-md border border-[var(--color-neutral)] bg-[var(--color-bg)] p-2" />
          {errors.city && <p className="text-xs text-red-600 mt-1">{errors.city}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--color-primary)]">State / Province</label>
          <input name="state" value={local.state} onChange={handleChange} className="mt-1 block w-full rounded-md border border-[var(--color-neutral)] bg-[var(--color-bg)] p-2" />
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--color-primary)]">ZIP / Postal</label>
          <input name="zip" value={local.zip} onChange={handleChange} className="mt-1 block w-full rounded-md border border-[var(--color-neutral)] bg-[var(--color-bg)] p-2" />
          {errors.zip && <p className="text-xs text-red-600 mt-1">{errors.zip}</p>}
        </div>
      </div>

      <div className="flex justify-between items-center pt-4">
        <div className="text-sm text-gray-600">Shipping time estimates shown at checkout</div>
        <button
          type="submit"
          className="btn-primary rounded-md px-6 py-2"
        >
          Continue to Payment
        </button>
      </div>
    </form>
  );
}
