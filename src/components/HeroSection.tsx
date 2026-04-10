import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  onBookAudit: () => void;
}

const heroCards = [
  { title: "Pre-built Systems", desc: "Use systems for Banking, Healthcare, Lead Gen, and Management today." },
  { title: "System Accelerators", desc: "Leverage our Marketplace of pre-built AI agents, templates, and integrations." },
  { title: "Tailored Systems", desc: "Design and build systems on our Agent Platform across enterprise use cases." },
];

const HeroSection = ({ onBookAudit }: HeroSectionProps) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { requestAnimationFrame(() => setLoaded(true)); }, []);

  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 flex flex-col items-center text-center w-full border-b border-border bg-background bg-[radial-gradient(hsl(214_32%_80%)_1px,transparent_1px)] [background-size:40px_40px] [background-position:center_top]">
      <div
        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 shadow-sm mb-5 md:mb-6 transition-all duration-700 ease-out ${loaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-95"}`}
      >
        <span className="text-[10px] sm:text-xs font-medium text-accent tracking-widest uppercase">Enterprise AI Solutions</span>
      </div>

      <h1
        className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-normal text-foreground tracking-tight leading-[1.1] max-w-4xl mb-5 md:mb-6 drop-shadow-sm transition-all duration-700 ease-out delay-150 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        Agentic AI systems<br />for fast-growing businesses
      </h1>

      <p
        className={`text-base sm:text-lg md:text-xl max-w-2xl text-muted-foreground mb-8 md:mb-10 leading-relaxed font-normal px-2 transition-all duration-700 ease-out delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        Built on a proven agent platform. We automate operations, generate leads, and save hours so your team can focus on growth.
      </p>

      <div className={`flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto z-10 px-2 transition-all duration-700 ease-out delay-[450ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <button onClick={onBookAudit} className="btn-skeu-primary w-full sm:w-auto px-6 py-3 text-base flex items-center justify-center gap-2">
          Book a Free Audit <ArrowRight className="w-4 h-4" />
        </button>
        <a href="#case-studies" className="btn-skeu-secondary w-full sm:w-auto px-6 py-3 text-base flex items-center justify-center">
          Case Studies
        </a>
      </div>

      <div className="mt-12 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-6xl text-left px-1">
        {heroCards.map((card, i) => (
          <div
            key={card.title}
            className={`skeu-card p-5 sm:p-6 group cursor-pointer flex flex-col justify-between min-h-[140px] sm:min-h-[160px] hover:-translate-y-1 hover:shadow-lg transition-all duration-500 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: `${600 + i * 150}ms` }}
          >
            <div>
              <h3 className="text-lg sm:text-xl font-medium tracking-tight text-foreground mb-2 flex items-center justify-between">
                {card.title}
                <div className="skeu-icon-badge !p-1.5 !rounded-lg group-hover:!bg-foreground group-hover:text-card transition-colors duration-300">
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground font-normal leading-relaxed">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
