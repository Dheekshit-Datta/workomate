interface CTASectionProps {
  onBookAudit: () => void;
}

const CTASection = ({ onBookAudit }: CTASectionProps) => (
  <section className="py-20 px-6 bg-transparent border-b border-border">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="skeu-container p-10 flex flex-col items-start justify-center">
        <h2 className="text-3xl md:text-4xl font-normal text-foreground tracking-tight mb-3">Accelerate time-to-value from AI</h2>
        <p className="text-lg text-muted-foreground font-normal mb-8">Find out how Workomate can help your enterprise scale.</p>
        <button onClick={onBookAudit} className="btn-skeu-secondary">Book a Free Audit</button>
      </div>

      <div className="skeu-card-dark p-10 flex flex-col items-start justify-center">
        <h2 className="text-3xl md:text-4xl font-normal text-primary-foreground tracking-tight mb-3 drop-shadow-sm">See our AI systems in action</h2>
        <p className="text-lg text-muted-foreground font-normal mb-8">Browse our case studies to see how we deliver instant ROI.</p>
        <a href="#case-studies" className="btn-skeu-secondary !border-transparent !shadow-[0_4px_8px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,1),inset_0_-2px_1px_rgba(150,150,150,0.5)]">
          View Case Studies
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
