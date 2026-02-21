// app/branche/page.tsx
"use client"; // لازم يكون أول سطر

import { useRouter } from "next/navigation"; // بدل "next/router"
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Hero from "../_components/Hero";
import BranchDetails from "../_components/BranchDetails";
import BranchSelector from "../_components/BranchSelector";
import { branches as branchesData } from "../constants/branches";
import BranchIdentitySection from "../_components/BranchIdentitySection";
import BranchSideCard from "../_components/BranchSideCard";
import BranchGallerySlider from "../_components/BranchGallerySlider";
import BranchFeaturesSection from "../_components/BranchFeaturesSection";
import StepsSection from "../_components/StepsSection";
import { Branch } from "../types/branch";

const BranchePage = () => {
  const router = useRouter();
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);

  useEffect(() => {
    if (!selectedBranch && branchesData.length > 0) {
      setSelectedBranch(branchesData[0]);
    }
  }, []);

  const handleBranchSelect = (branch: Branch) => {
    setSelectedBranch(branch);
    // لو عايز توجيه لصفحة تانية:
    // router.push(`/branche/${branch.id}`);
  };

  return (
    <div>
      <Hero />
      <BranchSelector
        branches={branchesData}
        onSelect={handleBranchSelect}
        selectedBranch={selectedBranch}
      />
      {selectedBranch && (
        <>
          <BranchDetails branch={selectedBranch} />
          <BranchIdentitySection branch={selectedBranch} />
          <BranchSideCard branch={selectedBranch} />
          <BranchGallerySlider images={selectedBranch.images} />
          <BranchFeaturesSection features={selectedBranch.features} />
          <StepsSection steps={selectedBranch.steps} />
        </>
      )}
    </div>
  );
};

export default BranchePage;
