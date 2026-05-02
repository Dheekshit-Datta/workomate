import { CalendarCheck, Headphones, Workflow, Zap, CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ServicesSection = () => {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section id="services" ref={ref} className="py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-[hsl(207,80%,95%)] to-[hsl(210,60%,90%)] border-b border-border relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50 mix-blend-overlay">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-card blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-card blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`mb-10 md:mb-12 text-center transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-foreground tracking-tight mb-4 drop-shadow-sm">Agentic AI systems that drive outcomes</h2>
          <p className="text-base sm:text-lg text-foreground/80 font-normal leading-relaxed max-w-3xl mx-auto px-2">
            Use purpose-built agentic AI systems. We solve the most urgent industry challenges with regulation-approved systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {/* Lead Gen Card */}
          <div className={`skeu-card p-5 sm:p-6 flex flex-col transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-lg ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`} style={{ transitionDelay: "200ms" }}>
            <h3 className="text-lg sm:text-xl font-medium tracking-tight mb-2 text-foreground">
              AI for <span className="text-accent">Lead Generation</span>
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground font-normal leading-relaxed mb-4 sm:mb-5">
              Frictionless engagement with instant, personalized support at every touchpoint.
            </p>
            <div className="flex gap-3 mb-5 sm:mb-6">
              <a href="#case-studies" className="btn-skeu-primary text-xs px-4 py-2 flex items-center gap-2">
                Learn More <span className="w-1 h-1 rounded-full bg-primary-foreground/70" />
              </a>
            </div>
            <div className="bg-muted/50 rounded-xl p-3 sm:p-4 flex-grow flex items-center justify-center border border-muted shadow-[inset_0_2px_8px_rgba(0,0,0,0.02)]">
              <div className="bg-card rounded-xl shadow-sm border border-border p-3 sm:p-4 w-full max-w-sm">
                <div className="flex justify-between items-start mb-3 border-b border-muted pb-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs sm:text-sm font-medium text-foreground tracking-tight">Lead Qualified</span>
                  </div>
                  <div className="bg-green-50 text-green-700 px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] font-medium border border-green-100">High Intent</div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 flex items-center justify-center border border-card shadow-sm flex-shrink-0">
                    <span className="text-blue-700 font-medium text-xs sm:text-sm">JD</span>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-medium text-foreground tracking-tight">John Doe</div>
                    <div className="text-[10px] sm:text-[11px] text-muted-foreground">VP Eng, Acme Corp</div>
                  </div>
                </div>
                <div className="bg-muted rounded-lg p-2.5 sm:p-3 border border-muted">
                  <div className="flex items-center gap-2 text-foreground font-medium text-xs sm:text-sm">
                    <CalendarCheck className="w-4 h-4 text-accent" strokeWidth={1.5} />
                    Call Booked
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Marketing Card */}
          <div className={`skeu-card p-5 sm:p-6 flex flex-col transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-lg ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`} style={{ transitionDelay: "400ms" }}>
            <h3 className="text-lg sm:text-xl font-medium tracking-tight mb-2 text-foreground">
              AI for <span className="text-accent">Marketing</span>
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground font-normal leading-relaxed mb-4 sm:mb-5">
              Analyze campaigns, reduce manual workload, and deliver 24/7 insights.
            </p>
            <div className="flex gap-3 mb-5 sm:mb-6">
              <a href="#case-studies" className="btn-skeu-primary text-xs px-4 py-2 flex items-center gap-2">
                Learn More <span className="w-1 h-1 rounded-full bg-primary-foreground/70" />
              </a>
            </div>
            <div className="bg-muted/50 rounded-xl p-3 sm:p-4 flex-grow flex items-center justify-center border border-muted shadow-[inset_0_2px_8px_rgba(0,0,0,0.02)] relative overflow-hidden">
              <div className="bg-card rounded-xl shadow-sm border border-border p-3 sm:p-4 w-full max-w-sm h-full flex flex-col justify-between relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs sm:text-sm font-medium text-foreground tracking-tight">Q3 Insights</span>
                  <div className="text-[10px] sm:text-xs font-medium text-green-500 flex items-center bg-green-50 px-2 py-0.5 rounded-full">+42% ROI</div>
                </div>
                <div className="flex items-end justify-between gap-1.5 h-20 mt-auto w-full px-1">
                  {[30, 45, 65, 85, 100].map((h, i) => (
                    <div
                      key={i}
                      className="w-full rounded-t transition-all duration-1000 ease-out"
                      style={{
                        height: visible ? `${h}%` : "0%",
                        opacity: 0.4 + i * 0.15,
                        backgroundColor: `hsl(217 91% ${70 - i * 8}%)`,
                        transitionDelay: `${600 + i * 150}ms`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Customer Support Card */}
          <div className={`skeu-card p-5 sm:p-6 flex flex-col transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-lg ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`} style={{ transitionDelay: "600ms" }}>
            <h3 className="text-lg sm:text-xl font-medium tracking-tight mb-2 text-foreground">
              AI for <span className="text-accent">Customer Support</span>
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground font-normal leading-relaxed mb-4 sm:mb-5">
              Resolve tickets in seconds with voice & chat agents that work 24/7, no hold time.
            </p>
            <div className="flex gap-3 mb-5 sm:mb-6">
              <a href="#case-studies" className="btn-skeu-primary text-xs px-4 py-2 flex items-center gap-2">
                Learn More <span className="w-1 h-1 rounded-full bg-primary-foreground/70" />
              </a>
            </div>
            <div className="bg-muted/50 rounded-xl p-3 sm:p-4 flex-grow flex items-center justify-center border border-muted shadow-[inset_0_2px_8px_rgba(0,0,0,0.02)]">
              <div className="bg-card rounded-xl shadow-sm border border-border p-3 sm:p-4 w-full max-w-sm">
                <div className="flex items-center justify-between mb-3 border-b border-muted pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-foreground flex items-center justify-center">
                      <Headphones className="w-3.5 h-3.5 text-background" strokeWidth={1.75} />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-foreground tracking-tight">Aria · Voice Agent</span>
                  </div>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full font-medium">Live</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="w-3.5 h-3.5 text-accent" strokeWidth={2} /> Booking confirmed · Room 412</div>
                  <div className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="w-3.5 h-3.5 text-accent" strokeWidth={2} /> Housekeeping dispatched</div>
                  <div className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="w-3.5 h-3.5 text-accent" strokeWidth={2} /> Resolved in 38 seconds</div>
                </div>
              </div>
            </div>
          </div>

          {/* Operations Card */}
          <div className={`skeu-card p-5 sm:p-6 flex flex-col transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-lg ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`} style={{ transitionDelay: "800ms" }}>
            <h3 className="text-lg sm:text-xl font-medium tracking-tight mb-2 text-foreground">
              AI for <span className="text-accent">Operations</span>
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground font-normal leading-relaxed mb-4 sm:mb-5">
              Automate repetitive back-office workflows, data entry, reporting, and approvals end-to-end.
            </p>
            <div className="flex gap-3 mb-5 sm:mb-6">
              <a href="#case-studies" className="btn-skeu-primary text-xs px-4 py-2 flex items-center gap-2">
                Learn More <span className="w-1 h-1 rounded-full bg-primary-foreground/70" />
              </a>
            </div>
            <div className="bg-muted/50 rounded-xl p-3 sm:p-4 flex-grow flex items-center justify-center border border-muted shadow-[inset_0_2px_8px_rgba(0,0,0,0.02)]">
              <div className="bg-card rounded-xl shadow-sm border border-border p-3 sm:p-4 w-full max-w-sm">
                <div className="flex items-center justify-between mb-3 pb-3 border-b border-muted">
                  <span className="text-xs sm:text-sm font-medium text-foreground tracking-tight flex items-center gap-1.5">
                    <Workflow className="w-3.5 h-3.5 text-accent" strokeWidth={1.75} /> Pipeline Status
                  </span>
                  <span className="text-[10px] font-medium text-foreground bg-muted px-2 py-0.5 rounded-full border border-border">+128 tasks/day</span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { label: "Invoice intake", pct: 100 },
                    { label: "Approval routing", pct: 86 },
                    { label: "Ledger sync", pct: 64 },
                  ].map((row, i) => (
                    <div key={row.label}>
                      <div className="flex justify-between text-[11px] text-muted-foreground mb-1">
                        <span>{row.label}</span>
                        <span className="text-foreground font-medium">{row.pct}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-foreground rounded-full transition-all duration-1000 ease-out"
                          style={{ width: visible ? `${row.pct}%` : "0%", transitionDelay: `${900 + i * 200}ms` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-[10px] text-muted-foreground">
                  <Zap className="w-3 h-3 text-accent" strokeWidth={2} /> Running on Trigger.dev · 24/7
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
