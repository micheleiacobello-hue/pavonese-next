import { Crest, OpponentCrest } from '@/components/ui/Crest';
import { nextMatch } from '@/data/staff';
import { Reveal } from '@/components/ui/Reveal';

export function NextMatch() {
  const m = nextMatch;
  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-card text-white shadow-card" style={{ background: 'linear-gradient(120deg,#15161A,#202028)' }}>
        <div className="grid items-center gap-4 p-[26px] sm:grid-cols-[1fr_auto_1fr] sm:px-[26px] sm:py-[30px]">
          <Team name={m.home} />
          <div className="text-center">
            <div className="text-[.74rem] uppercase tracking-[.14em] text-oro-300" style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700 }}>{m.day}</div>
            <div className="display text-[2rem] leading-none">{m.time}</div>
            <div className="text-[.78rem]" style={{ color: '#bcd' }}>{m.venue}</div>
          </div>
          <Team name={m.away} opponent />
        </div>
        <div className="flex flex-wrap justify-center gap-2.5 px-[26px] pb-[26px]">
          <Badge>{m.competition}</Badge><Badge>Ingresso libero</Badge>
        </div>
      </div>
    </Reveal>
  );
}
function Team({ name, opponent = false }: { name: string; opponent?: boolean }) {
  return (<div className="flex flex-col items-center gap-2.5 text-center">{opponent ? <OpponentCrest width={56} /> : <Crest width={60} />}<b style={{ fontFamily: 'var(--font-archivo)', fontWeight: 800 }}>{name}</b></div>);
}
function Badge({ children }: { children: React.ReactNode }) {
  return (<span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[.72rem] uppercase tracking-wide" style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700 }}>{children}</span>);
}
