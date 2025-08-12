export default function CartCrossSell() {
  // Placeholder for cross-sell products
  return (
    <section className="mt-8">
      <h3 className="text-lg font-bold mb-4 text-[--color-primary]">Customers Also Bought</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 overflow-x-auto">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <div className="w-20 h-20 bg-gray-100 rounded mb-2" />
            <div className="font-medium">Product {i + 1}</div>
            <button className="mt-2 text-xs text-[--color-secondary] border border-[--color-secondary] rounded px-2 py-1 hover:bg-[--color-secondary] hover:text-white">View</button>
          </div>
        ))}
      </div>
    </section>
  );
}
