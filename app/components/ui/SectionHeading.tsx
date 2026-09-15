export default function SectionHeading({
  eyebrow,
  titleBefore,
  highlight,
  titleAfter,
  subtitle,
}: {
  eyebrow: string;
  titleBefore?: string;
  highlight: string;
  titleAfter?: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-3">
        <span className="h-px w-8 bg-brand-lime-dark" />
        <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-brand-dark">
          {eyebrow}
        </span>
        <span className="h-px w-8 bg-brand-lime-dark" />
      </div>

      <h2 className="mt-4 text-4xl font-bold leading-tight text-brand-dark sm:text-5xl">
        {titleBefore && <>{titleBefore} </>}
        <span className="relative inline-block">
          <span className="relative z-10">{highlight}</span>
          <span
            aria-hidden
            className="absolute inset-x-0 bottom-1.5 z-0 h-3 bg-brand-lime sm:bottom-2 sm:h-4"
          />
        </span>
        {titleAfter && <> {titleAfter}</>}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-3 max-w-md text-sm text-gray-500">{subtitle}</p>
      )}
    </div>
  );
}