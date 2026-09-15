import Link from "next/link";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="mx-auto flex max-w-2xl flex-col items-center px-6 pb-20 pt-40 text-center lg:pt-48">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-offwhite text-brand-lime-dark">
          <FontAwesomeIcon icon={faCompass} className="text-[26px]" />
        </div>
        <h1 className="mt-6 text-4xl font-bold text-brand-dark">Page not found</h1>
        <p className="mt-3 text-sm text-gray-600">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <div className="mt-8 flex gap-3">
          <Link
            href="/"
            className="rounded-full bg-brand-lime px-6 py-3 text-sm font-semibold text-brand-dark transition-all hover:-translate-y-0.5 hover:bg-brand-lime-dark"
          >
            Back to home
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-brand-dark hover:border-brand-dark"
          >
            Contact us
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}