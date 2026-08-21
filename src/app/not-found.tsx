import Link from 'next/link';
import { ArrowRight } from '@/components/ui/icons';
export default function NotFound() {
  return (
    <section className="section text-center" style={{ paddingTop: 'calc(var(--nav-h) + 80px)' }}>
      <div className="wrap">
        <div className="display text-verde" style={{ fontSize: '5rem' }}>404</div>
        <h2 className="h-sec">Pagina non trovata</h2>
        <Link href="/" className="btn btn-solid mt-5">Torna alla home <ArrowRight /></Link>
      </div>
    </section>
  );
}
