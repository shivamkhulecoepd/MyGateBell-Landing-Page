import { Reveal } from '@/components/ui/reveal';

const metrics = [
  { value: '4,500+', label: 'communities onboarded' },
  { value: '1.8M+', label: 'residents and staff supported' },
  { value: '32M+', label: 'visitor decisions processed each month' },
  { value: '< 3 min', label: 'median support acknowledgement' }
];

const logos = ['Northfield Residences', 'Atrium Living', 'Bluehaven', 'Stonebridge', 'Oak & Lane', 'Everpark'];

export function SocialProofSection() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl rounded-[2rem] border px-6 py-8 sm:px-8 lg:px-10" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', boxShadow: 'var(--shadowSoft)' }}>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <Reveal variant="right">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em]" style={{ color: 'var(--secondary)' }}>
                Trusted by operations teams that want less noise
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                The strongest feedback is usually this: “it finally feels like one system.”
              </h2>
              <p className="mt-4 text-base leading-8" style={{ color: 'var(--textSecondary)' }}>
                MyGateBell helps communities centralise security, communication, collections, and support without turning day-to-day work into a maze of dashboards.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} variant="left">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {metrics.map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border px-4 py-5" style={{ backgroundColor: 'var(--surfaceMuted)', borderColor: 'var(--border)' }}>
                  <p className="text-3xl font-semibold tracking-tight">{item.value}</p>
                  <p className="mt-2 text-sm leading-6" style={{ color: 'var(--textSecondary)' }}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="section-line my-8" />

        <Reveal delay={160} variant="up">
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {logos.map((logo) => (
              <div key={logo} className="rounded-[1.25rem] border px-4 py-4 text-center text-sm font-semibold tracking-tight" style={{ backgroundColor: 'var(--surfaceElevated)', borderColor: 'var(--border)', color: 'var(--textSecondary)' }}>
                {logo}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
