import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "What exactly does Workomate do?", a: "We audit your business workflows, identify tasks that humans shouldn't be doing manually (like data entry, follow-ups), and build custom AI agents to handle those tasks 24/7." },
  { q: "How long does it take to set up?", a: "Most standard workflows are deployed within 2 to 4 weeks. Complex enterprise setups may take 6 to 8 weeks. We map out a strict timeline during our initial audit." },
  { q: "Do I need technical knowledge?", a: "Zero. We handle everything from technical architecture to implementation. We deliver a finished system that works in the background, with a dashboard for monitoring." },
  { q: "What kind of tasks can your AI agents automate?", a: "Anything repetitive and rule-based — data entry, invoice processing, customer follow-ups, report generation, lead qualification, scheduling, and more. If a human can follow a process to do it, our AI can too." },
  { q: "How do you ensure data security?", a: "We follow enterprise-grade security protocols including end-to-end encryption, SOC 2 compliance readiness, and strict access controls. Your data never leaves your approved infrastructure." },
  { q: "What's the pricing model?", a: "We offer flexible pricing based on the number of workflows automated and their complexity. Every engagement starts with a free audit so you know exactly what you're investing in before committing." },
  { q: "Can your AI agents integrate with our existing tools?", a: "Absolutely. We integrate with all major platforms — Salesforce, HubSpot, Slack, Google Workspace, Microsoft 365, SAP, and hundreds more via APIs." },
  { q: "What happens if the AI makes a mistake?", a: "Our systems include built-in guardrails, validation checks, and human-in-the-loop escalation for edge cases. You get full visibility and can set approval thresholds for sensitive operations." },
  { q: "Do you offer ongoing support after deployment?", a: "Yes. Every client gets dedicated support, performance monitoring, and continuous optimization. We treat your AI agents as living systems that improve over time." },
];

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 px-6 bg-card border-b border-border">
      <div className="max-w-3xl mx-auto skeu-container p-10">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-normal text-foreground tracking-tight">Frequently Asked Questions</h2>
        </div>

        <div className="divide-y divide-muted">
          {faqs.map((faq, i) => (
            <div key={i} className="py-5 cursor-pointer" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
              <div className="text-xl font-medium tracking-tight text-foreground flex justify-between items-center">
                {faq.q}
                <div className={`w-8 h-8 rounded-full border border-border shadow-sm flex items-center justify-center shrink-0 ml-4 transition-colors ${openIdx === i ? "bg-foreground text-card" : "bg-card text-foreground"}`}>
                  <Plus className={`w-5 h-5 transition-transform duration-300 ${openIdx === i ? "rotate-45" : ""}`} strokeWidth={1.5} />
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIdx === i ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
              >
                <div className="text-base text-muted-foreground font-normal leading-relaxed pr-8">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
