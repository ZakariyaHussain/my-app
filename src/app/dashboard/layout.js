import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function DashboardLayout({ children }) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-red-600 font-bold">
                    You must be logged in to access the dashboard.
                </p>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 text-white p-6 space-y-4">
                <h2 className="text-xl font-bold mb-6">Dashboard</h2>
                <nav className="space-y-2">
                    <Link href="/dashboard" className="block hover:text-blue-400">Home</Link>
                    <Link href="/dashboard/addProduct" className="block hover:text-blue-400">Add Product</Link>
                </nav>
            </aside>

            {/* Main content */}
            <main className="flex-1 bg-gray-50 p-8">{children}</main>
        </div>
    );
}
