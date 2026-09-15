"use client";

import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";

const milestones = [
  { year: "2024", title: "Founded", description: "DevNextra was founded with a small team and a big goal: build software that actually helps businesses grow." },
  { year: "2025", title: "50+ clients", description: "Crossed 50 happy clients across web, mobile, and SaaS projects." },
  { year: "2026", title: "150+ projects", description: "Delivered over 150 projects, expanding into AI-driven solutions and DevOps services." },
];

export default function Milestones() {
  const [active, setActive] = useState(0);

  return (
    <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
      <SectionHeading eyebrow="Our journey" titleBefore="How we got" highlight="here" />

      <div className="relative mt-16">
        <div className="absolute left-0 right-0 top-5 hidden h-px bg-gray-200 sm:block" />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {milestones.map((m, index) => (
            <button
              key={m.year}
              onClick={() => setActive(index)}
              className="relative flex flex-col items-center text-center"
            >
              <span
                className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 text-xs font-bold transition-colors ${
                  active === index
                    ? "border-brand-lime bg-brand-lime text-brand-dark"
                    : "border-gray-300 bg-white text-gray-500 hover:border-brand-lime-dark"
                }`}
              >
                {m.year.slice(2)}
              </span>
              <span
                className={`mt-3 text-sm font-semibold ${
                  active === index ? "text-brand-dark" : "text-gray-500"
                }`}
              >
                {m.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-gray-100 bg-brand-offwhite p-8 text-center">
        <span className="text-xs font-semibold uppercase tracking-wide text-brand-lime-dark">
          {milestones[active].year}
        </span>
        <p className="mx-auto mt-2 max-w-xl text-sm text-gray-700">
          {milestones[active].description}
        </p>
      </div>
    </section>
  );
}