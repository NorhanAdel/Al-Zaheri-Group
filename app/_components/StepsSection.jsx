"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "التواصل السريع",
    desc: "اتصل بنا أو املأ النموذج عبر الإنترنت لتوضيح احتياجاتك",
  },
  {
    number: "02",
    title: "التحليل والتقييم",
    desc: "نقوم بتحليل مشكلتك أو طلبك ونقدم لك الحل الأنسب",
  },
  {
    number: "03",
    title: "التنفيذ والمتابعة",
    desc: "ننفذ الحل بسرعة ونتابع لضمان رضاك التام",
  },
];

export default function StepsSection() {
  return (
    <section className="max-w-4xl  py-20">
      {/* العنوان */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=" mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b1a33] mb-4">
          حلولك بانتظارك في 3 خطوات سهلة
        </h2>
        <p className="text-gray-500 max-w-3xl   leading-relaxed">
          نحن هنا لجعل الأمور أكثر بساطة لك. باتباع هذه الخطوات الثلاث السهلة،
          سنضمن معالجة مشكلتك أو احتياجاتك بسرعة وفعالية، دون أي تعقيدات.
        </p>
      </motion.div>

      {/* الكروت */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -8 }}
            className="bg-white border border-gray-100 rounded-2xl p-10 text-center shadow-sm hover:shadow-lg transition"
          >
            {/* الدائرة */}
            <div className="relative flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-pink-100 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#caa46a] flex items-center justify-center text-white text-xl font-bold">
                  {step.number}
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#0b1a33] mb-3">
              {step.title}
            </h3>

            <p className="text-gray-500 leading-relaxed text-sm">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
