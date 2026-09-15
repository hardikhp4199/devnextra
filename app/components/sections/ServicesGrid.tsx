import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop, faGlobe, faMobileScreen, faPalette, faCloud } from "@fortawesome/free-solid-svg-icons";
import SectionHeading from "../ui/SectionHeading";

const services = [
	{
		icon: faLaptop,
		title: "Software development",
		description: "Scalable and secure web & mobile applications.",
		accent: "#3B82F6",
	},
	{
		icon: faGlobe,
		title: "Web development",
		description: "High-performance websites and web applications.",
		accent: "#06B6D4",
	},
	{
		icon: faMobileScreen,
		title: "Mobile app development",
		description: "iOS & Android apps that engage and deliver results.",
		accent: "#8B5CF6",
	},
	{
		icon: faPalette,
		title: "UI/UX design & branding",
		description: "Beautiful designs that create strong brand identities.",
		accent: "#F97316",
	},
	{
		icon: faCloud,
		title: "Cloud & DevOps solutions",
		description: "Cloud migration, infrastructure and DevOps services.",
		accent: "#22C55E",
	},
];

export default function ServicesGrid() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading eyebrow="Our services" titleBefore="What we" highlight="offer" />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {services.map((service) => (
          <div
            key={service.title}
            className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-[0_12px_30px_-8px_var(--accent)]"
            style={{ "--accent": service.accent } as React.CSSProperties}
          >
            {/* Top accent bar */}
            <div className="absolute inset-x-0 top-0 h-1 bg-[var(--accent)]" />

            {/* Faint tinted wash, bottom corner */}
            <div className="pointer-events-none absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-[var(--accent)]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div
              className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent)]/15 text-[var(--accent)] transition-transform group-hover:scale-110"
            >
              <FontAwesomeIcon icon={service.icon} className="text-[20px]" />
            </div>
            <h3 className="relative mt-4 text-sm font-semibold text-brand-dark">{service.title}</h3>
            <p className="relative mt-2 text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}