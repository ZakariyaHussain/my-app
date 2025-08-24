"use client";

import Link from "next/link";

export default function Dashboard() {
    return (
        <div className="min-h-screen flex">
            {/* Main Content */}
            <main className="flex-1 p-10">
                <h1 className="text-3xl font-bold mb-6">Welcome to Dashboard</h1>
                <p className="text-gray-700">
                    Select an option from the sidebar to manage your store.
                </p>
            </main>
        </div>
    );
}
