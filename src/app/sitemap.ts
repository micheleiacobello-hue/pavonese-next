import type { MetadataRoute } from 'next';
import { site } from '@/data/site';
import { news } from '@/data/news';
import { youthTeams } from '@/data/youth';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const routes = ['', '/news', '/societa', '/societa/organigramma', '/prima-squadra', '/settore-giovanile', '/femminile', '/sponsor', '/contatti'];
  const staticPages = routes.map((r) => ({ url: `${base}${r}`, lastModified: new Date() }));
  const newsPages = news.map((n) => ({ url: `${base}/news/${n.slug}`, lastModified: new Date(n.date) }));
  const youthPages = youthTeams.map((t) => ({ url: `${base}/settore-giovanile/${t.slug}`, lastModified: new Date() }));
  return [...staticPages, ...newsPages, ...youthPages];
}
