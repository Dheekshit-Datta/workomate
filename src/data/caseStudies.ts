import { TrendingUp, Clock, DollarSign } from "lucide-react";

export const caseStudies = [
  {
    slug: "ai-sales-system-agency",
    tag: "Lead Generation",
    title: "AI-Powered Sales System for a Performance Marketing Agency",
    desc: "Built a fully automated outreach engine, from LinkedIn prospecting to personalised cold email, replacing manual research with a multi-agent pipeline that books meetings on autopilot.",
    industry: "Agency / B2B",
    metrics: [
      { icon: TrendingUp, label: "Meetings Booked", value: "3x" },
      { icon: Clock, label: "Manual Research Eliminated", value: "90%" },
      { icon: DollarSign, label: "Saved Weekly per SDR", value: "~4 hrs" },
    ],
    fullContent: {
      challenge: "Growzzy Media, a performance marketing agency, had no structured outbound system. Sales relied entirely on referrals and manual outreach. When they decided to build a pipeline, the team had no time to manually research leads, write personalised emails, or track follow-ups at scale.\n\nEvery hour spent on prospecting was an hour not spent on client delivery. They needed an outbound engine that could run with minimal human input.",
      solution: "We built a multi-agent sales system inside Antigravity, designed to handle every stage of the outbound workflow, from sourcing leads to writing the first line of a cold email, without manual intervention.\n\nThe system integrates Apify for LinkedIn scraping, Jina AI for web intelligence, and Airtable as the central lead database, with Instantly managing email sequences and warm-up.\n\n**The system, four agents:**\n\n• **Scraping Agent** Pulls ICP-matched leads from LinkedIn Sales Navigator via Apify. Filters by industry, headcount, role, and location. Feeds raw data into Airtable.\n\n• **Enrichment Agent** Uses Jina AI to read company websites, recent posts, and ad activity. Builds a context profile for each lead, what they're running, what's missing.\n\n• **Qualification Agent** Scores leads against Growzzy's ICP criteria, ad spend signals, current agency use, growth stage. Removes unqualified leads before any email is sent.\n\n• **Copywriting Agent** Writes a personalised first line and full cold email for each lead using enrichment data. Pushes final copy into Instantly sequences, ready to send.",
      results: "Results, 60 days post-launch:\n\n• **3× more qualified meetings booked per month** vs. inbound-only baseline.\n• **~90% reduction in manual research** leads are sourced, enriched, and written up automatically.\n• **< 30s to go from a LinkedIn profile** to a personalised, send-ready email.\n• **Airtable gives the founder full visibility** into pipeline status, lead stage, and email performance in one view.",
      techStack: ["Antigravity (Trigger.dev)", "Apify", "Jina AI", "Airtable", "Instantly.ai", "LinkedIn Sales Navigator", "Claude API"],
    },
  },
  {
    slug: "ai-voice-agent-hotel",
    tag: "Customer Support",
    title: "AI Voice Agent for 24/7 Hotel Guest Support",
    desc: "Deployed a multi-specialist voice AI, \"Aria\", that handles reservations, room service, housekeeping requests, and facility inquiries around the clock, with zero hold times. Integrates directly with the hotel's existing PMS, POS system, and task management tools.",
    industry: "Hospitality",
    metrics: [
      { icon: TrendingUp, label: "Guest Support Coverage", value: "24/7" },
      { icon: Clock, label: "Calls Handled Without Staff", value: "~80%" },
      { icon: DollarSign, label: "Avg Response Latency", value: "< 2s" },
    ],
    fullContent: {
      challenge: "Hotel front desks are overwhelmed with repetitive guest calls: booking confirmations, room service orders, housekeeping requests, spa availability. Staff spend the majority of their time on routine queries instead of high-value guest interactions.\n\nAfter hours, calls go unanswered entirely, leading to missed requests and poor guest experience. The hotel needed a solution that could handle volume 24/7 without adding headcount.",
      solution: "We built \"Aria\", a voice AI receptionist, on top of Retell AI, backed by a multi-specialist agentic system. Rather than a single bot trying to do everything, Aria routes each call to a purpose-built specialist agent depending on what the guest needs.\n\nAll guest interactions, requests, and bookings are logged in real time and synced with the hotel's existing PMS (Opera, Cloudbeds, or equivalent), POS system, and task management tools, giving hotel staff a live dashboard of what's been actioned without touching the phone.\n\n*Architecture supports plug-in integration with any major hotel PMS, configured per client during onboarding.*\n\n**The system, specialist agents:**\n\n• **Reservations Agent** Handles booking enquiries, room availability checks, and confirmation lookups. Reads and writes directly to the hotel's PMS in real time.\n\n• **Room Service Agent** Takes food and beverage orders, confirms menu items, and logs orders with room number and timestamp. Routes to kitchen staff instantly via the POS system.\n\n• **Housekeeping Agent** Accepts requests for towels, cleaning, or turndown service. Creates a task record assigned to the next available housekeeping slot.\n\n• **Concierge Agent** Answers questions about hotel facilities, check-in/out times, pool hours, and local recommendations. Handles general FAQs without any human handoff.",
      results: "What it delivers:\n\n• **24/7 guest support** with no hold times, calls answered instantly at any hour.\n• **~80% of routine calls** fully resolved by Aria without staff involvement.\n• **Real-time logging** of every request synced to the hotel's PMS, staff always know what's pending.\n• **< 2s voice response latency** the conversation feels natural, not robotic.\n• **Clean handoff** to human staff for complex or sensitive requests, with full call context passed through.",
      techStack: ["Retell AI", "Antigravity", "Modal (deployment)", "Hotel PMS Integration (Opera/Cloudbeds)", "Claude API", "Custom POS Connector"],
    },
  },
];
