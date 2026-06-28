import { BarChart3, MonitorPlay, Route, ScreenShare } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const architectureSteps = ["Trigger", "Agent", "Tools", "Dashboard"];

const ProofSection = () => {
  const { ref, visible } = useScrollReveal(0.12);

  return (
    <section id="proof" ref={ref} className="py-16 md:py-20 px-4 sm:px-6 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className={`mb-10 md:mb-12 text-center transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card shadow-sm mb-4">
            <ScreenShare className="w-4 h-4 text-accent" strokeWidth={1.5} />
            <span className="text-xs font-medium text-foreground tracking-widest uppercase">Proof Layer</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-foreground tracking-tight mb-4">Show the system before you ask for the call</h2>
          <p className="text-base sm:text-lg text-muted-foreground font-normal leading-relaxed max-w-3xl mx-auto">
            Buyers need to see what gets built, how it runs, and what changes after deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          <div className={`skeu-container p-5 sm:p-6 transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-xl font-medium tracking-tight text-foreground">System screenshot</h3>
                <p className="text-sm text-muted-foreground">Lead pipeline view your team can inspect.</p>
              </div>
              <ScreenShare className="w-5 h-5 text-accent" strokeWidth={1.5} />
            </div>
            <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <div className="grid grid-cols-[1fr_90px_90px] gap-3 border-b border-muted pb-3 text-xs font-medium text-muted-foreground">
                <span>Prospect</span>
                <span>Score</span>
                <span>Status</span>
              </div>
              {[
                ["Operations agency", "92", "Ready"],
                ["Hotel group", "87", "Enriched"],
                ["B2B SaaS", "81", "Queued"],
              ].map(([name, score, status]) => (
                <div key={name} className="grid grid-cols-[1fr_90px_90px] gap-3 border-b border-muted/70 py-3 text-sm last:border-0">
                  <span className="font-medium text-foreground">{name}</span>
                  <span className="text-accent font-semibold">{score}</span>
                  <span className="text-muted-foreground">{status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`skeu-container p-5 sm:p-6 transition-all duration-700 ease-out delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-xl font-medium tracking-tight text-foreground">Demo walkthrough</h3>
                <p className="text-sm text-muted-foreground">Use this slot for your Loom or product demo.</p>
              </div>
              <MonitorPlay className="w-5 h-5 text-accent" strokeWidth={1.5} />
            </div>
            <div className="aspect-video rounded-xl border border-border bg-[linear-gradient(to_bottom,#ffffff,#eef3f8)] flex items-center justify-center shadow-sm">
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-primary-foreground shadow-lg">
                  <MonitorPlay className="h-6 w-6" strokeWidth={1.6} />
                </div>
                <div className="text-base font-medium tracking-tight text-foreground">2-minute system demo</div>
                <div className="text-sm text-muted-foreground">Lead gen agent from trigger to booked call</div>
              </div>
            </div>
          </div>

          <div className={`skeu-container p-5 sm:p-6 transition-all duration-700 ease-out delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-xl font-medium tracking-tight text-foreground">Before and after</h3>
                <p className="text-sm text-muted-foreground">Make the ROI easy to scan.</p>
              </div>
              <BarChart3 className="w-5 h-5 text-accent" strokeWidth={1.5} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                ["Before", "Manual research", "3 hrs/day"],
                ["After", "Agent-enriched leads", "Under 30 sec"],
                ["Before", "Missed follow-ups", "Inconsistent"],
                ["After", "Automated sequences", "Always on"],
              ].map(([state, label, value]) => (
                <div key={`${state}-${label}`} className="rounded-xl border border-border bg-card p-4">
                  <div className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">{state}</div>
                  <div className="mt-1 text-sm font-medium text-foreground">{label}</div>
                  <div className="mt-2 text-lg font-semibold tracking-tight text-accent">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`skeu-container p-5 sm:p-6 transition-all duration-700 ease-out delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-xl font-medium tracking-tight text-foreground">Architecture diagram</h3>
                <p className="text-sm text-muted-foreground">Show how the automation works under the hood.</p>
              </div>
              <Route className="w-5 h-5 text-accent" strokeWidth={1.5} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {architectureSteps.map((step, i) => (
                <div key={step} className="relative rounded-xl border border-border bg-card p-4 text-center">
                  <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-xs font-semibold text-primary-foreground">
                    {i + 1}
                  </div>
                  <div className="text-sm font-medium text-foreground">{step}</div>
                </div>
              ))}
            </div>
            <Link to="/case-studies" className="btn-skeu-secondary mt-5 inline-flex w-full items-center justify-center">
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
