import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import WhyChooseGraphic from "./WhyChooseGraphic";

const points = [
  "Client-centric approach",
  "Agile & transparent process",
  "On-time delivery",
  "Long-term support",
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        
        {/* Left: Content */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-lime">
            Why choose DevNextra
          </span>

          <h2 className="mt-2 text-3xl font-bold text-white">
            We combine technology with business insight
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-gray-400">
            We go beyond code by understanding your business goals, working
            transparently, and staying invested in your product long after launch.
          </p>

          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-lime text-brand-dark">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-[11px]"
                  />
                </span>

                <span className="text-sm font-medium text-gray-200">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Why Choose DevNextra Image */}
        <div className="relative mt-5 flex items-center justify-center lg:mt-0">
          <WhyChooseGraphic />
        </div>

      </div>
    </section>
  );
}