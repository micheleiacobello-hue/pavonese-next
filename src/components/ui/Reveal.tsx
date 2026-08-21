'use client';
import { useEffect, useRef } from 'react';

// Aggiunge .in quando l’elemento entra nel viewport (rispetta reduced-motion via CSS).
export function Reveal({ children, className = '', as: Tag = 'div' }:
  { children: React.ReactNode; className?: string; as?: keyof React.JSX.IntrinsicElements }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('in'); io.disconnect(); }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    io.observe(el); return () => io.disconnect();
  }, []);
  // @ts-expect-error ref polimorfico su tag dinamico
  return <Tag ref={ref} className={`reveal ${className}`}>{children}</Tag>;
}
