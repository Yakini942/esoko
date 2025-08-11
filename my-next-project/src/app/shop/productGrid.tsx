"use client";
import { useState } from "react";
// ...existing code...

const products = [
	{
		id: 1,
		name: "Premium Wireless Headphones",
		price: 199.99,
		rating: 4.8,
		reviews: 128,
		image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
	},
	{
		id: 2,
		name: "Smart Fitness Tracker",
		price: 149.99,
		rating: 4.5,
		reviews: 94,
		image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80",
	},
	{
		id: 3,
		name: "Organic Cotton T-Shirt",
		price: 29.99,
		rating: 4.7,
		reviews: 256,
		image: "https://images.unsplash.com/photo-1526178613658-3f1622045544?auto=format&fit=crop&w=400&q=80",
	},
	{
		id: 4,
		name: "Stainless Steel Water Bottle",
		price: 19.99,
		rating: 4.6,
		reviews: 87,
		image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
	},
	{
		id: 5,
		name: "Modern Desk Lamp",
		price: 59.99,
		rating: 4.4,
		reviews: 45,
		image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
	},
	{
		id: 6,
		name: "Running Shoes",
		price: 89.99,
		rating: 4.3,
		reviews: 102,
		image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
	},
	{
		id: 7,
		name: "Bluetooth Speaker",
		price: 49.99,
		rating: 4.5,
		reviews: 76,
		image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
	},
	{
		id: 8,
		name: "Leather Wallet",
		price: 39.99,
		rating: 4.2,
		reviews: 61,
		image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
	},
	{
		id: 9,
		name: "Yoga Mat",
		price: 24.99,
		rating: 4.6,
		reviews: 89,
		image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
	},
	{
		id: 10,
		name: "Desk Organizer",
		price: 14.99,
		rating: 4.1,
		reviews: 33,
		image: "https://images.unsplash.com/photo-1465101178521-c1a4c8a0a8b7?auto=format&fit=crop&w=400&q=80",
	},
	{
		id: 11,
		name: "Wireless Mouse",
		price: 25.99,
		rating: 4.3,
		reviews: 54,
		image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
	},
	{
		id: 12,
		name: "Ceramic Mug",
		price: 12.99,
		rating: 4.7,
		reviews: 120,
		image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
	},
];




// ...existing code...

type Product = {
	id: number;
	name: string;
	price: number;
	imageUrl: string;
};

type ProductGridProps = {
	products: Product[];
};

import Image from "next/image";
export default function ProductGrid({ products }: ProductGridProps) {
	return (
		<div className="py-8">
			<section>
				<div className="flex items-center justify-between mb-4">
					<h2 className="text-xl font-bold">Products ({products.length})</h2>
					{/* Sort and view controls can be added here if needed */}
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					{products.map((p) => (
						<div
							key={p.id}
							className="bg-white rounded-lg shadow p-4 flex flex-col"
						>
							<Image
								src={p.imageUrl}
								alt={p.name}
								width={400}
								height={160}
								className="h-40 w-full object-cover mb-4 rounded"
							/>
							<div className="font-semibold text-lg mb-1">{p.name}</div>
							<div className="font-bold text-xl mb-2">
								${p.price.toFixed(2)}
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
// ...existing code...
}
