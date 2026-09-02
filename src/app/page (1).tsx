import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';
import { Tile } from '@/components/sections/Tile';
import { NewsCard } from '@/components/cards/NewsCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight } from '@/components/ui/icons';
import { getNews } from '@/sanity/queries';
import { sponsors } from '@/data/sponsors';

// Widget Prossima Partita di Tuttocampo (auto-aggiornante). Stesso GUID della pagina Calendario.
const PROSSIMA = 'https://www.tuttocampo.it/WidgetV2/ProssimaPartita/60a1b16d-446f-471c-9d39-ca6936f823d7';

const areas = [
  { title: 'Prima Squadra', desc: 'Staff tecnico e rosa completa', href: '/prima-squadra' },
  { title: 'Settore Giovanile', desc: 'Dai Primi Calci agli Juniores', href: '/settore-giovanile' },
  { title: 'Squadra Femminile', desc: 'Il progetto in rosa', href: '/femminile' },
  { title: 'Società', desc: 'Storia e organigramma', href: '/societa' },
  { title: 'Sponsor & Partner', desc: 'Chi crede nel club', href: '/sponsor' },
  { title: 'Contatti', desc: 'Dove siamo e come scriverci', href: '/contatti' },
];
const stats = [['7', 'Cat. giovanili'], ['12', 'Squadre attive'], ['350', 'Tesserati'], ['1', 'Comunità']];

export const revalidate = 60;

export default async function HomePage() {
  const latest = (await getNews()).slice(0, 3);
  return (
    <>
      <Hero />

      <section className="section">
        <div className="wrap">
          <SectionTitle eyebrow="Prossimo impegno" title="La prossima partita" desc="Aggiornata in automatico dal calendario ufficiale." />
          <div className="mx-auto max-w-[500px] overflow-hidden rounded-card border border-[var(--bordo)] bg-white shadow-card">
            <iframe src={PROSSIMA} title="Prossima partita" height={350} scrolling="no" frameBorder={0} loading="lazy" style={{ width: '100%', border: 0, display: 'block' }} />
          </div>
          <div className="mt-6 text-center">
            <Link href="/calendario" className="btn btn-solid">Calendario & risultati <ArrowRight /></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#eef2f3' }}>
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <SectionTitle eyebrow="Aggiornamenti" title="Ultime news" />
            <Reveal><Link href="/news" className="btn btn-solid mb-9">Tutte le news <ArrowRight /></Link></Reveal>
          </div>
          <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((a, i) => <NewsCard key={a.slug} article={a} index={i} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionTitle eyebrow="Esplora il club" title="Tutte le aree del sito" />
          <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((a, i) => <Tile key={a.href} {...a} index={i} />)}
          </div>
        </div>
      </section>

      <section className="section bg-blu text-white">
        <div className="wrap grid grid-cols-2 gap-[18px] lg:grid-cols-4">
          {stats.map(([n, l]) => (
            <Reveal key={l} className="text-center">
              <div className="display text-oro" style={{ fontSize: 'clamp(2.2rem,5vw,3.2rem)', lineHeight: 1 }}>{n}</div>
              <div className="text-[.74rem] uppercase tracking-[.1em]" style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, color: '#bcd' }}>{l}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap mx-auto max-w-[760px] text-center">
          <SectionTitle eyebrow="Insieme a noi" title="I nostri Main & Gold Sponsor" center />
          <div className="grid grid-cols-2 items-center gap-[22px] sm:grid-cols-4">
            {sponsors.filter((s) => s.tier === 'main' || s.tier === 'gold').map((s, i) => (
              <Reveal key={s.name}>
                <div className={`ph ph--${['a', 'b', 'c', 'd'][i % 4]} grid place-items-center rounded-xl text-white`} style={{ position: 'relative', height: 80, fontFamily: 'var(--font-anton)' }}>
                  {s.name.split(' ').map((w) => w[0]).join('').slice(0, 3)}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal><Link href="/sponsor" className="btn btn-solid mt-9">Tutti gli sponsor <ArrowRight /></Link></Reveal>
        </div>
      </section>
    </>
  );
}
