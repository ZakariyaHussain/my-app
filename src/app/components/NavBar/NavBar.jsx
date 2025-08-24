"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();

  // Helper function to check if a link is active
  const isActive = (href) => pathname === href;

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <Link href="/" className="font-bold text-xl">
        MyApp
      </Link>

      <div className="space-x-4">
        <Link
          href="/"
          className={`hover:text-blue-400 ${isActive("/") ? "text-yellow-400 font-semibold" : ""
            }`}
        >
          Home
        </Link>
        <Link
          href="/products"
          className={`hover:text-blue-400 ${isActive("/products") ? "text-yellow-400 font-semibold" : ""
            }`}
        >
          Products
        </Link>
        {session && (
          <Link
            href="/dashboard"
            className={`hover:text-blue-400 ${isActive("/dashboard") ? "text-yellow-400 font-semibold" : ""
              }`}
          >
            Dashboard
          </Link>
        )}

        {session ? (
          <>
            <span>Hi, {session.user?.name}</span>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="bg-red-600 px-3 py-1 rounded hover:bg-red-500 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => signIn("google")}
            className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-500 transition"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
