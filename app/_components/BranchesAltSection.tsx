"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const branches = [
  { title: "فرع وجار الخليج لمعدات المطابخ", image: "/s3.jpg", audio: "/audio1.mp3" },
  { title: "فرع المواد الغذائية والإعاشة وخدمات التشغيل", image: "/s4.jpg", audio: "/audio2.mp3" },
  { title: "فرع الأسواق المركزية والمطاعم", image: "/s5.jpg", audio: "/audio3.mp3" },
  { title: "فرع وجار الخليج لمعدات المطابخ", image: "/s3.jpg", audio: "/audio4.mp3" },
  { title: "فرع المواد الغذائية والإعاشة وخدمات التشغيل", image: "/s4.jpg", audio: "/audio5.mp3" },
  { title: "فرع الأسواق المركزية والمطاعم", image: "/s5.jpg", audio: "/audio6.mp3" },
  { title: "فرع المواد الغذائية والإعاشة وخدمات التشغيل", image: "/s4.jpg", audio: "/audio7.mp3" },
  { title: "فرع الأسواق المركزية والمطاعم", image: "/s5.jpg", audio: "/audio8.mp3" },
];

export default function BranchesAltSection() {
  return (
    <section className="relative py-28 bg-[#050c1f] overflow-hidden">
      {/* خلفية */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_65%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* العنوان */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl md:text-4xl font-extrabold text-white mb-20"
        >
          الفروع التي نقدمها
        </motion.h2>

        {/* البطاقات */}
        <div className="grid md:grid-cols-4 gap-8">
          {branches.map((branch, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group relative h-[440px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500"
            >
              {/* الصورة */}
              <div className="relative h-full w-full">
                <Image
                  src={branch.image}
                  alt={branch.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* المحتوى أسفل الكارت */}
              <div className="absolute bottom-0 p-6 w-full bg-black/30 backdrop-blur-sm rounded-t-3xl">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-snug">
                  {branch.title}
                </h3>

                {/* ملف صوتي */}
                <audio controls className="w-full rounded-lg">
                  <source src={branch.audio} type="audio/mpeg" />
                  متصفحك لا يدعم تشغيل الصوت
                </audio>

                {/* زر معرفة المزيد */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="mt-3 w-full py-2 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 transition"
                >
                  معرفة المزيد
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
