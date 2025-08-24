// import Link from "next/link";
// import products from "../data/products";

// export default function ProductsPage() {
//   return (
//     <div className="max-w-6xl mx-auto px-6 py-10">
//       <h1 className="text-3xl font-bold mb-8 text-center">Products</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div key={product.id} className="border p-6 rounded-lg shadow hover:shadow-lg transition">
//             <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
//             <p className="text-gray-600 mb-4">{product.description}</p>
//             <p className="font-bold mb-4">${product.price.toFixed(2)}</p>
//             {/* <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition">
//               Details
//             </button> */}
//             <Link
//               href={`/products/${product.id}`}
//               className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition"
//             >
//               Details
//             </Link>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import Link from "next/link";

export default async function Products() {
  // Fetch all products
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  const products = await res.json();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-2 line-clamp-2">
                {product.description}
              </p>
              <p className="font-bold mb-4">${product.price}</p>
              <Link
                href={`/products/${product.id}`}
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition"
              >
                Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
