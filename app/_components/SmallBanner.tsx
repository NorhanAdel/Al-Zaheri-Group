"use client";
import { motion } from "framer-motion";

export default function FullAnimatedBanner() {
  return (
    <div className="relative w-full overflow-hidden bg-blue-950/95">
  
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      >
      
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, 50, 0], x: [0, 30, -30, 0] }}
            transition={{
              repeat: Infinity,
              duration: 6 + i * 0.3,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
            className="absolute w-3 h-3 bg-white/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>

      {/* المحتوى */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center text-center py-24 px-6 gap-6"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          هل تحتاج إلى أي استشارات تجارية؟{" "}
          <a
            href="#contact"   
            className="text-blue-400 underline hover:text-blue-300 transition"
          >
            تواصل معنا
          </a>
        </h2>

        <a
          href="#contact"  
          className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full text-lg transition"
        >
          دعونا نعمل معا
        </a>
      </motion.div>
    </div>
  );
}
