import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { caseStudies } from "@/data/caseStudies";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed w-full z-50 top-0 bg-card/80 backdrop-blur-xl border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2">
          <Link to="/" className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
            <img src={logo} alt="automisebiz" className="w-8 sm:w-9 h-auto" />
            <span className="font-brand text-lg sm:text-xl text-foreground lowercase">automisebiz</span>
          </Link>
          <Link to="/" className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground hover:text-foreground transition-colors text-xs sm:text-sm font-medium shrink-0">
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Back to Home</span>
            <span className="sm:hidden">Home</span>
          </Link>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card shadow-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
            <span className="text-xs font-medium text-foreground tracking-widest uppercase">Case Studies</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-normal text-foreground tracking-tight mb-4">Real systems. Measurable outcomes.</h1>
          <p className="text-xl text-muted-foreground font-normal max-w-2xl mx-auto">
            See how automisebiz AI agents reduce manual work, improve response speed, and create practical ROI.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          {caseStudies.map((cs) => (
            <Link key={cs.slug} to={`/case-studies/${cs.slug}`} className="skeu-container p-8 md:p-10 transition-all hover:shadow-lg group block">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="flex-1">
                  <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-muted text-xs font-medium text-muted-foreground mb-4 tracking-wide uppercase">
                    {cs.tag}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-medium text-foreground tracking-tight mb-3">{cs.title}</h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-3">{cs.desc}</p>
                  <span className="text-sm text-accent font-medium mb-4 block">Industry: {cs.industry}</span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:gap-2.5 transition-all">
                    Read Full Case Study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>

                <div className="flex flex-row md:flex-col gap-4 md:gap-5 shrink-0">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="skeu-card p-4 text-center min-w-[100px]">
                      <m.icon className="w-5 h-5 text-accent mx-auto mb-1" strokeWidth={1.5} />
                      <div className="text-2xl font-semibold text-foreground tracking-tight">{m.value}</div>
                      <div className="text-xs text-muted-foreground">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto skeu-card-dark p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-normal text-primary-foreground tracking-tight mb-4">Ready to scope your first AI system?</h2>
          <p className="text-lg text-muted-foreground mb-8">Let's audit your workflows and show you exactly where AI can deliver ROI.</p>
          <Link to="/" className="btn-skeu-primary inline-flex items-center gap-2">
            Book a Free Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
