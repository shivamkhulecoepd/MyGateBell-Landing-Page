import { ClipboardCheck, ScanFace, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';

const steps = [
  {
    title: 'Set up the property once',
    description: 'Add towers, guards, staff, billing rules, and access points with guided onboarding that feels deliberate, not rushed.',
    supporting: 'The system is structured so rollout does not turn into a long spreadsheet exercise.',
    icon: ClipboardCheck
  },
  {
    title: 'Run daily operations in one flow',
    description: 'Visitor decisions, support tickets, notices, and collections stay connected so teams are not bouncing between tools.',
    supporting: 'Residents, admins, and guards see different interfaces, but the data stays in sync.',
    icon: ScanFace
  },
  {
    title: 'Improve with real signals',
    description: 'Response times, pending issues, dues, and service bottlenecks become visible without asking the team for manual updates.',
    supporting: 'That makes follow-through easier and the product feel more useful over time.',
    icon: Sparkles
  }
];

export function HowItWorksSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How it works"
          title="Simple rollout. Clear habits. Better daily rhythm."
          description="The experience is designed to feel thoughtful at every step, and the motion system adds gentle enter-and-exit transitions as content comes into view."
          align="center"
        />

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-10 hidden h-px lg:block" style={{ backgroundImage: 'linear-gradient(to right, transparent, var(--border), transparent)' }} />
          <div className="grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={index * 120} variant="up">
                  <div className="relative h-full rounded-[2rem] border p-7" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', boxShadow: 'var(--shadowSoft)' }}>
                    {/* <div className="absolute left-7 top-7 hidden h-6 w-6 rounded-full lg:block" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }} /> */}
                    <div className="ml-0">
                      <div className="flex items-center justify-between gap-4">
                        <div className="inline-flex rounded-[1.1rem] p-3" style={{ backgroundColor: 'var(--accentSoft)', color: 'var(--primary)' }}>
                          <Icon size={22} />
                        </div>
                        <span className="text-sm font-semibold" style={{ color: 'var(--secondary)' }}>
                          0{index + 1}
                        </span>
                      </div>
                      <h3 className="mt-7 text-2xl font-semibold tracking-tight">{step.title}</h3>
                      <p className="mt-4 text-sm leading-7 sm:text-base" style={{ color: 'var(--textSecondary)' }}>
                        {step.description}
                      </p>
                      <div className="mt-6 rounded-[1.3rem] border px-4 py-4" style={{ backgroundColor: 'var(--surfaceMuted)', borderColor: 'var(--border)' }}>
                        <p className="text-sm leading-7" style={{ color: 'var(--textSecondary)' }}>
                          {step.supporting}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
