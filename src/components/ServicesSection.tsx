import { CalendarCheck } from "lucide-react";

const ServicesSection = () => (
  <section id="services" className="py-20 px-6 bg-gradient-to-b from-[hsl(207,80%,95%)] to-[hsl(210,60%,90%)] border-b border-border relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50 mix-blend-overlay">
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-card blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-card blur-3xl" />
    </div>

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-normal text-foreground tracking-tight mb-4 drop-shadow-sm">Agentic AI systems that drive outcomes</h2>
        <p className="text-lg text-foreground/80 font-normal leading-relaxed max-w-3xl mx-auto">
          Use purpose-built agentic AI systems. We solve the most urgent industry challenges with regulation-approved systems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Lead Gen Card */}
        <div className="skeu-card p-6 flex flex-col">
          <h3 className="text-xl font-medium tracking-tight mb-2 text-foreground">
            AI for <span className="text-accent">Lead Generation</span>
          </h3>
          <p className="text-base text-muted-foreground font-normal leading-relaxed mb-5">
            Frictionless engagement with instant, personalized support at every touchpoint.
          </p>
          <div className="flex gap-3 mb-6">
            <a href="#case-studies" className="btn-skeu-primary text-xs px-4 py-2 flex items-center gap-2">
              Learn More <span className="w-1 h-1 rounded-full bg-primary-foreground/70" />
            </a>
          </div>
          <div className="bg-muted/50 rounded-xl p-4 flex-grow flex items-center justify-center border border-muted shadow-[inset_0_2px_8px_rgba(0,0,0,0.02)]">
            <div className="bg-card rounded-xl shadow-sm border border-border p-4 w-full max-w-sm">
              <div className="flex justify-between items-start mb-3 border-b border-muted pb-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium text-foreground tracking-tight">Lead Qualified</span>
                </div>
                <div className="bg-green-50 text-green-700 px-2.5 py-0.5 rounded-full text-[10px] font-medium border border-green-100">High Intent</div>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 flex items-center justify-center border border-card shadow-sm flex-shrink-0">
                  <span className="text-blue-700 font-medium text-sm">JD</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground tracking-tight">John Doe</div>
                  <div className="text-[11px] text-muted-foreground">VP Eng, Acme Corp</div>
                </div>
              </div>
              <div className="bg-muted rounded-lg p-3 border border-muted">
                <div className="flex items-center gap-2 text-foreground font-medium text-sm">
                  <CalendarCheck className="w-4 h-4 text-accent" strokeWidth={1.5} />
                  Call Booked
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marketing Card */}
        <div className="skeu-card p-6 flex flex-col">
          <h3 className="text-xl font-medium tracking-tight mb-2 text-foreground">
            AI for <span className="text-accent">Marketing</span>
          </h3>
          <p className="text-base text-muted-foreground font-normal leading-relaxed mb-5">
            Analyze campaigns, reduce manual workload, and deliver 24/7 insights.
          </p>
          <div className="flex gap-3 mb-6">
            <a href="#case-studies" className="btn-skeu-primary text-xs px-4 py-2 flex items-center gap-2">
              Learn More <span className="w-1 h-1 rounded-full bg-primary-foreground/70" />
            </a>
          </div>
          <div className="bg-muted/50 rounded-xl p-4 flex-grow flex items-center justify-center border border-muted shadow-[inset_0_2px_8px_rgba(0,0,0,0.02)] relative overflow-hidden">
            <div className="bg-card rounded-xl shadow-sm border border-border p-4 w-full max-w-sm h-full flex flex-col justify-between relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-foreground tracking-tight">Q3 Insights</span>
                <div className="text-xs font-medium text-green-500 flex items-center bg-green-50 px-2 py-0.5 rounded-full">+42% ROI</div>
              </div>
              <div className="flex items-end justify-between gap-1.5 h-20 mt-auto w-full px-1">
                {[30, 45, 65, 85, 100].map((h, i) => (
                  <div key={i} className={`w-full rounded-t bg-accent/${20 + i * 20}`} style={{ height: `${h}%`, opacity: 0.4 + i * 0.15, backgroundColor: `hsl(217 91% ${70 - i * 8}%)` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
