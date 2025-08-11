"use client";

import React from "react";
import Link from "next/link";
// Update the import path if Breadcrumbs is located elsewhere, for example:
import Breadcrumbs, { Crumb } from "./Breadcrumbs";
import ImageGallery from "./ImageGallery";
import ProductInfo from "./ProductInfo";
import ProductDetailsTabs from "./ProductDetailsTabs";
import RelatedProducts from "./RelatedProducts";
import Reviews from "./Reviews";
import StickyAddToCart from "./StickyAddToCart";

interface ProductDetailProps {
  params: { id: string };
}

const sampleImages = [
  "https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?w=1600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1600&q=80&auto=format&fit=crop",
];

const features = [
  "Ultra-lightweight aluminum body",
  "13.4\" InfinityEdge display",
  "Intel Evo platform performance",
  "Up to 16 hours battery life",
  "Thunderbolt 4 connectivity",
];

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = {
    id: params.id,
    title: "Dell XPS 13 Ultra Thin Laptop",
    price: 1299.99,
    oldPrice: 1499.99,
    inStock: true,
    categoryPath: [
      { name: "Home", href: "/" },
      { name: "Electronics", href: "/shop/electronics" },
      { name: "Laptops", href: "/shop/electronics/laptops" },
      { name: "Dell XPS 13", href: `/shop/${params.id}` },
    ] as Crumb[],
    images: sampleImages,
    rating: 4.6,
    reviewsCount: 124,
    description:
      "Experience premium performance and stunning visuals with the Dell XPS 13. Crafted for productivity and portability.",
    shipping:
      "Free standard shipping on orders over $50. Expedited options available at checkout.",
    returns:
      "30-day return policy. Items must be in original condition.",
  };

  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs items={product.categoryPath} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ImageGallery images={product.images} title={product.title} />

          <div>
            <ProductInfo
              title={product.title}
              rating={product.rating}
              reviewsCount={product.reviewsCount}
              price={product.price}
              oldPrice={product.oldPrice}
              inStock={product.inStock}
              features={features}
            />

            <div className="mt-10">
              <ProductDetailsTabs
                description={product.description}
                shipping={product.shipping}
                returns={product.returns}
              />
            </div>
          </div>
        </div>

        <RelatedProducts images={sampleImages} />
        <Reviews rating={product.rating} />
      </div>

      <StickyAddToCart price={product.price} />
    </main>
  );
}
