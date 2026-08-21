// ============================================================
// Tipi condivisi del dominio "Calcio Pavonese"
// Centralizzano la forma dei dati: quando si passerà a un CMS
// basterà mappare la risposta su queste interfacce.
// ============================================================

export type NewsCategory =
  | 'Prima Squadra' | 'Settore Giovanile' | 'Femminile' | 'Società' | 'Mercato';

export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: NewsCategory;
  date: string;        // ISO YYYY-MM-DD
  cover: string;       // path immagine (placeholder/CDN)
  body?: string;       // contenuto esteso (Markdown/HTML dal CMS)
}

export type PlayerRole = 'Portieri' | 'Difensori' | 'Centrocampisti' | 'Attaccanti';

export interface Player {
  number: number;
  name: string;
  role: PlayerRole;
  position: string;    // es. "Terzino dx"
  birthYear?: string;
  photo?: string;
}

export interface StaffMember {
  name: string;
  role: string;
  photo?: string;
}

export interface OrgMember extends StaffMember {
  lead?: boolean;      // evidenzia presidenza
}

export interface YouthTeam {
  slug: string;
  name: string;
  ages: string;        // es. "2009-2010"
  coach: string;
  cover: string;
  info?: string;
}

export type SponsorTier = 'main' | 'gold' | 'tech' | 'partner';

export interface Sponsor {
  name: string;
  description: string;
  url: string;
  logo?: string;
  tier: SponsorTier;
}

export interface Match {
  competition: string;
  home: string;
  away: string;
  day: string;
  time: string;
  venue: string;
}
