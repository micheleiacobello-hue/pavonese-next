import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { ContactForm } from '@/components/forms/ContactForm';
import { Reveal } from '@/components/ui/Reveal';
import { Pin, Phone, Mail, Clock } from '@/components/ui/icons';
import { site } from '@/data/site';

export const metadata: Metadata = { title: 'Contatti', description: 'Contatti, sede e mappa dell’A.S.D. Calcio Pavonese.' };

const info = [
  { Icon: Pin, label: 'Sede & Stadio', value: site.address },
  { Icon: Phone, label: 'Telefono', value: site.phone },
  { Icon: Mail, label: 'Email', value: site.email },
  { Icon: Clock, label: 'Segreteria', value: 'Lun-Ven 17:00 — 19:30' },
];

export default function ContattiPage() {
  // Embed mappa: sostituire con un <iframe> Google Maps reale usando site.geo
  const mapSrc = `https://www.google.com/maps?q=${site.geo.lat},${site.geo.lng}&z=15&output=embed`;
  return (
    <>
      <PageHeader title="Contatti" desc="Siamo a tua disposizione. Scrivici o vieni a trovarci allo stadio." crumbs={[{ label: 'Home', href: '/' }, { label: 'Contatti' }]} />
      <section className="section">
        <div className="wrap grid items-start gap-9 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="flex flex-col gap-[18px]">
              {info.map(({ Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3.5">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-[11px] bg-blu text-white"><Icon className="w-5 h-5" /></div>
                  <div><b className="block" style={{ fontFamily: 'var(--font-archivo)' }}>{label}</b><span className="text-grigio">{value}</span></div>
                </div>
              ))}
            </div>
            <div className="mt-6 overflow-hidden rounded-card border border-[var(--bordo)]" style={{ aspectRatio: '16/8' }}>
              <iframe src={mapSrc} title="Mappa sede Calcio Pavonese" width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </Reveal>
          <Reveal><ContactForm /></Reveal>
        </div>
      </section>
    </>
  );
}
