'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navItems, site } from '@/data/site';
import { Crest } from '@/components/ui/Crest';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === '/';

  // La navbar è trasparente solo in cima alla home; altrove è sempre piena.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = scrolled || !isHome;

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 flex items-center transition-all duration-300"
        style={{ height: 'var(--nav-h)', background: solid ? 'rgba(10,42,61,.92)' : 'transparent', backdropFilter: solid ? 'blur(10px)' : 'none', boxShadow: solid ? '0 6px 22px -12px rgba(0,0,0,.6)' : 'none' }}>
        <div className="wrap flex w-full items-center gap-6">
          <Link href="/" className="mr-auto flex items-center gap-3">
            <Crest width={42} priority className="drop-shadow" />
            <span className="display leading-none text-white text-[1.18rem]">
              Pavonese<span className="block text-[.56rem] tracking-[.34em] text-oro-300" style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700 }}>A.S.D. CALCIO</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((it) => {
              const active = it.href === '/' ? pathname === '/' : pathname.startsWith(it.href);
              return (
                <Link key={it.href} href={it.href}
                  className="relative rounded-md px-2.5 py-2 text-[.84rem] text-white/90 transition hover:text-white"
                  style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, color: active ? '#fff' : undefined }}>
                  {it.label}
                  <span className="absolute inset-x-2.5 bottom-1.5 h-0.5 origin-left bg-oro transition-transform"
                    style={{ transform: active ? 'scaleX(1)' : 'scaleX(0)' }} />
                </Link>
              );
            })}
          </div>

          <Link href="/contatti" className="btn btn-primary hidden lg:inline-flex">Contattaci</Link>

          <button onClick={() => setOpen(true)} aria-label="Apri menu" className="ml-auto flex flex-col gap-1.5 p-2 lg:hidden">
            <span className="h-0.5 w-6 rounded bg-white" /><span className="h-0.5 w-6 rounded bg-white" /><span className="h-0.5 w-6 rounded bg-white" />
          </button>
        </div>
      </nav>
      <MobileMenu open={open} onClose={() => setOpen(false)} pathname={pathname} />
    </>
  );
}
