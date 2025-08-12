import React from "react";

type OrderStatus = "Delivered" | "Shipped" | "Processing";

type Order = {
  id: string;
  date: string;
  status: OrderStatus;
  items: number;
  total: number;
};

const orders: Order[] = [
  {
    id: "ORD-2024-001",
    date: "January 15, 2024",
    status: "Delivered",
    items: 3,
    total: 299.99,
  },
  {
    id: "ORD-2024-002",
    date: "January 12, 2024",
    status: "Shipped",
    items: 2,
    total: 149.50,
  },
  {
    id: "ORD-2024-003",
    date: "January 8, 2024",
    status: "Processing",
    items: 1,
    total: 89.99,
  },
  {
    id: "ORD-2024-004",
    date: "January 5, 2024",
    status: "Delivered",
    items: 4,
    total: 199.99,
  },
];

const statusColor: Record<OrderStatus, string> = {
  Delivered: "bg-green-100 text-green-700",
  Shipped: "bg-blue-100 text-blue-700",
  Processing: "bg-yellow-100 text-yellow-700",
};

export default function OrdersSection() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-bold mb-4">Order History</h2>
      <div className="flex justify-end mb-4">
        <select className="border rounded px-2 py-1 text-sm">
          <option>All Orders</option>
          <option>Delivered</option>
          <option>Shipped</option>
          <option>Processing</option>
        </select>
      </div>
      <div className="space-y-4">
        {orders.map(order => (
          <div key={order.id} className="flex items-center justify-between bg-gray-50 rounded p-4">
            <div>
              <div className="font-semibold text-base">{order.id}</div>
              <div className="text-xs text-gray-500">Placed on {order.date}</div>
              <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${statusColor[order.status]}`}>{order.status}</span>
            </div>
            <div className="text-right">
              <div className="font-bold text-lg">${order.total.toFixed(2)}</div>
              <div className="text-xs text-gray-500">{order.items} items</div>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded bg-gray-200 text-gray-700 text-sm font-semibold hover:bg-gray-300">View Details</button>
              <button className="px-4 py-2 rounded bg-[#234052] text-white text-sm font-semibold hover:bg-[#456882]">Reorder</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
