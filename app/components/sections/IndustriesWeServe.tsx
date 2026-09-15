"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faCartShopping,
  faHeartPulse,
  faBuilding,
  faGraduationCap,
  faDumbbell,
} from "@fortawesome/free-solid-svg-icons";
import SectionHeading from "../ui/SectionHeading";

const industries = [
  {
    icon: faUtensils,
    name: "Food & Beverage",
    description: "Online ordering, table reservations, and delivery integrations for restaurants, cafes, and cloud kitchens.",
    solutions: ["Online ordering & menu systems", "Table reservation platforms", "Delivery & POS integrations", "Loyalty & rewards apps"],
  },
  {
    icon: faCartShopping,
    name: "Retail & E-commerce",
    description: "Scalable online stores and inventory systems built to convert browsers into buyers and handle growth.",
    solutions: ["Custom e-commerce platforms", "Inventory & order management", "Payment gateway integration", "Multi-channel selling (marketplace sync)"],
  },
  {
    icon: faHeartPulse,
    name: "Healthcare",
    description: "Secure, compliant patient-facing platforms — appointment booking, records access, and telehealth.",
    solutions: ["Patient portals & appointment booking", "Telehealth platforms", "HIPAA/GDPR-conscious data handling", "Clinic & practice management systems"],
  },
  {
    icon: faBuilding,
    name: "Real Estate",
    description: "Property listing platforms and lead-generation tools that make browsing and inquiries effortless.",
    solutions: ["Property listing & search platforms", "Virtual tour integrations", "Lead capture & CRM integration", "Agent & agency dashboards"],
  },
  {
    icon: faGraduationCap,
    name: "Education",
    description: "Course platforms and student portals that make learning and administration easier to manage.",
    solutions: ["Learning management systems", "Student & parent portals", "Course & content delivery platforms", "Online exams & assessments"],
  },
  {
    icon: faDumbbell,
    name: "Fitness & Wellness",
    description: "Booking and membership systems for studios, gyms, and wellness businesses.",
    solutions: ["Class & session booking systems", "Membership & subscription management", "Trainer/studio dashboards", "Fitness tracking app integrations"],
  },
];

export default function IndustriesWeServe() {
  const [active, setActive] = useState(0);
  const current = industries[active];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Industries we serve"
        titleBefore="Built for your"
        highlight="industry"
        subtitle="We focus where we can deliver the most value — not everything, everywhere."
      />

      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {industries.map((industry, index) => (
          <button
            key={industry.name}
            onClick={() => setActive(index)}
            className={`flex flex-col items-center gap-3 rounded-2xl border p-5 text-center transition-all ${
              active === index
                ? "border-brand-lime bg-brand-offwhite"
                : "border-gray-100 bg-white hover:border-brand-lime/50"
            }`}
          >
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                active === index ? "bg-brand-lime text-brand-dark" : "bg-brand-offwhite text-gray-500"
              }`}
            >
              <FontAwesomeIcon icon={industry.icon} className="text-[18px]" />
            </div>
            <span className={`text-xs font-semibold leading-tight ${active === index ? "text-brand-dark" : "text-gray-600"}`}>
              {industry.name}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-brand-lime-dark">
              {current.name}
            </span>
            <p className="mt-2 text-base text-gray-700">{current.description}</p>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              What we build
            </span>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {current.solutions.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-lime-dark" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}