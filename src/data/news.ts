import type { NewsArticle, NewsCategory } from '@/lib/types';

export const newsCategories: NewsCategory[] =
  ['Prima Squadra', 'Settore Giovanile', 'Femminile', 'Società', 'Mercato'];

export const news: NewsArticle[] = [
  { slug: 'sogno-promozione', category: 'Prima Squadra', date: '2026-06-15', cover: '/img/foto/festa.jpg',
    title: 'Un sogno diventato realtà: è promozione!',
    excerpt: 'Notte di festa per i rossoneri: la squadra alza il trofeo e conquista la promozione davanti ai propri tifosi.' },
  { slug: 'vittoria-derby', category: 'Prima Squadra', date: '2026-06-12', cover: '/img/foto/azione2.jpg',
    title: 'Derby conquistato: la Pavonese vince 2-1 in rimonta',
    excerpt: 'Una ripresa di carattere ribalta il risultato davanti a un pubblico delle grandi occasioni.' },
  { slug: 'nuovo-mister', category: 'Mercato', date: '2026-06-08', cover: '/img/foto/azione1.jpg',
    title: 'Ufficiale: Marco Bianchi è il nuovo allenatore',
    excerpt: 'Contratto biennale per il tecnico. «Qui c’è un progetto serio», le sue prime parole.' },
  { slug: 'femminile-promozione', category: 'Femminile', date: '2026-06-03', cover: '/img/news/femminile.jpg',
    title: 'La squadra femminile festeggia la promozione',
    excerpt: 'Stagione da incorniciare: le ragazze salgono di categoria con due giornate d’anticipo.' },
  { slug: 'open-day-giovanile', category: 'Settore Giovanile', date: '2026-05-28', cover: '/img/news/openday.jpg',
    title: 'Open Day del settore giovanile: porte aperte allo stadio',
    excerpt: 'Prove gratuite per tutte le categorie dai Primi Calci agli Allievi.' },
  { slug: 'rinnovo-sponsor', category: 'Società', date: '2026-05-20', cover: '/img/news/sponsor.jpg',
    title: 'Confermata la partnership con il Main Sponsor',
    excerpt: 'Prosegue per altre tre stagioni il legame con lo storico partner principale.' },
  { slug: 'memorial-piume', category: 'Prima Squadra', date: '2026-05-14', cover: '/img/foto/azione3.jpg',
    title: 'Torna il Memorial «Le Piume»: il programma completo',
    excerpt: 'Quattro squadre, due giorni di calcio e iniziative per la comunità.' },
];

export const getArticle = (slug: string) => news.find((n) => n.slug === slug);
export const getRelated = (a: NewsArticle, n = 3) =>
  news.filter((x) => x.slug !== a.slug && x.category === a.category).slice(0, n);
