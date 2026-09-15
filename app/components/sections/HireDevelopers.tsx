const techTags = [
  "React", "Next.js", "Node.js", "TypeScript", "Python", "AWS", "Docker", "PostgreSQL",
];

export default function HireDevelopers() {
  return (
    <section className="bg-brand-offwhite py-16">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-lime-dark">
          Hire developers
        </span>
        <h2 className="mt-2 text-3xl font-bold text-brand-dark">
          Hire dedicated developers, on demand
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-gray-600">
          Scale your team with vetted developers across the stack — hourly,
          part-time, or full-time.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {techTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-medium text-brand-charcoal"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href="#contact"
          className="mt-8 inline-block rounded-full bg-brand-lime px-6 py-3 text-sm font-semibold text-brand-dark shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-lime-dark hover:shadow-md"
        >
          Hire a developer →
        </a>
      </div>
    </section>
  );
}