'use client';
import { useState } from 'react';
import FilterSidebar from "./FilterSidebar";
import ProductGrid from "./productGrid";
import SortViewControls from "./sortViewControls";
import Pagination from "./pagination";

const allProducts = [
  { id: 1, name: "Premium Wireless Headphones", price: 199.99, imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80", category: "Electronics" },
  { id: 2, name: "Smart Fitness Tracker", price: 149.99, imageUrl: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80", category: "Electronics" },
  { id: 3, name: "Organic Cotton T-Shirt", price: 29.99, imageUrl: "https://images.unsplash.com/photo-1526178613658-3f1622045544?auto=format&fit=crop&w=400&q=80", category: "Clothing" },
  { id: 4, name: "Stainless Steel Water Bottle", price: 19.99, imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", category: "Home & Kitchen" },
  { id: 5, name: "Modern Desk Lamp", price: 59.99, imageUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", category: "Home & Kitchen" },
  { id: 6, name: "Running Shoes", price: 89.99, imageUrl: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80", category: "Sports" },
  { id: 7, name: "Bluetooth Speaker", price: 49.99, imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", category: "Electronics" },
  { id: 8, name: "Leather Wallet", price: 39.99, imageUrl: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80", category: "Clothing" },
  { id: 9, name: "Yoga Mat", price: 24.99, imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80", category: "Sports" },
  { id: 10, name: "Desk Organizer", price: 14.99, imageUrl: "https://images.unsplash.com/photo-1465101178521-c1a4c8a0a8b7?auto=format&fit=crop&w=400&q=80", category: "Home & Kitchen" },
  { id: 11, name: "Wireless Mouse", price: 25.99, imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80", category: "Electronics" },
  { id: 12, name: "Ceramic Mug", price: 12.99, imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80", category: "Home & Kitchen" },
];

const categories = [
  'All Products',
  'Electronics',
  'Clothing',
  'Home & Kitchen',
  'Books',
  'Sports',
];

const priceRange = {
  min: 0,
  max: 200,
};

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [price, setPrice] = useState(priceRange.max);

  // Filter products by category and price
  const filteredProducts = allProducts.filter((p) => {
    const matchesCategory = selectedCategory === 'All Products' || p.category === selectedCategory;
    const matchesPrice = p.price <= price;
    return matchesCategory && matchesPrice;
  });

  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-[#1B3C53]">Shop</h1>
          <p className="text-[#1B3C53]/70 mt-1">Browse our collection and use filters to refine your results.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6">
          {/* Sidebar */}
          <FilterSidebar
            categories={categories}
            priceRange={priceRange}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            price={price}
            setPrice={setPrice}
          />

          {/* Products Section */}
          <section>
            {/* Mobile spacing when sidebar button appears */}
            <div className="md:hidden mb-4" />

            {/* Sort & View Controls */}
            <div className="mb-4">
              <SortViewControls />
            </div>

            <ProductGrid products={filteredProducts} />
            {/* Pagination */}
            <div className="mt-8">
              <Pagination
                currentPage={1}
                totalPages={5}
                onPageChange={(page) => console.log('Navigate to page:', page)}
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
