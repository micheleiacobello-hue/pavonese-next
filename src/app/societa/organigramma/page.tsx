import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Silhouette } from '@/components/ui/Placeholder';
import { Reveal } from '@/components/ui/Reveal';
import { organigramma } from '@/data/organigramma';
import type { OrgMember } from '@/lib/types';

export const metadata: Metadata = { title: 'Organigramma', description: 'La struttura dirigenziale dell’A.S.D. Calcio Pavonese.' };

function OrgCard({ m }: { m: OrgMember }) {
  return (
    <Reveal>
      <div className={`relative overflow-hidden rounded-card border border-[var(--bordo)] bg-white p-6 text-center shadow ${m.lead ? 'w-[270px]' : 'w-[230px]'}`}>
        <span className="absolute inset-x-0 top-0 h-1" style={{ background: 'linear-gradient(90deg,var(--verde),var(--oro))' }} />
        <div className={`relative mx-auto mb-3 ${m.lead ? 'w-[120px]' : 'w-[96px]'} aspect-square overflow-hidden rounded-full border-[3px] border-white shadow`} style={{ background: 'linear-gradient(150deg,#E01F1F,#15161A)' }}><Silhouette /></div>
        <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 800 }}>{m.name}</div>
        <div className="text-[.82rem] font-semibold text-verde">{m.role}</div>
      </div>
    </Reveal>
  );
}

export default function OrganigrammaPage() {
  const { vertice, operativo, consiglio } = organigramma;
  return (
    <>
      <PageHeader title="Organigramma" desc="La struttura dirigenziale del club." crumbs={[{ label: 'Home', href: '/' }, { label: 'Società', href: '/societa' }, { label: 'Organigramma' }]} />
      <section className="section">
        <div className="wrap">
          <SectionTitle eyebrow="Vertice societario" title="Presidenza" />
          <div className="mb-8 flex flex-wrap justify-center gap-[22px]">{vertice.map((m) => <OrgCard key={m.name} m={m} />)}</div>
          <SectionTitle eyebrow="Area operativa" title="Direzione e segreteria" />
          <div className="mb-12 flex flex-wrap justify-center gap-[22px]">{operativo.map((m) => <OrgCard key={m.name} m={m} />)}</div>
          <SectionTitle eyebrow="Consiglio direttivo" title="Consiglieri" />
          <div className="flex flex-wrap justify-center gap-[22px]">{consiglio.map((m) => <OrgCard key={m.name} m={m} />)}</div>
        </div>
      </section>
    </>
  );
}
