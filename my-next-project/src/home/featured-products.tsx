import Link from "next/link";

export interface FeaturedProduct {
  id: string;
  name: string;
  price: number | string;
  imageUrl: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  imageUrl: string;
  href?: string;
}

interface FeaturedProductsProps {
  products?: FeaturedProduct[];
  categories?: CategoryItem[];
  title?: string;
}

export default function FeaturedProducts({ products = [], categories = [], title }: FeaturedProductsProps) {
  const showCategories = categories.length > 0 || products.length === 0;
  const sectionTitle = title ?? (showCategories ? "Featured Categories" : "Featured Products");

  return (
    <section className="relative bg-[#F9F3EF] py-16 px-4 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #D2C1B6 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1B3C53] text-center mb-12">{sectionTitle}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {showCategories
            ? categories.map((cat) => {
                const href = cat.href ?? `/shop/${encodeURIComponent(cat.name.toLowerCase().replace(/\s+/g, "-"))}`;
                return (
                  <article
                    key={cat.id}
                    className="group bg-white/20 backdrop-blur-lg rounded-lg shadow-md border border-transparent transition-all duration-200 hover:-translate-y-1 hover:border-[#456882] overflow-hidden"
                  >
                    <div className="w-full h-48 bg-white/10 backdrop-blur-lg">
                      <img
                        src={cat.imageUrl}
                        alt={cat.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-[#1B3C53] line-clamp-2">{cat.name}</h3>
                      <div className="mt-4">
                        <Link
                          href={href}
                          className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white font-semibold shadow-lg hover:scale-[1.03] hover:shadow-xl transition-all duration-200"
                        >
                          Shop Category
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })
            : products.map((product) => (
                <article
                  key={product.id}
                  className="group bg-[#D2C1B6]/20 backdrop-blur-lg rounded-lg shadow-md border border-transparent transition-all duration-200 hover:-translate-y-1 hover:border-[#456882] overflow-hidden"
                >
                  <div className="w-full h-48 bg-white/10 backdrop-blur-lg">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-[#1B3C53] line-clamp-2">{product.name}</h3>
                    <p className="mt-1 text-[#1B3C53]/80 font-medium">{typeof product.price === 'number' ? `$${product.price.toFixed(2)}` : product.price}</p>

                    <div className="mt-4 flex items-center gap-3">
                      <Link
                        href={`/product/${product.id}`}
                        className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-semibold text-white bg-[#456882] transition-colors hover:bg-[#1B3C53]"
                      >
                        View
                      </Link>
                      <button
                        className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-semibold text-[#1B3C53] bg-white/60 hover:bg-white transition-colors"
                        aria-label={`Add ${product.name} to cart`}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </article>
              ))}
        </div>
      </div>
    </section>
  );
}
