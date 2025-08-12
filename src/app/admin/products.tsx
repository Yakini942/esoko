"use client";
import React from "react";
import Image from "next/image";
import { FaEdit, FaTrash } from "react-icons/fa";

const products = [
  {
    name: "Professional Wireless Headphones",
    sku: "WH-PRO-001",
    category: "Electronics",
    price: 299.99,
    stock: 45,
    status: "active",
    image: "https://dummyimage.com/48x48/eee/aaa&text=Headphones",
  },
  {
    name: "Ergonomic Office Chair",
    sku: "CH-ERG-002",
    category: "Furniture",
    price: 449.99,
    stock: 12,
    status: "active",
    image: "https://dummyimage.com/48x48/eee/aaa&text=Chair",
  },
  {
    name: "Standing Desk Converter",
    sku: "DK-STD-003",
    category: "Furniture",
    price: 199.99,
    stock: 0,
    status: "inactive",
    image: "https://dummyimage.com/48x48/eee/aaa&text=Desk",
  },
  {
    name: "Smart Water Bottle",
    sku: "WB-SMT-004",
    category: "Health",
    price: 89.99,
    stock: 78,
    status: "active",
    image: "https://dummyimage.com/48x48/eee/aaa&text=Bottle",
  },
  {
    name: "Laptop Stand Premium",
    sku: "LS-PRM-005",
    category: "Electronics",
    price: 149.99,
    stock: 23,
    status: "draft",
    image: "https://dummyimage.com/48x48/eee/aaa&text=Stand",
  },
];

const statusStyles: Record<string, string> = {
  active: "bg-green-100 text-green-700",
  inactive: "bg-red-100 text-red-600",
  draft: "bg-yellow-100 text-yellow-700",
};

export default function AdminProducts() {
  return (
    <div className="min-h-screen bg-[#F9F3EF]">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold text-[#234052] mb-6">Products</h2>
        <div className="flex justify-end mb-4">
          <button className="bg-[#234052] text-white px-4 py-2 rounded font-semibold shadow hover:bg-[#456882]">+ Add Product</button>
        </div>
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-[#234052] text-white">
                <th className="px-4 py-3 text-left font-semibold">Product</th>
                <th className="px-4 py-3 text-left font-semibold">SKU</th>
                <th className="px-4 py-3 text-left font-semibold">Category</th>
                <th className="px-4 py-3 text-left font-semibold">Price</th>
                <th className="px-4 py-3 text-left font-semibold">Stock</th>
                <th className="px-4 py-3 text-left font-semibold">Status</th>
                <th className="px-4 py-3 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, idx) => (
                <tr key={product.sku} className={idx % 2 === 0 ? "bg-white" : "bg-[#F9F3EF]"}>
                  <td className="px-4 py-3 flex items-center gap-3">
                    <Image src={product.image} alt={product.name} width={40} height={40} className="w-10 h-10 object-cover rounded" />
                    <span className="font-semibold text-[#234052]">{product.name}</span>
                  </td>
                  <td className="px-4 py-3">{product.sku}</td>
                  <td className="px-4 py-3">{product.category}</td>
                  <td className="px-4 py-3 font-bold text-[#234052]">${product.price.toFixed(2)}</td>
                  <td className={`px-4 py-3 font-semibold ${product.stock === 0 ? "text-red-600" : product.stock < 15 ? "text-yellow-700" : "text-green-700"}`}>{product.stock}</td>
                  <td className="px-4 py-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[product.status]}`}>{product.status}</span>
                  </td>
                  <td className="px-4 py-3 flex gap-3">
                    <button className="text-[#234052] hover:text-[#456882]" title="Edit"><FaEdit /></button>
                    <button className="text-red-500 hover:text-red-700" title="Delete"><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
