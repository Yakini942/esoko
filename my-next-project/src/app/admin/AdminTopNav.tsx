"use client";
import React from "react";

export default function AdminTopNav() {
  return (
    <nav className="bg-[#234052] text-white px-8 py-3 flex items-center justify-between">
      <div className="flex gap-8 items-center">
        <span className="font-bold text-lg">Admin Panel</span>
        <a href="/admin" className="font-semibold px-2 py-1 rounded bg-[#1B3C53]">Dashboard</a>
        <a href="/admin/products" className="font-semibold px-2 py-1 hover:bg-[#1B3C53] rounded">Products</a>
        <a href="./orders" className="font-semibold px-2 py-1 hover:bg-[#1B3C53] rounded">Orders</a>
        <a href="/admin/customers" className="font-semibold px-2 py-1 hover:bg-[#1B3C53] rounded">Customers</a>
      </div>
      <a href="/" className="bg-white text-[#234052] px-4 py-2 rounded font-semibold shadow hover:bg-gray-100">View Store</a>
    </nav>
  );
}
