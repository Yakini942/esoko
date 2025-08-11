// src/components/checkout/CheckoutContext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Shipping = {
  fullName?: string;
  email?: string;
  phone?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
};

type Payment = {
  method?: "card" | "paypal" | "other";
  // For PCI compliance, never save raw card data here in production.
  cardLast4?: string;
  billingSameAsShipping?: boolean;
};

type CheckoutState = {
  shipping: Shipping;
  payment: Payment;
  setShipping: (s: Partial<Shipping>) => void;
  setPayment: (p: Partial<Payment>) => void;
  reset: () => void;
};

const CheckoutContext = createContext<CheckoutState | undefined>(undefined);

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const [shipping, setShippingState] = useState<Shipping>({});
  const [payment, setPaymentState] = useState<Payment>({});

  const setShipping = (s: Partial<Shipping>) =>
    setShippingState((prev) => ({ ...prev, ...s }));
  const setPayment = (p: Partial<Payment>) =>
    setPaymentState((prev) => ({ ...prev, ...p }));
  const reset = () => {
    setShippingState({});
    setPaymentState({});
  };

  return (
    <CheckoutContext.Provider
      value={{ shipping, payment, setShipping, setPayment, reset }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const ctx = useContext(CheckoutContext);
  if (!ctx) throw new Error("useCheckout must be used within CheckoutProvider");
  return ctx;
}

export default CheckoutProvider;
