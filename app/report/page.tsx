"use client";

import NewsHero from "../_components/NewsHero";
import LatestNews from "../_components/LatestNews";
import BranchSideCard from "../_components/BranchSideCard";
import { news } from "../constants/news";
import Hero from "../_components/Hero";

export default function NewsPage() {
  const mainNews = news[0];

  return (
<>
       <Hero title="   الاخبار" currentPage=  "الاخبار"/>
    <div className="max-w-7xl mx-auto my-20 px-6 mt-24 grid grid-cols-1 lg:grid-cols-5 gap-12">
      
      {/* ===== المقال الرئيسي ===== */}
      <div className="lg:col-span-3 space-y-10">
        <NewsHero news={mainNews} />
      </div>

      {/* ===== السايد ===== */}
      <div className="lg:col-span-2 space-y-8">
        <LatestNews news={news.slice(1, 4)} />
        <BranchSideCard />
      </div>

          </div>
          </>
  );
}
