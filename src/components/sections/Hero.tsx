import Image from 'next/image';
import Link from 'next/link';
import { Crest } from '@/components/ui/Crest';
import { ArrowRight } from '@/components/ui/icons';

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden text-white" style={{ paddingTop: 'var(--nav-h)' }}>
      <Image src="/img/foto/azione1.jpg" alt="Pavonese in azione" fill priority sizes="100vw" className="-z-20 object-cover" style={{ objectPosition: 'center 30%' }} />
      <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(120deg,rgba(8,9,11,.9),rgba(20,21,26,.6) 52%,rgba(224,31,31,.32)),radial-gradient(90% 80% at 82% 0,rgba(224,31,31,.3),transparent 55%)' }} />
      <div className="absolute inset-0 -z-10 opacity-40" style={{ backgroundImage: 'repeating-linear-gradient(115deg,rgba(255,255,255,.04) 0 2px,transparent 2px 46px)' }} />
      <div className="wrap relative z-10 w-full">
        <div className="max-w-[760px]">
          <Crest width={78} priority className="mb-5 drop-shadow-xl" />
          <div className="eyebrow on-dark">Sito ufficiale · A.S.D. Calcio Pavonese</div>
          <h1 className="display mt-2" style={{ fontSize: 'clamp(3rem,11vw,7rem)', lineHeight: .86 }}>
            Calcio<br /><span className="text-oro">Pavonese</span>
          </h1>
          <p className="mb-7 mt-4 max-w-[46ch] text-[1.15rem]" style={{ color: '#cfe0e6' }}>
            Passione rossonera, identità e calcio sul territorio. Vivi il club dentro e fuori dal campo.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <Link href="/prima-squadra" className="btn btn-primary">Scopri la rosa <ArrowRight /></Link>
            <Link href="/news" className="btn btn-ghost">Ultime news</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
