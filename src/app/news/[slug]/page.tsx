import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { PageHeader } from '@/components/ui/PageHeader';
import { NewsCard } from '@/components/cards/NewsCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Placeholder } from '@/components/ui/Placeholder';
import { getNews, getArticle, getRelated } from '@/sanity/queries';

// Rigenera la pagina ogni 60s: le news pubblicate dal pannello compaiono da sole.
export const revalidate = 60;

export async function generateStaticParams() {
  const news = await getNews();
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = await getArticle(slug);
  return a ? { title: a.title, description: a.excerpt } : {};
}

const fmt = (iso: string) => new Date(iso).toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' });

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = await getArticle(slug);
  if (!a) notFound();
  const related = await getRelated(a);
  const hasCover = a.cover && (a.cover.startsWith('/img/') || a.cover.startsWith('http'));

  return (
    <>
      <PageHeader title={a.title} crumbs={[{ label: 'Home', href: '/' }, { label: 'News', href: '/news' }, { label: a.category }]} />
      <section className="section">
        <div className="wrap">
          <article className="mx-auto max-w-[760px]">
            <span className="text-[.72rem] uppercase tracking-wide text-verde" style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700 }}>{fmt(a.date)} · {a.category}</span>
            <div className="relative my-6 aspect-[16/8] overflow-hidden rounded-card">
              {hasCover ? <Image src={a.cover!} alt={a.title} fill sizes="(max-width:768px) 100vw, 760px" className="object-cover" /> : <Placeholder label="Immagine articolo" />}
            </div>
            {a.excerpt && <p className="mb-5 text-[1.18rem] text-blu"><strong>{a.excerpt}</strong></p>}

            {a.body ? (
              <div className="article-body space-y-5 text-[1.06rem] text-[#33454d]">
                <PortableText value={a.body as never} />
              </div>
            ) : (
              <p className="text-[1.06rem] text-[#33454d]">Contenuto in aggiornamento.</p>
            )}
          </article>
        </div>
      </section>
      {related.length > 0 && (
        <section className="section" style={{ background: '#eef2f3' }}>
          <div className="wrap">
            <SectionTitle eyebrow="Continua a leggere" title={`Altre news ${a.category}`} />
            <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-3">{related.map((r, i) => <NewsCard key={r.slug} article={r} index={i} />)}</div>
          </div>
        </section>
      )}
    </>
  );
}
