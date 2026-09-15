import Image from "next/image";

export default function Hero1() {
  return (
    <section
      id="home"
      className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 pb-16 pt-40 lg:flex-row lg:gap-16 lg:px-8 lg:pt-48"
    >
      {/* Left: copy */}
      <div className="flex-1 text-center lg:text-left">
        <span className="inline-block rounded-full bg-brand-offwhite px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-charcoal">
          We build digital solutions
        </span>

        <h1 className="mt-5 text-4xl font-bold leading-tight text-brand-dark sm:text-5xl">
          We build digital products that drive{" "}
          <span className="text-brand-lime-dark">real business growth</span>
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base text-gray-600 lg:mx-0">
          We help startups and enterprises build scalable, secure and
          high-performance digital products that make an impact.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
          <a 
            href="#contact"
            className="rounded-full bg-brand-lime px-6 py-3 text-sm font-semibold text-brand-dark shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-lime-dark hover:shadow-md"
          >
            Get started
          </a>
          <a
            href="#work"
            className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-brand-dark transition-colors hover:border-brand-dark"
          >
            Explore our work
          </a>
        </div>
      </div>

      {/* Right: dashboard graphic */}
      <div className="relative flex-1 w-full">
            <Image
              src="/hero-dashboard.png"
              alt="DevNextra digital product dashboard"
              width={1536}
              height={1024}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
          {/* <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <span className="text-sm font-semibold text-brand-dark">Dashboard</span>
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-brand-offwhite p-4">
              <p className="text-xs text-gray-500">Total spend this month</p>
              <p className="mt-1 text-xl font-bold text-brand-dark">$56,420</p>
              <p className="text-xs font-medium text-brand-lime-dark">+24.5%</p>
            </div>
            <div className="rounded-xl bg-brand-offwhite p-4">
              <p className="text-xs text-gray-500">Orders</p>
              <p className="mt-1 text-xl font-bold text-brand-dark">1,243</p>
              <p className="text-xs text-gray-500">Customers 3,267</p>
            </div>
          </div>

          <div className="mt-4 h-28 rounded-xl bg-brand-offwhite" /> */}
    </section>
  );
}