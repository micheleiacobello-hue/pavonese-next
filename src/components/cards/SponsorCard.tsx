import Image from 'next/image';
import type { Sponsor } from '@/lib/types';
import { ArrowRight } from '@/components/ui/icons';
import { Reveal } from '@/components/ui/Reveal';

const initials = (name: string) => name.split(' ').map((w) => w[0]).join('').slice(0, 3);
const bg = ['ph--a', 'ph--b', 'ph--c', 'ph--d'];

export function SponsorCard({ sponsor, index = 0, big = false }: { sponsor: Sponsor; index?: number; big?: boolean }) {
  return (
    <Reveal>
      <a href={sponsor.url || '#'} target="_blank" rel="noopener noreferrer"
        className="flex h-full flex-col items-start gap-3 rounded-card border border-[var(--bordo)] bg-white p-6 transition hover:-translate-y-1 hover:border-oro hover:shadow-card">
        {sponsor.logo ? (
          <div className="relative w-full rounded-[10px] bg-white" style={{ height: big ? 150 : 96 }}>
            <Image src={sponsor.logo} alt={sponsor.name} fill sizes="(max-width:1024px) 100vw, 33vw" className="object-contain p-2" />
          </div>
        ) : (
          <div className={`ph ${bg[index % bg.length]} grid w-full place-items-center rounded-[10px] text-white`} style={{ position: 'relative', height: big ? 150 : 96, fontFamily: 'var(--font-anton)', fontSize: big ? '2rem' : '1.5rem' }}>
            {initials(sponsor.name)}
          </div>
        )}
        <p className="flex-1 text-[.86rem] text-grigio">{sponsor.description}</p>
        <span className="inline-flex items-center gap-1.5 text-[.76rem] uppercase text-verde" style={{ fontFamily: 'var(--font-archivo)', fontWeight: 800 }}>Visita il sito <ArrowRight /></span>
      </a>
    </Reveal>
  );
}
