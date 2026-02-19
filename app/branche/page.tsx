 
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
 

import { motion } from "framer-motion";
import Hero from "../_components/Hero";
import { BranchDetails } from "../_components/BranchDetails";
import { BranchSelector } from "../_components/BranchSelector";
import { branches } from "../constants/branches";
import BranchIdentitySection from "../_components/BranchIdentitySection";
import BranchSideCard from "../_components/BranchSideCard";
import BranchGallerySlider from "../_components/BranchGallerySlider";
import BranchFeaturesSection from '../_components/BranchFeaturesSection'
import StepsSection from "../_components/StepsSection"
export default function BranchesPage() {
  const searchParams = useSearchParams();
const branchParam = searchParams.get("branch");

  const [activeBranch, setActiveBranch] = useState(branches[0]);
  const detailsRef = useRef(null);
useEffect(() => {
  if (branchParam) {
    const foundBranch = branches.find(
      (b) => b.slug === branchParam
    );
    if (foundBranch) {
      setActiveBranch(foundBranch);
    }
  }
}, [branchParam]);

  return (
    <>
      <Hero
        title={activeBranch.name}
        currentPage={activeBranch.name}
      />

      <div className="max-w-7xl mx-auto px-6 mt-20 space-y-28">

        {/* ===== الجزء العلوي ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 items-start">
          <div className="lg:col-span-2">
            <BranchDetails
              branch={activeBranch}
              sectionRef={detailsRef}
            />
          </div>

          <div className="lg:col-span-1">
            <BranchSelector
              branches={branches}
              activeId={activeBranch.id}
              onSelect={setActiveBranch}
            />
          </div>
        </div>

       
     <div className="bg-gray-50 rounded-3xl p-12">
  <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

    {/* المحتوى */}
    <div className="lg:col-span-3 space-y-20">
      <BranchIdentitySection title="رؤيتنا" items={activeBranch.vision} />
      <BranchIdentitySection title="رسالتنا" items={activeBranch.mission} />
      <BranchIdentitySection title="أهدافنا" items={activeBranch.goals} />
      <BranchIdentitySection title="قيمنا" items={activeBranch.values} />
    </div>

    {/* الكارد */}
    <div className="lg:col-span-2">
      <BranchSideCard />
    </div>

  </div>
</div>
        <BranchGallerySlider images={activeBranch.gallery} />
        
   {activeBranch.videos?.length > 0 && (
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl my-20">
             
          {activeBranch.videos.map((vid, i) => (
            <motion.video
              key={i}
              src={vid}
              controls
              whileHover={{ scale: 1.02 }}
              className="rounded-xl w-full h-[250]"
            />
          ))}
        </div>
      )}
        <BranchFeaturesSection />
        <StepsSection />
        
      </div>
    </>
  );
}
