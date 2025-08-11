'use client';
import FilterSidebar from "./FilterSidebar";
import ProductGrid from "./productGrid";
import SortViewControls from "./sortViewControls";
import Pagination from "./pagination";

export default function ShopPage() {
  const sampleProducts = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: Number((29.99 + i * 7.5).toFixed(2)),
    imageUrl: `https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80&auto=format&fit=crop&sig=${i}`,
  }));



  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-[#1B3C53]">Shop</h1>
          <p className="text-[#1B3C53]/70 mt-1">Browse our collection and use filters to refine your results.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6">
          {/* Sidebar */}
          <FilterSidebar background="offwhite" priceRange={{ min: 0, max: 1000 }} />

          {/* Products Section */}
          <section>
            {/* Mobile spacing when sidebar button appears */}
            <div className="md:hidden mb-4" />

            {/* Sort & View Controls */}
            <div className="mb-4">
              <SortViewControls />
            </div>

            <ProductGrid products={sampleProducts} />

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
