import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { NewsFilter } from '@/components/sections/NewsFilter';
import { newsCategories } from '@/data/news';
import { getNews } from '@/sanity/queries';

export const revalidate = 60;
export const metadata: Metadata = { title: 'News', description: 'Tutte le notizie ufficiali dell’A.S.D. Calcio Pavonese.' };

export default async function NewsPage() {
  const articles = await getNews();
  return (
    <>
      <PageHeader title="News" desc="Tutte le notizie ufficiali del club." crumbs={[{ label: 'Home', href: '/' }, { label: 'News' }]} />
      <section className="section"><div className="wrap"><NewsFilter articles={articles} categories={newsCategories} /></div></section>
    </>
  );
}
