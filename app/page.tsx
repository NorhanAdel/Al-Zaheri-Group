import Image from "next/image";
import Navbar from "./_components/Navbar"
import HeroSection from "./_components/HeroSection"
import AboutUsSection from "./_components/AboutUsSection"
import ServicesSection from "./_components/ServicesSection"
import WorkSteps from "./_components/WorkSteps"
import EasySteps from "./_components/EasySteps"
import WhyChooseUs from "./_components/WhyChooseUs"
import ContactSection from "./_components/ContactSection"
import BranchesAltSection from "./_components/BranchesAltSection"
import SmallBanner from "./_components/SmallBanner";
import CompanyLogosSlider from "./_components/CompanyLogosSlider";
import BlogSwiper from "./_components/BlogSwiper";
export default function Home() {
  return (
    <div>
    
      <HeroSection />
      <AboutUsSection/>
      <ServicesSection />

      <BranchesAltSection/>
      <WorkSteps />
      <SmallBanner/>
      <WhyChooseUs />
<CompanyLogosSlider/>
      <ContactSection/>
      <EasySteps />
      <BlogSwiper/>
    </div>
  );
}
