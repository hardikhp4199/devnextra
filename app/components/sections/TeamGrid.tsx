"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import SectionHeading from "../ui/SectionHeading";

const team = [
  {
    name: "Hardik Prajapati",
    role: "Founder & Lead Developer",
    bio: "Leads architecture and full-stack development across every DevNextra project.",
  },
  {
    name: "Rahul Darbar",
    role: "UI/UX Designer",
    bio: "Designs interfaces that balance clean aesthetics with real usability.",
  },
  {
    name: "Arati Prajapati",
    role: "Backend Developer",
    bio: "Builds and maintains scalable, secure server-side systems.",
  },
  {
    name: "Karan Chauhan",
    role: "Project Manager",
    bio: "Keeps every project on time, on budget, and on scope.",
  },
];

export default function TeamGrid() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Our team"
        titleBefore="The people behind"
        highlight="DevNextra"
        subtitle="Click a card to learn more about each team member."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member, index) => {
          const isFlipped = flipped === index;
          return (
            <button
              key={member.name}
              onClick={() => setFlipped(isFlipped ? null : index)}
              className="group h-72 w-full text-left [perspective:1200px]"
            >
              <div
                className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${
                  isFlipped ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* Front */}
                <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm [backface-visibility:hidden]">
                  <div className="h-24 w-24 rounded-full bg-brand-offwhite" />
                  <h3 className="mt-4 text-sm font-semibold text-brand-dark">
                    {member.name}
                  </h3>
                  <p className="text-xs text-gray-500">{member.role}</p>
                  <span className="mt-3 text-[11px] font-medium text-brand-lime-dark">
                    Click to view →
                  </span>
                </div>

                {/* Back */}
                <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-brand-dark p-6 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <h3 className="text-sm font-semibold text-white">{member.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-300">
                    {member.bio}
                  </p>
                  <div className="mt-4 flex gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-lime hover:text-brand-dark">
                      <FontAwesomeIcon icon={faLinkedinIn} size="sm" />
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-lime hover:text-brand-dark">
                      <FontAwesomeIcon icon={faGithub} size="sm" />
                    </span>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}