"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type HeroProps = {
  title: string;
  currentPage: string;
};

export default function Hero({ title, currentPage }: HeroProps) {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      <Image
        src="/s2.jpg"
        alt={title}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-right text-white"
        >
          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 bg-white/90 text-gray-800 px-4 py-2 rounded-full mb-6 text-sm font-medium">
            <a href="/" className="hover:text-blue-600 transition">
              الرئيسية
            </a>
            <span className="text-blue-600">/</span>
            <span>{currentPage}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold">{title}</h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="h-1 bg-blue-500 mt-4 ml-auto rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
