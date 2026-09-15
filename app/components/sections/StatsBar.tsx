import {
  faAward,
  faLayerGroup,
  faHandshake,
  faCircleCheck,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionHeading from "../ui/SectionHeading";

const stats = [
  {
    value: "10+",
    label: "Years",
    icon: faAward,
    accent: "#8B5CF6",
    position: "left-top",
  },
  {
    value: "80+",
    label: "Digital builds",
    icon: faLayerGroup,
    accent: "#0EA5E9",
    position: "right-top",
  },
  {
    value: "50+",
    label: "Client partnerships",
    icon: faHandshake,
    accent: "#10B981",
    position: "left-bottom",
  },
  {
  value: "98%",
  label: "Client satisfaction",
  icon: faCircleCheck,
  accent: "#F59E0B",
},
];

export default function StatsBar() {
  return (
    <section className="relative overflow-hidden bg-brand-offwhite py-20 sm:py-24">
      {/* Ambient background geometry */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-lime/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-purple-200/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section intro */}
        
        <section>
        <div>
          <SectionHeading
            eyebrow="The numbers behind the work"
            titleBefore="Built for"
            highlight="real-world impact"
            subtitle="A snapshot of the experience, delivery and relationships behind DevNextra."
          />

          {/* connected stats system */}
          ...
        </div>
      </section>

        {/* Connected system */}
        <div className="relative mx-auto max-w-5xl">
          {/* SVG connection system */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            viewBox="0 0 1000 420"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Outer connections */}
            <path
              d="M250 105 C330 105 350 145 420 180"
              stroke="#D1D5DB"
              strokeWidth="1"
              strokeDasharray="4 6"
            />

            <path
              d="M750 105 C670 105 650 145 580 180"
              stroke="#D1D5DB"
              strokeWidth="1"
              strokeDasharray="4 6"
            />

            <path
              d="M250 315 C330 315 350 275 420 240"
              stroke="#D1D5DB"
              strokeWidth="1"
              strokeDasharray="4 6"
            />

            <path
              d="M750 315 C670 315 650 275 580 240"
              stroke="#D1D5DB"
              strokeWidth="1"
              strokeDasharray="4 6"
            />

            {/* Central horizontal signal */}
            <path
              d="M420 210 H580"
              stroke="#B7F34A"
              strokeWidth="1.5"
              strokeDasharray="3 5"
            />

            {/* Connection nodes */}
            <circle cx="250" cy="105" r="3" fill="#B7F34A" />
            <circle cx="750" cy="105" r="3" fill="#B7F34A" />
            <circle cx="250" cy="315" r="3" fill="#B7F34A" />
            <circle cx="750" cy="315" r="3" fill="#B7F34A" />

            <circle cx="420" cy="210" r="3" fill="#B7F34A" />
            <circle cx="580" cy="210" r="3" fill="#B7F34A" />
          </svg>

          {/* Desktop layout */}
          <div className="relative hidden min-h-[420px] lg:block">
            {/* Top-left */}
            <StatNode
              stat={stats[0]}
              className="absolute left-0 top-4"
            />

            {/* Top-right */}
            <StatNode
              stat={stats[1]}
              className="absolute right-0 top-4"
            />

            {/* Bottom-left */}
            <StatNode
              stat={stats[2]}
              className="absolute bottom-4 left-0"
            />

            {/* Bottom-right */}
            <StatNode
              stat={stats[3]}
              className="absolute bottom-4 right-0"
            />

            {/* Central brand node */}
            <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
              {/* Outer ring */}
              <div className="absolute inset-0 rotate-45 rounded-[28px] border border-brand-lime/30 bg-white/70 shadow-[0_20px_60px_rgba(16,24,20,0.08)]" />

              {/* Inner ring */}
              <div className="absolute inset-3 rotate-45 rounded-[22px] border border-gray-100 bg-brand-dark" />

              {/* Content */}
              <div className="relative z-10 text-center">
                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-brand-lime text-brand-dark">
                  <FontAwesomeIcon
                    icon={faArrowTrendUp}
                    className="text-sm"
                  />
                </div>

                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                  DevNextra
                </p>

                <p className="mt-0.5 text-[8px] text-gray-400">
                  Engineering signal
                </p>
              </div>
            </div>
          </div>

          {/* Mobile / tablet layout */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
            {stats.map((stat) => (
              <StatNode key={stat.label} stat={stat} />
            ))}

            {/* Mobile brand node */}
            <div className="relative col-span-full mt-2 flex justify-center">
              <div className="flex items-center gap-3 rounded-full border border-gray-200 bg-brand-dark px-5 py-3 shadow-lg">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-lime text-brand-dark">
                  <FontAwesomeIcon
                    icon={faArrowTrendUp}
                    className="text-xs"
                  />
                </span>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                    DevNextra
                  </p>

                  <p className="text-[9px] text-gray-400">
                    Engineering signal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom micro statement */}
      </div>
    </section>
  );
}

/* ---------------------------------------------
   Stat node
--------------------------------------------- */

function StatNode({
  stat,
  className = "",
}: {
  stat: (typeof stats)[number];
  className?: string;
}) {
  return (
    <div
      className={`group w-full max-w-[230px] rounded-2xl border bg-white p-5 shadow-[0_12px_35px_rgba(16,24,20,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(16,24,20,0.10)] ${className}`}
      style={{
        borderColor: `${stat.accent}45`,
      }}
    >
      {/* Top accent */}
      <div
        className="absolute"
        style={{
          backgroundColor: stat.accent,
        }}
      />

      <div className="flex items-start justify-between gap-4">
        {/* Icon */}
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
          style={{
            backgroundColor: `${stat.accent}12`,
            color: stat.accent,
          }}
        >
          <FontAwesomeIcon
            icon={stat.icon}
            className="text-lg"
          />
        </div>

        {/* Small signal */}
        <div className="flex items-center gap-1 pt-1">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{
              backgroundColor: stat.accent,
            }}
          />

          <span className="h-px w-5 bg-gray-200" />
        </div>
      </div>

      {/* Value */}
      <div className="mt-5">
        <p className="text-4xl font-bold tracking-tight text-brand-dark">
          {stat.value}
        </p>

        <p className="mt-1 text-xs font-semibold text-gray-500">
          {stat.label}
        </p>
      </div>

      {/* Bottom signal */}
      <div className="mt-5 flex items-center gap-2">
        <div
          className="h-1 w-7 rounded-full transition-all duration-300 group-hover:w-12"
          style={{
            backgroundColor: stat.accent,
          }}
        />

        <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-gray-300">
          Signal
        </span>
      </div>
    </div>
  );
}