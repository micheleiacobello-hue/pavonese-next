import Link from 'next/link';
import { site } from '@/data/site';
import { Crest } from '@/components/ui/Crest';
import { Facebook, Instagram, Youtube, Pin, Phone, Mail } from '@/components/ui/icons';

const club = [['Società', '/societa'], ['Organigramma', '/societa/organigramma'], ['Prima Squadra', '/prima-squadra'], ['Femminile', '/femminile']];
const attivita = [['Settore Giovanile', '/settore-giovanile'], ['News', '/news'], ['Sponsor', '/sponsor'], ['Contatti', '/contatti']];

export function Footer() {
  return (
    <footer className="bg-notte pt-16 text-[#aebfc6]">
      <div className="wrap">
        <div className="grid gap-9 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Crest width={54} className="mb-3.5" />
            <div className="display text-white text-xl">Calcio Pavonese</div>
            <p className="mt-3 max-w-[32ch] text-sm">Passione rossonera e calcio sul territorio. Cresciamo insieme, dentro e fuori dal campo.</p>
            <div className="mt-3.5 flex gap-2.5">
              {[['Facebook', site.social.facebook, Facebook], ['Instagram', site.social.instagram, Instagram], ['YouTube', site.social.youtube, Youtube]].map(([label, href, Icon]) => {
                const I = Icon as React.ComponentType<{ className?: string }>;
                return <a key={label as string} href={href as string} aria-label={label as string} className="grid h-10 w-10 place-items-center rounded-lg bg-white/5 text-white transition hover:-translate-y-0.5 hover:bg-verde"><I className="w-[18px] h-[18px]" /></a>;
              })}
            </div>
          </div>
          <FooterCol title="Il Club" links={club} />
          <FooterCol title="Attività" links={attivita} />
          <div>
            <h4 className="mb-4 text-xs uppercase tracking-[.14em] text-white" style={{ fontFamily: 'var(--font-archivo)' }}>Contatti</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li className="flex gap-2"><Pin className="w-4 h-4 shrink-0 text-verde" />{site.address}</li>
              <li className="flex gap-2"><Phone className="w-4 h-4 shrink-0 text-verde" />{site.phone}</li>
              <li className="flex gap-2"><Mail className="w-4 h-4 shrink-0 text-verde" />{site.email}</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3.5 py-5 text-xs">
          <span>© {new Date().getFullYear()} {site.name}. Tutti i diritti riservati.</span>
          <span>P.IVA 01234567890</span>
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
