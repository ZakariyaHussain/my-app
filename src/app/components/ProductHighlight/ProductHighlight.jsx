
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductHighlights() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from API
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data.slice(0, 4)); // only show first 4 as highlights
      } catch (error) {
        console.error("Failed to load products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-gray-50 text-center">
        <p className="text-gray-600">Loading highlights...</p>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50 space-y-6">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Product Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 line-clamp-1">
                {product.title}
              </h3>
              <p className="text-gray-600 mb-2 line-clamp-2">
                {product.description}
              </p>
              <p className="font-bold mb-4">${product.price.toFixed(2)}</p>

              <Link
                href={`/products/${product.id}`}
                className="mt-auto bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link
          href={`/products`}
          className="bg-gray-800 text-white py-2 px-6 rounded hover:bg-gray-700 transition"
        >
          Show All Products
        </Link>
      </div>
    </section>
  );
}
