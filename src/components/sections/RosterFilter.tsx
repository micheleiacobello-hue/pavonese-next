'use client';
import { useState } from 'react';
import type { Player, PlayerRole } from '@/lib/types';
import { PlayerCard } from '@/components/cards/PlayerCard';

// Filtro rosa per reparto (client). Riceve i dati come prop dal Server Component.
export function RosterFilter({ players, roles }: { players: Player[]; roles: PlayerRole[] }) {
  const [active, setActive] = useState<'Tutti' | PlayerRole>('Tutti');
  const shown = active === 'Tutti' ? players : players.filter((p) => p.role === active);
  const chips: ('Tutti' | PlayerRole)[] = ['Tutti', ...roles];
  return (
    <>
      <div className="mb-7 flex flex-wrap gap-2">
        {chips.map((c) => (
          <button key={c} onClick={() => setActive(c)} className={`chip ${active === c ? 'chip-active' : ''}`}>{c}</button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-[22px] lg:grid-cols-4">
        {shown.map((p) => <PlayerCard key={p.number + p.name} player={p} />)}
      </div>
      <style jsx>{`
        .chip{font-family:var(--font-archivo);font-weight:700;font-size:.78rem;text-transform:uppercase;letter-spacing:.04em;padding:.6rem 1rem;border-radius:30px;border:1.5px solid var(--bordo);background:#fff;color:var(--blu);transition:.2s}
        .chip:hover{border-color:var(--verde);color:var(--verde)}
        .chip-active{background:var(--blu);color:#fff;border-color:var(--blu)}
      `}</style>
    </>
  );
}
