import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const info = [
  { icon: faEnvelope, label: "Email", value: "hello@devnextra.com" },
  { icon: faPhone, label: "Phone", value: "+44 1234 567 890" },
  { icon: faLocationDot, label: "Address", value: "London, United Kingdom" },
];

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      {info.map((item) => (
        <div key={item.label} className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-offwhite text-brand-dark">
            <FontAwesomeIcon icon={item.icon} className="text-[18px]" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              {item.label}
            </p>
            <p className="text-sm font-medium text-brand-dark">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}