import { Bot, Headphones, SearchCheck, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const offers = [
  {
    icon: SearchCheck,
    title: "AI Lead Gen System",
    desc: "A prospecting engine that finds leads, enriches context, scores fit, writes personalized openers, and pushes send-ready campaigns into your outreach stack.",
    outputs: ["Lead sourcing", "Enrichment", "Qualification", "Email copy"],
  },
  {
    icon: Headphones,
    title: "AI Voice & Support Agent",
    desc: "A chat or voice agent that answers common questions, captures requests, updates your tools, and hands off complex issues with full context.",
    outputs: ["24/7 responses", "Request logging", "Tool updates", "Human handoff"],
  },
  {
    icon: Workflow,
    title: "AI Ops Automation",
    desc: "Workflow automations for reporting, data entry, approvals, CRM cleanup, inbox triage, and spreadsheet-heavy back-office work.",
    outputs: ["Data sync", "Approvals", "Reports", "Daily ops"],
  },
];

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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-foreground tracking-tight mb-4">Three AI systems your team can use immediately</h2>
          <p className="text-base sm:text-lg text-foreground/80 font-normal leading-relaxed max-w-3xl mx-auto px-2">
            We start with one high-leverage workflow, build it into a controlled AI system, and connect it to the tools your team already uses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {offers.map((offer, i) => (
            <div
              key={offer.title}
              className={`skeu-card p-5 sm:p-6 flex flex-col transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-lg ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${180 + i * 160}ms` }}
            >
              <div className="skeu-icon-badge mb-5">
                <offer.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl sm:text-2xl font-medium tracking-tight mb-3 text-foreground">{offer.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground font-normal leading-relaxed mb-5">{offer.desc}</p>

              <div className="grid grid-cols-2 gap-2 mb-6 mt-auto">
                {offer.outputs.map((output) => (
                  <div key={output} className="rounded-lg border border-border bg-muted/50 px-3 py-2 text-xs font-medium text-foreground">
                    {output}
                  </div>
                ))}
              </div>

              <Link to="/case-studies" className="btn-skeu-primary text-xs px-4 py-2 inline-flex items-center justify-center">
                See Example Systems
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
