"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "/logo1.png",
  "/logo2.png",
  "/logo3.png",
  "/logo4.png",
  "/logo5.png",
  "/logo6.png",
  "/logo7.png",
    "/logo8.png",
    "/logo9.png",
  "/logo10.png",
];

export default function CompanyLogosSlider() {
  return (
    <div className="overflow-hidden py-12 bg-[#f8fafc]">
      <motion.div
        className="flex gap-10 w-max"
        animate={{ x: ["0%", "-50%"] }}  
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 relative">
            <Image
              src={logo}
              alt={`Company logo ${index}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
