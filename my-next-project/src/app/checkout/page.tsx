"use client";

import React, { useState } from "react";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import CheckoutProvider from "./CheckoutContext";
import ProgressStepper from "./ProgressSteppes";
import ShippingForm from "./ShippingForm";
import PaymentForm from "./PaymentForm";
import ReviewOrder from "./ReviewOrder";
import OrderSummary from "./OrderSummary";

export default function CheckoutPage() {
  const [step, setStep] = useState<number>(1);

  // example cart items (replace with data from your store)
  const items = [
    { id: "1", name: "Demo product A", qty: 1, price: 45.0 },
    { id: "2", name: "Demo product B", qty: 2, price: 20.0 },
  ];

  function next() {
    setStep((s) => Math.min(3, s + 1));
  }
  function back() {
    setStep((s) => Math.max(1, s - 1));
  }

  async function placeOrder() {
    // Replace with server call: create order, confirm payment, etc.
    // e.g. POST /api/orders { shipping, payment, items }
    // In dev we just simulate a delay:
    await new Promise((r) => setTimeout(r, 800));
    // redirect to order confirmation page or show success toast
    window.location.href = "/order/thank-you"; // change as needed
  }

  return (
    <CheckoutProvider>
      <NavBar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <ProgressStepper step={step} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              {step === 1 && <ShippingForm onNext={next} />}
              {step === 2 && <PaymentForm onBack={back} onNext={next} />}
              {step === 3 && <ReviewOrder onBack={back} onPlaceOrder={placeOrder} />}
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <OrderSummary items={items} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </CheckoutProvider>
  );
}
