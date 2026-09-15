import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

export default function CallBookingCard() {
  return (
    <div className="mt-8 rounded-2xl border border-gray-100 bg-brand-offwhite p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-lime text-brand-dark">
        <FontAwesomeIcon icon={faPhoneVolume} className="text-[18px]" />
      </div>
      <h3 className="mt-4 text-sm font-semibold text-brand-dark">
        Prefer to talk it through?
      </h3>
      <p className="mt-1 text-sm text-gray-600">
        Skip the form and book a free 15-minute call with our team.
      </p>
      <a
        href="#"
        className="mt-4 inline-block rounded-full border border-brand-dark px-5 py-2 text-xs font-semibold text-brand-dark transition-colors hover:bg-brand-dark hover:text-white"
      >
        Schedule a call →
      </a>
    </div>
  );
}