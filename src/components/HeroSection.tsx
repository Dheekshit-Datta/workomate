import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onBookAudit: () => void;
}

const heroCards = [
  { title: "Pre-built Systems", desc: "Use systems for Banking, Healthcare, Lead Gen, and Management today." },
  { title: "System Accelerators", desc: "Leverage our Marketplace of pre-built AI agents, templates, and integrations." },
  { title: "Tailored Systems", desc: "Design and build systems on our Agent Platform across enterprise use cases." },
];

const HeroSection = ({ onBookAudit }: HeroSectionProps) => (
  <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 flex flex-col items-center text-center w-full border-b border-border bg-background bg-[radial-gradient(hsl(214_32%_80%)_1px,transparent_1px)] [background-size:40px_40px] [background-position:center_top]">
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card shadow-sm mb-5 md:mb-6">
      <span className="text-[10px] sm:text-xs font-medium text-foreground tracking-widest uppercase">Enterprise AI Solutions</span>
    </div>

    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-normal text-foreground tracking-tight leading-[1.1] max-w-4xl mb-5 md:mb-6 drop-shadow-sm">
      Agentic AI systems<br />for the enterprise
    </h1>

    <p className="text-base sm:text-lg md:text-xl max-w-2xl text-muted-foreground mb-8 md:mb-10 leading-relaxed font-normal px-2">
      Built on the industry-leading, analyst-recognized agent platform. Automate operations, save hours, and scale efficiently.
    </p>

    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto z-10 px-2">
      <button onClick={onBookAudit} className="btn-skeu-primary w-full sm:w-auto px-6 py-3 text-base flex items-center justify-center gap-2">
        Book a Free Audit <ArrowRight className="w-4 h-4" />
      </button>
      <a href="#case-studies" className="btn-skeu-secondary w-full sm:w-auto px-6 py-3 text-base flex items-center justify-center">
        Case Studies
      </a>
    </div>

    <div className="mt-12 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-6xl text-left px-1">
      {heroCards.map((card) => (
        <div key={card.title} className="skeu-card p-5 sm:p-6 group cursor-pointer flex flex-col justify-between min-h-[140px] sm:min-h-[160px] hover:-translate-y-0.5 transition-transform duration-300">
          <div>
            <h3 className="text-lg sm:text-xl font-medium tracking-tight text-foreground mb-2 flex items-center justify-between">
              {card.title}
              <div className="skeu-icon-badge !p-1.5 !rounded-lg group-hover:!bg-foreground group-hover:text-card transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground font-normal leading-relaxed">{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default HeroSection;
