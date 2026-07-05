import { ClipboardCheck, Map, SearchCheck, TrendingUp, Workflow } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface AuditSectionProps {
  onBookAudit: () => void;
}

const auditItems = [
  { icon: Map, title: "Workflow map", desc: "We document the manual steps, tools, handoffs, and decision points in the workflow." },
  { icon: SearchCheck, title: "Automation opportunities", desc: "You get a ranked list of tasks AI agents can handle safely and where a human should stay involved." },
  { icon: TrendingUp, title: "ROI estimate", desc: "We estimate time saved, revenue upside, and operational impact before anything gets built." },
  { icon: Workflow, title: "Build roadmap", desc: "You leave with a clear phase-one system, integration plan, and launch sequence." },
];

const AuditSection = ({ onBookAudit }: AuditSectionProps) => {
  const { ref, visible } = useScrollReveal(0.12);

  return (
    <section ref={ref} className="py-16 md:py-20 px-4 sm:px-6 bg-card border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-[0.9fr_1.4fr] gap-8 lg:gap-12 items-start transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background shadow-sm mb-4">
              <ClipboardCheck className="w-4 h-4 text-accent" strokeWidth={1.5} />
              <span className="text-xs font-medium text-foreground tracking-widest uppercase">Free Audit</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-foreground tracking-tight mb-4">What you get on the audit call</h2>
            <p className="text-base sm:text-lg text-muted-foreground font-normal leading-relaxed mb-6">
              The call is not a sales pitch. It is a practical workflow review that shows what should be automated first and what the build would take.
            </p>
            <button onClick={onBookAudit} className="btn-skeu-primary">
              Book a Free Audit
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {auditItems.map((item, i) => (
              <div key={item.title} className="skeu-card p-5 sm:p-6" style={{ transitionDelay: `${i * 120}ms` }}>
                <div className="skeu-icon-badge mb-4">
                  <item.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg sm:text-xl font-medium tracking-tight text-foreground mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditSection;
