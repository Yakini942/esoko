import React from "react";

export default function ProfileSettingsSection() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-bold mb-4">Profile Settings</h2>
      <form className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input type="text" className="w-full border rounded px-3 py-2" defaultValue="John Doe" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" className="w-full border rounded px-3 py-2" defaultValue="john@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input type="tel" className="w-full border rounded px-3 py-2" defaultValue="+1234567890" />
        </div>
        <button className="px-6 py-2 rounded bg-[#234052] text-white font-semibold hover:bg-[#456882]">Save Changes</button>
      </form>
    </div>
  );
}
