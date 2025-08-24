
"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">Login</h1>

        <button
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          // className="flex items-center justify-center w-full gap-2 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500 transition"
          className="flex items-center justify-center gap-3 w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition font-medium"
        >
          <FcGoogle size={22} />
          Login with Google
        </button>
      </div>
    </div>
  );
}
