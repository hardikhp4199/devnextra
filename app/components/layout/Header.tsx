"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AiMegaMenu from "./AiMegaMenu";

const navLeft = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
];

const navRight = [
  { name: "Work", href: "/work" },
  { name: "Process", href: "/#process" },
  { name: "About", href: "/about" },
  // { name: "Blog", href: "/#blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="DevNextra home">
          <Image src="/Logo1.png" alt="DevNextra" width={160} height={40} priority />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navLeft.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium text-brand-charcoal transition-colors hover:text-brand-dark">
              {item.name}
            </Link>
          ))}
          <AiMegaMenu />
          {navRight.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium text-brand-charcoal transition-colors hover:text-brand-dark">
              {item.name}
            </Link>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-brand-lime px-5 py-2.5 text-sm font-semibold text-brand-dark shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-lime-dark hover:shadow-md lg:inline-flex"
        >
          Get a Quote
          <span className="ml-2">→</span>
        </a>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-brand-dark lg:hidden"
        >
          <span className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-5 bg-brand-dark transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-brand-dark transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-3 bg-brand-dark transition-transform ${mobileOpen ? "w-5 -translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {[...navLeft, ...navRight].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-brand-charcoal hover:bg-brand-offwhite"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 flex items-center justify-center rounded-full bg-brand-lime px-5 py-3 text-sm font-semibold text-brand-dark"
          >
            Book a Consultation
            <span className="ml-2">→</span>
          </a>
        </div>
      )}
    </header>
  );
}