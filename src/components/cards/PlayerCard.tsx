import type { Player } from '@/lib/types';
import { Silhouette } from '@/components/ui/Placeholder';
import { Reveal } from '@/components/ui/Reveal';

// Card giocatore — elemento-firma: numero di maglia gigante in filigrana.
export function PlayerCard({ player }: { player: Player }) {
  return (
    <Reveal>
      <article className="card group h-full">
        <div className="relative aspect-[3/3.5] overflow-hidden transition-colors" style={{ background: 'linear-gradient(160deg,#202028,#15161A)' }}>
          <span className="absolute left-3 top-3 z-10 rounded bg-oro px-2 py-1 text-[.6rem] uppercase tracking-wide text-notte" style={{ fontFamily: 'var(--font-archivo)', fontWeight: 800 }}>{player.position}</span>
          <span className="display absolute -bottom-3.5 -right-1.5 z-[1] leading-none text-white/10" style={{ fontSize: '7rem' }}>{player.number}</span>
          <Silhouette />
        </div>
        <div className="p-4 pb-[18px]">
          <h3 className="leading-tight text-[1.04rem]" style={{ fontFamily: 'var(--font-archivo)', fontWeight: 800 }}>{player.name}</h3>
          <div className="mt-1.5 flex items-baseline justify-between">
            <span className="text-[.78rem] text-grigio">Cl. {player.birthYear}</span>
            <span className="display text-verde text-[1.3rem]">{player.number}</span>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
