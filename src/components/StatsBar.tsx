const stats = [
  { value: "3x", label: "Meetings Booked Per Month" },
  { value: "90%", label: "Manual Research Eliminated" },
  { value: "2–4 Weeks", label: "Average Time to Deploy" },
  { value: "Zero", label: "Tech Knowledge Required" },
];

const StatsBar = () => (
  <section className="py-10 md:py-14 px-4 sm:px-6 border-y border-border bg-background">
    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center">
      {stats.map((s) => (
        <div key={s.label}>
          <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight">{s.value}</div>
          <p className="mt-1.5 text-sm sm:text-base text-muted-foreground font-normal">{s.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default StatsBar;
