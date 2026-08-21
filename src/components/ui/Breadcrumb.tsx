import Link from 'next/link';
export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm" style={{ fontFamily: 'var(--font-archivo)', color: 'var(--grigio)' }}>
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {it.href ? <Link href={it.href} className="text-verde hover:underline">{it.label}</Link> : <span>{it.label}</span>}
          {i < items.length - 1 && <span className="opacity-50">/</span>}
        </span>
      ))}
    </nav>
  );
}
