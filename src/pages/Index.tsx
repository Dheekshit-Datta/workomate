import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VSLSection from "@/components/VSLSection";
import ProofSection from "@/components/ProofSection";
import StatsBar from "@/components/StatsBar";
import ProblemSection from "@/components/ProblemSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServicesSection from "@/components/ServicesSection";
import AuditSection from "@/components/AuditSection";
import FounderPricingSection from "@/components/FounderPricingSection";
import CalendarSection from "@/components/CalendarSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import CalModal from "@/components/CalModal";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  const [calOpen, setCalOpen] = useState(false);
  const openCal = () => setCalOpen(true);

  return (
    <div className="scroll-smooth overflow-x-hidden">
      <Navbar onBookAudit={openCal} />
      <HeroSection onBookAudit={openCal} />
      <VSLSection onBookAudit={openCal} />
      <ProofSection />
      <StatsBar />
      <ProblemSection />
      <HowItWorksSection />
      <ServicesSection />
      <AuditSection onBookAudit={openCal} />
      <FounderPricingSection onBookAudit={openCal} />
      <FAQSection />
      <CalendarSection />
      <CTASection onBookAudit={openCal} />
      <Footer />
      <CalModal isOpen={calOpen} onClose={() => setCalOpen(false)} />
      <ChatWidget />
    </div>
  );
};

export default Index;
