"use client";

export default function ProductHighlights() {
  // Example products array
  const products = [
    {
      title: "Fast Performance",
      description: "Our app runs lightning fast on all devices.",
    },
    {
      title: "Secure & Reliable",
      description: "Your data is safe with top-notch security features.",
    },
    {
      title: "User-Friendly",
      description: "Easy to use interface with a clean design.",
    },
    {
      title: "24/7 Support",
      description: "We provide round-the-clock support for all users.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Product Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
