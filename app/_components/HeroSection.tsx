"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center bg-gradient-to-r from-gray-800 via-blue-900 to-gray-700 overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Animated Background Circles */}
      <motion.div
        className="absolute w-72 h-72 bg-white/5 rounded-full top-10 left-20"
        animate={{ x: [0, 50, 0], y: [0, 30, 0], rotate: [0, 180, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-48 h-48 bg-white/5 rounded-full bottom-20 right-32"
        animate={{ x: [0, -40, 0], y: [0, -20, 0], rotate: [0, -180, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-60 h-60 bg-white/10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />

      {/* Content */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl text-center px-6"
      >
        {/* Title with animated underline */}
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight inline-block relative"
        >
          مرحبا بك في <span className="text-[#F68048]">شركات الظاهري</span>

          {/* Underline */}
          <motion.span
            className="absolute left-0 -bottom-2 h-[4px] w-0 bg-[#F68048] rounded-full"
            animate={{ width: ["0%", "100%"] }}
            transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "mirror" }}
          />
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl text-white/90 mb-8"
        >
          هى احدى الشركات الرائدة فى المملكة العربية السعودية ومنطقة الخليج.
          تأسست فى عام 1983 كفرع للمقاولات فى البداية، وطورت الشركة نشاطها إلى مجموعة متكاملة من عشرة فروع متنوعة الأنشطة في مختلف المجالات حتى الآن.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          href="#about"
          className="inline-block bg-[#F68048] hover:bg-yellow-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition"
        >
          اكتشف المزيد
        </motion.a>
      </motion.div>
    </section>
  );
}
