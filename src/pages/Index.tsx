import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServicesSection from "@/components/ServicesSection";


import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import CalModal from "@/components/CalModal";

const Index = () => {
  const [calOpen, setCalOpen] = useState(false);
  const openCal = () => setCalOpen(true);

  return (
    <div className="scroll-smooth overflow-x-hidden">
      <Navbar onBookAudit={openCal} />
      <HeroSection onBookAudit={openCal} />
      <PartnersSection />
      <ProblemSection />
      <HowItWorksSection />
      <ServicesSection />
      
      <FAQSection />
      <CTASection onBookAudit={openCal} />
      <Footer />
      <CalModal isOpen={calOpen} onClose={() => setCalOpen(false)} />
    </div>
  );
};

export default Index;
