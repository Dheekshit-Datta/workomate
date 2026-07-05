import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import logo from "@/assets/logo.png";
import { caseStudies } from "@/data/caseStudies";

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-medium text-foreground mb-4">Case study not found</h1>
          <Link to="/case-studies" className="text-accent hover:underline">Back to Case Studies</Link>
        </div>
      </div>
    );
  }

  const content = cs.fullContent;

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed w-full z-50 top-0 bg-card/80 backdrop-blur-xl border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2">
          <Link to="/" className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
            <img src={logo} alt="automisebiz" className="w-8 sm:w-9 h-auto" />
            <span className="text-lg sm:text-xl font-normal tracking-tight text-foreground lowercase">automisebiz</span>
          </Link>
          <Link to="/case-studies" className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground hover:text-foreground transition-colors text-xs sm:text-sm font-medium shrink-0">
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">All Case Studies</span>
            <span className="sm:hidden">Back</span>
          </Link>
        </div>
      </nav>

      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-muted text-xs font-medium text-muted-foreground mb-4 tracking-wide uppercase">
            {cs.tag} - {cs.industry}
          </div>
          <h1 className="text-3xl md:text-5xl font-normal text-foreground tracking-tight mb-6 leading-tight">{cs.title}</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{cs.desc}</p>
        </div>
      </section>

      <section className="pb-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cs.metrics.map((m, j) => (
            <div key={j} className="skeu-card p-6 text-center">
              <m.icon className="w-6 h-6 text-accent mx-auto mb-2" strokeWidth={1.5} />
              <div className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">{m.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-12 px-6">
        <div className="max-w-4xl mx-auto skeu-container p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-medium text-foreground tracking-tight mb-4">The Challenge</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">{content.challenge}</p>
        </div>
      </section>

      <section className="pb-12 px-6">
        <div className="max-w-4xl mx-auto skeu-container p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-medium text-foreground tracking-tight mb-4">Our Solution</h2>
          <div className="prose prose-slate max-w-none text-base md:text-lg text-muted-foreground leading-relaxed [&_strong]:text-foreground [&_li]:my-2">
            <ReactMarkdown>{content.solution}</ReactMarkdown>
          </div>
        </div>
      </section>

      <section className="pb-12 px-6">
        <div className="max-w-4xl mx-auto skeu-container p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-medium text-foreground tracking-tight mb-4">The Results</h2>
          <div className="prose prose-slate max-w-none text-base md:text-lg text-muted-foreground leading-relaxed [&_strong]:text-foreground [&_li]:my-2">
            <ReactMarkdown>{content.results}</ReactMarkdown>
          </div>
        </div>
      </section>

      <section className="pb-12 px-6">
        <div className="max-w-4xl mx-auto skeu-container p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-medium text-foreground tracking-tight mb-4">Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {content.techStack.map((tech, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted text-sm font-medium text-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent" strokeWidth={1.5} />
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto skeu-card-dark p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-normal text-primary-foreground tracking-tight mb-4">Want similar results?</h2>
          <p className="text-lg text-muted-foreground mb-8">Let's audit your workflows and show you exactly where AI can deliver ROI.</p>
          <Link to="/" className="btn-skeu-primary inline-flex items-center gap-2">
            Book a Free Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;
