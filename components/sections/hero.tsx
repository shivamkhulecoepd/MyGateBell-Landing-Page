import {
  ArrowRight,
  BellRing,
  CheckCircle2,
  CreditCard,
  Play,
  ShieldCheck,
  Sparkles,
  Ticket,
  UsersRound,
  WalletCards,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { PhoneFrame } from "@/components/ui/phone-frame";

const proofPoints = [
  "Visitors get approved without a flurry of phone calls.",
  "Residents always know where bills, notices, and support live.",
  "Admins and security teams work from the same source of truth.",
];

const statCards = [
  {
    label: "Visitor response time",
    value: "11 sec",
    note: "Median approval across active properties",
  },
  {
    label: "Support closure rate",
    value: "93%",
    note: "Resolved without repeat follow-up",
  },
  {
    label: "Collection visibility",
    value: "1 view",
    note: "Dues, receipts, and reminders in one ledger",
  },
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
          <div className="max-w-2xl">
            <Reveal variant="down">
              <div className="eyebrow-pill text-sm font-semibold">
                <ShieldCheck size={16} />
                Designed for calm, everyday operations
              </div>
            </Reveal>

            <Reveal delay={80} variant="up">
              <h1 className="mt-7 font-display text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-[4.6rem] lg:leading-[1.02]">
                A cleaner way to run security, support, and community life.
              </h1>
            </Reveal>

            <Reveal delay={160} variant="up">
              <p
                className="mt-6 max-w-xl text-lg leading-8 sm:text-xl"
                style={{ color: "var(--textSecondary)" }}
              >
                MyGateBell gives residents, admins, and guards a shared operating
                layer that feels organised from the first screen instead of
                stitched together over time.
              </p>
            </Reveal>

            <Reveal delay={220} variant="up">
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#cta" className="w-full sm:w-auto">
                  <span className="mr-2">Book Demo</span>
                  <ArrowRight size={16} />
                </Button>
                <Button
                  href="#showcase"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  <span className="mr-2">Download App</span>
                  <Play size={16} />
                </Button>
              </div>
            </Reveal>

            <Reveal delay={280} variant="up">
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {statCards.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.6rem] border px-5 py-4"
                    style={{
                      backgroundColor: "var(--surface)",
                      borderColor: "var(--border)",
                      boxShadow: "var(--shadowInset)",
                    }}
                  >
                    <p
                      className="text-sm font-medium"
                      style={{ color: "var(--textSecondary)" }}
                    >
                      {item.label}
                    </p>
                    <p className="mt-2 text-3xl font-semibold tracking-tight">
                      {item.value}
                    </p>
                    <p
                      className="mt-1 text-sm leading-6"
                      style={{ color: "var(--textSecondary)" }}
                    >
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={360} variant="up">
              <div className="mt-10 space-y-4">
                {proofPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0"
                      style={{ color: "var(--success)" }}
                    />
                    <p
                      className="text-base leading-7"
                      style={{ color: "var(--textSecondary)" }}
                    >
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal variant="left" className="relative lg:pl-6">
            <div
              className="absolute -left-4 top-14 hidden h-32 w-32 rounded-full blur-3xl lg:block"
              style={{ backgroundColor: "var(--accentStrong)" }}
            />
            <div
              className="absolute right-6 top-0 hidden h-40 w-40 rounded-full blur-3xl lg:block"
              style={{ backgroundColor: "var(--accentSoft)" }}
            />

            <PhoneFrame
              badge="Resident App"
              title="Everything your community needs"
              subtitle="Approvals, dues, and support from one clean home screen."
              footerLabel="Today: 6 guest approvals · 2 notices · 1 service update"
              className="animate-float"
            >
              <div
                className="rounded-3xl p-4"
                style={{ backgroundColor: "var(--surfaceMuted)" }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-[0.22em]"
                      style={{ color: "var(--secondary)" }}
                    >
                      Guest request
                    </p>
                    <p className="mt-2 text-base font-semibold">
                      Riya Sharma at Gate 2
                    </p>
                  </div>
                  <div
                    className="rounded-full px-3 py-1 text-xs font-semibold"
                    style={{
                      backgroundColor: "var(--accentStrong)",
                      color: "var(--success)",
                    }}
                  >
                    Waiting
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <div
                    className="flex-1 rounded-2xl px-3 py-2 text-center text-sm font-semibold"
                    style={{
                      backgroundColor: "var(--primary)",
                      color: "var(--textOnPrimary)",
                    }}
                  >
                    Approve
                  </div>
                  <div
                    className="flex-1 rounded-2xl px-3 py-2 text-center text-sm font-semibold"
                    style={{
                      backgroundColor: "var(--surface)",
                      color: "var(--textPrimary)",
                    }}
                  >
                    Ask Later
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div
                  className="rounded-3xl p-4"
                  style={{ backgroundColor: "var(--surfaceMuted)" }}
                >
                  <div
                    className="mb-3 flex items-center gap-2 text-sm font-medium"
                    style={{ color: "var(--textSecondary)" }}
                  >
                    <WalletCards size={16} />
                    Due this week
                  </div>
                  <p className="text-2xl font-semibold tracking-tight">
                    ₹4,850
                  </p>
                  <p
                    className="mt-1 text-sm"
                    style={{ color: "var(--textSecondary)" }}
                  >
                    Tap once to pay
                  </p>
                </div>
                <div
                  className="rounded-3xl p-4"
                  style={{ backgroundColor: "var(--surfaceMuted)" }}
                >
                  <div
                    className="mb-3 flex items-center gap-2 text-sm font-medium"
                    style={{ color: "var(--textSecondary)" }}
                  >
                    <ShieldCheck size={16} />
                    Staff on duty
                  </div>
                  <p className="text-2xl font-semibold tracking-tight">12</p>
                  <p
                    className="mt-1 text-sm"
                    style={{ color: "var(--textSecondary)" }}
                  >
                    Shift starts 7:00 AM
                  </p>
                </div>
              </div>
            </PhoneFrame>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// import {
//   ArrowRight,
//   BellRing,
//   CheckCircle2,
//   CreditCard,
//   Play,
//   ShieldCheck,
//   Sparkles,
//   Ticket,
//   UsersRound
// } from 'lucide-react';
// import { Reveal } from '@/components/ui/reveal';
// import { Button } from '@/components/ui/button';
// import { PhoneFrame } from '@/components/ui/phone-frame';

// const proofPoints = [
//   'Visitors get approved without a flurry of phone calls.',
//   'Residents always know where bills, notices, and support live.',
//   'Admins and security teams work from the same source of truth.'
// ];

// const statCards = [
//   { label: 'Visitor response time', value: '11 sec', note: 'Median approval across active properties' },
//   { label: 'Support closure rate', value: '93%', note: 'Resolved without repeat follow-up' },
//   { label: 'Collection visibility', value: '1 view', note: 'Dues, receipts, and reminders in one ledger' }
// ];

// export function HeroSection() {
//   return (
//     <section id="top" className="relative px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-36">
//       <div className="mx-auto max-w-7xl">
//         <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
//           <div className="max-w-2xl">
//             <Reveal variant="down">
//               <div className="eyebrow-pill text-sm font-semibold">
//                 <ShieldCheck size={16} />
//                 Designed for calm, everyday operations
//               </div>
//             </Reveal>

//             <Reveal delay={80} variant="up">
//               <h1 className="mt-7 font-display text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-[4.6rem] lg:leading-[1.02]">
//                 A cleaner way to run security, support, and community life.
//               </h1>
//             </Reveal>

//             <Reveal delay={160} variant="up">
//               <p className="mt-6 max-w-xl text-lg leading-8 sm:text-xl" style={{ color: 'var(--textSecondary)' }}>
//                 MyGateBell gives residents, admins, and guards a shared operating layer that feels organised from the first screen instead of stitched together over time.
//               </p>
//             </Reveal>

//             <Reveal delay={220} variant="up">
//               <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//                 <Button href="#cta" className="w-full sm:w-auto">
//                   <span className="mr-2">Book Demo</span>
//                   <ArrowRight size={16} />
//                 </Button>
//                 <Button href="#showcase" variant="secondary" className="w-full sm:w-auto">
//                   <span className="mr-2">Download App</span>
//                   <Play size={16} />
//                 </Button>
//               </div>
//             </Reveal>

//             <Reveal delay={280} variant="up">
//               <div className="mt-10 grid gap-3 sm:grid-cols-3">
//                 {statCards.map((item) => (
//                   <div key={item.label} className="rounded-[1.6rem] border px-5 py-4" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', boxShadow: 'var(--shadowInset)' }}>
//                     <p className="text-sm font-medium" style={{ color: 'var(--textSecondary)' }}>
//                       {item.label}
//                     </p>
//                     <p className="mt-2 text-3xl font-semibold tracking-tight">{item.value}</p>
//                     <p className="mt-1 text-sm leading-6" style={{ color: 'var(--textSecondary)' }}>
//                       {item.note}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </Reveal>

//             <Reveal delay={360} variant="up">
//               <div className="mt-10 space-y-4">
//                 {proofPoints.map((point) => (
//                   <div key={point} className="flex items-start gap-3">
//                     <CheckCircle2 size={18} className="mt-1 shrink-0" style={{ color: 'var(--success)' }} />
//                     <p className="text-base leading-7" style={{ color: 'var(--textSecondary)' }}>
//                       {point}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </Reveal>
//           </div>

//           <Reveal variant="left" className="relative lg:pl-6">
//             <div className="absolute -left-4 top-14 hidden h-32 w-32 rounded-full blur-3xl lg:block" style={{ backgroundColor: 'var(--accentStrong)' }} />
//             <div className="absolute right-6 top-0 hidden h-40 w-40 rounded-full blur-3xl lg:block" style={{ backgroundColor: 'var(--accentSoft)' }} />

//             <div className="relative rounded-[2rem] border p-4 sm:p-5" style={{ backgroundColor: 'var(--surfaceElevated)', borderColor: 'var(--border)', boxShadow: 'var(--shadowStrong)' }}>
//               <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
//                 {/* <div className="rounded-[1.7rem] border p-5 subtle-mask" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
//                   <div className="flex items-start justify-between gap-4">
//                     <div>
//                       <p className="text-xs font-semibold uppercase tracking-[0.24em]" style={{ color: 'var(--secondary)' }}>
//                         Operations board
//                       </p>
//                       <h3 className="mt-2 text-2xl font-semibold tracking-tight">Morning overview</h3>
//                     </div>
//                     <div className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]" style={{ backgroundColor: 'var(--accentSoft)', color: 'var(--primary)' }}>
//                       Live sync
//                     </div>
//                   </div>

//                   <div className="mt-6 grid gap-3 sm:grid-cols-3">
//                     {[
//                       { icon: UsersRound, label: 'Guest queue', value: '14' },
//                       { icon: Ticket, label: 'Open tickets', value: '08' },
//                       { icon: CreditCard, label: 'Today’s receipts', value: '₹1.9L' }
//                     ].map(({ icon: Icon, label, value }) => (
//                       <div key={label} className="rounded-[1.3rem] border px-4 py-4" style={{ backgroundColor: 'var(--surfaceMuted)', borderColor: 'var(--border)' }}>
//                         <div className="inline-flex rounded-xl p-2" style={{ backgroundColor: 'var(--surface)', color: 'var(--primary)' }}>
//                           <Icon size={16} />
//                         </div>
//                         <p className="mt-4 text-sm font-medium" style={{ color: 'var(--textSecondary)' }}>
//                           {label}
//                         </p>
//                         <p className="mt-1 text-2xl font-semibold tracking-tight">{value}</p>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="mt-5 grid gap-3">
//                     {[
//                       { label: 'Gate 2 visitor approvals', detail: 'All approvals cleared within the last 12 minutes', tone: 'Smooth' },
//                       { label: 'Billing reminders', detail: 'Auto-reminders sent to overdue residents at 10:00 AM', tone: 'Scheduled' },
//                       { label: 'Lift service complaint', detail: 'Assigned to maintenance with resident updates enabled', tone: 'In progress' }
//                     ].map((item, index) => (
//                       <div key={item.label} className="animate-shimmer rounded-[1.25rem] border px-4 py-4" style={{ backgroundColor: index === 1 ? 'var(--surfaceMuted)' : 'var(--surface)', borderColor: 'var(--border)' }}>
//                         <div className="flex items-center justify-between gap-4">
//                           <div>
//                             <p className="text-sm font-semibold">{item.label}</p>
//                             <p className="mt-1 text-sm leading-6" style={{ color: 'var(--textSecondary)' }}>
//                               {item.detail}
//                             </p>
//                           </div>
//                           <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: 'var(--accentStrong)', color: 'var(--success)' }}>
//                             {item.tone}
//                           </span>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div> */}

//                 <div className="relative flex items-center justify-center py-3 lg:py-8">
//                   <div className="absolute left-0 top-10 hidden rounded-[1.4rem] border px-4 py-3 lg:block animate-drift-x" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', boxShadow: 'var(--shadowSoft)' }}>
//                     <div className="flex items-center gap-3">
//                       <div className="rounded-xl p-2" style={{ backgroundColor: 'var(--accentSoft)', color: 'var(--primary)' }}>
//                         <BellRing size={16} />
//                       </div>
//                       <div>
//                         <p className="text-sm font-semibold">Notice delivered</p>
//                         <p className="text-xs" style={{ color: 'var(--textSecondary)' }}>Water shutdown • Block C</p>
//                       </div>
//                     </div>
//                   </div>

//                   <PhoneFrame
//                     badge="Resident app"
//                     title="One clear home screen"
//                     subtitle="Approvals, bills, and helpdesk updates stay within easy reach."
//                     footerLabel="Today: 2 visitor requests · 1 payment reminder · 1 ticket update"
//                     className="animate-drift-y"
//                   >
//                     <div className="rounded-[1.4rem] border p-4" style={{ backgroundColor: 'var(--surfaceMuted)', borderColor: 'var(--border)' }}>
//                       <div className="flex items-center justify-between gap-3">
//                         <div>
//                           <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: 'var(--secondary)' }}>
//                             Visitor request
//                           </p>
//                           <p className="mt-2 text-base font-semibold">Delivery for Tower A, 504</p>
//                         </div>
//                         <div className="rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: 'var(--accentStrong)', color: 'var(--success)' }}>
//                           Waiting
//                         </div>
//                       </div>
//                       <div className="mt-4 grid grid-cols-2 gap-3">
//                         <div className="rounded-2xl px-4 py-3 text-center text-sm font-semibold" style={{ backgroundColor: 'var(--primary)', color: 'var(--textOnPrimary)' }}>
//                           Approve
//                         </div>
//                         <div className="rounded-2xl px-4 py-3 text-center text-sm font-semibold" style={{ backgroundColor: 'var(--surface)', color: 'var(--textPrimary)' }}>
//                           Ask guard to wait
//                         </div>
//                       </div>
//                     </div>
//                     <div className="grid grid-cols-2 gap-3">
//                       <div className="rounded-[1.3rem] border px-4 py-4" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
//                         <p className="text-sm font-medium" style={{ color: 'var(--textSecondary)' }}>Due this week</p>
//                         <p className="mt-2 text-2xl font-semibold tracking-tight">₹4,850</p>
//                         <p className="mt-1 text-sm" style={{ color: 'var(--textSecondary)' }}>Auto-pay ready</p>
//                       </div>
//                       <div className="rounded-[1.3rem] border px-4 py-4" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
//                         <p className="text-sm font-medium" style={{ color: 'var(--textSecondary)' }}>Open requests</p>
//                         <p className="mt-2 text-2xl font-semibold tracking-tight">03</p>
//                         <p className="mt-1 text-sm" style={{ color: 'var(--textSecondary)' }}>All tracked in-app</p>
//                       </div>
//                     </div>
//                   </PhoneFrame>

//                   <div className="absolute bottom-4 right-0 hidden rounded-[1.4rem] border px-4 py-3 lg:block animate-drift-x" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', boxShadow: 'var(--shadowSoft)' }}>
//                     <div className="flex items-center gap-3">
//                       <div className="rounded-xl p-2" style={{ backgroundColor: 'var(--accentSoft)', color: 'var(--primary)' }}>
//                         <Sparkles size={16} />
//                       </div>
//                       <div>
//                         <p className="text-sm font-semibold">Quietly efficient</p>
//                         <p className="text-xs" style={{ color: 'var(--textSecondary)' }}>Less calling up towers. More clarity at the gate.</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </div>
//     </section>
//   );
// }
