import Link from 'next/link';

const variants = {
  primary: {
    backgroundColor: 'var(--primary)',
    borderColor: 'var(--primary)',
    color: 'var(--textOnPrimary)',
    boxShadow: 'var(--shadowSoft)'
  },
  secondary: {
    backgroundColor: 'var(--surface)',
    borderColor: 'var(--border)',
    color: 'var(--textPrimary)',
    boxShadow: 'var(--shadowSoft)'
  },
  ghost: {
    backgroundColor: 'transparent',
    borderColor: 'var(--border)',
    color: 'var(--textPrimary)',
    boxShadow: 'none'
  }
} as const;

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
};

export function Button({ href, children, variant = 'primary', className = '' }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold tracking-tight transition duration-300 hover:-translate-y-0.5 ${className}`}
      style={variants[variant]}
    >
      {children}
    </Link>
  );
}
