"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import SectionHeading from "../ui/SectionHeading";

const tabs = {
  Mission: {
    icon: faBullseye,
    text: "To help startups and enterprises turn ideas into scalable, secure digital products — without the bloat, delays, or guesswork common in software delivery.",
  },
  Vision: {
    icon: faEye,
    text: "To become the go-to development partner for businesses that want technology handled by people who treat their product like their own.",
  },
  Values: {
    icon: faHeart,
    text: "Client-first thinking, transparent communication, clean and maintainable code, and long-term relationships over one-off projects.",
  },
};

type Tab = keyof typeof tabs;

export default function MissionValues() {
  const [active, setActive] = useState<Tab>("Mission");
  const current = tabs[active];

  return (
    <section className="bg-brand-offwhite py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeading eyebrow="What drives us" titleBefore="Our" highlight="purpose" />

        <div className="mt-10 flex justify-center gap-2">
          {(Object.keys(tabs) as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                active === tab
                  ? "bg-brand-lime text-brand-dark"
                  : "bg-white text-gray-600 hover:text-brand-dark"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-10 text-center shadow-sm">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-lime text-brand-dark">
            <FontAwesomeIcon icon={current.icon} className="text-[22px]" />
          </div>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-700">
            {current.text}
          </p>
        </div>
      </div>
    </section>
  );
}