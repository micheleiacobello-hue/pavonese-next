import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight } from '@/components/ui/icons';
import { youthTeams } from '@/data/youth';

export const metadata: Metadata = { title: 'Settore Giovanile', description: 'Le squadre giovanili dell’A.S.D. Calcio Pavonese, dai Piccoli Amici agli Juniores.' };
const bg = ['ph--a', 'ph--b', 'ph--c', 'ph--d'];

export default function SettoreGiovanilePage() {
  return (
    <>
      <PageHeader title="Settore Giovanile" desc="Il cuore del club: crescita, divertimento e valori dai Piccoli Amici agli Juniores." crumbs={[{ label: 'Home', href: '/' }, { label: 'Settore Giovanile' }]} />
      <section className="section">
        <div className="wrap">
          <SectionTitle eyebrow="Le categorie" title="Tutte le squadre giovanili" desc="Seleziona una categoria per scoprire staff, calendario e informazioni." />
          <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
            {youthTeams.map((y, i) => (
              <Reveal key={y.slug}>
                <Link href={`/settore-giovanile/${y.slug}`} className="group relative flex min-h-[220px] items-end overflow-hidden rounded-card p-[22px] text-white">
                  <div className={`ph ${bg[i % bg.length]} absolute inset-0 -z-10 transition-transform duration-500 group-hover:scale-105`} />
                  <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(to top,rgba(6,22,32,.85),rgba(6,22,32,.15) 60%,transparent)' }} />
                  <div className="absolute right-[18px] top-[18px] grid h-[38px] w-[38px] place-items-center rounded-full border border-white/20 bg-white/10 transition group-hover:-rotate-45 group-hover:bg-oro group-hover:text-notte"><ArrowRight /></div>
                  <div><h3 className="display text-[1.5rem]">{y.name}</h3><p className="text-[.82rem]" style={{ color: '#cfe0e6' }}>Annate {y.ages} · Mister {y.coach}</p></div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
