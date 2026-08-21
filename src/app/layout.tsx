import type { Metadata } from 'next';
import { Playfair_Display, Archivo, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { site } from '@/data/site';

// Font self-hosted via next/font (zero layout shift, ottimi Core Web Vitals)
// Display elegante (serif) — la CSS var resta --font-anton per compatibilità
const display = Playfair_Display({ subsets: ['latin'], weight: ['500','600','700','800','900'], variable: '--font-anton', display: 'swap' });
const archivo = Archivo({ subsets: ['latin'], variable: '--font-archivo', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

// SEO di base condivisa da tutte le pagine (override nelle singole route)
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — Sito Ufficiale`, template: `%s · ${site.name}` },
  description:
    'Sito ufficiale dell’A.S.D. Calcio Pavonese: news, prima squadra, settore giovanile, squadra femminile, società, sponsor e contatti.',
  openGraph: { type: 'website', locale: 'it_IT', siteName: site.name, url: site.url, images: ['/img/foto/festa.jpg'] },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  icons: { icon: '/img/logo-square.png', apple: '/img/logo-square.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${display.variable} ${archivo.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
