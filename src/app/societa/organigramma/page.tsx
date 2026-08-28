import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHeader } from '@/components/ui/PageHeader';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Silhouette } from '@/components/ui/Placeholder';
import { Reveal } from '@/components/ui/Reveal';
import { getStaff } from '@/sanity/queries';
import type { StaffMember } from '@/lib/types';

export const revalidate = 60;
export const metadata: Metadata = { title: 'Organigramma', description: 'La struttura dirigenziale del club.' };

function OrgCard({ m }: { m: StaffMember & { lead?: boolean } }) {
  const hasPhoto = m.photo && (m.photo.startsWith('/') || m.photo.startsWith('http'));
  return (
    <Reveal>
      <div className={`relative overflow-hidden rounded-card border border-[var(--bordo)] bg-white p-6 text-center shadow ${m.lead ? 'w-[270px]' : 'w-[230px]'}`}>
        <span className="absolute inset-x-0 top-0 h-1" style={{ background: 'linear-gradient(90deg,var(--verde),var(--oro))' }} />
        <div className={`relative mx-auto mb-3 ${m.lead ? 'w-[120px]' : 'w-[96px]'} aspect-square overflow-hidden rounded-full border-[3px] border-white shadow`} style={{ background: 'linear-gradient(150deg,#E01F1F,#15161A)' }}>
          {hasPhoto ? <Image src={m.photo!} alt={m.name} fill sizes="120px" className="object-cover" /> : <Silhouette />}
        </div>
        <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 800 }}>{m.name}</div>
        <div className="text-[.82rem] font-semibold text-verde">{m.role}</div>
      </div>
    </Reveal>
  );
}

export default async function OrganigrammaPage() {
  const all = (await getStaff('dirigenza')) as (StaffMember & { lead?: boolean })[];
  const leads = all.filter((m) => m.lead);
  const others = all.filter((m) => !m.lead);
  return (
    <>
      <PageHeader title="Organigramma" desc="La struttura dirigenziale del club." crumbs={[{ label: 'Home', href: '/' }, { label: 'Società', href: '/societa' }, { label: 'Organigramma' }]} />
      <section className="section">
        <div className="wrap">
          {leads.length > 0 && <>
            <SectionTitle eyebrow="Vertice societario" title="Presidenza" />
            <div className="mb-12 flex flex-wrap justify-center gap-[22px]">{leads.map((m, i) => <OrgCard key={m.name + i} m={m} />)}</div>
          </>}
          {others.length > 0 && <>
            <SectionTitle eyebrow="Dirigenza" title="Consiglio e area operativa" />
            <div className="flex flex-wrap justify-center gap-[22px]">{others.map((m, i) => <OrgCard key={m.name + i} m={m} />)}</div>
          </>}
        </div>
      </section>
    </>
  );
}
