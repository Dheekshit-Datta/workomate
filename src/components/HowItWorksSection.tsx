import { useEffect, useRef, useState } from "react";

const steps = [
  { num: 1, title: "Audit & Strategy", desc: "We map your entire workflow and find every manual task that can be intelligently automated. You'll get a detailed report with ROI projections." },
  { num: 2, title: "Build & Integrate", desc: "Our engineering team builds custom AI agents specific to your unique enterprise logic. Every agent is tailored to your tools, processes, and team." },
  { num: 3, title: "Deploy & Scale", desc: "Go live with full controls and monitoring. Your new AI system runs daily operations flawlessly — and scales as you grow." },
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
    <section id="how-it-works" className="py-20 md:py-28 px-4 sm:px-6 bg-card border-b border-border" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-foreground tracking-tight mb-4">Up and running in 3 steps</h2>
          <p className="text-base sm:text-xl text-muted-foreground font-normal max-w-2xl mx-auto leading-relaxed">A streamlined process to get your enterprise automated — fast.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
          {steps.map(({ num, title, desc }, i) => (
            <div
              key={num}
              className={`flex flex-col items-start border-l-2 border-border pl-6 sm:pl-8 relative transition-all duration-600 ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="absolute -left-[17px] top-0 w-9 h-9 rounded-full bg-gradient-to-b from-[hsl(0_0%_25%)] to-[hsl(0_0%_5%)] text-primary-foreground shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.3)] font-medium flex items-center justify-center text-sm border-[3px] border-card">
                {num}
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground tracking-tight mb-3 mt-0.5">{title}</h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-normal leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
