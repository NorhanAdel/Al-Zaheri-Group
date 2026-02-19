"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function AboutUsSection() {
  const tabs = [
    { id: "overview", label: "نظرة عامة" },
    { id: "founder", label: "د/ محمد بن صالح الظاهري" },
    { id: "vision", label: "الرؤية والرسالة" },
  ];

  const content = {
    overview: `مجموعة شركات الظاهري هى احدى الشركات الرائدة فى المملكة العربية السعودية ومنطقة الخليج تأسست فى عام 1983 كفرع للمقاولات فى البداية، وطورت الشركة نشاطها إلى مجموعة متكامله من عشرة فروع متنوعة الأنشطة في مختلف المجالات حتى الان.`,
    founder: `تأسست مجموعة شركات الظاهري عام 1403 هـ - 1983 م بواسطة الشيخ الدكتور / محمد بن صالح الظاهري وبدأت بقطاع المقاولات إلى أن أمتد نشاطها إلي (10) فروع وشركات في مختلف النشاطات.`,
    vision: `تعتبر مجموعة شركات الظاهري وفروعها من الشركات الرائدة في المملكة العربية السعودية ومنطقة الخليج، وتشمل الإعاشة والخدمات والتشغيل و مقاولون عامون و فرع التوكيلات التجارية.`,
  };

  const fixedText = `احصل على الاستشارات لتحقيق نمو أفضل للأعمال.
مجموعة شركات الظاهرى هى احدى الشركات الرائدة فى المملكة العربية السعودية ومنطقة الخليج تأسست فى عام 1983 كفرع للمقاولات فى البداية، وطورت الشركة نشاطها إلى مجموعة متكامله من عشرة فروع متنوعة الأنشطة في مختلف المجالات حتى الان.`;

 
  const imageSrc = "/s2.jpg";  

  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">
        اعرف أكثر عنا
      </h2>

      {/* النص الثابت */}
      <p className="text-center text-gray-800 text-lg md:text-xl mb-12 leading-relaxed">
        {fixedText}
      </p>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 rounded-full font-semibold transition
              ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center gap-10 bg-white dark:bg-[#0a0f23] p-6 md:p-10 rounded-xl shadow-lg">
        {/* النص المتغير */}
        <div className="md:w-1/2 text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {tabs.find((t) => t.id === activeTab).label}
              </h3>
              <p>{content[activeTab]}</p>
            </motion.div>
          </AnimatePresence>
        </div>

    
        <div className="md:w-1/2 relative h-64 md:h-80 rounded-xl overflow-hidden shadow-md">
          <Image
            src={imageSrc}
            alt="عن الشركة"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105 rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
