'use client';

import { useEffect, useRef, useState } from 'react';

type RevealVariant = 'up' | 'down' | 'left' | 'right' | 'scale';

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: RevealVariant;
  threshold?: number;
};

export function Reveal({
  children,
  delay = 0,
  className = '',
  variant = 'up',
  threshold = 0.2
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      data-reveal={visible ? 'visible' : 'hidden'}
      data-reveal-variant={variant}
      className={className}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
