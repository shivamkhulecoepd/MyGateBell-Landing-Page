import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';
import { Button } from '@/components/ui/button';

export function FinalCtaSection() {
  return (
    <section id="pricing" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <Reveal>
        <div
          id="cta"
          className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border px-8 py-12 sm:px-10 lg:px-14 lg:py-16"
          style={{
            backgroundColor: 'var(--surface)',
            borderColor: 'var(--border)',
            boxShadow: 'var(--shadowStrong)'
          }}
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_0.62fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em]" style={{ color: 'var(--secondary)' }}>
                Ready when you are
              </p>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Give your community a product that feels considered from the first click.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 sm:text-lg" style={{ color: 'var(--textSecondary)' }}>
                Book a walkthrough, review the user flows, and shape MyGateBell around the way your property already operates.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:items-end">
              <Button href="#top" className="w-full sm:w-auto">
                <span className="mr-2">Get Started Today</span>
                <ArrowRight size={16} />
              </Button>
              <p className="text-sm leading-7 lg:max-w-xs lg:text-right" style={{ color: 'var(--textSecondary)' }}>
                Prefer a guided rollout plan first? We can map property setup, staff onboarding, and payment configuration with your team.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
