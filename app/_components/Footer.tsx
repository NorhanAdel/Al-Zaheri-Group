"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const branches = [
    { name: "فرع الأسواق المركزية والمطاعم", path: "/branches/markets" },
    { name: "فرع المواد الغذائية والإعاشة وخدمات التشغيل", path: "/branches/food" },
    { name: "فرع وجار الخليج لمعدات المطابخ", path: "/branches/kitchens" },
    { name: "فرع المقاولات العامة", path: "/branches/contracting" },
    { name: "فرع القعقاع للخدمات الأمنية", path: "/branches/security" },
  ];

  const contact = [
    { label: "اتصل بنا", value: "966112320242+", href: "tel:+966112320242" },
    { label: "ايميل", value: "Hala@al-dhahry-group.com", href: "mailto:Hala@al-dhahry-group.com" },
    { label: "موقعنا", value: "طريق النهضة، مجموعة شركات الظاهري، الربوة، الرياض 12821" },
  ];

  return (
    <footer className="relative w-full overflow-hidden bg-gray-900 text-white">
   
      <motion.div
        className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-yellow-400 via-transparent to-yellow-400 opacity-10 blur-3xl"
        animate={{ x: [-100, 100, -100] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      />

    
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-[#2845D6] rounded-full opacity-20"
          animate={{
            x: [0, Math.random() * 150 - 75, 0],
            y: [0, Math.random() * 60 - 30, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 10 + Math.random() * 10,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-10 relative inline-block">
              مجموعة شركات الظاهرى
              <motion.span
                className="absolute left-0 -bottom-2 h-1 w-0 bg-[#2845D6] rounded-full"
                animate={{ width: ["0%", "100%"] }}
                transition={{ repeat: Infinity, repeatType: "mirror", duration: 1.5 }}
              />
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              هى احدى الشركات الرائدة فى المملكة العربية السعودية ومنطقة الخليج.
            </p>
          </motion.div>

          {/* Branches */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-10 relative inline-block">
              أهم فروعنا
              <motion.span
                className="absolute left-0 -bottom-2 h-1 w-0 bg-[#2845D6] rounded-full"
                animate={{ width: ["0%", "100%"] }}
                transition={{ repeat: Infinity, repeatType: "mirror", duration: 1.5 }}
              />
            </h3>
            <ul className="text-gray-300 text-sm space-y-2">
              {branches.map((b, i) => (
                <li key={i} className="hover:text-[#2845D6] transition mb-5">
                  <Link href={b.path}>{b.name}</Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-10 relative inline-block">
              تواصل معنا
              <motion.span
                className="absolute left-0 -bottom-2 h-1 w-0 bg-[#2845D6] rounded-full"
                animate={{ width: ["0%", "100%"] }}
                transition={{ repeat: Infinity, repeatType: "mirror", duration: 1.5 }}
              />
            </h3>
            <ul className="text-gray-300 text-sm space-y-2">
              {contact.map((c, i) => (
                <li key={i} className="mb-5">
                  {c.href ? (
                    <a href={c.href} className="hover:text-[#2845D6] transition">
                      {c.label}: {c.value}
                    </a>
                  ) : (
                    <span>{c.label}: {c.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="border-t border-gray-700 text-gray-400 text-center py-4 text-sm mt-16"
        >
          شركات الظاهرى - حقوق الطبع والنشر 2025. جميع الحقوق محفوظة.
        </motion.div>
      </div>
    </footer>
  );
}
