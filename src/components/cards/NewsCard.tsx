import Image from 'next/image';
import Link from 'next/link';
import type { NewsArticle } from '@/lib/types';
import { Placeholder } from '@/components/ui/Placeholder';
import { ArrowRight } from '@/components/ui/icons';
import { Reveal } from '@/components/ui/Reveal';

const fmt = (iso: string) => new Date(iso).toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' });

export function NewsCard({ article, index = 0 }: { article: NewsArticle; index?: number }) {
  return (
    <Reveal>
      <Link href={`/news/${article.slug}`} className="card group flex h-full flex-col">
        <div className="relative aspect-[16/10] overflow-hidden">
          {article.cover && (article.cover.startsWith('/img/foto/') || article.cover.startsWith('http')) ? (
            <Image src={article.cover} alt={article.title} fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
          ) : (
            <Placeholder seed={index} label="Foto news" />
          )}
          <span className="absolute left-3 top-3 z-10 rounded-md bg-notte/80 px-2.5 py-1.5 text-[.64rem] uppercase tracking-wider text-white" style={{ fontFamily: 'var(--font-archivo)', fontWeight: 800 }}>{article.category}</span>
        </div>
        <div className="flex flex-1 flex-col gap-2.5 p-[18px] pb-[22px]">
          <span className="text-[.72rem] uppercase tracking-wide text-verde" style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700 }}>{fmt(article.date)}</span>
          <h3 className="text-[1.12rem] leading-tight" style={{ fontFamily: 'var(--font-archivo)', fontWeight: 800 }}>{article.title}</h3>
          <p className="text-[.92rem] text-grigio">{article.excerpt}</p>
          <span className="mt-auto inline-flex items-center gap-1.5 text-[.78rem] uppercase text-blu transition-all group-hover:gap-2.5 group-hover:text-verde" style={{ fontFamily: 'var(--font-archivo)', fontWeight: 800 }}>
            Leggi tutto <ArrowRight />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
