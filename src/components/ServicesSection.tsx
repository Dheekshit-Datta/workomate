import { BarChart3, Bot, CalendarCheck, Headphones, LineChart, SearchCheck, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const offers = [
  {
    icon: SearchCheck,
    label: "Lead Generation",
    desc: "Find qualified prospects, enrich context, score fit, and move booked calls into your pipeline.",
    visual: "lead",
  },
  {
    icon: Headphones,
    label: "Support",
    desc: "Answer common customer questions, capture requests, and hand off complex issues with full context.",
    visual: "support",
  },
  {
    icon: Workflow,
    label: "Operations",
    desc: "Automate reporting, CRM cleanup, inbox triage, approvals, and spreadsheet-heavy back-office work.",
    visual: "ops",
  },
  {
    icon: BarChart3,
    label: "Marketing",
    desc: "Analyze campaigns, reduce manual workload, and surface the signals your team should act on next.",
    visual: "marketing",
  },
];

const cardVisuals = {
  lead: (
    <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
      <div className="flex items-center justify-between border-b border-border pb-3 text-sm">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-400" />
          <span className="font-medium text-foreground">Lead Qualified</span>
        </div>
        <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">High Intent</span>
      </div>
      <div className="mt-4 flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-700">JD</div>
        <div className="text-left">
          <div className="text-sm font-medium text-foreground">John Doe</div>
          <div className="text-xs text-muted-foreground">VP Eng, Acme Corp</div>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-3 rounded-xl bg-muted px-4 py-3 text-sm text-foreground">
        <CalendarCheck className="h-4 w-4 text-blue-600" strokeWidth={1.6} />
        Call Booked
      </div>
    </div>
  ),
  support: (
    <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
      <div className="flex items-center justify-between border-b border-border pb-3">
        <span className="text-sm font-medium text-foreground">Guest Request</span>
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700">Resolved</span>
      </div>
      <div className="mt-4 space-y-3">
        <div className="max-w-[80%] rounded-xl bg-muted px-4 py-3 text-sm text-muted-foreground">Can I get towels sent to room 204?</div>
        <div className="ml-auto max-w-[86%] rounded-xl bg-foreground px-4 py-3 text-sm text-primary-foreground">Housekeeping has been notified. ETA: 8 minutes.</div>
      </div>
    </div>
  ),
  ops: (
    <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">Daily Ops Queue</span>
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700">Auto-synced</span>
      </div>
      {["CRM cleanup", "Approval routed", "Report generated"].map((task, i) => (
        <div key={task} className="mb-3 grid grid-cols-[24px_1fr_56px] items-center gap-3 rounded-lg bg-muted px-3 py-2 last:mb-0">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-card text-xs font-medium text-foreground">{i + 1}</div>
          <span className="text-sm text-foreground">{task}</span>
          <span className="text-xs text-muted-foreground">Done</span>
        </div>
      ))}
    </div>
  ),
  marketing: (
    <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
      <div className="mb-8 flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">Q3 Insights</span>
        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">+42% ROI</span>
      </div>
      <div className="flex h-24 items-end gap-2">
        {[32, 48, 68, 84, 100].map((height, i) => (
          <div key={height} className="flex-1 rounded-t bg-blue-600" style={{ height: `${height}%`, opacity: 0.28 + i * 0.14 }} />
        ))}
      </div>
    </div>
  ),
} as const;

const ServicesSection = () => {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section id="services" ref={ref} className="py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-[hsl(207,80%,96%)] to-[hsl(210,45%,92%)] border-b border-border relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`mb-10 md:mb-12 text-center transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card shadow-sm mb-4">
            <Bot className="w-4 h-4 text-accent" strokeWidth={1.5} />
            <span className="text-xs font-medium text-foreground tracking-widest uppercase">What We Build</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-foreground tracking-tight mb-4">AI systems your team can use immediately</h2>
          <p className="text-base sm:text-lg text-foreground/80 font-normal leading-relaxed max-w-3xl mx-auto px-2">
            We start with one high-leverage workflow, build it into a controlled AI system, and connect it to the tools your team already uses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {offers.map((offer, i) => (
            <div
              key={offer.label}
              className={`rounded-2xl border border-border bg-card p-6 shadow-[0_8px_20px_rgba(15,23,42,0.08)] transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(15,23,42,0.12)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${180 + i * 160}ms` }}
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-normal tracking-tight text-foreground">
                    AI for <span className="text-blue-600">{offer.label}</span>
                  </h3>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">{offer.desc}</p>
                </div>
                <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-muted text-foreground sm:flex">
                  <offer.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
              </div>

              <Link to="/case-studies" className="btn-skeu-primary mb-6 inline-flex w-fit items-center gap-2 px-4 py-2 text-xs">
                Learn More
                <LineChart className="h-3.5 w-3.5" strokeWidth={1.6} />
              </Link>

              <div className="rounded-2xl bg-muted/70 p-4 sm:p-5">
                {cardVisuals[offer.visual as keyof typeof cardVisuals]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
