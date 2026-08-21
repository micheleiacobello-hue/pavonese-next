import { client, sanityEnabled } from './client';
import { news as staticNews, getArticle as staticGetArticle, getRelated as staticGetRelated } from '@/data/news';
import type { NewsArticle } from '@/lib/types';

/**
 * Layer dati: legge da Sanity se configurato, altrimenti usa i dati statici.
 * Così il sito funziona sempre, anche prima di collegare il pannello.
 */

// ---- NEWS ----
const NEWS_FIELDS = `"slug": slug.current, title, excerpt, category, "date": date, "cover": cover.asset->url`;

export async function getNews(): Promise<NewsArticle[]> {
  if (!sanityEnabled || !client) return staticNews;
  try {
    const res = await client.fetch(`*[_type=="newsArticle"]|order(date desc){ ${NEWS_FIELDS} }`);
    return res?.length ? res : staticNews;
  } catch { return staticNews; }
}

export async function getArticle(slug: string): Promise<(NewsArticle & { body?: unknown }) | undefined> {
  if (!sanityEnabled || !client) return staticGetArticle(slug);
  try {
    const res = await client.fetch(
      `*[_type=="newsArticle" && slug.current==$slug][0]{ ${NEWS_FIELDS}, body }`, { slug });
    return res ?? staticGetArticle(slug);
  } catch { return staticGetArticle(slug); }
}

export async function getRelated(article: NewsArticle): Promise<NewsArticle[]> {
  if (!sanityEnabled || !client) return staticGetRelated(article);
  try {
    const res = await client.fetch(
      `*[_type=="newsArticle" && category==$cat && slug.current!=$slug]|order(date desc)[0...3]{ ${NEWS_FIELDS} }`,
      { cat: article.category, slug: article.slug });
    return res ?? [];
  } catch { return []; }
}

// ---- GALLERY ----
export interface Album { slug: string; title: string; date?: string; cover?: string; photos: { url: string; alt?: string }[]; }

export async function getAlbums(): Promise<Album[]> {
  if (!sanityEnabled || !client) return [];
  try {
    return await client.fetch(
      `*[_type=="galleryAlbum"]|order(date desc){ "slug": slug.current, title, date, "cover": cover.asset->url, "photos": photos[]{ "url": asset->url, alt } }`);
  } catch { return []; }
}
