"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function NewsHero({ news }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div className="relative h-[420px] rounded-3xl overflow-hidden">
        <Image
          src={news.image}
          alt={news.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <h1 className="text-3xl font-bold leading-relaxed">{news.title}</h1>

      <p className="text-gray-600 leading-relaxed">{news.description}</p>
    </motion.div>
  );
}
