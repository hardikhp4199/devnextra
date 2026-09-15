"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWandMagicSparkles,
  faMicrochip,
  faComments,
  faDiagramProject,
  faPenNib,
  faUsers,
  faRobot,
  faBolt,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

const aiServices = [
  { icon: faMicrochip, name: "AI development" },
  { icon: faComments, name: "AI chatbot development" },
  { icon: faDiagramProject, name: "Model context protocol" },
  { icon: faPenNib, name: "Generative AI development" },
  { icon: faUsers, name: "Multi-agent systems" },
  { icon: faRobot, name: "AI agent development" },
  { icon: faBolt, name: "AI workflow automation" },
  { icon: faMicrophone, name: "AI voice agents" },
];

export default function AiMegaMenu() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  // Tap anywhere outside closes it — needed since touch has no "mouse leave"
  useEffect(() => {
    if (!open) return;
    const handleOutsideClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [open]);

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        onClick={handleClick}
        className="flex items-center gap-1.5 rounded-full bg-brand-lime/15 px-3.5 py-1.5 text-sm font-semibold text-brand-dark ring-1 ring-inset ring-brand-lime/40 transition-colors hover:bg-brand-lime/25"
      >
        <FontAwesomeIcon icon={faWandMagicSparkles} className="text-[12px] text-brand-lime-dark" />
        AI
        <span className={`text-[10px] transition-transform ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-50 w-[90vw] max-w-[640px] -translate-x-1/2 pt-3">
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
            <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-[1fr_220px]">
              <div className="grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2">
                {aiServices.map((service) => (
                  <a
                    key={service.name}
                    href="#"
                    className="flex items-center gap-3 rounded-lg p-2 text-sm text-brand-charcoal transition-colors hover:bg-brand-offwhite hover:text-brand-dark"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-offwhite text-brand-lime-dark">
                      <FontAwesomeIcon icon={service.icon} className="text-[14px]" />
                    </span>
                    {service.name}
                  </a>
                ))}
              </div>

              <div className="relative hidden h-full min-h-[180px] overflow-hidden rounded-xl bg-brand-dark sm:block">
                <Image
                  src="/ai-panel.jpg"
                  alt="AI solutions"
                  fill
                  className="object-cover opacity-70"
                />
              </div>
            </div>

            <div className="flex flex-col items-start gap-3 border-t border-gray-100 bg-brand-offwhite px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-brand-dark">
                  Turn your vision into reality.
                </p>
                <p className="text-xs text-gray-500">Expert team. Proven results.</p>
              </div>
              <a
                href="/contact"
                className="rounded-full bg-brand-lime px-4 py-2 text-xs font-semibold text-brand-dark transition-colors hover:bg-brand-lime-dark"
              >
                Start a project →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}