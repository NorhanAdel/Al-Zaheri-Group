"use client";

import { motion } from "framer-motion";

export default function AdminDashboard() {
  const stats = [
    { title: "Applications", value: 120 },
    { title: "Accepted", value: 35 },
    { title: "Pending", value: 60 },
    { title: "Rejected", value: 25 },
  ];

  return (
    <div className="p-6 my-32">
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-xl shadow"
          >
            <h3 className="text-gray-500">{item.title}</h3>
            <p className="text-2xl font-bold">{item.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
