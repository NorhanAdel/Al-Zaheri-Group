"use client";

import { useState } from "react";
import NewsCard from "../_components/NewsCard";
import { articles } from "../constants/news";
import Hero from "../_components/Hero";

const ITEMS_PER_PAGE = 6;

export default function NewsPage() {
  const [page, setPage] = useState(1);

  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;

  const currentNews = articles.slice(start, end);
  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);

    return (
      <>
         <Hero title=" المقالات والاخبار  " currentPage=" المقالات والاخبار  " />

    <div className="max-w-7xl mx-auto px-6 mt-24 mb-28">

      {/* ===== Grid المقالات ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {currentNews.map((item) => (
          <NewsCard key={item.id} news={item} />
        ))}
      </div>
      {/* ===== Pagination ===== */}
      <div className="flex justify-center gap-3 mt-16">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`w-12 h-12 rounded-2xl border cursor-pointer
              ${page === i + 1
                ? "bg-[#c9a46a] text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
            </div>
            </>
  );
}
