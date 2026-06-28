import { useState } from "react";
import { Plus } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  { q: "What exactly does automisebiz do?", a: "We audit your business workflows, identify tasks that humans shouldn't be doing manually (like data entry, follow-ups), and build custom AI agents to handle those tasks 24/7." },
  { q: "How long does it take to set up?", a: "Most standard workflows are deployed within 2 to 4 weeks. Complex enterprise setups may take 6 to 8 weeks. We map out a strict timeline during our initial audit." },
  { q: "Do I need technical knowledge?", a: "Zero. We handle everything from technical architecture to implementation. We deliver a finished system that works in the background, with a dashboard for monitoring." },
  { q: "What kind of tasks can your AI agents automate?", a: "Anything repetitive and rule-based: data entry, invoice processing, customer follow-ups, report generation, lead qualification, scheduling, and more. If a human can follow a process to do it, our AI can too." },
  { q: "How do you ensure data security?", a: "We follow enterprise-grade security protocols including end-to-end encryption, SOC 2 compliance readiness, and strict access controls. Your data never leaves your approved infrastructure." },
  { q: "What's the pricing model?", a: "We offer flexible pricing based on the number of workflows automated and their complexity. Every engagement starts with a free audit so you know exactly what you're investing in before committing." },
  { q: "Can your AI agents integrate with our existing tools?", a: "Absolutely. We integrate with all major platforms: Salesforce, HubSpot, Slack, Google Workspace, Microsoft 365, SAP, and hundreds more via APIs." },
  { q: "What happens if the AI makes a mistake?", a: "Our systems include built-in guardrails, validation checks, and human-in-the-loop escalation for edge cases. You get full visibility and can set approval thresholds for sensitive operations." },
  { q: "Do you offer ongoing support after deployment?", a: "Yes. Every client gets dedicated support, performance monitoring, and continuous optimization. We treat your AI agents as living systems that improve over time." },
];

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section id="faq" ref={ref} className="py-16 md:py-20 px-4 sm:px-6 bg-card border-b border-border">
      <div className={`max-w-3xl mx-auto skeu-container p-5 sm:p-8 md:p-10 transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-foreground tracking-tight">Frequently Asked Questions</h2>
        </div>

        <div className="divide-y divide-muted">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`py-4 sm:py-5 cursor-pointer transition-all duration-500 ease-out ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
              style={{ transitionDelay: `${200 + i * 80}ms` }}
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
            >
              <div className="text-base sm:text-lg md:text-xl font-medium tracking-tight text-foreground flex justify-between items-center gap-3">
                <span>{faq.q}</span>
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-border shadow-sm flex items-center justify-center shrink-0 transition-all duration-300 ${openIdx === i ? "bg-foreground text-card rotate-0" : "bg-card text-foreground"}`}>
                  <Plus className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${openIdx === i ? "rotate-45" : ""}`} strokeWidth={1.5} />
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-400 ease-out ${openIdx === i ? "max-h-40 opacity-100 mt-3 sm:mt-4" : "max-h-0 opacity-0"}`}
              >
                <div className="text-sm sm:text-base text-muted-foreground font-normal leading-relaxed pr-8">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
