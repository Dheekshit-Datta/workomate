import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  { company: "Morgan Stanley", quote: "What I was really trying to solve was how to give 15-20 minutes back each day. That extra time lets them reach out to customers more quickly... and that's a real revenue driver." },
  { company: "Pfizer", quote: "We've deployed numerous AI agents across the enterprise covering research and commercialization. The platform ensures compliance while scaling globally." },
  { company: "Mphasis", quote: "We are proud to be a strategic partner, and we feel confident knowing that the platform delivers unmatched reliability and scalability for our enterprise clients." },
  { company: "Microsoft", quote: "Our partnership marks a milestone in accelerating enterprise AI transformation. We are enabling enterprises to adopt AI at scale with security." },
];

const TestimonialsSection = () => {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section id="testimonials" ref={ref} className="py-16 md:py-20 px-4 sm:px-6 bg-muted/50 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-4 md:gap-6 transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-foreground tracking-tight mb-3">Customer testimonials</h2>
            <p className="text-base sm:text-lg text-muted-foreground font-normal">Discover how organizations deliver AI value with automisebiz.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.company}
              className={`skeu-card p-5 sm:p-6 flex flex-col justify-between min-h-[240px] sm:min-h-[280px] transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-lg ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${200 + i * 120}ms` }}
            >
              <div>
                <div className="text-lg sm:text-xl font-medium tracking-tight text-foreground mb-4">{t.company}</div>
                <p className="text-xs sm:text-sm text-muted-foreground font-normal leading-relaxed">"{t.quote}"</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-8 sm:mt-10 text-center md:text-left transition-all duration-700 ease-out delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <a href="#case-studies" className="btn-skeu-primary inline-block px-6 py-3">More Customer Stories</a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
