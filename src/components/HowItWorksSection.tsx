const steps = [
  { num: 1, title: "Audit & Strategy", desc: "We map your entire workflow and find every manual task that can be intelligently automated." },
  { num: 2, title: "Integration", desc: "Our engineering team builds custom AI agents specific to your unique enterprise logic." },
  { num: 3, title: "Scale & Govern", desc: "Deploy with full controls. Your new AI system runs daily operations perfectly." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24 px-6 bg-card border-b border-border">
    <div className="max-w-6xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-normal text-foreground tracking-tight mb-4">Up and running in 3 steps</h2>
        <p className="text-xl text-muted-foreground font-normal max-w-2xl mx-auto">A streamlined process to get your enterprise automated.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {steps.map(({ num, title, desc }) => (
          <div key={num} className="flex flex-col items-start border-l-2 border-muted pl-8 relative">
            <div className="absolute -left-[17px] top-0 skeu-step-number">{num}</div>
            <h3 className="text-2xl font-medium text-foreground tracking-tight mb-3 mt-0.5">{title}</h3>
            <p className="text-base text-muted-foreground font-normal leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
