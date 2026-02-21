"use client";

import Hero from "@/app/_components/Hero";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ نوع المقال
type Article = {
  id: number;
  title: string;
  description: string;
  image: string;
  day: string;
  month: string;
  content: string;
};

// ✅ نوع الـ params
type NewsDetailsProps = {
  params: {
    id: string;
  };
};

// ✅ بيانات المقالات
export const articles: Article[] = [
  {
    id: 1,
    title: "أكثر من 3 مليارات دولار استثمار",
    description:
      "هاهي بلادي الغالية المملكة العربية السعودية تحتفل بذكرى اليوم الوطني الـ 89 وهي شامخة وعزيزة...",
    image: "/2025-Oct-Tue_68f7898a3b12c.png",
    day: "21",
    month: "أكتوبر",
    content: "تفاصيل الخبر بالكامل...",
  },
  {
    id: 2,
    title: "نمو استثمارات المجموعة",
    description: "تفاصيل الخبر حول نمو استثمارات المجموعة...",
    image: "/2025-Oct-Tue_68f7898a3b12c.png",
    day: "21",
    month: "أكتوبر",
    content: "تفاصيل الخبر بالكامل...",
  },
  {
    id: 3,
    title: "توسع إقليمي جديد",
    description: "تفاصيل الخبر حول التوسع الإقليمي الجديد...",
    image: "/2025-Oct-Tue_68f7898a3b12c.png",
    day: "21",
    month: "أكتوبر",
    content: "تفاصيل الخبر بالكامل...",
  },
];

// ===== الصفحة الرئيسية لتفاصيل الخبر =====
export default function NewsDetails({ params }: NewsDetailsProps) {
  const initialArticle =
    articles.find((a) => a.id.toString() === params.id) || articles[0];

  const [selectedArticle, setSelectedArticle] = useState<Article>(initialArticle);

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

              {/* عرض اليوم والشهر بدل date */}
              <p className="text-gray-400 text-sm mb-5 text-right">
                {selectedArticle.day} {selectedArticle.month}
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
