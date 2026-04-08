import { ArrowRight, UserMinus, FileX, Copy, MessageSquare } from "lucide-react";

const problems = [
  { icon: UserMinus, title: "Your BDR spends 3 hours/day on LinkedIn research", desc: "Finding prospects, checking their profiles, writing openers — all manually. An AI agent does this in minutes, at 10x the volume." },
  { icon: FileX, title: "You're losing deals to missed follow-ups", desc: "Studies show 80% of sales need 5+ follow-ups. Nobody has time for that. An AI follow-up sequence never forgets, never gets tired." },
  { icon: Copy, title: "Your ops run on copy-pasted spreadsheets", desc: "Pulling data from HubSpot, Sheets, and Slack into one doc every Monday morning is not a strategy. It's a waste of a smart person's time." },
  { icon: MessageSquare, title: "Support tickets that didn't need a human", desc: "60–70% of inbound queries are routine questions your AI agent could answer in seconds — freeing your team for the work that actually matters." },
];

const ProblemSection = () => (
  <section className="py-16 md:py-20 px-4 sm:px-6 bg-card border-b border-border">
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
      <div className="w-full lg:w-1/3 lg:sticky lg:top-24">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-foreground tracking-tight mb-4">You're wasting time on work AI should be doing</h2>
        <p className="text-base sm:text-lg text-muted-foreground font-normal leading-relaxed mb-6">Your team is burning hours on work a $20 AI tool could do in 3 minutes. Here's what that's costing you.</p>
        <a href="#case-studies" className="inline-flex items-center text-base sm:text-lg font-medium text-foreground hover:text-muted-foreground transition-colors group">
          Explore case studies
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {problems.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="skeu-card p-5 sm:p-6">
            <div className="skeu-icon-badge mb-4">
              <Icon className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg sm:text-xl font-medium text-foreground tracking-tight mb-2">{title}</h3>
            <p className="text-sm sm:text-base text-muted-foreground font-normal leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
