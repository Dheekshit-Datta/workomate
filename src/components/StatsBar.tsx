import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: "3x", label: "Meetings Booked Per Month" },
  { value: "90%", label: "Manual Research Eliminated" },
  { value: "2–4 Weeks", label: "Average Time to Deploy" },
  { value: "Zero", label: "Tech Knowledge Required" },
];

const StatsBar = () => {
  const { ref, visible } = useScrollReveal(0.2);

  return (
    <section ref={ref} className="py-10 md:py-14 px-4 sm:px-6 border-y border-border bg-background">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-90"}`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight">{s.value}</div>
            <p className="mt-1.5 text-sm sm:text-base text-muted-foreground font-normal">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
