"use client";
import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const orders = [
  {
    id: "ORD-2024-001",
    customer: "John Smith",
    email: "john.smith@company.com",
    date: "1/15/2024",
    items: 2,
    total: 749.98,
    status: "processing",
  },
  {
    id: "ORD-2024-002",
    customer: "Sarah Johnson",
    email: "sarah.j@business.com",
    date: "1/14/2024",
    items: 1,
    total: 299.99,
    status: "shipped",
  },
  {
    id: "ORD-2024-003",
    customer: "Mike Wilson",
    email: "mike.wilson@corp.com",
    date: "1/13/2024",
    items: 1,
    total: 449.99,
    status: "delivered",
  },
  {
    id: "ORD-2024-004",
    customer: "Lisa Brown",
    email: "lisabrown@startup.com",
    date: "1/12/2024",
    items: 1,
    total: 89.99,
    status: "pending",
  },
];

const statusOptions = [
  { value: "all", label: "All Status" },
  { value: "pending", label: "Pending" },
  { value: "processing", label: "Processing" },
  { value: "shipped", label: "Shipped" },
  { value: "delivered", label: "Delivered" },
];

const statusStyles: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-700",
  processing: "bg-blue-100 text-blue-700",
  shipped: "bg-purple-100 text-purple-700",
  delivered: "bg-green-100 text-green-700",
};

export default function AdminOrders() {
  const [statusFilter, setStatusFilter] = useState("all");
  const filteredOrders = statusFilter === "all" ? orders : orders.filter(o => o.status === statusFilter);
  return (
    <div className="min-h-screen bg-[#F9F3EF]">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold text-[#234052] mb-6">Orders</h2>
        <div className="flex justify-end mb-4">
          <select
            className="px-4 py-2 rounded border border-[#234052] text-[#234052] font-semibold shadow focus:outline-none"
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
          >
            {statusOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-[#234052] text-white">
                <th className="px-4 py-3 text-left font-semibold">Order ID</th>
                <th className="px-4 py-3 text-left font-semibold">Customer</th>
                <th className="px-4 py-3 text-left font-semibold">Email</th>
                <th className="px-4 py-3 text-left font-semibold">Date</th>
                <th className="px-4 py-3 text-left font-semibold">Items</th>
                <th className="px-4 py-3 text-left font-semibold">Total</th>
                <th className="px-4 py-3 text-left font-semibold">Status</th>
                <th className="px-4 py-3 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order, idx) => (
                <tr key={order.id} className={idx % 2 === 0 ? "bg-white" : "bg-[#F9F3EF]"}>
                  <td className="px-4 py-3 font-semibold text-[#234052]">{order.id}</td>
                  <td className="px-4 py-3">{order.customer}</td>
                  <td className="px-4 py-3">{order.email}</td>
                  <td className="px-4 py-3">{order.date}</td>
                  <td className="px-4 py-3">{order.items}</td>
                  <td className="px-4 py-3 font-bold text-[#234052]">${order.total.toFixed(2)}</td>
                  <td className="px-4 py-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[order.status]}`}>{order.status}</span>
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
