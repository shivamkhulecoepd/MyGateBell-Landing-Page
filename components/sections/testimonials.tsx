import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';

const testimonials = [
  {
    quote:
      'What stood out was not a flashy dashboard. It was how quickly our residents and guards understood what to do without training sessions or repeated calls.',
    name: 'Naina Khanna',
    role: 'Estate Manager',
    company: 'Eastcourt Residences',
    initials: 'NK'
  },
  {
    quote:
      'We moved notices, complaints, and collections into one product and immediately reduced the amount of duplicated follow-up our admin desk was doing every day.',
    name: 'Rohan Mehta',
    role: 'Committee Member',
    company: 'Cedar Square',
    initials: 'RM'
  },
  {
    quote:
      'The guard interface is the kind of thing you only notice when it works. That mattered more to us than getting one more analytics widget.',
    name: 'Priya Das',
    role: 'Operations Lead',
    company: 'Haven Park',
    initials: 'PD'
  }
];

export function TestimonialsSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="The kind of feedback product teams actually want to hear"
          description="The strongest comments are usually about speed, clarity, and how quickly the system becomes part of the team’s daily rhythm."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 110} variant={index === 0 ? 'up' : 'scale'}>
              <article className="h-full rounded-[2rem] border p-6 sm:p-7" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', boxShadow: 'var(--shadowSoft)' }}>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full text-sm font-semibold" style={{ backgroundColor: 'var(--accentSoft)', color: 'var(--primary)' }}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-base font-semibold">{testimonial.name}</p>
                    <p className="text-sm" style={{ color: 'var(--textSecondary)' }}>
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="mt-8 text-lg leading-8" style={{ color: 'var(--textSecondary)' }}>
                  “{testimonial.quote}”
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
