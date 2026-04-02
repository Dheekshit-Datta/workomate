import { Database, Bot, CheckCircle2, Zap } from "lucide-react";

const nodes = [
  { icon: Database, label: "Enterprise Context", sub: "Rules & Data", dark: false },
  { icon: Bot, label: "Workomate AI", sub: "Reasoning Engine", dark: true },
  { icon: CheckCircle2, label: "Autonomous Action", sub: "Task Completed", dark: false, iconColor: "text-green-500" },
];

const HumanInTheLoopSection = () => (
  <section className="py-24 px-6 bg-card border-b border-border overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 shadow-sm mb-4">
          <Zap className="w-4 h-4 text-accent" strokeWidth={1.5} />
          <span className="text-xs font-medium text-accent tracking-widest uppercase">Contextual Execution</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-normal text-foreground tracking-tight mb-4">Human context, AI execution.</h2>
        <p className="text-lg text-muted-foreground font-normal max-w-3xl mx-auto leading-relaxed">
          Our AI agents don't guess. They absorb your enterprise's specific context and rules, executing tasks autonomously exactly how a trained team member would.
        </p>
      </div>

      <div className="skeu-container p-8 w-full max-w-4xl mx-auto mt-10 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,hsl(210_100%_96%)_0%,transparent_70%)] opacity-60 pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-2 w-full justify-between">
          {nodes.map((node, i) => (
            <div key={node.label} className="contents">
              <div className="flex flex-col items-center gap-3 w-40 shrink-0">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center relative ${
                  node.dark
                    ? "bg-gradient-to-b from-[hsl(0_0%_20%)] to-[hsl(0_0%_7%)] shadow-[0_8px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.2)]"
                    : "bg-card border border-border shadow-[0_4px_10px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,1)]"
                }`}>
                  {node.dark && <div className="absolute inset-0 rounded-2xl border border-card/10" />}
                  <node.icon className={`w-8 h-8 ${node.dark ? "text-primary-foreground" : node.iconColor || "text-accent"}`} strokeWidth={1.5} />
                </div>
                <div className="text-center">
                  <span className="text-base font-medium text-foreground tracking-tight block">{node.label}</span>
                  <span className="text-xs text-muted-foreground">{node.sub}</span>
                </div>
              </div>

              {i < nodes.length - 1 && (
                <div className="flex-grow flex items-center justify-center relative w-full h-12 md:h-auto">
                  <div className="hidden md:block w-full h-1 bg-muted rounded-full relative overflow-hidden">
                    <div className={`absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent ${i === 0 ? "via-accent" : "via-green-400"} to-transparent animate-pulse opacity-60`} />
                  </div>
                  <div className="md:hidden h-full w-1 bg-muted rounded-full relative overflow-hidden">
                    <div className={`absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent ${i === 0 ? "via-accent" : "via-green-400"} to-transparent animate-pulse opacity-60`} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HumanInTheLoopSection;
