type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left'
}: SectionHeadingProps) {
  const isCentered = align === 'center';

  return (
    <div className={isCentered ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      <p className="eyebrow-pill text-sm font-semibold tracking-[0.18em] uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 sm:text-lg" style={{ color: 'var(--textSecondary)' }}>
        {description}
      </p>
    </div>
  );
}
