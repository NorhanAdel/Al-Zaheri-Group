"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  Calculator,
  Settings,
  Trophy,
} from "lucide-react";

const steps = [
  {
    title: "وضع الخطة",
    desc: "نبدأ بتحديد الاستراتيجية التي تناسب احتياجاتك وأهدافك",
    icon: ClipboardList,
    number: "01",
  },
  {
    title: "تحديد التكلفة",
    desc: "نحسب التكلفة بدقة لضمان الحصول على أعلى قيمة ضمن الميزانية",
    icon: Calculator,
    number: "02",
  },
  {
    title: "تنفيذ المشروع",
    desc: "نقوم بمتابعة التنفيذ لضمان تقدم العمل بكفاءة وجودة عالية",
    icon: Settings,
    number: "03",
  },
  {
    title: "تحقيق النجاح",
    desc: "نحرص على إنهاء المشروع بنجاح وتحقيق أهدافك بكل احترافية",
    icon: Trophy,
    number: "04",
  },
];

export default function WorkSteps() {
  return (
    <section className="relative w-full py-28 bg-[#f8fafc] overflow-hidden">
      
    
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(30,64,175,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        
   
       <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10 relative inline-block"
        >
          خطوات العمل الأساسية
        <motion.span
            className="absolute right-0 -bottom-2 h-1 w-0 bg-[#2845D6] rounded-full"
            animate={{ width: ["0%", "100%"] }}
            transition={{ repeat: Infinity, repeatType: "mirror", duration: 1.5 }}
          />
        </motion.h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="relative bg-white rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100"
              >
                {/* Number */}
                <span className="absolute top-6 left-6 text-6xl font-extrabold text-blue-100">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-blue-50 text-blue-700 relative z-10">
                  <Icon size={28} />
                </div>

            
                <h3 className="text-xl font-bold text-[#0f172a] mb-3 relative z-10">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                  {step.desc}
                </p>

          
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-blue-600/5 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
