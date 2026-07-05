import { Code2, Route, ShieldCheck, UserRound } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface FounderPricingSectionProps {
  onBookAudit: () => void;
}

const FounderPricingSection = ({ onBookAudit }: FounderPricingSectionProps) => {
  const { ref, visible } = useScrollReveal(0.12);

  return (
    <section ref={ref} className="py-16 md:py-20 px-4 sm:px-6 bg-background border-b border-border">
      <div className={`max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="skeu-container p-6 sm:p-8 md:p-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-primary-foreground shadow-sm">
              <UserRound className="h-6 w-6" strokeWidth={1.6} />
            </div>
            <div>
              <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">About Automisebiz</div>
              <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-foreground">Built by automation operators</h2>
            </div>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
            Automisebiz designs, builds, and maintains AI systems for teams that want real operational leverage, not another chatbot demo. We combine workflow strategy, agent engineering, integrations, and launch support so the system actually runs inside your business.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ["Workflow-first", "We start with the business process, then choose the AI stack."],
              ["Human controls", "Sensitive steps can include approval gates and escalation rules."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-xl border border-border bg-card p-4">
                <ShieldCheck className="mb-2 h-4 w-4 text-accent" strokeWidth={1.6} />
                <div className="text-sm font-medium text-foreground">{title}</div>
                <div className="mt-1 text-xs leading-relaxed text-muted-foreground">{desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="skeu-card-dark p-6 sm:p-8 md:p-10 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-5">
              <Route className="w-4 h-4 text-white/70" strokeWidth={1.5} />
              <span className="text-xs font-medium text-white/70 tracking-widest uppercase">Scoped Build Plan</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-primary-foreground mb-3">Start with the workflow, not the invoice</h2>
            <p className="text-base sm:text-lg text-white/55 leading-relaxed mb-6">
              The audit maps your highest-leverage process, identifies what should be automated, and gives you a clear first build before you commit.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {["Map", "Scope", "Launch"].map((step, i) => (
                <div key={step} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-black text-xs font-semibold">{i + 1}</div>
                  <div className="text-sm font-medium text-white">{step}</div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={onBookAudit} className="btn-skeu-secondary inline-flex items-center justify-center gap-2">
            <Code2 className="w-4 h-4" strokeWidth={1.5} />
            Scope My System
          </button>
        </div>
      </div>
    </section>
  );
};

export default FounderPricingSection;
