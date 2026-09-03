import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { StaffCard } from '@/components/cards/StaffCard';
import { PlayerCard } from '@/components/cards/PlayerCard';
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
          <SectionTitle eyebrow="La rosa" title="Giocatori" desc="Divisi per reparto." />
          {playerRoles.map((role) => {
            const list = players.filter((p) => p.role === role);
            if (!list.length) return null;
            return (
              <div key={role} className="mb-12 last:mb-0">
                <h3 className="mb-5 flex items-center gap-3 text-[1.35rem]" style={{ fontFamily: 'var(--font-archivo)', fontWeight: 800 }}>
                  <span className="inline-block h-5 w-1.5 rounded bg-oro" />{role}
                </h3>
                <div className="grid grid-cols-2 gap-[22px] lg:grid-cols-4">
                  {list.map((p, i) => <PlayerCard key={p.name + i} player={p} />)}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
