import { useEffect, useRef, useState } from "react";
import { Search, Cpu, Rocket } from "lucide-react";

const steps = [
  { num: 1, icon: Search, title: "Audit & Strategy", desc: "We map your entire workflow and find every manual task that can be intelligently automated. You'll get a detailed report with ROI projections." },
  { num: 2, icon: Cpu, title: "Build & Integrate", desc: "Our engineering team builds custom AI agents specific to your unique enterprise logic. Every agent is tailored to your tools, processes, and team." },
  { num: 3, icon: Rocket, title: "Deploy & Scale", desc: "Go live with full controls and monitoring. Your new AI system runs daily operations flawlessly — and scales as you grow." },
];

const HowItWorksSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="py-28 px-6 bg-card border-b border-border" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-foreground tracking-tight mb-5">Up and running in 3 steps</h2>
          <p className="text-xl text-muted-foreground font-normal max-w-2xl mx-auto leading-relaxed">A streamlined process to get your enterprise automated — fast.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {steps.map(({ num, icon: Icon, title, desc }, i) => (
            <div
              key={num}
              className={`skeu-container p-8 md:p-10 flex flex-col items-start relative transition-all duration-600 ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="skeu-step-number w-12 h-12 text-lg">{num}</div>
                <div className="skeu-icon-badge">
                  <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-medium text-foreground tracking-tight mb-4">{title}</h3>
              <p className="text-base md:text-lg text-muted-foreground font-normal leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
