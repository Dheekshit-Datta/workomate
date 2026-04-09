import { Play, ArrowRight } from "lucide-react";

interface VSLSectionProps {
  onBookAudit: () => void;
}

const VSLSection = ({ onBookAudit }: VSLSectionProps) => (
  <section className="py-12 md:py-20 px-4 sm:px-6 bg-background">
    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-foreground tracking-tight mb-3">
        See how it works in 2 minutes
      </h2>
      <p className="text-base sm:text-lg text-muted-foreground font-normal mb-8 max-w-2xl leading-relaxed">
        Watch a quick walkthrough of how we automate your operations, generate leads, and save your team hundreds of hours.
      </p>

      {/* Video container */}
      <div className="w-full aspect-video rounded-2xl overflow-hidden relative group cursor-pointer skeu-card">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-foreground/10 flex items-center justify-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-card flex items-center justify-center shadow-lg border border-border group-hover:scale-110 transition-transform duration-300">
            <Play className="w-7 h-7 sm:w-9 sm:h-9 text-foreground ml-1" fill="currentColor" />
          </div>
        </div>
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
          <span className="text-xs sm:text-sm font-medium text-muted-foreground bg-card/80 backdrop-blur-sm px-3 py-1 rounded-full border border-border">
            2:14
          </span>
        </div>
      </div>

      <button onClick={onBookAudit} className="btn-skeu-primary mt-8 flex items-center gap-2">
        Book a Free Audit <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  </section>
);

export default VSLSection;
