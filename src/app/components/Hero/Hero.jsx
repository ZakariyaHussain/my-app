"use client";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Empower Your Web Projects
          </h1>
          <p className="text-lg md:text-xl text-gray-100">
            Quickly build beautiful and performant websites with Next.js 15 and TailwindCSS.
            Streamline your development process and ship faster.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-4">
            <a
              href="#products"
              className="bg-yellow-400 text-gray-900 font-semibold px-8 py-4 rounded-lg hover:bg-yellow-300 transition"
            >
              Explore Products
            </a>
            <a
              href="#dashboard"
              className="border border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-700 transition"
            >
              Go to Dashboard
            </a>
          </div>
        </div>

        {/* Image or Illustration */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
          <img
            src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png"
            alt="Hero Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
