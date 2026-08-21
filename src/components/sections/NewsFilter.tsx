'use client';
import { useMemo, useState } from 'react';
import type { NewsArticle, NewsCategory } from '@/lib/types';
import { NewsCard } from '@/components/cards/NewsCard';
import { Search } from '@/components/ui/icons';

// Ricerca testuale + filtro per categoria (client).
export function NewsFilter({ articles, categories }: { articles: NewsArticle[]; categories: NewsCategory[] }) {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState<'Tutte' | NewsCategory>('Tutte');
  const chips: ('Tutte' | NewsCategory)[] = ['Tutte', ...categories];

  const shown = useMemo(() =>
    articles.filter((a) =>
      (cat === 'Tutte' || a.category === cat) &&
      (a.title + ' ' + a.excerpt).toLowerCase().includes(q.toLowerCase())
    ), [articles, q, cat]);

  return (
    <>
      <div className="relative mb-6 max-w-md">
        <Search className="absolute left-3.5 top-1/2 w-[18px] h-[18px] -translate-y-1/2 text-grigio" />
        <input value={q} onChange={(e) => setQ(e.target.value)} type="search" placeholder="Cerca tra le news..." aria-label="Cerca news"
          className="w-full rounded-[10px] border-[1.5px] border-[var(--bordo)] bg-white py-3.5 pl-10 pr-4 focus:border-verde focus:outline-none" />
      </div>
      <div className="mb-8 flex flex-wrap gap-2">
        {chips.map((c) => <button key={c} onClick={() => setCat(c)} className={`chip ${cat === c ? 'chip-active' : ''}`}>{c}</button>)}
      </div>
      {shown.length ? (
        <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((a, i) => <NewsCard key={a.slug} article={a} index={i} />)}
        </div>
      ) : (
        <p className="py-16 text-center text-grigio">Nessun risultato. Prova a cambiare ricerca o categoria.</p>
      )}
      <style jsx>{`
        .chip{font-family:var(--font-archivo);font-weight:700;font-size:.78rem;text-transform:uppercase;letter-spacing:.04em;padding:.6rem 1rem;border-radius:30px;border:1.5px solid var(--bordo);background:#fff;color:var(--blu);transition:.2s}
        .chip:hover{border-color:var(--verde);color:var(--verde)}
        .chip-active{background:var(--blu);color:#fff;border-color:var(--blu)}
      `}</style>
    </>
  );
}
