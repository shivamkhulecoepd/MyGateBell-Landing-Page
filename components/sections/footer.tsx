import { Instagram, Linkedin, Twitter } from 'lucide-react';

const footerGroups = [
  {
    title: 'Product',
    links: ['Features', 'Solutions', 'Security', 'Pricing']
  },
  {
    title: 'Company',
    links: ['About', 'Customers', 'Careers', 'Contact']
  },
  {
    title: 'Resources',
    links: ['Help Center', 'Guides', 'Status', 'API']
  }
];

export function Footer() {
  return (
    <footer id="about" className="px-4 pb-12 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border px-8 py-10 sm:px-10" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', boxShadow: 'var(--shadowSoft)' }}>
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-[1.1rem]" style={{ backgroundColor: 'var(--primary)', color: 'var(--textOnPrimary)' }}>
                <span className="text-base font-bold tracking-tight">H</span>
              </div>
              <div>
                <p className="text-base font-semibold tracking-tight">MyGateBell</p>
                <p className="text-sm" style={{ color: 'var(--textSecondary)' }}>
                  Community operations
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7" style={{ color: 'var(--textSecondary)' }}>
              A cleaner way to run community security, resident communication, support, and billing without the clutter most systems accumulate over time.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#top"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border transition duration-300 hover:-translate-y-0.5"
                  style={{ backgroundColor: 'var(--surfaceMuted)', borderColor: 'var(--border)', color: 'var(--textPrimary)' }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: 'var(--secondary)' }}>
                  {group.title}
                </p>
                <div className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <a key={link} href="#top" className="block text-sm transition duration-300 hover:-translate-y-0.5" style={{ color: 'var(--textSecondary)' }}>
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-sm" style={{ borderColor: 'var(--border)', color: 'var(--textSecondary)' }}>
          © 2026 MyGateBell. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
