"use client";

import { motion } from "framer-motion";
import { PhoneCall, SearchCheck, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "التواصل السريع",
    desc: "اتصل بنا أو املأ النموذج عبر الإنترنت لتوضيح احتياجاتك",
    icon: PhoneCall,
  },
  {
    number: "02",
    title: "التحليل والتقييم",
    desc: "نقوم بتحليل مشكلتك أو طلبك ونقدم لك الحل الأنسب",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "التنفيذ والمتابعة",
    desc: "ننفذ الحل بسرعة ونتابع لضمان رضاك التام",
    icon: Rocket,
  },
];

export default function EasySteps() {
  return (
    <section className="relative w-full py-28 bg-[#f9fafb] overflow-hidden">
      
      {/* خلفية ناعمة */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4"
        >
          حلولك بانتظارك في 3 خطوات سهلة
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-3xl mx-auto text-gray-600 mb-20"
        >
          نحن هنا لجعل الأمور أكثر بساطة لك. باتباع هذه الخطوات الثلاث السهلة،
          سنضمن معالجة مشكلتك أو احتياجاتك بسرعة وفعالية، دون أي تعقيدات
        </motion.p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                whileHover={{ y: -12 }}
                className="relative bg-white rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100"
              >
                {/* رقم الخطوة */}
                <span className="absolute -top-6 right-8 text-6xl font-extrabold text-blue-100">
                  {step.number}
                </span>

                {/* أيقونة */}
                <motion.div
                  className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-blue-50 text-blue-700"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <Icon size={30} />
                </motion.div>

                {/* المحتوى */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>

                {/* إضاءة Hover */}
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
