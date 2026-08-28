import { client, sanityEnabled } from './client';
import { news as staticNews, getArticle as staticGetArticle, getRelated as staticGetRelated } from '@/data/news';
import { players as staticPlayers } from '@/data/players';
import { technicalStaff as staticTech, nextMatch as staticNextMatch } from '@/data/staff';
import { womenPlayers as staticWomenPlayers, womenStaff as staticWomenStaff } from '@/data/women';
import { sponsors as staticSponsors } from '@/data/sponsors';
import { youthTeams as staticYouth, getYouthTeam as staticGetYouth } from '@/data/youth';
import { organigramma as staticOrg } from '@/data/organigramma';
import { site as staticSite } from '@/data/site';
import type { NewsArticle, Player, StaffMember, Sponsor, YouthTeam } from '@/lib/types';

/**
 * Layer dati: legge da Sanity se configurato, altrimenti usa i dati statici.
 * Ogni funzione ha un fallback, così il sito funziona sempre e — man mano
 * che il pannello viene riempito — i contenuti reali sostituiscono i demo.
 */

/* ===================== NEWS ===================== */
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
    const res = await client.fetch(`*[_type=="newsArticle" && slug.current==$slug][0]{ ${NEWS_FIELDS}, body }`, { slug });
    return res ?? staticGetArticle(slug);
  } catch { return staticGetArticle(slug); }
}
export async function getRelated(article: NewsArticle): Promise<NewsArticle[]> {
  if (!sanityEnabled || !client) return staticGetRelated(article);
  try {
    const res = await client.fetch(`*[_type=="newsArticle" && category==$cat && slug.current!=$slug]|order(date desc)[0...3]{ ${NEWS_FIELDS} }`, { cat: article.category, slug: article.slug });
    return res ?? [];
  } catch { return []; }
}

/* ===================== GALLERY ===================== */
export interface Album { slug: string; title: string; date?: string; cover?: string; photos: { url: string; alt?: string }[]; }
export async function getAlbums(): Promise<Album[]> {
  if (!sanityEnabled || !client) return [];
  try {
    return await client.fetch(`*[_type=="galleryAlbum"]|order(date desc){ "slug": slug.current, title, date, "cover": cover.asset->url, "photos": photos[]{ "url": asset->url, alt } }`);
  } catch { return []; }
}

/* ===================== ROSA / GIOCATORI ===================== */
export async function getPlayers(team: 'prima' | 'femminile' = 'prima'): Promise<Player[]> {
  const fallback = team === 'femminile' ? staticWomenPlayers : staticPlayers;
  if (!sanityEnabled || !client) return fallback;
  try {
    const res = await client.fetch(`*[_type=="player" && team==$team]|order(number asc){ number, name, role, position, birthYear, "photo": photo.asset->url }`, { team });
    return res?.length ? res : fallback;
  } catch { return fallback; }
}

/* ===================== STAFF / DIRIGENZA ===================== */
export async function getStaff(area: 'tecnico' | 'femminile' | 'dirigenza'): Promise<StaffMember[]> {
  let fallback: StaffMember[];
  if (area === 'femminile') fallback = staticWomenStaff;
  else if (area === 'dirigenza') fallback = [
    ...staticOrg.vertice.map((m) => ({ ...m, lead: true })),
    ...staticOrg.operativo.map((m) => ({ ...m, lead: false })),
    ...staticOrg.consiglio.map((m) => ({ ...m, lead: false })),
  ];
  else fallback = staticTech;
  if (!sanityEnabled || !client) return fallback;
  try {
    const res = await client.fetch(`*[_type=="staffMember" && area==$area]|order(order asc){ name, role, lead, "photo": photo.asset->url }`, { area });
    return res?.length ? res : fallback;
  } catch { return fallback; }
}

/* ===================== SPONSOR ===================== */
export async function getSponsors(): Promise<Sponsor[]> {
  if (!sanityEnabled || !client) return staticSponsors;
  try {
    const res = await client.fetch(`*[_type=="sponsor"]|order(order asc){ name, tier, url, description, "logo": logo.asset->url }`);
    return res?.length ? res : staticSponsors;
  } catch { return staticSponsors; }
}

/* ===================== SETTORE GIOVANILE ===================== */
export async function getYouth(): Promise<YouthTeam[]> {
  if (!sanityEnabled || !client) return staticYouth;
  try {
    const res = await client.fetch(`*[_type=="youthTeam"]|order(order asc){ "slug": slug.current, name, ages, coach, info, "cover": cover.asset->url }`);
    return res?.length ? res : staticYouth;
  } catch { return staticYouth; }
}
export async function getYouthCategory(slug: string): Promise<YouthTeam | undefined> {
  if (!sanityEnabled || !client) return staticGetYouth(slug);
  try {
    const res = await client.fetch(`*[_type=="youthTeam" && slug.current==$slug][0]{ "slug": slug.current, name, ages, coach, info, "cover": cover.asset->url }`, { slug });
    return res ?? staticGetYouth(slug);
  } catch { return staticGetYouth(slug); }
}

/* ===================== IMPOSTAZIONI / SOCIETA' / CONTATTI ===================== */
export interface SiteSettings {
  name: string; address: string; phone: string; email: string;
  facebook?: string; instagram?: string; youtube?: string;
  foundedYear?: string; about: string[];
  nextMatch: { competition: string; home: string; away: string; day: string; time: string; venue: string };
}
const staticSettings: SiteSettings = {
  name: staticSite.name, address: staticSite.address, phone: staticSite.phone, email: staticSite.email,
  facebook: staticSite.social.facebook, instagram: staticSite.social.instagram, youtube: staticSite.social.youtube,
  foundedYear: undefined,
  about: [
    "L'A.S.D. Calcio Pavonese è molto più di una squadra: è un punto di riferimento sportivo e sociale per il territorio. Promuove i valori dello sport, dell'inclusione e della crescita dei giovani.",
    'Oggi il club conta squadre maschili, femminili e un ampio settore giovanile, con un progetto tecnico solido e una visione di lungo periodo.',
  ],
  nextMatch: staticNextMatch,
};
export async function getSiteSettings(): Promise<SiteSettings> {
  if (!sanityEnabled || !client) return staticSettings;
  try {
    const s = await client.fetch(`*[_type=="siteSettings"][0]{ name, address, phone, email, facebook, instagram, youtube, foundedYear, about, nextMatch }`);
    if (!s) return staticSettings;
    return {
      name: s.name ?? staticSettings.name,
      address: s.address ?? staticSettings.address,
      phone: s.phone ?? staticSettings.phone,
      email: s.email ?? staticSettings.email,
      facebook: s.facebook ?? staticSettings.facebook,
      instagram: s.instagram ?? staticSettings.instagram,
      youtube: s.youtube ?? staticSettings.youtube,
      foundedYear: s.foundedYear ?? staticSettings.foundedYear,
      about: s.about ? String(s.about).split(/\n\n+/).filter(Boolean) : staticSettings.about,
      nextMatch: s.nextMatch ?? staticSettings.nextMatch,
    };
  } catch { return staticSettings; }
}
