import Link from "next/link";

export default async function ProductDetails({ params }) {
  const { id } = params;

  // Fetch single product from API
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store", // ensures fresh data every request
  });

  if (!res.ok) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-10 text-center">
        <h1 className="text-2xl font-bold mb-4">Failed to load product</h1>
      </div>
    );
  }

  const product = await res.json();

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="w-64 h-64 object-contain mb-6"
      />
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-xl font-bold mb-6">${product.price}</p>
      <Link
        href="/products"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition"
      >
        Back to Products
      </Link>
    </div>
  );
}

