'use client';

import { ArrowUpRight, BadgeCheck, Building2, ShieldCheck, Users } from 'lucide-react';
import { useState } from 'react';
import { Reveal } from '@/components/ui/reveal';
import { PhoneFrame } from '@/components/ui/phone-frame';
import { SectionHeading } from '@/components/ui/section-heading';

const roles = [
  {
    key: 'residents',
    label: 'Residents',
    icon: Users,
    title: 'Residents get a home screen that answers everyday questions quickly.',
    subtitle: 'Visitor approvals, maintenance dues, notices, helpdesk tickets, and amenity updates sit in one place that feels familiar after the first use.',
    benefits: [
      'Approve guests from a notification without calling the gate.',
      'Pay dues and download receipts without searching through menus.',
      'Track complaints until closure with visible status updates.'
    ],
    metrics: ['2 taps to approve a guest', 'Receipts stored automatically', 'Tickets with resident-facing timelines'],
    badge: 'Resident view',
    phoneTitle: 'Daily home',
    phoneSubtitle: 'Fast decisions. Less friction.',
    footer: '1 visitor request · 2 notices · 1 complaint update'
  },
  {
    key: 'admins',
    label: 'Admins',
    icon: Building2,
    title: 'Admins see the operating picture without having to assemble it manually.',
    subtitle: 'Broadcasts, ticket queues, billing activity, and guard coordination stay visible inside one decision-friendly workspace.',
    benefits: [
      'Send notices tower-wise or community-wide without duplicate chats.',
      'Watch collections, dues, and payment status from a single ledger.',
      'Review service response time without chasing updates across teams.'
    ],
    metrics: ['Board-ready collection snapshot', 'Clear escalation trail', 'Live activity across staff and towers'],
    badge: 'Admin view',
    phoneTitle: 'Operations feed',
    phoneSubtitle: 'The important parts, in sequence.',
    footer: '24 open tickets · ₹8.2L collected · 3 guard shifts active'
  },
  {
    key: 'guards',
    label: 'Security Guards',
    icon: ShieldCheck,
    title: 'Guards work faster when the interface is specific, calm, and impossible to misread.',
    subtitle: 'Visitor lookups, staff attendance, delivery check-ins, and resident instructions appear clearly at the exact moment they matter.',
    benefits: [
      'See resident decisions instantly at the gate.',
      'Log staff and delivery movement with less paperwork.',
      'Reduce confusion during peak hours and shift handovers.'
    ],
    metrics: ['Minimal taps on duty', 'Readable status labels', 'Shift handover notes preserved in-app'],
    badge: 'Guard view',
    phoneTitle: 'Gate console',
    phoneSubtitle: 'High-speed decisions with less guesswork.',
    footer: '4 pending deliveries · 2 staff entries · Shift closes at 7:00 PM'
  }
] as const;

export function RoleTabsSection() {
  const [activeRole, setActiveRole] = useState<(typeof roles)[number]['key']>('residents');
  const role = roles.find((item) => item.key === activeRole) ?? roles[0];
  const ActiveIcon = role.icon;

  return (
    <section id="solutions" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Built for every role"
          title="One platform, tuned to the people actually doing the work."
          description="The UI shifts for residents, admins, and guards without fragmenting the system. That makes the product easier to adopt and easier to manage." 
        />

        <div className="mt-10 flex flex-wrap gap-3">
          {roles.map((item) => {
            const Icon = item.icon;
            const active = item.key === activeRole;
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => setActiveRole(item.key)}
                className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5"
                style={{
                  backgroundColor: active ? 'var(--primary)' : 'var(--surface)',
                  color: active ? 'var(--textOnPrimary)' : 'var(--textPrimary)',
                  borderColor: active ? 'var(--primary)' : 'var(--border)',
                  boxShadow: active ? 'var(--shadowSoft)' : 'var(--shadowInset)'
                }}
              >
                <Icon size={16} />
                {item.label}
              </button>
            );
          })}
        </div>

        <Reveal className="mt-8" variant="up">
          <div className="grid gap-8 rounded-[2rem] border p-6 sm:p-8 lg:grid-cols-[1.04fr_0.96fr] lg:p-10" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', boxShadow: 'var(--shadowSoft)' }}>
            <div>
              <div className="inline-flex rounded-[1.1rem] p-3" style={{ backgroundColor: 'var(--accentSoft)', color: 'var(--primary)' }}>
                <ActiveIcon size={22} />
              </div>
              <h3 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">{role.title}</h3>
              <p className="mt-4 max-w-2xl text-base leading-8" style={{ color: 'var(--textSecondary)' }}>
                {role.subtitle}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {role.metrics.map((metric) => (
                  <div key={metric} className="rounded-[1.4rem] border px-4 py-4" style={{ backgroundColor: 'var(--surfaceMuted)', borderColor: 'var(--border)' }}>
                    <p className="text-sm leading-7" style={{ color: 'var(--textSecondary)' }}>
                      {metric}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                {role.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 rounded-[1.4rem] border px-4 py-4" style={{ backgroundColor: 'var(--surfaceElevated)', borderColor: 'var(--border)' }}>
                    <BadgeCheck size={18} className="mt-1 shrink-0" style={{ color: 'var(--success)' }} />
                    <p className="text-sm leading-7 sm:text-base" style={{ color: 'var(--textSecondary)' }}>
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              <a href="#showcase" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: 'var(--primary)' }}>
                Explore the product surfaces
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="flex flex-col justify-center gap-5">
              <div className="rounded-[1.6rem] border p-5" style={{ backgroundColor: 'var(--surfaceMuted)', borderColor: 'var(--border)' }}>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: 'var(--secondary)' }}>
                      Workflow notes
                    </p>
                    <p className="mt-2 text-xl font-semibold tracking-tight">What changes with this view</p>
                  </div>
                  <div className="rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: 'var(--accentStrong)', color: 'var(--success)' }}>
                    Role aware
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  {role.metrics.map((metric) => (
                    <div key={metric} className="rounded-[1.2rem] border px-4 py-3 text-sm" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--textSecondary)' }}>
                      {metric}
                    </div>
                  ))}
                </div>
              </div>

              <PhoneFrame badge={role.badge} title={role.phoneTitle} subtitle={role.phoneSubtitle} footerLabel={role.footer}>
                <div className="rounded-[1.4rem] border p-4" style={{ backgroundColor: 'var(--surfaceMuted)', borderColor: 'var(--border)' }}>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: 'var(--secondary)' }}>
                        Today
                      </p>
                      <p className="mt-2 text-base font-semibold">Primary queue</p>
                    </div>
                    <div className="rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: 'var(--accentStrong)', color: 'var(--success)' }}>
                      On track
                    </div>
                  </div>
                  <div className="mt-4 space-y-3">
                    {role.benefits.map((benefit) => (
                      <div key={benefit} className="rounded-[1.1rem] border px-4 py-3 text-sm" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--textSecondary)' }}>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </PhoneFrame>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
