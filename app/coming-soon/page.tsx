import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export const metadata = {
  title: "Coming Soon | DevNextra",
  robots: { index: false, follow: false },
};

export default function ComingSoonPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-brand-dark px-6 text-center">
      <div className="rounded-2xl bg-white px-6 py-4 shadow-lg">
        <Image src="/Logo1.png" alt="DevNextra" width={160} height={40} priority />
        </div>

      <h1 className="mt-10 text-3xl font-bold text-white sm:text-4xl">
        Something new is <span className="text-brand-lime">launching soon</span>
      </h1>
      <p className="mx-auto mt-4 max-w-md text-sm text-gray-400">
        We're putting the finishing touches on our new site. In the meantime,
        reach out directly — we'd love to hear about your project.
      </p>

      <a
        href="mailto:hello@devnextra.com"
        className="mt-8 rounded-full bg-brand-lime px-6 py-3 text-sm font-semibold text-brand-dark transition-colors hover:bg-brand-lime-dark"
      >
        hello@devnextra.com
      </a>

      {/* <div className="mt-8 flex gap-3">
        <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-brand-lime hover:text-brand-dark">
          <FontAwesomeIcon icon={faLinkedinIn} size="sm" />
        </a>
        <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-brand-lime hover:text-brand-dark">
          <FontAwesomeIcon icon={faInstagram} size="sm" />
        </a>
      </div> */}
    </main>
  );
}