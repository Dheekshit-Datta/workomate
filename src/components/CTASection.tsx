import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface CTASectionProps {
  onBookAudit: () => void;
}

const CTASection = ({ onBookAudit }: CTASectionProps) => {
  const { ref, visible } = useScrollReveal(0.15);

  return (
    <section ref={ref} className="py-16 md:py-24 px-4 sm:px-6 bg-transparent border-b border-border">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Audit CTA */}
        <div className={`skeu-container p-6 sm:p-10 md:p-12 flex flex-col items-start justify-between relative overflow-hidden group transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-xl ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`} style={{ transitionDelay: "100ms" }}>
          <div className="absolute top-0 right-0 w-40 h-40 bg-[radial-gradient(circle,hsl(217_91%_60%/0.08),transparent_70%)] pointer-events-none" />
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card shadow-sm mb-4">
              <span className="text-[10px] sm:text-xs font-medium text-foreground tracking-widest uppercase">Now Accepting Q2 2026 Clients — 3 Spots Left</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card shadow-sm mb-5 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5 text-foreground" strokeWidth={1.5} />
              <span className="text-[10px] sm:text-xs font-medium text-foreground tracking-widest uppercase">Free Assessment</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-foreground tracking-tight mb-3">Accelerate time-to-value from AI</h2>
            <p className="text-base sm:text-lg text-muted-foreground font-normal mb-6 sm:mb-8 leading-relaxed">Book a free 45-minute workflow audit. We map your entire ops, show you exactly where AI saves time and money, with zero obligation to proceed.</p>
          </div>
          <button onClick={onBookAudit} className="btn-skeu-primary flex items-center gap-2 group-hover:shadow-lg transition-shadow">
            Book a Free Audit <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Case Studies CTA */}
        <div className={`skeu-card-dark p-6 sm:p-10 md:p-12 flex flex-col items-start justify-between relative overflow-hidden group transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-xl ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`} style={{ transitionDelay: "300ms" }}>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-[radial-gradient(circle,hsl(217_91%_60%/0.12),transparent_70%)] pointer-events-none" />
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-5 sm:mb-6">
              <span className="text-[10px] sm:text-xs font-medium text-white/70 tracking-widest uppercase">Results</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-primary-foreground tracking-tight mb-3 drop-shadow-sm">See our AI systems in action</h2>
            <p className="text-base sm:text-lg text-white/50 font-normal mb-6 sm:mb-8 leading-relaxed">Browse real case studies to see how we deliver instant ROI for enterprises like yours.</p>
          </div>
          <Link
            to="/case-studies"
            className="btn-skeu-secondary !border-transparent !shadow-[0_4px_8px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,1),inset_0_-2px_1px_rgba(150,150,150,0.5)] flex items-center gap-2 group-hover:shadow-lg transition-shadow"
          >
            View Case Studies <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
