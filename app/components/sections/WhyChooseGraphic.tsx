// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUsers, faArrowsRotate, faClock, faHeadset, faCode } from "@fortawesome/free-solid-svg-icons";

// const nodes = [
//   { icon: faUsers, label: "Client-centric", position: "left-0 top-4" },
//   { icon: faArrowsRotate, label: "Agile process", position: "right-0 top-4" },
//   { icon: faClock, label: "On-time delivery", position: "left-0 bottom-4" },
//   { icon: faHeadset, label: "Long-term support", position: "right-0 bottom-4" },
// ];

// export default function WhyChooseGraphic() {
//   return (
//     <div className="relative mx-auto h-80 w-full max-w-md sm:h-96">
//       {/* Connecting lines */}
//       <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 400 380" fill="none" preserveAspectRatio="none">
//         <line x1="80" y1="70" x2="180" y2="160" stroke="#B7F34A" strokeWidth="1" opacity="0.35" />
//         <line x1="320" y1="70" x2="220" y2="160" stroke="#B7F34A" strokeWidth="1" opacity="0.35" />
//         <line x1="80" y1="310" x2="180" y2="220" stroke="#B7F34A" strokeWidth="1" opacity="0.35" />
//         <line x1="320" y1="310" x2="220" y2="220" stroke="#B7F34A" strokeWidth="1" opacity="0.35" />
//       </svg>

//       {/* Central hub */}
//       <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
//         <div className="relative flex h-20 w-20 rotate-45 items-center justify-center rounded-2xl bg-brand-lime shadow-[0_0_40px_rgba(183,243,74,0.35)]">
//           <FontAwesomeIcon icon={faCode} className="-rotate-45 text-[26px] text-brand-dark" />
//         </div>
//       </div>

//       {/* Satellite nodes */}
//       {nodes.map((node, index) => (
//         <div
//           key={node.label}
//           className={`absolute z-10 flex w-32 flex-col items-center gap-2 text-center animate-float-slow ${node.position}`}
//           style={{ animationDelay: `${index * 0.4}s` }}
//         >
//           <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-brand-lime/30 bg-brand-lime/5">
//             <FontAwesomeIcon icon={node.icon} className="text-[20px] text-brand-lime" />
//           </div>
//           <span className="text-xs font-medium text-gray-300">{node.label}</span>
//         </div>
//       ))}
//     </div>
//   );
// }

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faArrowsRotate,
  faClock,
  faHeadset,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

const nodes = [
  {
    icon: faUsers,
    label: "Client-centric",
    description: "We start with your goals, not our stack.",
    position: "left-0 top-2 sm:left-1 sm:top-5",
    accent: "text-emerald-300",
    iconBg: "bg-emerald-300/10",
    iconBorder: "border-emerald-300/30",
  },
  {
    icon: faArrowsRotate,
    label: "Agile process",
    description: "Small steps. Fast feedback. Better outcomes.",
    position: "right-0 top-2 sm:right-1 sm:top-5",
    accent: "text-sky-300",
    iconBg: "bg-sky-300/10",
    iconBorder: "border-sky-300/30",
  },
  {
    icon: faClock,
    label: "On-time delivery",
    description: "Clear milestones. No mysterious delays.",
    position: "left-0 bottom-2 sm:left-1 sm:bottom-5",
    accent: "text-violet-300",
    iconBg: "bg-violet-300/10",
    iconBorder: "border-violet-300/30",
  },
  {
    icon: faHeadset,
    label: "Long-term support",
    description: "We stay after launch, not disappear.",
    position: "right-0 bottom-2 sm:right-1 sm:bottom-5",
    accent: "text-teal-300",
    iconBg: "bg-teal-300/10",
    iconBorder: "border-teal-300/30",
  },
];

