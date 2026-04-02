import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "What exactly does Workomate do?", a: "We audit your business workflows, identify tasks that humans shouldn't be doing manually (like data entry, follow-ups), and build custom AI agents to handle those tasks 24/7." },
  { q: "How long does it take to set up?", a: "Most standard workflows are deployed within 2 to 4 weeks. Complex enterprise setups may take 6 to 8 weeks. We map out a strict timeline during our initial audit." },
  { q: "Do I need technical knowledge?", a: "Zero. We handle everything from technical architecture to implementation. We deliver a finished system that works in the background, with a dashboard for monitoring." },
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
                <div className={`w-8 h-8 rounded-full border border-border shadow-sm flex items-center justify-center transition-colors ${openIdx === i ? "bg-foreground text-card" : "bg-card text-foreground"}`}>
                  <Plus className={`w-5 h-5 transition-transform duration-300 ${openIdx === i ? "rotate-45" : ""}`} strokeWidth={1.5} />
                </div>
              </div>
              {openIdx === i && (
                <div className="mt-4 text-base text-muted-foreground font-normal leading-relaxed pr-8">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
