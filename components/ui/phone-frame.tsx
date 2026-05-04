type PhoneFrameProps = {
  badge: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footerLabel?: string;
  className?: string;
};

export function PhoneFrame({
  badge,
  title,
  subtitle,
  children,
  footerLabel,
  className = ''
}: PhoneFrameProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[344px] rounded-[2.25rem] border p-3 ${className}`}
      style={{
        backgroundColor: 'var(--surfaceElevated)',
        borderColor: 'var(--border)',
        boxShadow: 'var(--shadowStrong)'
      }}
    >
      <div
        className="rounded-[1.8rem] border p-4"
        style={{
          backgroundColor: 'var(--surface)',
          borderColor: 'var(--border)',
          boxShadow: 'var(--shadowInset)'
        }}
      >
        <div className="mx-auto mb-4 h-1.5 w-24 rounded-full" style={{ backgroundColor: 'var(--border)' }} />
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em]" style={{ color: 'var(--secondary)' }}>
              {badge}
            </p>
            <h3 className="mt-2 text-lg font-semibold tracking-tight">{title}</h3>
            <p className="mt-1 text-sm leading-6" style={{ color: 'var(--textSecondary)' }}>
              {subtitle}
            </p>
          </div>
          <div
            className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]"
            style={{
              backgroundColor: 'var(--accentSoft)',
              color: 'var(--primary)'
            }}
          >
            live
          </div>
        </div>
        <div className="space-y-3">{children}</div>
        {footerLabel ? (
          <div
            className="mt-4 rounded-[1.2rem] border px-4 py-3 text-sm font-medium"
            style={{
              backgroundColor: 'var(--surfaceMuted)',
              borderColor: 'var(--border)',
              color: 'var(--textSecondary)'
            }}
          >
            {footerLabel}
          </div>
        ) : null}
      </div>
    </div>
  );
}
