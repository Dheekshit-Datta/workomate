import { useState } from "react";
import { ArrowRight, TrendingUp, Clock, DollarSign, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const caseStudies = [
  {
    tag: "Lead Generation",
    title: "AI-Powered Lead Qualification for a SaaS Company",
    desc: "Automated the entire lead scoring and qualification pipeline, reducing manual review time by 85% and increasing conversion rates by 32%.",
    metrics: [
      { icon: TrendingUp, label: "Conversion Rate", value: "+32%" },
      { icon: Clock, label: "Time Saved", value: "85%" },
      { icon: DollarSign, label: "Revenue Impact", value: "+$1.2M" },
    ],
    industry: "SaaS / B2B",
  },
  {
    tag: "Operations",
    title: "Automating Invoice Processing for a Logistics Firm",
    desc: "Built custom AI agents that process, validate, and route 5,000+ invoices monthly — eliminating data entry errors and cutting processing time from days to minutes.",
    metrics: [
      { icon: TrendingUp, label: "Accuracy", value: "99.7%" },
      { icon: Clock, label: "Processing Time", value: "-94%" },
      { icon: DollarSign, label: "Annual Savings", value: "$480K" },
    ],
    industry: "Logistics",
  },
  {
    tag: "Customer Support",
    title: "AI Agent Handling Tier-1 Support for an E-Commerce Brand",
    desc: "Deployed an AI support agent that autonomously resolves 70% of customer tickets — order tracking, returns, FAQs — with human-like context awareness.",
    metrics: [
      { icon: TrendingUp, label: "Auto-Resolution", value: "70%" },
      { icon: Clock, label: "Response Time", value: "<30s" },
      { icon: DollarSign, label: "Cost Reduction", value: "60%" },
    ],
    industry: "E-Commerce",
  },
  {
    tag: "Marketing",
    title: "Personalized Outreach at Scale for a Consulting Firm",
    desc: "Created AI workflows that research prospects, draft personalized emails, and schedule follow-ups — resulting in 3x more meetings booked per month.",
    metrics: [
      { icon: TrendingUp, label: "Meetings Booked", value: "3x" },
      { icon: Clock, label: "Outreach Time", value: "-75%" },
      { icon: DollarSign, label: "Pipeline Growth", value: "+$2.8M" },
    ],
    industry: "Consulting",
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 bg-card/80 backdrop-blur-xl border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <img src={logo} alt="Workomate" className="w-8 h-auto" />
            <span className="text-xl font-medium tracking-tight text-foreground">Workomate</span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 shadow-sm mb-6">
            <span className="text-xs font-medium text-accent tracking-widest uppercase">Case Studies</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-normal text-foreground tracking-tight mb-4">Real results. Real enterprises.</h1>
          <p className="text-xl text-muted-foreground font-normal max-w-2xl mx-auto">See how leading companies use Workomate AI agents to automate operations and drive measurable ROI.</p>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          {caseStudies.map((cs, i) => (
            <div key={i} className="skeu-container p-8 md:p-10 transition-all hover:shadow-lg">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="flex-1">
                  <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-muted text-xs font-medium text-muted-foreground mb-4 tracking-wide uppercase">
                    {cs.tag}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-medium text-foreground tracking-tight mb-3">{cs.title}</h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-2">{cs.desc}</p>
                  <span className="text-sm text-accent font-medium">Industry: {cs.industry}</span>
                </div>

                <div className="flex flex-row md:flex-col gap-4 md:gap-5 shrink-0">
                  {cs.metrics.map((m, j) => (
                    <div key={j} className="skeu-card p-4 text-center min-w-[100px]">
                      <m.icon className="w-5 h-5 text-accent mx-auto mb-1" strokeWidth={1.5} />
                      <div className="text-2xl font-semibold text-foreground tracking-tight">{m.value}</div>
                      <div className="text-xs text-muted-foreground">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto skeu-card-dark p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-normal text-primary-foreground tracking-tight mb-4">Ready to become the next success story?</h2>
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
