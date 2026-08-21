import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Tile } from '@/components/sections/Tile';
import { Placeholder } from '@/components/ui/Placeholder';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight } from '@/components/ui/icons';

export const metadata: Metadata = { title: 'Società', description: 'Identità, valori e governance dell’A.S.D. Calcio Pavonese.' };
const stats = [['Rossonero', 'Colori sociali'], ['12', 'Squadre'], ['350', 'Tesserati'], ['7', 'Cat. giovanili']];

export default function SocietaPage() {
  return (
    <>
      <PageHeader title="La Società" desc="Identità, valori e governance dell’A.S.D. Calcio Pavonese." crumbs={[{ label: 'Home', href: '/' }, { label: 'Società' }]} />
      <section className="section">
        <div className="wrap grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">La nostra identità</span>
            <h2 className="h-sec my-3.5">Una storia rossonera sul territorio</h2>
            <p className="lead">La Calcio Pavonese è molto più di una squadra: è un punto di riferimento sportivo e sociale per la comunità. Promuove i valori dello sport, dell&apos;inclusione e della crescita dei giovani.</p>
            <p className="lead mt-3.5">Oggi il club conta squadre maschili, femminili e un ampio settore giovanile, con un progetto tecnico solido e una visione di lungo periodo.</p>
            <Link href="/societa/organigramma" className="btn btn-solid mt-6">Vai all&apos;organigramma <ArrowRight /></Link>
          </Reveal>
          <Reveal><div className="relative aspect-[4/3] overflow-hidden rounded-card"><Image src="/img/foto/festa.jpg" alt="La squadra festeggia la promozione" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" /></div></Reveal>
        </div>
      </section>
      <section className="section bg-blu text-white">
        <div className="wrap grid grid-cols-2 gap-[18px] lg:grid-cols-4">
          {stats.map(([n, l]) => (
            <Reveal key={l} className="text-center">
              <div className="display text-oro" style={{ fontSize: 'clamp(2rem,5vw,3rem)' }}>{n}</div>
              <div className="text-[.74rem] uppercase tracking-[.1em]" style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, color: '#bcd' }}>{l}</div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="wrap mx-auto max-w-[760px] text-center">
          <SectionTitle eyebrow="Approfondisci" title="Sottosezioni" center />
          <div className="grid gap-[22px] sm:grid-cols-2">
            <Tile title="Organigramma" desc="Presidenza, dirigenza e consiglio" href="/societa/organigramma" index={0} />
            <Tile title="Lo stadio «Le Piume»" desc="La nostra casa" href="/contatti" index={3} />
          </div>
        </div>
      </section>
    </>
  );
}
