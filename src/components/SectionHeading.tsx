interface SectionHeadingProps {
  id: string;
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ id, label, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="section-label">
        <span aria-hidden="true" className="h-px w-8 bg-brand-cyan" />
        {label}
      </p>
      <h2
        id={id}
        className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-fg sm:text-4xl md:text-5xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-fg-secondary sm:text-lg">{description}</p>
      )}
    </div>
  );
}
