import { BellRing, CreditCard, LifeBuoy, ShieldCheck, UsersRound } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';

const features = [
  {
    title: 'Smart Security',
    description: 'Know who is entering, when approvals are pending, and which staff members are on shift — without filling the screen with noise.',
    detail: 'Built for gate flow, handovers, and exceptions.',
    icon: ShieldCheck
  },
  {
    title: 'Visitor Management',
    description: 'Residents approve guests in seconds while guards receive clear instructions at the point where they actually need them.',
    detail: 'Fast enough for busy evenings and delivery rushes.',
    icon: UsersRound
  },
  {
    title: 'Payments & Billing',
    description: 'Collect dues, issue receipts, and send reminders from one ledger that feels dependable for both finance teams and residents.',
    detail: 'Simple reminders. Cleaner collections.',
    icon: CreditCard
  },
  {
    title: 'Community Engagement',
    description: 'Publish notices, share updates, and keep community-wide communication visible instead of buried across chat groups.',
    detail: 'A calmer home for announcements and replies.',
    icon: BellRing
  },
  {
    title: 'Helpdesk & Support',
    description: 'Every complaint, task, and follow-up stays trackable through closure so residents stop wondering if anything moved forward.',
    detail: 'Good for residents, better for response time.',
    icon: LifeBuoy
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Features"
          title="A full community stack, arranged like a product — not a checklist."
          description="Instead of treating every module as its own mini app, MyGateBell keeps the experience visually consistent, easier to scan, and faster to learn across teams."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <Reveal variant="right" className="lg:sticky lg:top-28">
            <div className="rounded-[2rem] border p-7" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', boxShadow: 'var(--shadowSoft)' }}>
              <p className="text-sm font-semibold uppercase tracking-[0.24em]" style={{ color: 'var(--secondary)' }}>
                Why it feels different
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                Less clutter, clearer paths, and enough detail exactly where the decision happens.
              </h3>
              <p className="mt-5 text-base leading-8" style={{ color: 'var(--textSecondary)' }}>
                The design system is intentionally quiet. Cards are lighter, actions are easier to spot, and the hierarchy supports real operational tasks rather than generic marketing boxes.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  'One visual language across resident, admin, and guard workflows',
                  'High-contrast action areas without excessive gradients or neon accents',
                  'Plenty of spacing so dense information still feels easy to read'
                ].map((item) => (
                  <div key={item} className="rounded-[1.3rem] border px-4 py-4" style={{ backgroundColor: 'var(--surfaceMuted)', borderColor: 'var(--border)' }}>
                    <p className="text-sm leading-7" style={{ color: 'var(--textSecondary)' }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {features.map(({ title, description, detail, icon: Icon }, index) => (
              <Reveal key={title} delay={index * 90} variant={index % 2 === 0 ? 'up' : 'scale'}>
                <article className="h-full rounded-[2rem] border p-6 transition duration-300 hover:-translate-y-1" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', boxShadow: 'var(--shadowSoft)' }}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex rounded-[1.1rem] p-3" style={{ backgroundColor: 'var(--accentSoft)', color: 'var(--primary)' }}>
                      <Icon size={22} />
                    </div>
                    <span className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ backgroundColor: 'var(--surfaceMuted)', color: 'var(--secondary)' }}>
                      Module {index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight">{title}</h3>
                  <p className="mt-3 text-sm leading-7 sm:text-base" style={{ color: 'var(--textSecondary)' }}>
                    {description}
                  </p>
                  <div className="mt-6 rounded-[1.3rem] border px-4 py-4" style={{ backgroundColor: 'var(--surfaceMuted)', borderColor: 'var(--border)' }}>
                    <p className="text-sm font-medium" style={{ color: 'var(--textSecondary)' }}>
                      {detail}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
