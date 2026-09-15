"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import SectionHeading from "../ui/SectionHeading";

const categories = {
  "Getting started": [
    {
      q: "I have an idea but no technical background — can you still help?",
      a: "Yes, this is our most common client profile. We start with a discovery call to understand your goal, then translate it into a technical plan, realistic timeline, and cost estimate — no jargon required on your end.",
    },
    {
      q: "Do you build MVPs for early-stage startups?",
      a: "Yes. We can scope a lean, launch-ready MVP focused on your core feature, then help you expand it based on real user feedback rather than building everything upfront.",
    },
    {
      q: "Can you take over a project someone else already started?",
      a: "Yes, though we always start with a short code and architecture review first. If the existing codebase is in poor shape, we'll tell you honestly whether to continue building on it or rebuild key parts — we won't just take the work without that assessment.",
    },
    {
      q: "Do you sign NDAs before discussing my idea?",
      a: "Yes, we're happy to sign an NDA before any detailed discussion — just let us know and we'll send one over, or you can send yours.",
    },
  ],
  "Pricing & payment": [
    {
      q: "How much does a typical project cost?",
      a: "It depends entirely on scope — a simple marketing website and a multi-role SaaS platform aren't comparable. We give a firm quote after a discovery call, once we understand the actual requirements, not before.",
    },
    {
      q: "Do you charge fixed-price or hourly?",
      a: "Both, depending on the project. Well-defined scopes (most websites, MVPs) are usually fixed-price. Ongoing work, evolving products, or unclear scopes are billed hourly or on a monthly retainer.",
    },
    {
      q: "What's your payment schedule?",
      a: "Typically a deposit upfront (usually 30–50%) to begin work, with the remainder split across milestones or due on completion — we'll agree on specifics in the proposal before starting.",
    },
    {
      q: "What happens if the project scope grows mid-way?",
      a: "We flag it as soon as it comes up and quote the additional work separately before doing it — you'll never see unexpected charges for work you didn't approve.",
    },
  ],
  "Process & communication": [
    {
      q: "How do you handle revisions during design or development?",
      a: "Each phase (design, then development) includes a set number of revision rounds, agreed upfront in the proposal. Feedback is collected in structured review sessions rather than open-ended back-and-forth, so the project keeps moving.",
    },
    {
      q: "How will I stay updated on progress?",
      a: "Weekly check-ins or async progress updates, plus a shared project board so you can see what's in progress, done, or upcoming at any time — no need to chase us for status.",
    },
    {
      q: "What if I want to pause or cancel the project midway?",
      a: "You can pause between milestones with notice. You'll only be billed for work completed up to that point — we don't lock you into paying for work not yet delivered.",
    },
    {
      q: "Can I request a specific tech stack?",
      a: "Yes — if you have a preference or existing team familiar with a certain stack, we'll work within it as long as it's a reasonable fit for the project. Otherwise we'll recommend one based on your requirements.",
    },
  ],
  "After launch": [
    {
      q: "Who owns the code and IP once the project is done?",
      a: "You do, in full, once the final invoice is paid. We hand over complete source code, credentials, and documentation — nothing is held back or licensed to us.",
    },
    {
      q: "What's included after handover — do you disappear after launch?",
      a: "No. Every project includes a defined post-launch support window (typically 2–4 weeks) for fixing any issues that come up. After that, you can move to a maintenance retainer or handle it in-house with the documentation we provide.",
    },
    {
      q: "What if a bug shows up 6 months after launch?",
      a: "If you're not on a maintenance plan, we still take reports and quote a fix — we don't leave clients stranded on old projects, though it's billed separately outside the original support window.",
    },
    {
      q: "Do you provide hosting, domain, or ongoing maintenance?",
      a: "We can set up hosting and domains as part of launch, and offer optional monthly maintenance plans for updates, monitoring, and security patches — but you're never locked into using us for hosting if you'd rather manage it yourself.",
    },
  ],
};

type Category = keyof typeof categories;

export default function FaqAccordion() {
  const [activeCategory, setActiveCategory] = useState<Category>("Getting started");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleCategoryChange = (cat: Category) => {
    setActiveCategory(cat);
    setOpenIndex(0);
  };

  return (
    <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Questions"
        titleBefore="Real questions,"
        highlight="real answers"
      />

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {(Object.keys(categories) as Category[]).map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
              activeCategory === cat
                ? "bg-brand-lime text-brand-dark"
                : "bg-brand-offwhite text-gray-600 hover:text-brand-dark"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3">
        {categories[activeCategory].map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.q} className="overflow-hidden rounded-xl border border-gray-100">
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 bg-white px-5 py-4 text-left"
              >
                <span className="text-sm font-semibold text-brand-dark">{faq.q}</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`shrink-0 text-[12px] text-gray-400 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="border-t border-gray-100 bg-brand-offwhite px-5 py-4">
                  <p className="text-sm leading-relaxed text-gray-600">{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}