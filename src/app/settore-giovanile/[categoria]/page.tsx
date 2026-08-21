import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/ui/PageHeader';
import { Placeholder } from '@/components/ui/Placeholder';
import { Reveal } from '@/components/ui/Reveal';
import { youthTeams, getYouthTeam } from '@/data/youth';

export function generateStaticParams() {
  return youthTeams.map((t) => ({ categoria: t.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ categoria: string }> }): Promise<Metadata> {
  const { categoria } = await params;
  const t = getYouthTeam(categoria);
  return t ? { title: `${t.name} — Settore Giovanile`, description: `Categoria ${t.name}, annate ${t.ages}.` } : {};
}

export default async function CategoriaPage({ params }: { params: Promise<{ categoria: string }> }) {
  const { categoria } = await params;
  const t = getYouthTeam(categoria);
  if (!t) notFound();
  return (
    <>
      <PageHeader title={t.name} desc={`Categoria giovanile · Annate ${t.ages}`} crumbs={[{ label: 'Home', href: '/' }, { label: 'Settore Giovanile', href: '/settore-giovanile' }, { label: t.name }]} />
      <section className="section">
        <div className="wrap">
          <Reveal><div className="relative mb-9 aspect-[16/7] overflow-hidden rounded-card"><Placeholder label="Foto squadra" /></div></Reveal>
          <div className="grid items-start gap-6 lg:grid-cols-2">
            <Reveal><div className="info-block">
              <h3 className="mb-2.5 text-[1.15rem]" style={{ fontFamily: 'var(--font-archivo)', fontWeight: 800 }}>Staff</h3>
              <Row k="Allenatore" v={t.coach} /><Row k="Vice allenatore" v="Da definire" /><Row k="Dirigente" v="Da definire" />
            </div></Reveal>
            <Reveal><div className="info-block">
              <h3 className="mb-2.5 text-[1.15rem]" style={{ fontFamily: 'var(--font-archivo)', fontWeight: 800 }}>Calendario <span className="badge-soon">Placeholder</span></h3>
              <Row k="Prossima gara" v="Da definire" /><Row k="Allenamenti" v="Mar / Gio 17:30" /><Row k="Campo" v="Stadio «Le Piume»" />
            </div></Reveal>
          </div>
          <Reveal><div className="info-block mt-6">
            <h3 className="mb-2.5 text-[1.15rem]" style={{ fontFamily: 'var(--font-archivo)', fontWeight: 800 }}>Informazioni</h3>
            <p className="text-grigio">Spazio per la presentazione della categoria, obiettivi stagionali, metodologia di allenamento e modalità di iscrizione. Contenuti gestibili da CMS.</p>
          </div></Reveal>
        </div>
      </section>
      <style>{`
        .info-block{background:#fff;border:1px solid var(--bordo);border-radius:14px;padding:24px;box-shadow:0 6px 20px -10px rgba(10,42,61,.35)}
        .badge-soon{font-family:var(--font-archivo);font-weight:700;font-size:.68rem;text-transform:uppercase;letter-spacing:.08em;color:var(--verde);background:rgba(224,31,31,.1);padding:.25rem .55rem;border-radius:5px}
      `}</style>
    </>
  );
}
function Row({ k, v }: { k: string; v: string }) {
  return (<div className="flex justify-between gap-3 border-b border-[var(--bordo)] py-3 text-[.9rem] last:border-0"><span>{k}</span><b style={{ fontFamily: 'var(--font-archivo)' }}>{v}</b></div>);
}
