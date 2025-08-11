"use client";
import React from "react";
import { FaDollarSign, FaShoppingCart, FaBoxOpen, FaUser } from "react-icons/fa";

const stats = [
  { label: "Total Revenue", value: "$12,450", icon: <FaDollarSign />, bg: "bg-green-50", text: "text-green-700" },
  { label: "Total Orders", value: "156", icon: <FaShoppingCart />, bg: "bg-blue-50", text: "text-blue-700" },
  { label: "Active Products", value: "89", icon: <FaBoxOpen />, bg: "bg-yellow-50", text: "text-yellow-700" },
  { label: "Customers", value: "245", icon: <FaUser />, bg: "bg-purple-50", text: "text-purple-700" },
];

type OrderStatus = "processing" | "shipped" | "delivered" | "pending";
const recentOrders: { id: string; name: string; amount: string; status: OrderStatus }[] = [
  { id: "ORD-2024-001", name: "John Smith", amount: "$749.98", status: "processing" },
  { id: "ORD-2024-002", name: "Sarah Johnson", amount: "$299.99", status: "shipped" },
  { id: "ORD-2024-003", name: "Mike Wilson", amount: "$449.99", status: "delivered" },
  { id: "ORD-2024-004", name: "Lisa Brown", amount: "$89.99", status: "pending" },
];

const lowStock = [
  { name: "Ergonomic Office Chair", sku: "CH-ERG-002", left: 12, image: "https://dummyimage.com/48x48/eee/aaa&text=Chair" },
  { name: "Standing Desk Converter", sku: "DK-STD-003", left: 0, image: "https://dummyimage.com/48x48/eee/aaa&text=Desk" },
];

const statusColor: Record<OrderStatus, string> = {
  processing: "text-blue-600 bg-blue-100",
  shipped: "text-purple-600 bg-purple-100",
  delivered: "text-green-600 bg-green-100",
  pending: "text-yellow-600 bg-yellow-100",
};

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#F9F3EF]">
      {/* Dashboard */}
      <div className="max-w-7xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold text-[#234052] mb-6">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className={`rounded-lg shadow p-6 flex flex-col gap-2 ${stat.bg}`}>
              <div className="flex items-center gap-2">
                <span className={`text-xl ${stat.text}`}>{stat.icon}</span>
                <span className="font-semibold text-gray-700">{stat.label}</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Recent Orders */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-lg text-[#234052] mb-4">Recent Orders</h3>
            <ul className="divide-y divide-gray-100">
              {recentOrders.map((order) => (
                <li key={order.id} className="flex items-center justify-between py-3">
                  <div>
                    <span className="font-semibold text-[#234052]">{order.id}</span>
                    <span className="ml-2 text-gray-500 text-sm">{order.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#234052]">{order.amount}</span>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${statusColor[order.status]}`}>{order.status}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Low Stock Alert */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-lg text-[#234052] mb-4">Low Stock Alert</h3>
            <ul className="divide-y divide-gray-100">
              {lowStock.map((item) => (
                <li key={item.sku} className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                    <div>
                      <span className="font-semibold text-[#234052]">{item.name}</span>
                      <div className="text-xs text-gray-500">{item.sku}</div>
                    </div>
                  </div>
                  <span className={`font-bold text-sm ${item.left === 0 ? "text-red-600" : "text-orange-500"}`}>{item.left} left</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
