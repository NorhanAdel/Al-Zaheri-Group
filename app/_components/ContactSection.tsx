"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const items = [
  {
    icon: <Phone size={26} />,
    title: "اتصل بنا",
    value: "+966 11 232 0242",
  },
  {
    icon: <Mail size={26} />,
    title: "راسلنا",
    value: "Hala@al-dhahry-group.com",
  },
  {
    icon: <MapPin size={26} />,
    title: "قم بزيارتنا",
    value: "طريق النهضة، مجموعة شركات الظاهري، الربوة، الرياض 12821",
  },
];

export default function ContactSection() {
  return (
    <section className="relative py-24 bg-[#0f172a] overflow-hidden">
    
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
     
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl md:text-4xl font-extrabold text-white mb-16"
        >
          تواصل معنا
        </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center text-white hover:scale-105 transition"
            >
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
