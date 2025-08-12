import React from "react";

export default function AddressesSection() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-bold mb-4">Addresses</h2>
      <div className="space-y-4">
        <div className="border rounded p-4 flex justify-between items-center">
          <div>
            <div className="font-semibold">Home Address</div>
            <div className="text-sm text-gray-500">123 Main St, City, Country</div>
          </div>
          <button className="px-4 py-2 rounded bg-gray-200 text-gray-700 text-sm font-semibold hover:bg-gray-300">Edit</button>
        </div>
        <div className="border rounded p-4 flex justify-between items-center">
          <div>
            <div className="font-semibold">Work Address</div>
            <div className="text-sm text-gray-500">456 Office Rd, City, Country</div>
          </div>
          <button className="px-4 py-2 rounded bg-gray-200 text-gray-700 text-sm font-semibold hover:bg-gray-300">Edit</button>
        </div>
      </div>
      <button className="mt-6 px-6 py-2 rounded bg-[#234052] text-white font-semibold hover:bg-[#456882]">Add New Address</button>
    </div>
  );
}
