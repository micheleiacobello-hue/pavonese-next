import Link from 'next/link';
import { Crest } from '@/components/ui/Crest';
import { Facebook, Instagram, Youtube, Pin, Phone, Mail } from '@/components/ui/icons';
import { getSiteSettings } from '@/sanity/queries';

const club = [['Società', '/societa'], ['Organigramma', '/societa/organigramma'], ['Prima Squadra', '/prima-squadra'], ['Femminile', '/femminile']];
const attivita = [['Settore Giovanile', '/settore-giovanile'], ['News', '/news'], ['Sponsor', '/sponsor'], ['Contatti', '/contatti']];

// Il footer legge i contatti dal pannello (Impostazioni sito): indirizzo,
// telefono, email e social sono gli stessi della pagina Contatti.
export async function Footer() {
  const s = await getSiteSettings();
  const socials: [string, string | undefined, React.ComponentType<{ className?: string }>][] = [
    ['Facebook', s.facebook, Facebook],
    ['Instagram', s.instagram, Instagram],
    ['YouTube', s.youtube, Youtube],
  ];
  return (
    <footer className="bg-notte pt-16 text-[#aebfc6]">
      <div className="wrap">
        <div className="grid gap-9 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Crest width={54} className="mb-3.5" />
            <div className="display text-white text-xl">{s.name}</div>
            <p className="mt-3 max-w-[32ch] text-sm">Passione rossonera e calcio sul territorio. Cresciamo insieme, dentro e fuori dal campo.</p>
            <div className="mt-3.5 flex gap-2.5">
              {socials.map(([label, href, I]) => {
                if (!href) return null;
                return <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-lg bg-white/5 text-white transition hover:-translate-y-0.5 hover:bg-verde"><I className="w-[18px] h-[18px]" /></a>;
              })}
            </div>
          </div>
          <FooterCol title="Il Club" links={club} />
          <FooterCol title="Attività" links={attivita} />
          <div>
            <h4 className="mb-4 text-xs uppercase tracking-[.14em] text-white" style={{ fontFamily: 'var(--font-archivo)' }}>Contatti</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li className="flex gap-2"><Pin className="w-4 h-4 shrink-0 text-verde" />{s.address}</li>
              <li className="flex gap-2"><Phone className="w-4 h-4 shrink-0 text-verde" />{s.phone}</li>
              <li className="flex gap-2"><Mail className="w-4 h-4 shrink-0 text-verde" />{s.email}</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3.5 py-5 text-xs">
          <span>© {new Date().getFullYear()} {s.name}. Tutti i diritti riservati.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h4 className="mb-4 text-xs uppercase tracking-[.14em] text-white" style={{ fontFamily: 'var(--font-archivo)' }}>{title}</h4>
      <ul className="flex flex-col gap-2.5 text-sm">
        {links.map(([label, href]) => <li key={href}><Link href={href} className="transition hover:text-oro-300">{label}</Link></li>)}
      </ul>
    </div>
  );
}
