"use client";

import Hero from "@/app/_components/Hero";
import { useState } from "react";
import { articles } from "../../constants/news";
import { motion, AnimatePresence } from "framer-motion";

// ✅ نوع الـ params
type NewsDetailsProps = {
  params: {
    id: string;
  };
};

export default function NewsDetails({ params }: NewsDetailsProps) {
  const initialArticle =
    articles.find((a) => a.id.toString() === params.id) || articles[0];

  const [selectedArticle, setSelectedArticle] = useState(initialArticle);

  return (
    <>
      {/* ===== الهيرو ===== */}
      <Hero title="المقالات والأخبار" currentPage="المقالات والأخبار" />

      {/* ===== الحاوية الرئيسية ===== */}
      <div className="flex flex-col lg:flex-row gap-8 px-4 lg:px-10 xl:px-20 mt-28 mb-20">

        {/* ===== تفاصيل الخبر ===== */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedArticle.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-5 sm:p-7 rounded-3xl shadow-lg"
            >
              <div className="overflow-hidden rounded-2xl mb-6">
                <motion.img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-64 sm:h-80 lg:h-[420px] object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 text-right">
                {selectedArticle.title}
              </h1>

              <p className="text-gray-400 text-sm mb-5 text-right">
                {selectedArticle.date}
              </p>

              <p className="text-gray-700 leading-loose text-right">
                {selectedArticle.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ===== المقالات الجانبية ===== */}
        <div className="w-full lg:w-1/4 space-y-4 p-4 bg-gray-100 rounded-3xl">
          {articles.map((article) => (
            <motion.div
              key={article.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`cursor-pointer p-3 rounded-2xl ${
                selectedArticle.id === article.id
                  ? "bg-white shadow-md border-r-4 border-main"
                  : "bg-transparent hover:bg-white"
              }`}
              onClick={() => setSelectedArticle(article)}
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-32 sm:h-36 object-cover"
                />
              </div>

              <p className="mt-3 text-sm font-medium text-right line-clamp-2">
                {article.title}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </>
  );
}
