import { LockKeyhole, ShieldCheck, WalletCards } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';

const highlights = [
  {
    title: 'Encrypted data handling',
    description: 'Resident details, approvals, payments, and support logs stay protected in transit and at rest.',
    icon: LockKeyhole
  },
  {
    title: 'Role-based access',
    description: 'Each user sees the tools and information meant for their role, with clear boundaries across teams.',
    icon: ShieldCheck
  },
  {
    title: 'Traceable finance activity',
    description: 'Collections, receipts, and ledger updates remain auditable so finance workflows feel dependable.',
    icon: WalletCards
  }
];

export function SecurityTrustSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] border p-8 sm:p-10 lg:p-12" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', boxShadow: 'var(--shadowSoft)' }}>
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <Reveal variant="right">
            <SectionHeading
              eyebrow="Security & trust"
              title="The product should feel reliable before anyone reads the security page."
              description="MyGateBell uses strong visual hierarchy and straightforward language to signal trust on the surface, backed by clear protections beneath it."
            />
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {highlights.map(({ title, description, icon: Icon }, index) => (
              <Reveal key={title} delay={index * 90} variant="up">
                <div className="h-full rounded-[1.7rem] border p-6" style={{ backgroundColor: 'var(--surfaceMuted)', borderColor: 'var(--border)' }}>
                  <div className="inline-flex rounded-[1rem] p-3" style={{ backgroundColor: 'var(--surface)', color: 'var(--primary)' }}>
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight">{title}</h3>
                  <p className="mt-3 text-sm leading-7" style={{ color: 'var(--textSecondary)' }}>
                    {description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
