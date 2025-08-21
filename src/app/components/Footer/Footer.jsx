"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-yellow-400">Linkedin</a>
          <a href="#" className="hover:text-yellow-400">Github</a>
          <a href="#" className="hover:text-yellow-400">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
