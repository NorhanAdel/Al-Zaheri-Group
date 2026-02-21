"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { RefObject } from "react";
import BranchGallerySlider from "./BranchGallerySlider";
import { Branch } from "../types/branch"; // ✅ مهم جدًا

type BranchDetailsProps = {
  branch: Branch;
  sectionRef: RefObject<HTMLElement | null>;
};

export function BranchDetails({ branch, sectionRef }: BranchDetailsProps) {
  return (
    <section ref={sectionRef} className="space-y-24">
      {/* ===== الجزء العلوي ===== */}
      <div className="space-y-14">
        <motion.div
          className="relative w-full h-[420px] rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Image
            src={branch.mainImage}
            alt={branch.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <h2 className="absolute bottom-6 right-6 text-white text-3xl font-bold">
            {branch.name}
          </h2>
        </motion.div>

        {branch.audio && (
          <audio controls className="w-full rounded-xl">
            <source src={branch.audio} type="audio/mpeg" />
          </audio>
        )}

        <p className="text-lg leading-relaxed text-right">
          {branch.description}
        </p>
      </div>

      {/* ===== الصور ===== */}
      {branch.gallery && (
        <BranchGallerySlider images={branch.gallery} />
      )}
    </section>
  );
}
