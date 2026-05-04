import type { Metadata } from 'next';
import './globals.css';
import { darkColors, lightColors, type ThemeColors } from '@/theme/colors';
import { ThemeScript } from '@/components/theme/theme-script';

export const metadata: Metadata = {
  title: 'MyGateBell — Security and community, made simple',
  description:
    'A premium SaaS landing page for a mobile-first community management and security platform.'
};

const createThemeVariables = (selector: string, palette: ThemeColors) => {
  const variables = Object.entries(palette)
    .map(([key, value]) => `--${key}: ${value};`)
    .join(' ');

  return `${selector} { ${variables} }`;
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <style>{`
          ${createThemeVariables(':root', lightColors)}
          ${createThemeVariables('.dark', darkColors)}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
