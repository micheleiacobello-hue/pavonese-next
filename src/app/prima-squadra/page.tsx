import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { StaffCard } from '@/components/cards/StaffCard';
import { RosterFilter } from '@/components/sections/RosterFilter';
import { playerRoles } from '@/data/players';
import { getPlayers, getStaff } from '@/sanity/queries';

export const revalidate = 60;
export const metadata: Metadata = { title: 'Prima Squadra', description: 'Staff tecnico e rosa della Prima Squadra.' };

export default async function PrimaSquadraPage() {
  const [players, staff] = await Promise.all([getPlayers('prima'), getStaff('tecnico')]);
  return (
    <>
      <PageHeader title="Prima Squadra" desc="Staff tecnico e rosa della stagione in corso." crumbs={[{ label: 'Home', href: '/' }, { label: 'Prima Squadra' }]} />
      <section className="section">
        <div className="wrap">
          <SectionTitle eyebrow="Area tecnica" title="Staff Tecnico" />
          <div className="grid grid-cols-2 gap-[22px] sm:grid-cols-3 lg:grid-cols-5">{staff.map((m, i) => <StaffCard key={m.name + i} member={m} />)}</div>
        </div>
      </section>
      <section className="section" style={{ background: '#eef2f3' }}>
        <div className="wrap">
          <SectionTitle eyebrow="La rosa" title="Giocatori" desc="Filtra per reparto." />
          <RosterFilter players={players} roles={playerRoles} />
        </div>
      </section>
    </>
  );
}
