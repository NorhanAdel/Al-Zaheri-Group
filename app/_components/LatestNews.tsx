"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type NewsItem = {
  title: string;
  date: string;
  image: string;
};

type LatestNewsProps = {
  news: NewsItem[];
};

export default function LatestNews({ news }: LatestNewsProps) {
  return (
    <div className="bg-gray-100 rounded-3xl p-6 shadow-sm space-y-6">
      <h3 className="text-lg font-bold">آخر المقالات</h3>

      {news.map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.03 }}
          className="flex gap-4 items-center"
        >
          <div className="relative w-20 h-16 rounded-xl overflow-hidden">
            <Image src={item.image} alt={item.title} fill className="object-cover" />
          </div>

          <div className="text-sm space-y-1">
            <span className="text-gray-400 text-xs">{item.date}</span>
            <p className="font-semibold leading-snug">
              {item.title}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
