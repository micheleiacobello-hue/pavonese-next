import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHeader } from '@/components/ui/PageHeader';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { StaffCard } from '@/components/cards/StaffCard';
import { PlayerCard } from '@/components/cards/PlayerCard';
import { Placeholder } from '@/components/ui/Placeholder';
import { Reveal } from '@/components/ui/Reveal';
import { getPlayers, getStaff } from '@/sanity/queries';

export const revalidate = 60;
export const metadata: Metadata = { title: 'Squadra Femminile', description: 'Il progetto in rosa dell’A.S.D. Calcio Pavonese.' };

export default async function FemminilePage() {
  const [players, staff] = await Promise.all([getPlayers('femminile'), getStaff('femminile')]);
  return (
    <>
      <PageHeader title="Squadra Femminile" desc="Il progetto in rosa dell’A.S.D. Calcio Pavonese." crumbs={[{ label: 'Home', href: '/' }, { label: 'Femminile' }]} />
      <section className="section">
        <div className="wrap grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Calcio femminile</span>
            <h2 className="h-sec my-3.5">Stessa maglia, stessa passione</h2>
            <p className="lead">La squadra femminile rappresenta uno dei progetti più ambiziosi del club. Un gruppo giovane e competitivo che porta i colori rossoneri anche nel calcio femminile.</p>
          </Reveal>
          <Reveal><div className="relative aspect-[4/3] overflow-hidden rounded-card"><Placeholder seed={1} label="Foto squadra femminile" /></div></Reveal>
        </div>
      </section>
      <section className="section" style={{ background: '#eef2f3' }}>
        <div className="wrap">
          <SectionTitle eyebrow="Area tecnica" title="Staff" />
          <div className="mb-10 grid grid-cols-2 gap-[22px] sm:grid-cols-3">{staff.map((m, i) => <StaffCard key={m.name + i} member={m} />)}</div>
          <SectionTitle eyebrow="La rosa" title="Giocatrici" />
          <div className="grid grid-cols-2 gap-[22px] lg:grid-cols-4">{players.map((p, i) => <PlayerCard key={p.name + i} player={p} />)}</div>
        </div>
      </section>
    </>
  );
}
