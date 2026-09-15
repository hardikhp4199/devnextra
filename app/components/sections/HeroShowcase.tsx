import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faMobileScreen,
  faCloud,
  faWandMagicSparkles,
  faBell,
  faGauge,
  faFolder,
  faChartLine,
  faUsers,
  faGear,
  faCircleCheck,
  faCode,
  faUserPlus,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";

const satellites = [
  {
    icon: faDesktop,
    title: "Web Applications",
    description: "Modern, scalable and high-performance web solutions.",
    position: "left-0 top-0",
    accent: "#3B82F6",
  },
  {
    icon: faMobileScreen,
    title: "Mobile Apps",
    description: "iOS & Android apps that connect your business.",
    position: "right-0 top-0",
    accent: "#8B5CF6",
  },
  {
    icon: faCloud,
    title: "Cloud & APIs",
    description: "Secure, reliable and scalable cloud infrastructure.",
    position: "left-0 bottom-0",
    accent: "#06B6D4",
  },
  {
    icon: faWandMagicSparkles,
    title: "AI & Automation",
    description: "Intelligent solutions to work smarter, faster.",
    position: "right-0 bottom-0",
    accent: "#22C55E",
  },
];

export default function HeroShowcase() {
  return (
    <div className="relative mx-auto hidden max-w-5xl py-10 lg:block">
      {/* Connecting lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1200 700"
        fill="none"
        preserveAspectRatio="none"
      >
        <path d="M280 140 Q 400 180 450 240" stroke="#B7F34A" strokeWidth="2" strokeDasharray="0" fill="none" opacity="0.6" />
        <path d="M920 140 Q 800 180 750 240" stroke="#B7F34A" strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M280 560 Q 400 520 450 460" stroke="#B7F34A" strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M920 560 Q 800 520 750 460" stroke="#B7F34A" strokeWidth="2" fill="none" opacity="0.6" />
      </svg>

      {/* Satellite cards */}
      {satellites.map((sat, index) => (
        <div
          key={sat.title}
          className={`absolute z-10 w-64 rounded-2xl border border-gray-100 bg-white p-5 shadow-lg animate-float-slow ${sat.position}`}
          style={{ animationDelay: `${index * 0.4}s` }}
        >
          <div className="flex items-start justify-between">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl"
              style={{ backgroundColor: `${sat.accent}18`, color: sat.accent }}
            >
              <FontAwesomeIcon icon={sat.icon} className="text-[18px]" />
            </div>
            <span className="h-2 w-2 rounded-full bg-brand-lime" />
          </div>
          <h3 className="mt-3 text-sm font-bold text-brand-dark">{sat.title}</h3>
          <p className="mt-1 text-xs leading-relaxed text-gray-500">{sat.description}</p>
        </div>
      ))}

      {/* Central dashboard mockup */}
      <div className="relative z-20 mx-auto mt-2 w-[480px] overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
          </div>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faBell} className="text-[13px] text-gray-400" />
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-dark text-[10px] font-bold text-white">
              HP
            </span>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-32 border-r border-gray-100 p-4">
            <div className="mb-4 flex items-center gap-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-brand-lime text-[9px] font-bold text-brand-dark">
                N
              </span>
              <span className="text-xs font-bold text-brand-dark">DevNextra</span>
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2 rounded-lg bg-brand-offwhite px-2 py-1.5 text-brand-dark">
                <FontAwesomeIcon icon={faGauge} className="text-[11px]" />
                <span className="text-[10px] font-semibold">Dashboard</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 text-gray-400">
                <FontAwesomeIcon icon={faFolder} className="text-[11px]" />
                <span className="text-[10px]">Projects</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 text-gray-400">
                <FontAwesomeIcon icon={faChartLine} className="text-[11px]" />
                <span className="text-[10px]">Analytics</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 text-gray-400">
                <FontAwesomeIcon icon={faUsers} className="text-[11px]" />
                <span className="text-[10px]">Team</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 text-gray-400">
                <FontAwesomeIcon icon={faGear} className="text-[11px]" />
                <span className="text-[10px]">Settings</span>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 p-5">
            <span className="text-[9px] font-semibold uppercase tracking-wide text-gray-400">Overview</span>
            <h4 className="mt-1 text-sm font-bold text-brand-dark">Good morning 👋</h4>
            <p className="text-[10px] text-gray-500">Here's what's happening with your projects today.</p>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-gray-100 p-2.5">
                <span className="text-[9px] text-gray-400">Total Projects</span>
                <p className="text-sm font-bold text-brand-dark">12</p>
                <span className="text-[9px] font-medium text-brand-lime-dark">↑ 12%</span>
              </div>
              <div className="rounded-lg border border-gray-100 p-2.5">
                <span className="text-[9px] text-gray-400">Active Clients</span>
                <p className="text-sm font-bold text-brand-dark">8</p>
                <span className="text-[9px] font-medium text-brand-lime-dark">↑ 8%</span>
              </div>
            </div>

            <div className="mt-3 rounded-lg border border-gray-100 p-3">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-semibold text-gray-500">Project performance</span>
                <span className="text-[9px] font-medium text-brand-lime-dark">+24%</span>
              </div>
              <div className="mt-2 h-12 w-full rounded bg-brand-offwhite" />
            </div>

            <div className="mt-3 flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-[9px] text-gray-500">
                <FontAwesomeIcon icon={faCircleCheck} className="text-[9px] text-brand-lime-dark" />
                Website redesign completed
              </div>
              <div className="flex items-center gap-2 text-[9px] text-gray-500">
                <FontAwesomeIcon icon={faCode} className="text-[9px] text-brand-lime-dark" />
                API integration deployed
              </div>
              <div className="flex items-center gap-2 text-[9px] text-gray-500">
                <FontAwesomeIcon icon={faUserPlus} className="text-[9px] text-brand-lime-dark" />
                New client onboarding started
              </div>
              <div className="flex items-center gap-2 text-[9px] text-gray-500">
                <FontAwesomeIcon icon={faRotate} className="text-[9px] text-brand-lime-dark" />
                System update deployed
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}