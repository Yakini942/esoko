import React from "react";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import CartHeader from "./CartHeader";
import CartItems from "./CartItems";
import CartSummary from "./CartSummary";

const items = [
  {
    id: 1,
    image: 'https://dummyimage.com/80x80/eee/aaa&text=Premium+Wireless+Headphones',
    title: 'Premium Wireless Headphones',
    subtitle: 'Size: Standard · Color: Black',
    price: 199.99,
    quantity: 1,
  },
  {
    id: 2,
    image: 'https://dummyimage.com/80x80/eee/aaa&text=Smart+Fitness+Tracker',
    title: 'Smart Fitness Tracker',
    subtitle: 'Size: M · Color: Silver',
    price: 149.99,
    quantity: 2,
  },
  {
    id: 3,
    image: 'https://dummyimage.com/80x80/eee/aaa&text=Organic+Cotton+T-Shirt',
    title: 'Organic Cotton T-Shirt',
    subtitle: 'Size: L · Color: Navy',
    price: 29.99,
    quantity: 3,
  },
];

const page = () => {
  const isEmpty = items.length === 0;
  return (
    <main className="bg-[--color-cream] min-h-screen">
      <div className="max-w-6xl mx-auto py-8 px-2">
        <CartHeader />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <CartItems items={items} />
          <div className="md:col-span-4">
            <CartSummary items={items} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
