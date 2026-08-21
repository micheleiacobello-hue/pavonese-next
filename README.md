# A.S.D. Calcio Pavonese — Sito Ufficiale

Sito completo della società **A.S.D. Calcio Pavonese**, realizzato con **Next.js 15 (App Router)**, **TypeScript** e **Tailwind CSS**.
Contenuti gestiti tramite **dati statici** in `src/data/` (predisposti per un futuro CMS).

## Stack
- Next.js 15 · React 19 · App Router (Server Components di default)
- TypeScript (strict)
- Tailwind CSS 3 + design system «Rossonero» (`globals.css` + `tailwind.config.ts`)
- `next/font` (Playfair Display, Archivo, Inter) — zero layout shift
- SEO: `metadata` per pagina, `sitemap.ts`, `robots.ts`, Open Graph

## Avvio
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Struttura
```
src/
├─ app/                 # route (App Router)
│  ├─ layout.tsx        # font, metadata globale, Navbar + Footer
│  ├─ page.tsx          # Home
│  ├─ news/             # lista + [slug] (SSG con generateStaticParams)
│  ├─ societa/          # società + organigramma
│  ├─ prima-squadra/    # staff + rosa filtrabile
│  ├─ settore-giovanile/# lista + [categoria]
│  ├─ femminile/  sponsor/  contatti/
│  ├─ sitemap.ts  robots.ts  not-found.tsx
├─ components/
│  ├─ layout/   # Navbar, MobileMenu, Footer
│  ├─ ui/       # Crest, icons, Reveal, SectionTitle, Breadcrumb, PageHeader, Placeholder
│  ├─ cards/    # NewsCard, PlayerCard, StaffCard, SponsorCard
│  ├─ sections/ # Hero, NextMatch, Tile, RosterFilter, NewsFilter
│  └─ forms/    # ContactForm
├─ data/        # site, news, players, staff, organigramma, youth, women, sponsors
└─ lib/         # types.ts
```

## Dove mettere i contenuti reali
- **Testi/voci**: file in `src/data/` (un punto solo per ogni tipo di contenuto).
- **Immagini**: logo ufficiale in `public/img/logo.png` e foto reali in `public/img/foto/` (già collegate a hero, news e società). Dove mancano foto, placeholder coerenti col brand (`<Placeholder/>`, `<Silhouette/>`).
- **Mappa**: `src/app/contatti/page.tsx` usa `site.geo` (lat/lng) in un iframe Google Maps.

## Pannello contenuti (Sanity) — già collegato

News e Gallery leggono dal pannello Sanity (cartella `pavonese-cms/`). Imposta in `.env.local` / Vercel:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxx
NEXT_PUBLIC_SANITY_DATASET=production
```
Senza queste variabili il sito mostra i contenuti dimostrativi. Procedura completa in `RUNBOOK-messa-online.md`. Le altre sezioni (rosa, staff, giovanili, sponsor) hanno già i modelli nel pannello e possono essere collegate con lo stesso schema delle news.

## Passaggio al CMS (dettagli)
Le interfacce in `src/lib/types.ts` sono il contratto dei dati. Per integrare un CMS (es. Sanity, Strapi, Contentful):
1. crea i fetch nel layer dati (sostituendo gli array statici);
2. mantieni le stesse interfacce → i componenti non cambiano;
3. abilita gli host immagine in `next.config.mjs` (`images.remotePatterns`).

## Form contatti
`ContactForm` è pronto lato client. Per renderlo operativo: creare `src/app/api/contact/route.ts` (o usare Resend/Formspree) e collegare l'handler. Vedi `.env.example`.

## Design system «Rossonero»
| Token | Hex | Uso |
|------|------|-----|
| Nero | `#15161A` | base istituzionale |
| Rosso | `#E01F1F` | accento / CTA / link |
| Rosso scuro | `#B81620` | hover / profondità |
| Notte | `#0B0C10` | sezioni scure / footer |
| Ghiaccio | `#F5F5F6` | sfondo chiaro |

Font: **Playfair Display** (display elegante: hero/titoli/numeri), **Archivo** (etichette/bottoni), **Inter** (corpo).
