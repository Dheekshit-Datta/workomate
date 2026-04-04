import { TrendingUp, Clock, DollarSign } from "lucide-react";

export const caseStudies = [
  {
    slug: "ai-lead-qualification-saas",
    tag: "Lead Generation",
    title: "AI-Powered Lead Qualification for a SaaS Company",
    desc: "Automated the entire lead scoring and qualification pipeline, reducing manual review time by 85% and increasing conversion rates by 32%.",
    industry: "SaaS / B2B",
    metrics: [
      { icon: TrendingUp, label: "Conversion Rate", value: "+32%" },
      { icon: Clock, label: "Time Saved", value: "85%" },
      { icon: DollarSign, label: "Revenue Impact", value: "+$1.2M" },
    ],
    fullContent: {
      challenge: "The client, a mid-market SaaS company with 200+ employees, was drowning in unqualified leads. Their sales team spent over 60% of their time manually reviewing and scoring leads from multiple channels — website forms, LinkedIn, webinars, and partner referrals. The existing lead scoring model was rule-based and hadn't been updated in two years, resulting in high-value prospects slipping through the cracks while low-quality leads consumed valuable rep time.",
      solution: "We deployed a multi-agent AI system that operates across the entire lead qualification funnel:\n\n• **Data Enrichment Agent** — Automatically pulls firmographic, technographic, and intent data from 15+ sources (LinkedIn, Crunchbase, G2, Bombora) the moment a lead enters the CRM.\n\n• **Scoring & Prioritization Agent** — Uses a custom ML model trained on 3 years of historical win/loss data to assign dynamic lead scores. Unlike static rules, this model adapts weekly based on new conversion patterns.\n\n• **Routing Agent** — Instantly routes qualified leads to the right sales rep based on territory, industry expertise, and current pipeline capacity.\n\n• **Nurture Agent** — For leads not yet ready to buy, this agent triggers personalized email sequences and content recommendations based on the prospect's behavior and stage.",
      results: "Within 90 days of deployment:\n\n• **Conversion rates increased by 32%** — Sales reps were spending time on prospects most likely to close.\n• **Manual review time dropped by 85%** — The AI processes and scores leads in under 10 seconds vs. the previous 15-minute manual review.\n• **Revenue impact of +$1.2M in the first year** — More deals closed faster, with a shorter average sales cycle (reduced from 45 days to 28 days).\n• **Rep satisfaction scores increased by 40%** — Less grunt work, more selling.",
      techStack: ["Custom ML scoring model", "Salesforce CRM integration", "Bombora intent data", "LinkedIn Sales Navigator API", "Custom email automation engine"],
    },
  },
  {
    slug: "invoice-processing-logistics",
    tag: "Operations",
    title: "Automating Invoice Processing for a Logistics Firm",
    desc: "Built custom AI agents that process, validate, and route 5,000+ invoices monthly — eliminating data entry errors and cutting processing time from days to minutes.",
    industry: "Logistics",
    metrics: [
      { icon: TrendingUp, label: "Accuracy", value: "99.7%" },
      { icon: Clock, label: "Processing Time", value: "-94%" },
      { icon: DollarSign, label: "Annual Savings", value: "$480K" },
    ],
    fullContent: {
      challenge: "A global logistics company processing 5,000+ invoices per month across 12 countries was struggling with a manual, error-prone accounts payable workflow. Invoices arrived in different formats (PDF, email, scanned documents), in multiple languages, and with varying tax regulations. The AP team of 8 full-time employees spent most of their time on data entry, validation, and exception handling. Error rates were at 4.2%, leading to payment disputes, vendor relationship issues, and compliance risks.",
      solution: "We built a comprehensive AI-powered invoice processing pipeline:\n\n• **Document Intelligence Agent** — Uses advanced OCR and NLP to extract data from any invoice format (PDF, scan, email) in 8 languages. Handles tables, line items, tax breakdowns, and handwritten notes with 99.7% accuracy.\n\n• **Validation Agent** — Cross-references extracted data against purchase orders, contracts, and historical pricing. Automatically flags discrepancies like price changes >5%, quantity mismatches, or duplicate invoices.\n\n• **Tax & Compliance Agent** — Applies country-specific tax rules, validates VAT numbers, and ensures regulatory compliance across all 12 operating countries.\n\n• **Routing & Approval Agent** — Automatically routes invoices through the correct approval workflow based on amount, department, vendor tier, and budget availability. Escalates exceptions to the right person with full context.",
      results: "Deployed in a phased rollout over 60 days:\n\n• **Processing accuracy reached 99.7%** — Up from 95.8%, virtually eliminating payment disputes.\n• **Processing time reduced by 94%** — From an average of 18 minutes per invoice to under 60 seconds.\n• **Annual savings of $480K** — Through headcount reallocation (3 FTEs moved to strategic finance roles), elimination of late payment penalties, and early payment discount capture.\n• **Vendor satisfaction improved significantly** — Payment disputes dropped by 92%, and average payment time decreased from 34 days to 12 days.",
      techStack: ["Custom OCR pipeline", "Multi-language NLP models", "SAP integration", "Country-specific tax rule engines", "Automated approval workflows"],
    },
  },
  {
    slug: "ai-customer-support-ecommerce",
    tag: "Customer Support",
    title: "AI Agent Handling Tier-1 Support for an E-Commerce Brand",
    desc: "Deployed an AI support agent that autonomously resolves 70% of customer tickets — order tracking, returns, FAQs — with human-like context awareness.",
    industry: "E-Commerce",
    metrics: [
      { icon: TrendingUp, label: "Auto-Resolution", value: "70%" },
      { icon: Clock, label: "Response Time", value: "<30s" },
      { icon: DollarSign, label: "Cost Reduction", value: "60%" },
    ],
    fullContent: {
      challenge: "A fast-growing e-commerce brand processing 50,000+ orders per month was overwhelmed by customer support volume. Their 25-person support team handled 8,000+ tickets weekly, with 65% being repetitive Tier-1 queries: order tracking, return requests, shipping updates, and product questions. Average first response time was 4.5 hours during peak seasons, leading to poor CSAT scores (3.2/5) and increasing customer churn. Hiring more agents wasn't scalable — onboarding took 3 weeks and turnover was 40% annually.",
      solution: "We deployed an intelligent AI support agent integrated directly into their existing helpdesk:\n\n• **Conversational AI Agent** — Handles natural language queries across chat, email, and social media. Understands context, sentiment, and urgency. Can access order data, shipping APIs, and product catalogs in real-time to provide accurate, personalized responses.\n\n• **Returns & Exchange Agent** — Autonomously processes return requests by verifying order details, checking return policy eligibility, generating return labels, and initiating refunds — all without human intervention.\n\n• **Escalation Intelligence** — When a query requires human attention (complaints, complex issues, VIP customers), the AI prepares a complete context brief for the human agent, including customer history, sentiment analysis, and recommended resolution.\n\n• **Proactive Support Agent** — Monitors orders for potential issues (shipping delays, stock problems) and proactively reaches out to customers before they even need to contact support.",
      results: "Results within the first 120 days:\n\n• **70% of tickets resolved autonomously** — Without any human intervention, maintaining a 4.6/5 CSAT score on AI-handled interactions.\n• **Response time dropped to under 30 seconds** — From 4.5 hours average, providing instant 24/7 support.\n• **Support costs reduced by 60%** — The team was restructured from 25 to 12 agents, with remaining agents focusing exclusively on complex, high-value interactions.\n• **Customer retention improved by 18%** — Faster, more consistent support directly reduced churn.\n• **Peak season handling** — The AI scaled effortlessly during Black Friday (3x normal volume) with zero degradation in response quality.",
      techStack: ["Custom LLM fine-tuned on brand voice", "Zendesk integration", "Shopify order API", "Sentiment analysis engine", "Multi-channel orchestration"],
    },
  },
  {
    slug: "personalized-outreach-consulting",
    tag: "Marketing",
    title: "Personalized Outreach at Scale for a Consulting Firm",
    desc: "Created AI workflows that research prospects, draft personalized emails, and schedule follow-ups — resulting in 3x more meetings booked per month.",
    industry: "Consulting",
    metrics: [
      { icon: TrendingUp, label: "Meetings Booked", value: "3x" },
      { icon: Clock, label: "Outreach Time", value: "-75%" },
      { icon: DollarSign, label: "Pipeline Growth", value: "+$2.8M" },
    ],
    fullContent: {
      challenge: "A boutique management consulting firm with 50 consultants was struggling to generate consistent deal flow. Their business development team of 4 people was manually researching prospects, writing personalized outreach emails, and managing follow-up sequences. Each prospect required 45-60 minutes of research and email crafting, limiting the team to 15-20 quality outreach attempts per day. Response rates had dropped to 2.1% as generic outreach was ignored, and the firm's $15M pipeline target was at risk.",
      solution: "We built an end-to-end AI outreach system that handles the entire prospecting workflow:\n\n• **Research Agent** — Automatically profiles target companies and decision-makers by analyzing earnings calls, press releases, LinkedIn activity, job postings, and industry reports. Identifies specific pain points and trigger events relevant to the firm's consulting services.\n\n• **Content Generation Agent** — Drafts hyper-personalized emails that reference specific challenges, recent company events, and relevant case studies. Each email reads as if written by a senior partner who spent an hour researching the prospect. Produces 3 variants per prospect for A/B testing.\n\n• **Sequence Management Agent** — Orchestrates multi-touch outreach campaigns across email and LinkedIn. Automatically adjusts timing, channel, and messaging based on prospect engagement signals (opens, clicks, profile views).\n\n• **Meeting Scheduling Agent** — When a prospect shows interest, this agent handles the back-and-forth of scheduling, sends calendar invites, and prepares a brief for the consulting partner with all relevant prospect intelligence.",
      results: "Impact measured over the first 6 months:\n\n• **Meetings booked increased 3x** — From 12 to 38 qualified meetings per month.\n• **Outreach capacity increased 10x** — The team now reaches 200+ prospects per day with fully personalized messaging.\n• **Response rates jumped to 8.4%** — Up from 2.1%, a 4x improvement driven by hyper-personalization.\n• **Pipeline grew by +$2.8M** — New qualified opportunities generated directly by the AI outreach system.\n• **Time per prospect dropped by 75%** — From 45-60 minutes to under 12 minutes of human oversight.\n• **Partner satisfaction** — Senior partners reported that AI-generated emails were indistinguishable from manually written ones in blind tests.",
      techStack: ["Custom prospect research engine", "GPT-4 fine-tuned on consulting voice", "LinkedIn Sales Navigator API", "HubSpot CRM integration", "Multi-variant email testing"],
    },
  },
];
