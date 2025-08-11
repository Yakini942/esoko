import { Metadata, ResolvingMetadata } from 'next';

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

const sampleImages = [
  'https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?w=1600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1600&q=80&auto=format&fit=crop',
];

// Mock product data fetching (replace with actual API call)
async function fetchProduct(id: string) {
  return {
    id,
    name: `Product ${id}`,
    description: `This is a high-quality product with ID ${id}.`,
    price: 99.99,
    category: 'Electronics',
    images: sampleImages,
    reviews: [
      { rating: 4, comment: 'Great product!', user: 'John Doe' },
      { rating: 5, comment: 'Amazing quality!', user: 'Jane Smith' },
    ],
    relatedProducts: [
      { id: '1', name: 'Related Product 1', price: 79.99 },
      { id: '2', name: 'Related Product 2', price: 89.99 },
    ],
  };
}

export type ProductPageProps = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: ProductPageProps,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const product = await fetchProduct(params.id);

  return {
    title: `${product.name} | Your Store`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images[0],
      url: `https://yourstore.com/shop/${params.id}`,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await fetchProduct(params.id);

  if (!product) {
    return (
      <div>
        <h1>Product Not Found</h1>
        <Link href="/">Back to Home</Link>
      </div>
    );
  }

  // Fix Crumb type: use 'name' instead of 'label'
  const breadcrumbs: Crumb[] = [
    { name: 'Home', href: '/' },
    { name: product.category, href: `/category/${product.category.toLowerCase()}` },
    { name: product.name, href: `/shop/${product.id}` },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Fix Breadcrumbs prop name */}
      <Breadcrumbs items={breadcrumbs} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Fix ImageGallery required prop 'title' */}
        <ImageGallery images={product.images} title={product.name} />
        <div>
          {/* Fix ProductInfo props: use title, rating, reviewsCount, price, oldPrice, inStock, features */}
          <ProductInfo
            title={product.name}
            rating={product.reviews[0]?.rating || 5}
            reviewsCount={product.reviews.length}
            price={product.price}
            oldPrice={undefined}
            inStock={true}
            features={['Feature 1', 'Feature 2']}
          />
          {/* Fix StickyAddToCart props: only pass price */}
          <StickyAddToCart price={product.price} />
        </div>
      </div>
      {/* Fix ProductDetailsTabs required props */}
      <ProductDetailsTabs description={product.description} shipping="Free shipping" returns="30-day returns" />
      {/* Fix Reviews: only pass rating */}
      <Reviews rating={product.reviews[0]?.rating || 5} />
      {/* Fix RelatedProducts: only pass images */}
      <RelatedProducts images={product.images} />
    </div>
  );
}