export default function WhyChooseGraphic() {
  return (
    <div className="relative mx-auto h-[360px] w-full max-w-[560px] sm:h-[390px]">
      {/* Ambient background depth */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-lime/5 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-[8%] top-[18%] h-12 w-12 rotate-12 rounded-xl border border-brand-lime/10 bg-brand-lime/[0.02]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute bottom-[16%] right-[8%] h-16 w-16 -rotate-12 rounded-2xl border border-brand-lime/10 bg-brand-lime/[0.02]"
        aria-hidden="true"
      />

      {/* Connecting network */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 560 390"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Main connections */}
        <line
          x1="125"
          y1="88"
          x2="235"
          y2="165"
          stroke="#B7F34A"
          strokeWidth="1"
          opacity="0.28"
        />

        <line
          x1="435"
          y1="88"
          x2="325"
          y2="165"
          stroke="#B7F34A"
          strokeWidth="1"
          opacity="0.28"
        />

        <line
          x1="125"
          y1="302"
          x2="235"
          y2="225"
          stroke="#B7F34A"
          strokeWidth="1"
          opacity="0.28"
        />

        <line
          x1="435"
          y1="302"
          x2="325"
          y2="225"
          stroke="#B7F34A"
          strokeWidth="1"
          opacity="0.28"
        />

        {/* Small connection nodes */}
        <circle cx="125" cy="88" r="2.5" fill="#B7F34A" opacity="0.65" />
        <circle cx="435" cy="88" r="2.5" fill="#B7F34A" opacity="0.65" />
        <circle cx="125" cy="302" r="2.5" fill="#B7F34A" opacity="0.65" />
        <circle cx="435" cy="302" r="2.5" fill="#B7F34A" opacity="0.65" />

        <circle cx="235" cy="165" r="2" fill="#B7F34A" opacity="0.45" />
        <circle cx="325" cy="165" r="2" fill="#B7F34A" opacity="0.45" />
        <circle cx="235" cy="225" r="2" fill="#B7F34A" opacity="0.45" />
        <circle cx="325" cy="225" r="2" fill="#B7F34A" opacity="0.45" />
      </svg>

      {/* Central hub */}
      <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        {/* Outer rings */}
        <div className="absolute -inset-8 rounded-full border border-brand-lime/5" />
        <div className="absolute -inset-5 rounded-full border border-brand-lime/10" />

        {/* Glow */}
        <div className="absolute -inset-5 rounded-full bg-brand-lime/10 blur-xl" />

        {/* Central cube */}
        <div
          className="relative flex h-[78px] w-[78px] rotate-45 items-center justify-center rounded-[18px] border border-brand-lime/50 bg-brand-lime shadow-[0_0_45px_rgba(183,243,74,0.28)]"
        >
          <FontAwesomeIcon
            icon={faCode}
            className="-rotate-45 text-[25px] text-brand-dark"
          />

          {/* Small highlight */}
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-white/50" />
        </div>

        {/* Centre label */}
        <div className="absolute left-1/2 top-[92px] w-40 -translate-x-1/2 text-center">
          <p className="text-sm font-semibold tracking-tight text-white">
            Dev<span className="text-brand-lime">Nextra</span>
          </p>

          <p className="mt-1 text-[10px] leading-4 text-gray-500">
            Built around your business
          </p>
        </div>
      </div>

      {/* Feature nodes */}
      {nodes.map((node, index) => (
        <div
          key={node.label}
          className={`absolute z-10 w-[142px] sm:w-[158px] ${node.position}`}
          style={{
            animation: "float-slow 5s ease-in-out infinite",
            animationDelay: `${index * 0.45}s`,
          }}
        >
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-3 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
            {/* Icon */}
            <div
              className={`mb-2 flex h-9 w-9 items-center justify-center rounded-xl border ${node.iconBorder} ${node.iconBg}`}
            >
              <FontAwesomeIcon
                icon={node.icon}
                className={`text-[14px] ${node.accent}`}
              />
            </div>

            {/* Content */}
            <p className={`text-[11px] font-semibold ${node.accent}`}>
              {node.label}
            </p>

            <p className="mt-1 text-[10px] leading-4 text-gray-500">
              {node.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}