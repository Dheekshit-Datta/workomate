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
    slug: "ai-sales-system-agency",
    tag: "Lead Generation",
    title: "AI-Powered Sales System for a Performance Marketing Agency",
    desc: "Built a fully automated outreach engine — from LinkedIn prospecting to personalised cold email — replacing manual research with a multi-agent pipeline that books meetings on autopilot.",
    industry: "Agency / B2B",
    metrics: [
      { icon: TrendingUp, label: "Meetings Booked", value: "3x" },
      { icon: Clock, label: "Manual Research Eliminated", value: "90%" },
      { icon: DollarSign, label: "Saved Weekly per SDR", value: "~4 hrs" },
    ],
    fullContent: {
      challenge: "Growzzy Media — a performance marketing agency — had no structured outbound system. Sales relied entirely on referrals and manual outreach. When they decided to build a pipeline, the team had no time to manually research leads, write personalised emails, or track follow-ups at scale.\n\nEvery hour spent on prospecting was an hour not spent on client delivery. They needed an outbound engine that could run with minimal human input.",
      solution: "We built a multi-agent sales system inside Antigravity, designed to handle every stage of the outbound workflow — from sourcing leads to writing the first line of a cold email — without manual intervention.\n\nThe system integrates Apify for LinkedIn scraping, Jina AI for web intelligence, and Airtable as the central lead database, with Instantly managing email sequences and warm-up.\n\n**The system — four agents:**\n\n• **Scraping Agent** — Pulls ICP-matched leads from LinkedIn Sales Navigator via Apify. Filters by industry, headcount, role, and location. Feeds raw data into Airtable.\n\n• **Enrichment Agent** — Uses Jina AI to read company websites, recent posts, and ad activity. Builds a context profile for each lead — what they're running, what's missing.\n\n• **Qualification Agent** — Scores leads against Growzzy's ICP criteria — ad spend signals, current agency use, growth stage. Removes unqualified leads before any email is sent.\n\n• **Copywriting Agent** — Writes a personalised first line and full cold email for each lead using enrichment data. Pushes final copy into Instantly sequences, ready to send.",
      results: "Results — 60 days post-launch:\n\n• **3× more qualified meetings booked per month** vs. inbound-only baseline.\n• **~90% reduction in manual research** — leads are sourced, enriched, and written up automatically.\n• **< 30s to go from a LinkedIn profile** to a personalised, send-ready email.\n• **Airtable gives the founder full visibility** into pipeline status, lead stage, and email performance in one view.",
      techStack: ["Antigravity (Trigger.dev)", "Apify", "Jina AI", "Airtable", "Instantly.ai", "LinkedIn Sales Navigator", "Claude API"],
    },
  },
  {
    slug: "ai-voice-agent-hotel",
    tag: "Customer Support",
    title: "AI Voice Agent for 24/7 Hotel Guest Support",
    desc: "Deployed a multi-specialist voice AI — \"Aria\" — that handles reservations, room service, housekeeping requests, and facility inquiries around the clock, with zero hold times and seamless Airtable integration.",
    industry: "Hospitality",
    metrics: [
      { icon: TrendingUp, label: "Guest Support Coverage", value: "24/7" },
      { icon: Clock, label: "Calls Handled Without Staff", value: "~80%" },
      { icon: DollarSign, label: "Avg Response Latency", value: "< 2s" },
    ],
    fullContent: {
      challenge: "Hotel front desks are overwhelmed with repetitive guest calls — booking confirmations, room service orders, housekeeping requests, spa availability. Staff spend the majority of their time on routine queries instead of high-value guest interactions.\n\nAfter hours, calls go unanswered entirely, leading to missed requests and poor guest experience. The hotel needed a solution that could handle volume 24/7 without adding headcount.",
      solution: "We built \"Aria\" — a voice AI receptionist — on top of Retell AI, backed by a multi-specialist agentic system. Rather than a single bot trying to do everything, Aria routes each call to a purpose-built specialist agent depending on what the guest needs.\n\nAll guest interactions, requests, and bookings are logged in real time to Airtable, giving hotel staff a live dashboard of what's been actioned without touching the phone.\n\n**The system — specialist agents:**\n\n• **Reservations Agent** — Handles booking enquiries, room availability checks, and confirmation lookups. Reads and writes directly to Airtable's reservations table in real time.\n\n• **Room Service Agent** — Takes food and beverage orders, confirms menu items, and logs orders with room number and timestamp. Routes to kitchen staff instantly.\n\n• **Housekeeping Agent** — Accepts requests for towels, cleaning, or turndown service. Creates a task record in Airtable assigned to the next available housekeeping slot.\n\n• **Concierge Agent** — Answers questions about hotel facilities, check-in/out times, pool hours, and local recommendations. Handles general FAQs without any human handoff.",
      results: "What it delivers:\n\n• **24/7 guest support** with no hold times — calls answered instantly at any hour.\n• **~80% of routine calls** fully resolved by Aria without staff involvement.\n• **Real-time logging** of every request into Airtable — staff always know what's pending.\n• **< 2s voice response latency** — the conversation feels natural, not robotic.\n• **Clean handoff** to human staff for complex or sensitive requests, with full call context passed through.",
      techStack: ["Retell AI", "Antigravity", "Modal (deployment)", "Airtable", "Claude API", "PyAirtable"],
    },
  },
];
