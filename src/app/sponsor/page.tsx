import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { SponsorCard } from '@/components/cards/SponsorCard';
import { Reveal } from '@/components/ui/Reveal';
import { getSponsors } from '@/sanity/queries';
import type { Sponsor, SponsorTier } from '@/lib/types';

export const revalidate = 60;
export const metadata: Metadata = { title: 'Sponsor & Partner', description: 'Chi sostiene l’A.S.D. Calcio Pavonese. Diventa partner del club.' };

const tiers: { key: SponsorTier; label: string; cls: string; cols: string }[] = [
  { key: 'main', label: 'Main Sponsor', cls: 'tag-main', cols: 'grid-cols-1' },
  { key: 'gold', label: 'Gold Sponsor', cls: 'tag-gold', cols: 'sm:grid-cols-2 lg:grid-cols-3' },
  { key: 'tech', label: 'Sponsor Tecnici', cls: 'tag-tech', cols: 'sm:grid-cols-2 lg:grid-cols-3' },
  { key: 'partner', label: 'Partner', cls: 'tag-partner', cols: 'sm:grid-cols-2 lg:grid-cols-3' },
];

export default async function SponsorPage() {
  const all = await getSponsors();
  return (
    <>
      <PageHeader title="Sponsor & Partner" desc="Chi sostiene il club. Diventa partner." crumbs={[{ label: 'Home', href: '/' }, { label: 'Sponsor' }]} />
      <section className="section">
        <div className="wrap">
          {tiers.map((t) => {
            const list: Sponsor[] = all.filter((s) => s.tier === t.key);
            if (!list.length) return null;
            return (
              <div key={t.key} className="mb-12">
                <h3 className="mb-4 flex items-center gap-3 text-[1.2rem]" style={{ fontFamily: 'var(--font-archivo)', fontWeight: 800 }}>
                  <span className={`tag ${t.cls}`}>{t.label}</span>
                </h3>
                <div className={`grid gap-[22px] ${t.cols}`}>
                  {list.map((s, i) => <SponsorCard key={s.name + i} sponsor={s} index={i} big={t.key === 'main'} />)}
                </div>
              </div>
            );
          })}
          <Reveal>
            <div className="relative overflow-hidden rounded-card p-9 text-center text-white" style={{ background: 'linear-gradient(120deg,#15161A,#202028)' }}>
              <div className="text-[.74rem] uppercase tracking-[.14em] text-oro-300" style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700 }}>Vuoi essere dei nostri?</div>
              <h2 className="display my-3 text-[2rem]">Diventa Sponsor</h2>
              <Link href="/contatti" className="btn btn-primary">Contattaci</Link>
            </div>
          </Reveal>
        </div>
      </section>
      <style>{`
        .tag{font-family:var(--font-archivo);font-weight:800;font-size:.62rem;letter-spacing:.12em;text-transform:uppercase;padding:.3rem .6rem;border-radius:6px;color:#fff}
        .tag-main{background:var(--oro);color:#fff}
        .tag-gold{background:linear-gradient(135deg,#C9CCD1,#9AA0A8);color:#15161A}
        .tag-tech{background:var(--verde)}
        .tag-partner{background:var(--blu)}
      `}</style>
    </>
  );
}
