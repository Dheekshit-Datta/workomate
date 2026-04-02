import { ArrowRight, UserMinus, FileX, Copy, MessageSquare } from "lucide-react";

const problems = [
  { icon: UserMinus, title: "Manual follow-ups", desc: "Losing potential revenue because your team can't respond to every inquiry instantly." },
  { icon: FileX, title: "Handmade reports", desc: "Pulling data from multiple sources just to understand your business performance." },
  { icon: Copy, title: "Data entry", desc: "Moving information between tools, causing human errors and operational delays." },
  { icon: MessageSquare, title: "Repetitive queries", desc: "Customer support bogged down by routine questions instead of complex issues." },
];

const ProblemSection = () => (
  <section className="py-20 px-6 bg-card border-b border-border">
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
      <div className="w-full lg:w-1/3 lg:sticky lg:top-24">
        <h2 className="text-3xl md:text-4xl font-normal text-foreground tracking-tight mb-4">You're wasting time on work AI should be doing</h2>
        <p className="text-lg text-muted-foreground font-normal leading-relaxed mb-6">Every day your team spends hours on tasks that could be automated.</p>
        <a href="#case-studies" className="inline-flex items-center text-lg font-medium text-foreground hover:text-muted-foreground transition-colors group">
          Explore case studies
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-5">
        {problems.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="skeu-card p-6">
            <div className="skeu-icon-badge mb-4">
              <Icon className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-medium text-foreground tracking-tight mb-2">{title}</h3>
            <p className="text-base text-muted-foreground font-normal leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
