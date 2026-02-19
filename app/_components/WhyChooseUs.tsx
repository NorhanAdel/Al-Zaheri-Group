"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const items = [
  {
    title: "د/ محمد بن صالح الظاهري",
    content: "الشيخ الدكتور / محمد بن صالح الظاهري صاحب و رئيس مجلس الإدارة من الوجوه الاقتصادية و الاجتماعية البارزة في المملكة العربية السعودية و الخليج ومن الرواد الذين ساهموا في إنشاء البنية التحتية في المملكة في الثمانينات و قد كان له دورا بارزا في التنمية الاقتصادية.",
  },
  {
    title: "نظرة عامة",
    content: `
تُعد مجموعة شركات الظاهري من الشركات الرائدة في المملكة العربية السعودية ومنطقة الخليج.
تأسست عام 1403هـ – 1983م على يد الشيخ الدكتور محمد بن صالح الظاهري.
بدأت أعمالها في قطاع المقاولات، ثم توسعت لتضم أكثر من (10) فروع وشركات
تغطي مجالات متعددة تشمل المقاولات، الإعاشة، الخدمات، التشغيل، والتوكيلات التجارية.
    `,
  },
  {
    title: "الرؤية والرسالة",
    content: `
نسعى إلى تقديم حلول أعمال متكاملة وفق أعلى معايير الجودة،
مع الالتزام بالاحترافية والاستدامة وبناء شراكات استراتيجية طويلة الأمد
تعزز من نمو الأعمال وتحقق قيمة حقيقية لعملائنا.
    `,
  },
];

export default function WhyChooseUsLight() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section className="relative w-full py-28 bg-gradient-to-b from-[#f7f6f2] via-[#fdfdfc] to-[#f7f6f2] overflow-hidden">
      
   
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(107,124,89,0.12),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6 text-gray-800">
      
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl md:text-4xl font-extrabold mb-20 relative"
        >
          لماذا تختارنا؟ نحن من ذوي الخبرة في حلول الأعمال

      <motion.span
  className="absolute left-1/2 -bottom-3 h-1 bg-[#2845D6] rounded-full"
  style={{ transform: "translateX(-50%)" }}
  animate={{ width: ["0%", "140px"] }}
  transition={{
    duration: 1.6,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  }}
/>

        </motion.h2>

        {/* Accordion */}
        <div className="space-y-8">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl overflow-hidden
                bg-white
                border border-gray-200
                shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
              >
                {/* Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-8 py-6
                  text-right text-lg md:text-xl font-semibold
                  hover:bg-[#f4f5f1] transition"
                >
                  <span>{item.title}</span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.35 }}
                    className="text-[#6b7c59]"
                  >
                    <ChevronDown size={22} />
                  </motion.span>
                </button>

                {/* Content */}
                <AnimatePresence>
                  {isOpen && item.content && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45 }}
                      className="px-8 pb-8 text-sm md:text-base leading-relaxed
                      text-gray-600 bg-[#fafafa]"
                    >
                      {item.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
