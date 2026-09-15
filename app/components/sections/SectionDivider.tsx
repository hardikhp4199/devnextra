export default function SectionDivider({
  from,
  to,
  flip = false,
}: {
  from: string;
  to: string;
  flip?: boolean;
}) {
  return (
    <div className="relative h-16 sm:h-20" style={{ backgroundColor: from }}>
      <svg
        className={`absolute bottom-0 left-0 h-16 w-full sm:h-20 ${flip ? "rotate-180" : ""}`}
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill={to} />
      </svg>
    </div>
  );
}