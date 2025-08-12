'user client'

import Link from 'next/link';
import { FiShoppingCart, FiUser } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';

export default function NavBar() {
  return (
    <nav className="bg-[#234052] text-white px-6 py-2 flex items-center justify-between w-full">
      {/* Left: Logo & Links */}
      <div className="flex items-center gap-8">
        <span className="font-bold text-lg italic">logo</span>
        <Link href="/" className="text-sm hover:underline">Home</Link>
        <Link href="/shop" className="text-sm hover:underline">Products</Link>
        <Link href="/categories" className="text-sm hover:underline">Categories</Link>
        <Link href="/wholesale" className="text-sm hover:underline">Wholesale</Link>
        <Link href="/about" className="text-sm hover:underline">About</Link>
      </div>
      {/* Right: Search, Cart, User */}
      <div className="flex items-center gap-4">
        <div className="flex items-center bg-white rounded px-2 py-1">
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent text-sm text-black px-2 py-1 focus:outline-none w-40"
          />
          <button className="text-[#234052] text-sm px-1">
            <FaSearch />
          </button>
        </div>
        <Link href="/carts" className="text-xl hover:text-gray-300">
          <FiShoppingCart />
        </Link>
        <Link href="/account" className="text-xl hover:text-gray-300">
          <FiUser />
        </Link>
      </div>
    </nav>
  );
}
