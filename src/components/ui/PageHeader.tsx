import { Breadcrumb } from './Breadcrumb';
// Intestazione blu delle sottopagine, con breadcrumb integrato.
export function PageHeader({ title, desc, crumbs }:
  { title: string; desc?: string; crumbs: { label: string; href?: string }[] }) {
  return (
    <header className="relative overflow-hidden bg-blu text-white" style={{ padding: 'calc(var(--nav-h) + 40px) 0 46px' }}>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(100% 120% at 90% 0,rgba(224,31,31,.5),transparent 55%),linear-gradient(120deg,#0A0B0E,#15161A)' }} />
      <div className="wrap relative z-10">
        <Breadcrumb items={crumbs} />
        <h1 className="display mt-4 mb-2" style={{ fontSize: 'clamp(2.2rem,6vw,3.6rem)' }}>{title}</h1>
        {desc && <p className="max-w-[60ch]" style={{ color: '#cfe0e6' }}>{desc}</p>}
      </div>
    </header>
  );
}
