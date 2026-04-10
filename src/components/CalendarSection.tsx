import { useScrollReveal } from "@/hooks/useScrollReveal";

const CalendarSection = () => {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="py-16 md:py-24 px-4 sm:px-6 border-b border-border bg-background">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card shadow-sm mb-5 transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-95"}`}>
          <span className="text-[10px] sm:text-xs font-medium text-foreground tracking-widest uppercase">Schedule a Call</span>
        </div>
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-normal text-foreground tracking-tight mb-3 transition-all duration-700 ease-out delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Book Your Free Strategy Call
        </h2>
        <p className={`text-base sm:text-lg text-muted-foreground font-normal mb-8 leading-relaxed max-w-xl transition-all duration-700 ease-out delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Pick a time that works for you. No back-and-forth.
        </p>
        <div className={`w-full rounded-2xl overflow-hidden skeu-card transition-all duration-700 ease-out delay-[450ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <iframe
            src="https://cal.com/dheekshit/30-min-meeting"
            className="w-full border-0"
            style={{ height: "700px" }}
            title="Book a Strategy Call"
          />
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
