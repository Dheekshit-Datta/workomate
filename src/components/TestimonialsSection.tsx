import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const proofPoints = [
  { title: "Lead generation", detail: "Multi-agent prospecting system that sources, enriches, qualifies, and writes outreach." },
  { title: "Customer support", detail: "Voice and chat agents that answer routine requests, log actions, and escalate edge cases." },
  { title: "Operations", detail: "Back-office automations for data entry, reporting, approvals, and cross-tool updates." },
];

const TestimonialsSection = () => {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section id="testimonials" ref={ref} className="py-16 md:py-20 px-4 sm:px-6 bg-muted/50 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-4 md:gap-6 transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-foreground tracking-tight mb-3">Systems we can prove</h2>
            <p className="text-base sm:text-lg text-muted-foreground font-normal">No borrowed enterprise logos. Just practical systems, clear workflows, and measurable outputs.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {proofPoints.map((point, i) => (
            <div
              key={point.title}
              className={`skeu-card p-5 sm:p-6 min-h-[180px] transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-lg ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${200 + i * 120}ms` }}
            >
              <div className="text-lg sm:text-xl font-medium tracking-tight text-foreground mb-4">{point.title}</div>
              <p className="text-sm text-muted-foreground font-normal leading-relaxed">{point.detail}</p>
            </div>
          ))}
        </div>

        <div className={`mt-8 sm:mt-10 text-center md:text-left transition-all duration-700 ease-out delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <Link to="/case-studies" className="btn-skeu-primary inline-block px-6 py-3">More Customer Stories</Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
