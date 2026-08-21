import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { StaffCard } from '@/components/cards/StaffCard';
import { RosterFilter } from '@/components/sections/RosterFilter';
import { players, playerRoles } from '@/data/players';
import { technicalStaff } from '@/data/staff';

export const metadata: Metadata = { title: 'Prima Squadra', description: 'Staff tecnico e rosa dell’A.S.D. Calcio Pavonese.' };

export default function PrimaSquadraPage() {
  return (
    <>
      <PageHeader title="Prima Squadra" desc="Staff tecnico e rosa della stagione in corso." crumbs={[{ label: 'Home', href: '/' }, { label: 'Prima Squadra' }]} />
      <section className="section">
        <div className="wrap">
          <SectionTitle eyebrow="Area tecnica" title="Staff Tecnico" />
          <div className="grid grid-cols-2 gap-[22px] sm:grid-cols-3 lg:grid-cols-5">{technicalStaff.map((m) => <StaffCard key={m.name} member={m} />)}</div>
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
