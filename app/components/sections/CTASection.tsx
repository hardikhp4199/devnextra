import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-24">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-brand-lime/20 blur-[100px]" />
        <div className="absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-brand-lime/10 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center lg:px-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-lime text-brand-dark">
          <FontAwesomeIcon icon={faWandMagicSparkles} className="text-[22px]" />
        </div>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
          Let's build what's{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-brand-lime">next</span>
          </span>{" "}
          together
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm text-gray-400">
          Have an idea, product, or technical challenge? Tell us what you're
          building and we'll help you figure out the next step.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="/contact"
            className="flex items-center justify-center gap-2 rounded-full bg-brand-lime px-7 py-3.5 text-sm font-semibold text-brand-dark shadow-lg shadow-brand-lime/20 transition-all hover:-translate-y-0.5 hover:bg-brand-lime-dark"
          >
            Book a free consultation
            <FontAwesomeIcon icon={faArrowRight} className="text-[12px]" />
          </a>
          <a
            href="/contact"
            className="flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/5"
          >
            Talk to an expert
          </a>
        </div>
      </div>
    </section>
  );
}