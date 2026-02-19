"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Rocket,
  Star,
  Users,
  Award,
  Headphones,
  Phone,
} from "lucide-react";

const features = [
  { icon: Rocket, text: "مبيعات سريعة النمو" },
  { icon: Star, text: "خدمات عالية الجودة 24/7" },
  { icon: Users, text: "أعضاء خبراء" },
  { icon: Award, text: "خدمات ذات جودة عالية" },
  { icon: Headphones, text: "فريق الدعم متواجد 24/7" },
];

export default function PerformanceSection() {
  return (
    <section className="relative w-full py-28 bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#fdfefe]">
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-right space-y-10 mr-28"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            نحن نركز على الحصول على{" "}
            <span className="text-indigo-600">أداء ممتاز</span>
          </h2>

          <p className="text-gray-600 text-lg max-w-xl ml-auto">
            مبيعات سريعة النمو – خدمات عالية الجودة 24/7 – أعضاء خبراء لخدمة عملائنا
            لنقدم أفضل أداء ممكن.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-md"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-indigo-100 p-3 rounded-lg"
                >
                  <item.icon className="text-indigo-600 w-6 h-6" />
                </motion.div>

                <span className="font-medium text-gray-800">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-full shadow-lg cursor-pointer"
          >
            <Phone className="w-5 h-5" />
            +966112320242
          </motion.a>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <motion.div
            className="relative w-[420px] h-[420px] z-10"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/s2.jpg"
              alt="Office"
              fill
              className="object-cover rounded-xl shadow-xl"
              priority
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
