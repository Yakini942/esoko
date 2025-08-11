import React from "react";

interface CartItem {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  price: number;
  quantity: number;
}


export default function CartItems({ items }: { items: CartItem[] }) {
  return (
    <div className="md:col-span-8 flex flex-col gap-6">
      {items.map((item) => (
        <div key={item.id} className="bg-white rounded-xl shadow flex items-center px-6 py-4 relative min-h-[110px]">
          <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded mr-4" />
          <div className="flex-1 flex flex-col justify-center min-w-[180px]">
            <div className="font-semibold text-lg text-gray-900 leading-tight">{item.title}</div>
            <div className="text-xs text-gray-500 mb-1">{item.subtitle}</div>
            <div className="font-bold text-xl text-gray-900">${item.price.toFixed(2)}</div>
            <div className="flex items-center mt-2 gap-2">
              <span className="text-sm text-gray-700">Quantity:</span>
              <button className="w-7 h-7 flex items-center justify-center border rounded bg-gray-100 text-lg font-bold">-</button>
              <span className="px-2 text-base font-semibold">{item.quantity}</span>
              <button className="w-7 h-7 flex items-center justify-center border rounded bg-gray-100 text-lg font-bold">+</button>
            </div>
          </div>
          <div className="flex flex-col items-end min-w-[120px]">
            <span className="text-xs text-gray-500 mb-1">Subtotal</span>
            <span className="font-bold text-lg text-gray-900">${(item.quantity * item.price).toFixed(2)}</span>
          </div>
          <button className="absolute top-4 right-6 text-gray-400 hover:text-red-500 text-xl">&times;</button>
        </div>
      ))}
      <div className="flex gap-4 mt-4">
        <button className="flex-1 py-3 rounded bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200">Continue Shopping</button>
        <button className="flex-1 py-3 rounded bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300">Save for Later</button>
      </div>
    </div>
  );
}
