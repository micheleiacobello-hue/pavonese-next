import Link from 'next/link';
import { ArrowRight } from '@/components/ui/icons';
import { Reveal } from '@/components/ui/Reveal';

const bg = ['ph--a', 'ph--b', 'ph--c', 'ph--d'];
// Tile-immagine per i collegamenti rapidi alle aree del sito.
export function Tile({ title, desc, href, index = 0 }: { title: string; desc: string; href: string; index?: number }) {
  return (
    <Reveal>
      <Link href={href} className="group relative flex min-h-[220px] items-end overflow-hidden rounded-card p-[22px] text-white">
        <div className={`ph ${bg[index % bg.length]} absolute inset-0 -z-10 transition-transform duration-500 group-hover:scale-105`} />
        <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(to top,rgba(6,22,32,.85),rgba(6,22,32,.15) 60%,transparent)' }} />
        <div className="absolute right-[18px] top-[18px] grid h-[38px] w-[38px] place-items-center rounded-full border border-white/20 bg-white/10 transition group-hover:-rotate-45 group-hover:bg-oro group-hover:text-notte"><ArrowRight /></div>
        <div><h3 className="display text-[1.5rem]">{title}</h3><p className="text-[.82rem]" style={{ color: '#cfe0e6' }}>{desc}</p></div>
      </Link>
    </Reveal>
  );
}
