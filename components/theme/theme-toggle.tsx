'use client';

import { MoonStar, SunMedium } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    setMounted(true);
    setIsDark(root.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextDark = !root.classList.contains('dark');
    root.classList.toggle('dark', nextDark);
    window.localStorage.setItem('mygatebell-theme', nextDark ? 'dark' : 'light');
    setIsDark(nextDark);
  };

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={toggleTheme}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border transition duration-300 hover:-translate-y-0.5"
      style={{
        backgroundColor: 'var(--surface)',
        borderColor: 'var(--border)',
        color: 'var(--textPrimary)',
        boxShadow: 'var(--shadowSoft)'
      }}
    >
      {mounted && isDark ? <SunMedium size={18} /> : <MoonStar size={18} />}
    </button>
  );
}
