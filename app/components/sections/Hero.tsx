import HeroShowcase from "./HeroShowcase";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-24 pt-40 lg:px-8 lg:pt-48">
      {/* Ambient background — sits behind everything, purely decorative */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #E5E7EB 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage: "radial-gradient(ellipse 60% 60% at 50% 30%, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 30%, black 40%, transparent 100%)",
          }}
        />
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand-lime/15 blur-[120px]" />
      </div>
<div className="mx-auto max-w-3xl text-center">
      <span className="inline-block rounded-full bg-brand-offwhite px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-charcoal">
        Web · Mobile · Product Engineering
      </span>

      <h1 className="mt-5 text-4xl font-bold leading-tight text-brand-dark sm:text-5xl">
        Building the next generation of{" "}
        <span className="text-brand-lime-dark">digital products</span>
      </h1>

      <p className="mx-auto mt-5 max-w-xl text-base text-gray-600">
        We partner with startups and businesses to design, build, and scale
        software tailored to how your industry actually works.
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a href="/contact" className="rounded-full bg-brand-lime px-6 py-3 text-sm font-semibold text-brand-dark shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-lime-dark hover:shadow-md">
          Book a free consultation
        </a>
        <a href="/work" className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-brand-dark transition-colors hover:border-brand-dark">
          View our work
        </a>
      </div>
</div>
      <HeroShowcase />
    </section>
  );
}