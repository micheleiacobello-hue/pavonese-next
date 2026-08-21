import { Shirt } from './icons';
// Placeholder media coerente col design system finché non ci sono foto reali.
const variants = ['ph--a', 'ph--b', 'ph--c', 'ph--d'] as const;
export function Placeholder({ seed = 0, label, className = '' }: { seed?: number; label?: string; className?: string }) {
  const v = variants[Math.abs(seed) % variants.length];
  return (
    <div className={`ph ${v} ${className}`} aria-hidden>
      <span className="opacity-50 text-white text-xs" style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, letterSpacing: '.1em' }}>{label}</span>
    </div>
  );
}
export function Silhouette() {
  return <div className="absolute inset-0 grid place-items-end justify-items-center"><Shirt className="w-[78%] opacity-90 drop-shadow-lg" /></div>;
}
