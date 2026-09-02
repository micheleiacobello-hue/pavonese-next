import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { SectionTitle } from '@/components/ui/SectionTitle';

export const metadata: Metadata = {
  title: 'Calendario & Risultati',
  description: 'Calendario, risultati e prossima partita della Prima Squadra, aggiornati automaticamente.',
};

// I widget sono iframe di Tuttocampo: si aggiornano da soli dalla fonte ufficiale.
// Per cambiarli in futuro basta sostituire l'indirizzo "src" qui sotto con il nuovo
// codice generato su tuttocampo.it/WidgetApi (da loggati).
const GUID = '570ce2a7-5474-11e4-b2c1-448a5b2c3468';
const PROSSIMA = `https://www.tuttocampo.it/WidgetV2/ProssimaPartita/${GUID}`;
const RISULTATI = `https://www.tuttocampo.it/WidgetV2/Risultati/${GUID}`;

export default function CalendarioPage() {
  return (
    <>
      <PageHeader
        title="Calendario & Risultati"
        desc="Prossima partita, risultati e classifica della Prima Squadra — aggiornati in automatico."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Calendario' }]}
      />
      <section className="section">
        <div className="wrap">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <SectionTitle eyebrow="Prossimo impegno" title="Prossima partita" />
              <div className="tc-embed">
                <iframe src={PROSSIMA} title="Prossima partita" height={350} scrolling="no" frameBorder={0} loading="lazy" />
              </div>
            </div>
            <div>
              <SectionTitle eyebrow="Serie D — Girone B" title="Risultati" />
              <div className="tc-embed">
                <iframe src={RISULTATI} title="Risultati" height={600} scrolling="no" frameBorder={0} loading="lazy" />
              </div>
            </div>
          </div>
          <p className="mt-8 text-sm text-grigio">Dati forniti da Tuttocampo e aggiornati automaticamente.</p>
        </div>
      </section>
      <style>{`
        .tc-embed{ width:100%; overflow:hidden; border:1px solid var(--bordo); border-radius:14px; background:#fff; box-shadow:0 6px 20px -10px rgba(10,42,61,.35); }
        .tc-embed iframe{ width:100%; max-width:500px; display:block; margin:0 auto; border:0; }
      `}</style>
    </>
  );
}
