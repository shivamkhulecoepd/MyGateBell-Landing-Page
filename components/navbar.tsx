'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <nav
        className="mx-auto max-w-7xl rounded-full border transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'var(--backdrop)' : 'var(--overlay)',
          borderColor: 'var(--border)',
          boxShadow: scrolled ? 'var(--shadowSoft)' : 'var(--shadowInset)',
          backdropFilter: 'blur(20px)'
        }}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-3">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-[1.1rem]"
              style={{ backgroundColor: 'var(--primary)', color: 'var(--textOnPrimary)' }}
            >
              <span className="text-base font-bold tracking-tight">H</span>
            </div>
            <div>
              <p className="text-base font-semibold tracking-tight">MyGateBell</p>
              <p className="text-sm" style={{ color: 'var(--textSecondary)' }}>
                Community operations
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium transition duration-300 hover:-translate-y-0.5"
                style={{ color: 'var(--textSecondary)' }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <div
              className="rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em]"
              style={{
                borderColor: 'var(--border)',
                backgroundColor: 'var(--surface)',
                color: 'var(--secondary)'
              }}
            >
              Used in 4,500+ communities
            </div>
            <ThemeToggle />
            <Button href="#cta">Get Started</Button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label="Toggle navigation menu"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border transition duration-300"
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--border)',
                color: 'var(--textPrimary)',
                boxShadow: 'var(--shadowInset)'
              }}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="border-t px-4 pb-5 pt-4 md:hidden" style={{ borderColor: 'var(--border)' }}>
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium"
                  style={{ color: 'var(--textSecondary)' }}
                >
                  {item.label}
                </a>
              ))}
              <Button href="#cta" className="mt-2 w-full">
                Get Started
              </Button>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
