import { Bell, CreditCard, ShieldCheck, Ticket } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';
import { PhoneFrame } from '@/components/ui/phone-frame';
import { SectionHeading } from '@/components/ui/section-heading';

export function AppShowcaseSection() {
  return (
    <section id="showcase" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="App showcase"
          title="A product surface with more breathing room and better visual rhythm."
          description="The mobile experience is intentionally spacious. Core actions sit closer to the thumb, supporting details are layered softly, and every card is doing a real job."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.76fr_1.14fr]">
          <Reveal variant="right">
            <div className="rounded-[2rem] border p-7" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', boxShadow: 'var(--shadowSoft)' }}>
              <p className="text-sm font-semibold uppercase tracking-[0.24em]" style={{ color: 'var(--secondary)' }}>
                Product notes
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight">The design focuses on trust-building details, not visual noise.</h3>
              <div className="mt-8 space-y-4">
                {[
                  'Primary actions are obvious without overpowering the whole interface.',
                  'Status chips, receipts, and support updates feel consistent across screens.',
                  'Cards use spacing and grouping to guide attention before text does.'
                ].map((item) => (
                  <div key={item} className="rounded-[1.35rem] border px-4 py-4" style={{ backgroundColor: 'var(--surfaceMuted)', borderColor: 'var(--border)' }}>
                    <p className="text-sm leading-7" style={{ color: 'var(--textSecondary)' }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 xl:grid-cols-2">
            <Reveal delay={60} variant="up">
              <PhoneFrame badge="Guests" title="Fast visitor approvals" subtitle="Clear actions. No guessing at the gate." footerLabel="Residents can approve, deny, or leave instructions in a couple of taps.">
                <div className="rounded-[1.4rem] border p-4" style={{ backgroundColor: 'var(--surfaceMuted)', borderColor: 'var(--border)' }}>
                  <div className="flex items-center gap-3">
                    <div className="rounded-[1rem] p-3" style={{ backgroundColor: 'var(--accentSoft)', color: 'var(--primary)' }}>
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Aarav Patel</p>
                      <p className="text-sm" style={{ color: 'var(--textSecondary)' }}>Arriving in 4 minutes</p>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl px-4 py-3 text-center text-sm font-semibold" style={{ backgroundColor: 'var(--primary)', color: 'var(--textOnPrimary)' }}>
                      Approve
                    </div>
                    <div className="rounded-2xl px-4 py-3 text-center text-sm font-semibold" style={{ backgroundColor: 'var(--surface)', color: 'var(--textPrimary)' }}>
                      Call back
                    </div>
                  </div>
                </div>
              </PhoneFrame>
            </Reveal>

            {/* <Reveal delay={140} variant="scale">
              <PhoneFrame badge="Billing" title="Collections with context" subtitle="Payments, reminders, and receipts in one ledger." footerLabel="Payment status updates reach residents automatically.">
                <div className="space-y-3 rounded-[1.4rem] border p-4" style={{ backgroundColor: 'var(--surfaceMuted)', borderColor: 'var(--border)' }}>
                  <div className="flex items-center justify-between rounded-[1.1rem] border px-4 py-3" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
                    <div className="flex items-center gap-3">
                      <CreditCard size={18} style={{ color: 'var(--primary)' }} />
                      <div>
                        <p className="text-sm font-semibold">Maintenance due</p>
                        <p className="text-sm" style={{ color: 'var(--textSecondary)' }}>Tower B · April cycle</p>
                      </div>
                    </div>
                    <p className="text-sm font-semibold">₹4,850</p>
                  </div>
                  <div className="rounded-[1.1rem] px-4 py-3 text-sm font-medium" style={{ backgroundColor: 'var(--accentStrong)', color: 'var(--success)' }}>
                    94% of reminders delivered before due date
                  </div>
                </div>
              </PhoneFrame>
            </Reveal> */}

            <Reveal delay={220} variant="up">
              <PhoneFrame badge="Support" title="Helpdesk that stays tidy" subtitle="Requests stay visible until they are done." footerLabel="Updates reach the resident, staff assignee, and admin team together.">
                <div className="space-y-3 rounded-[1.4rem] border p-4" style={{ backgroundColor: 'var(--surfaceMuted)', borderColor: 'var(--border)' }}>
                  {[
                    { icon: Ticket, label: 'Lift servicing', status: 'In progress' },
                    { icon: Bell, label: 'Water pressure issue', status: 'Assigned' }
                  ].map(({ icon: Icon, label, status }) => (
                    <div key={label} className="flex items-center justify-between rounded-[1.1rem] border px-4 py-3" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
                      <div className="flex items-center gap-3">
                        <Icon size={18} style={{ color: 'var(--primary)' }} />
                        <p className="text-sm font-semibold">{label}</p>
                      </div>
                      <span className="text-xs font-semibold" style={{ color: 'var(--textSecondary)' }}>
                        {status}
                      </span>
                    </div>
                  ))}
                </div>
              </PhoneFrame>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
