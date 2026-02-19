"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-64 bg-white shadow-lg p-6"
      >
        <h2 className="text-xl font-bold mb-10 text-blue-600">
          Admin Panel
        </h2>

        <nav className="space-y-4">
          <Link href="/admin" className="block hover:text-blue-600">
            Dashboard
          </Link>
          <Link href="/admin/news" className="block hover:text-blue-600">
            News
          </Link>
         
          <Link href="/admin/jobs" className="block hover:text-blue-600">
            Jobs
          </Link>
          <Link href="/admin/Applications" className="block hover:text-blue-600">
            Applications
          </Link>
        </nav>
      </motion.aside>

      {/* Content */}
      <main className="flex-1 p-10">{children}</main>
    </div>
  );
}
