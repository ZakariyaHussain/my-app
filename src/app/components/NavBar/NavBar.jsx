// "use client";

// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav className="w-full bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
//       <h1 className="text-xl font-bold">MyApp</h1>
//       <div className="space-x-6">
//         <Link href="/" className="hover:text-yellow-300">Home</Link>
//         <Link href="/products" className="hover:text-yellow-300">Products</Link>
//         <Link href="/login" className="hover:text-yellow-300">Login</Link>
//       </div>
//     </nav>
//   );
// }


"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">MyApp</h1>
      <div className="space-x-6">
        <Link href="/" className="hover:text-yellow-300">Home</Link>
        <Link href="/products" className="hover:text-yellow-300">Products</Link>
        <Link href="/login" className="hover:text-yellow-300">Login</Link>
      </div>
    </nav>
  );
}
