import { Reveal } from './Reveal';
export function SectionTitle({ eyebrow, title, desc, dark = false, center = false }:
  { eyebrow: string; title: string; desc?: string; dark?: boolean; center?: boolean }) {
  return (
    <Reveal className={`mb-9 max-w-[62ch] ${center ? 'mx-auto text-center' : ''}`}>
      <span className={`eyebrow ${dark ? 'on-dark' : ''}`}>{eyebrow}</span>
      <h2 className="h-sec mt-3">{title}</h2>
      {desc && <p className="lead mt-2.5">{desc}</p>}
    </Reveal>
  );
}
