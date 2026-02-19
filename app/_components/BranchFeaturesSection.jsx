"use client";

import { motion } from "framer-motion";
import { Headphones, TrendingUp, DollarSign, Users } from "lucide-react";

const features = [
  {
    title: "خدمة عالية الجودة 24/7",
    desc: "خدماتنا متاحة على مدار الساعة لضمان الجودة في كل وقت.",
    icon: Headphones,
  },
  {
    title: "نمو الأعمال الفوري",
    desc: "تحقيق تقدم سريع في نمو أعمالك معنا.",
    icon: TrendingUp,
  },
  {
    title: "خدمة الجودة والتكلفة",
    desc: "نقدم توازنًا مثاليًا بين الجودة والتكلفة.",
    icon: DollarSign,
  },
  {
    title: "خدمة العملاء سهلة",
    desc: "نحن هنا لتقديم خدمة عملاء مريحة وسهلة.",
    icon: Users,
  },
];

export default function BranchFeaturesSection() {
  return (
    <section className="max-w-4xl my-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white rounded-2xl shadow-md p-8 flex justify-between items-start"
            >
             
              <span className="absolute right-0 top-0 h-full w-1 bg-blue-600 rounded-tr-2xl rounded-br-2xl" />

            
              <div className="space-y-3 pr-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">“{item.desc}”</p>
              </div>

              {/* الأيقونة */}
              <div className="text-red-500">
                <Icon size={34} strokeWidth={1.8} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
