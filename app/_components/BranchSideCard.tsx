"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function BranchSideCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        sticky top-32
        bg-gradient-to-b from-[#0b1a33] to-[#050c1f]
        rounded-3xl p-10 text-white
        flex flex-col items-center text-center
        min-h-[620px]
        justify-between
      "
    >
      {/* اللوجو */}
      <div className="bg-white rounded-2xl mb-5 p-5">
        <Image src="/l.png" alt="logo" width={250} height={200} />
      </div>

      {/* النص */}
      <div>
        <h4 className="text-2xl font-bold mb-3">
          هل تحتاج إلى مساعدة؟
        </h4>

        <p className="text-base text-gray-300 mb-5">
          أي استفسار أو طلب تواصل معنا مباشرة
        </p>
      </div>

      {/* ===== قسم التحميل ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-white/5 mb-10 rounded-2xl p-6 space-y-4"
      >
        <h5 className="font-semibold text-lg">كتيباتنا</h5>

        <a
          href="/Business_download.pdf"
          download
          className="
            flex items-center justify-between
            bg-white/10 hover:bg-white/20
            transition rounded-xl px-5 py-4
          "
        >
          <div className="text-right">
            <p className="font-medium">Business_download</p>
            <span className="text-sm text-gray-300">تحميل</span>
          </div>

          <Download className="w-6 h-6 text-blue-400" />
        </a>
      </motion.div>

      {/* زر التواصل */}
      <a
        href="/contact"
        className="
          bg-blue-600 hover:bg-blue-500 transition
          px-8 py-4 rounded-full font-semibold text-lg
        "
      >
        تواصل معنا
      </a>
    </motion.div>
  );
}
