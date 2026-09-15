import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faUtensils,
  faCartShopping,
  faHeartPulse,
  faBuilding,
  faGraduationCap,
  faDumbbell,
} from "@fortawesome/free-solid-svg-icons";

const serviceLinks = [
  { name: "Software development", href: "/#services" },
  { name: "Web development", href: "/#services" },
  { name: "Mobile app development", href: "/#services" },
  { name: "UI/UX design", href: "/#services" },
  { name: "Cloud & DevOps", href: "/#services" },
];

const industryLinks = [
  { name: "Food & Beverage", icon: faUtensils },
  { name: "Retail & E-commerce", icon: faCartShopping },
  { name: "Healthcare", icon: faHeartPulse },
  { name: "Real Estate", icon: faBuilding },
  { name: "Education", icon: faGraduationCap },
  { name: "Fitness & Wellness", icon: faDumbbell },
];

const companyLinks = [
  { name: "About us", href: "/about" },
  { name: "Our process", href: "/#process" },
  { name: "Terms & conditions", href: "/terms" },
  { name: "Our work", href: "/work" },
];

const resourceLinks = [
  { name: "Privacy policy", href: "/privacy" },
  { name: "FAQs", href: "/contact#faq" },
];

const comingSoon = ["Blog", "Careers"];

const socials = [
  { icon: faLinkedinIn, href: "#" },
  { icon: faTwitter, href: "#" },
  { icon: faFacebookF, href: "#" },
  { icon: faInstagram, href: "#" },
  { icon: faYoutube, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top: brand + newsletter-style strip */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-10 sm:flex-row sm:items-center">
          <div>
            <Image src="/Logo.png" alt="DevNextra" width={170} height={44} className="brightness-0 invert" />
            <p className="mt-3 max-w-xs text-sm text-gray-400">
              Building scalable digital products for restaurants, retail, healthcare,
              real estate, education & fitness businesses.
            </p>
          </div>

          <Link
            href="/#contact"
            className="rounded-full bg-brand-lime px-5 py-2.5 text-sm font-semibold text-brand-dark transition-colors hover:bg-brand-lime-dark"
          >
            Start a project →
          </Link>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-10 py-12 sm:grid-cols-3 lg:grid-cols-5">
          <div>
            <h4 className="text-sm font-semibold text-white">Services</h4>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-brand-lime">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Industries</h4>
            <ul className="mt-4 space-y-2">
              {industryLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href="/#industries"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-brand-lime"
                  >
                    <FontAwesomeIcon icon={item.icon} className="text-[11px]" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-brand-lime">
                    {link.name}
                  </Link>
                </li>
              ))}
              {comingSoon.map((name) => (
                <li key={name}>
                  <span className="text-sm text-gray-600" title="Coming soon">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Resources</h4>
            <ul className="mt-4 space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-brand-lime">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:hello@devnextra.com" className="hover:text-brand-lime">
                  hello@devnextra.com
                </a>
              </li>
              <li>
                <a href="tel:+447587535370" className="hover:text-brand-lime">
                  +44 7587 535 370
                </a>
              </li>
              <li>London, United Kingdom</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 px-6 py-6 sm:flex-row lg:px-8">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} DevNextra. All rights reserved.
        </p>
        <div className="flex gap-3">
          {socials.map(({ icon, href }, i) => (
            <a
              key={i}
              href={href}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-colors hover:bg-brand-lime hover:text-brand-dark"
            >
              <FontAwesomeIcon icon={icon} size="sm" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}