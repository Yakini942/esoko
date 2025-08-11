import React from "react";

export default function SecuritySection() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-bold mb-4">Security</h2>
      <form className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm font-medium mb-1">Current Password</label>
          <input type="password" className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">New Password</label>
          <input type="password" className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Confirm New Password</label>
          <input type="password" className="w-full border rounded px-3 py-2" />
        </div>
        <button className="px-6 py-2 rounded bg-[#234052] text-white font-semibold hover:bg-[#456882]">Update Password</button>
      </form>
    </div>
  );
}
