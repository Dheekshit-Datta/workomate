import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface CTASectionProps {
  onBookAudit: () => void;
}

const CTASection = ({ onBookAudit }: CTASectionProps) => (
  <section className="py-24 px-6 bg-transparent border-b border-border">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Audit CTA */}
      <div className="skeu-container p-10 md:p-12 flex flex-col items-start justify-between relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-40 h-40 bg-[radial-gradient(circle,hsl(217_91%_60%/0.08),transparent_70%)] pointer-events-none" />
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 shadow-sm mb-6">
            <Sparkles className="w-3.5 h-3.5 text-accent" strokeWidth={1.5} />
            <span className="text-xs font-medium text-accent tracking-widest uppercase">Free Assessment</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-normal text-foreground tracking-tight mb-3">Accelerate time-to-value from AI</h2>
          <p className="text-lg text-muted-foreground font-normal mb-8 leading-relaxed">Get a personalized audit of your workflows and see exactly where AI agents can save your team hundreds of hours.</p>
        </div>
        <button onClick={onBookAudit} className="btn-skeu-primary flex items-center gap-2 group-hover:shadow-lg transition-shadow">
          Book a Free Audit <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Case Studies CTA */}
      <div className="skeu-card-dark p-10 md:p-12 flex flex-col items-start justify-between relative overflow-hidden group">
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-[radial-gradient(circle,hsl(217_91%_60%/0.12),transparent_70%)] pointer-events-none" />
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
            <span className="text-xs font-medium text-white/70 tracking-widest uppercase">Results</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-normal text-primary-foreground tracking-tight mb-3 drop-shadow-sm">See our AI systems in action</h2>
          <p className="text-lg text-white/50 font-normal mb-8 leading-relaxed">Browse real case studies to see how we deliver instant ROI for enterprises like yours.</p>
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

export default CTASection;
