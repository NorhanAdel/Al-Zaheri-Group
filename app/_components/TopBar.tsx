"use client";

import {
  Phone,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const text =
  "مجموعة شركات الظاهرى هى مثال للنجاح فى الأعمال التجارية";

export default function TopBar() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(text.slice(0, index + 1));
        setIndex(index + 1);

        if (index === text.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(text.slice(0, index - 1));
        setIndex(index - 1);

        if (index === 0) {
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [index, isDeleting]);

  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* يسار – السوشيال */}
        <div className="flex items-center gap-4">
          {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ scale: 1.15, y: -2 }}
              className="text-gray-500 hover:text-blue-600 transition"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>

        {/* النص المتحرك – المنتصف */}
        <div className="hidden md:flex items-center text-blue-700 font-medium tracking-wide">
          <span>{displayText}</span>
          <span className="ml-1 animate-pulse text-blue-500">|</span>
        </div>

        {/* يمين – البيانات */}
        <div className="flex items-center gap-8 text-gray-600">

          <div className="hidden lg:flex items-center gap-2">
            <Clock size={18} className="text-blue-600" />
            <span>الأحد – الخميس | 9:00 ص – 6:00 م</span>
          </div>

          <motion.a
            href="tel:+966112320242"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 font-medium hover:text-blue-600 transition"
          >
            <Phone size={18} className="text-blue-600" />
            <span>+966 11 232 0242</span>
          </motion.a>

        </div>
      </div>
    </div>
  );
}
