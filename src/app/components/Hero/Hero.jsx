"use client";

export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to MyApp
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Build amazing websites quickly with Next.js 15 and TailwindCSS
        </p>
        <a
          href="#"
          className="bg-yellow-400 text-gray-900 font-semibold px-8 py-4 rounded-lg hover:bg-yellow-300 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
