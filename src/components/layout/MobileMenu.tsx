'use client';
import Link from 'next/link';
import { navItems } from '@/data/site';
import { Crest } from '@/components/ui/Crest';
import { ArrowRight } from '@/components/ui/icons';

export function MobileMenu({ open, onClose, pathname }:
  { open: boolean; onClose: () => void; pathname: string }) {
  return (
    <div className="fixed inset-0 z-[70] flex flex-col bg-notte p-6 transition-transform duration-300 lg:hidden"
      style={{ transform: open ? 'translateX(0)' : 'translateX(100%)' }} aria-hidden={!open}>
      <div className="mb-6 flex items-center justify-between">
        <Link href="/" onClick={onClose} className="flex items-center gap-3">
          <Crest width={40} />
          <span className="display text-white text-lg">Pavonese</span>
        </Link>
        <button onClick={onClose} aria-label="Chiudi menu" className="text-3xl leading-none text-white">&times;</button>
      </div>
      <nav className="flex flex-col overflow-auto">
        {navItems.map((it) => {
          const active = it.href === '/' ? pathname === '/' : pathname.startsWith(it.href);
          return (
            <Link key={it.href} href={it.href} onClick={onClose}
              className="flex items-center justify-between border-b border-white/10 py-3.5 text-xl text-white/90"
              style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, color: active ? '#fff' : undefined }}>
              {it.label} <ArrowRight className="w-4 h-4 text-verde" />
            </Link>
          );
        })}
      </nav>
      <Link href="/contatti" onClick={onClose} className="btn btn-primary mt-auto w-full justify-center">Contattaci</Link>
    </div>
  );
}
