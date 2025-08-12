// src/components/checkout/ProgressStepper.tsx
"use client";

import React from "react";

interface ProgressStepperProps {
  step: number;
}

/**
 * @param {{ step: number }} props
 */
export default function ProgressStepper({ step }: ProgressStepperProps) {
  const steps = [
    { id: 1, label: "Shipping" },
    { id: 2, label: "Payment" },
    { id: 3, label: "Review" },
  ];

  return (
    <nav aria-label="Checkout Progress" className="mb-6">
      <ol className="flex items-center gap-4">
        {steps.map((s) => {
          const isActive = s.id === step;
          const isDone = s.id < step;
          return (
            <li key={s.id} className="flex items-center">
              <div className="flex items-center">
                <div
                  className={`flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium ${
                    isDone
                      ? "bg-green-500 text-white"
                      : isActive
                      ? "bg-[var(--color-accent)] text-white"
                      : "bg-white border border-gray-300 text-[var(--color-primary)]"
                  }`}
                >
                  {isDone ? "✓" : s.id}
                </div>
                <div className="ml-3 text-sm">
                  <div
                    className={`font-semibold ${
                      isActive ? "text-[var(--color-accent)]" : "text-gray-700"
                    }`}
                  >
                    {s.label}
                  </div>
                </div>
              </div>
              {s.id !== steps.length && (
                <div className="w-12 h-0.5 bg-gray-200 ml-4 mr-4" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
