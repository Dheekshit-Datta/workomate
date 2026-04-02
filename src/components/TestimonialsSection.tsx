const testimonials = [
  { company: "Morgan Stanley", quote: "What I was really trying to solve was how to give 15-20 minutes back each day. That extra time lets them reach out to customers more quickly... and that's a real revenue driver." },
  { company: "Pfizer", quote: "We've deployed numerous AI agents across the enterprise covering research and commercialization. The platform ensures compliance while scaling globally." },
  { company: "Mphasis", quote: "We are proud to be a strategic partner, and we feel confident knowing that the platform delivers unmatched reliability and scalability for our enterprise clients." },
  { company: "Microsoft", quote: "Our partnership marks a milestone in accelerating enterprise AI transformation. We are enabling enterprises to adopt AI at scale with security." },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 px-6 bg-muted/50 border-b border-border">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-normal text-foreground tracking-tight mb-3">Customer testimonials</h2>
          <p className="text-lg text-muted-foreground font-normal">Discover how organizations deliver AI value with Workomate.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {testimonials.map((t) => (
          <div key={t.company} className="skeu-card p-6 flex flex-col justify-between min-h-[280px]">
            <div>
              <div className="text-xl font-medium tracking-tight text-foreground mb-4">{t.company}</div>
              <p className="text-sm text-muted-foreground font-normal leading-relaxed">"{t.quote}"</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center md:text-left">
        <a href="#case-studies" className="btn-skeu-primary inline-block px-6 py-3">More Customer Stories</a>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
