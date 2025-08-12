
import React from "react";
import { Truck, ShieldCheck, Briefcase } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  { icon: <Truck size={32} className="text-[#1B3C53]" />, title: "Free Shipping", description: "Free shipping on orders over $50" },
  { icon: <ShieldCheck size={32} className="text-[#1B3C53]" />, title: "Quality Guarantee", description: "Premium products with satisfaction guarantee" },
  { icon: <Briefcase size={32} className="text-[#1B3C53]" />, title: "Wholesale Options", description: "Special pricing for business customers" },
];

export default function WhyChooseEsoko() {
  return (
    <section className="relative bg-[#F9F3EF] py-16 px-4 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #D2C1B6 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
  <div className="relative max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1B3C53] text-center mb-12">
          Why Choose Esoko?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="text-center p-6 bg-white/30 backdrop-blur-md rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#D2C1B6]/30 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#1B3C53] mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
