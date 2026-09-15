"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faClipboardList,
  faPen,
  faCode,
  faCircleCheck,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import SectionHeading from "../ui/SectionHeading";

const steps = [
  {
    icon: faMagnifyingGlass,
    title: "Discover",
    description: "We understand your business and goals.",
    duration: "3–5 days",
    deliverables: ["Requirement document", "Competitor analysis", "Project scope"],
  },
  {
    icon: faClipboardList,
    title: "Plan",
    description: "We create a strategy and roadmap.",
    duration: "3–5 days",
    deliverables: ["Project roadmap", "Tech stack decision", "Timeline & milestones"],
  },
  {
    icon: faPen,
    title: "Design",
    description: "We design intuitive and modern UI/UX.",
    duration: "1–2 weeks",
    deliverables: ["Wireframes", "UI design (Figma)", "Design system"],
  },
  {
    icon: faCode,
    title: "Develop",
    description: "We build scalable and clean solutions.",
    duration: "2–8 weeks",
    deliverables: ["Working codebase", "Weekly progress demos", "Staging environment"],
  },
  {
    icon: faCircleCheck,
    title: "Test",
    description: "We ensure quality, performance & security.",
    duration: "3–7 days",
    deliverables: ["QA test report", "Performance audit", "Bug fixes"],
  },
  {
    icon: faRocket,
    title: "Launch",
    description: "We deploy and go live.",
    duration: "1–2 days",
    deliverables: ["Production deployment", "Handover docs", "Post-launch support"],
  },
];

export default function ProcessSteps() {
  const [active, setActive] = useState(0);
  const current = steps[active];

  return (
    <section id="process" className="bg-brand-offwhite py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our process"
          titleBefore="How we"
          highlight="work"
          subtitle="Click a step to see what it actually involves."
        />

        {/* Step row */}
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-4">
          {steps.map((step, index) => (
            <button
              key={step.title}
              onClick={() => setActive(index)}
              className="relative text-center"
            >
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-6 hidden h-px w-full -translate-y-1/2 bg-gray-300 lg:block" />
              )}

              <div
                className={`relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border transition-colors ${
                  active === index
                    ? "border-brand-lime bg-brand-lime text-brand-dark"
                    : "border-gray-200 bg-white text-brand-dark hover:border-brand-lime"
                }`}
              >
                <FontAwesomeIcon icon={step.icon} className="text-[18px]" />
              </div>

              <h3
                className={`mt-4 text-sm font-semibold ${
                  active === index ? "text-brand-dark" : "text-gray-600"
                }`}
              >
                {step.title}
              </h3>
            </button>
          ))}
        </div>

        {/* Expanded detail panel */}
        <div className="relative mt-10 overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
          <span className="pointer-events-none absolute -right-4 -top-8 text-[140px] font-bold leading-none text-brand-offwhite">
            {String(active + 1).padStart(2, "0")}
          </span>

          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[auto_1fr_auto]">
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-lime text-brand-dark">
                <FontAwesomeIcon icon={current.icon} className="text-[26px]" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-lime-dark">
                  Step {active + 1} of {steps.length}
                </span>
                <h4 className="mt-1 text-xl font-bold text-brand-dark">{current.title}</h4>
                <p className="mt-2 max-w-xs text-sm text-gray-600">{current.description}</p>
              </div>
            </div>

            <div className="hidden w-px bg-gray-100 lg:block" />

            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Typical duration
              </span>
              <span className="inline-flex w-fit items-center rounded-full bg-brand-offwhite px-4 py-1.5 text-sm font-semibold text-brand-dark">
                {current.duration}
              </span>

              <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Deliverables
              </span>
              <ul className="flex flex-col gap-1.5">
                {current.deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-lime/20 text-brand-lime-dark">
                      <FontAwesomeIcon icon={faCircleCheck} className="text-[10px]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}