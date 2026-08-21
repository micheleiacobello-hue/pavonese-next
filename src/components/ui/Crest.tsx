import Image from 'next/image';

/**
 * Stemma ufficiale A.S.D. Calcio Pavonese.
 * Il file vive in /public/img/logo.png (PNG con sfondo trasparente),
 * cosi' si vede bene sia su fondo chiaro che scuro.
 * La larghezza si controlla con la CSS var --crest-w (impostata via className/style del contenitore).
 */
export function Crest({ className = '', width = 42, priority = false }: { className?: string; width?: number; priority?: boolean }) {
  return (
    <Image
      src="/img/logo.png"
      alt="Stemma A.S.D. Calcio Pavonese"
      width={399}
      height={501}
      priority={priority}
      className={className}
      style={{ width, height: 'auto' }}
    />
  );
}

/** Stemma neutro per la squadra avversaria (placeholder). */
export function OpponentCrest({ width = 62, className = '' }: { width?: number; className?: string }) {
  return (
    <svg className={className} style={{ width, height: 'auto' }} viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Avversari">
      <path d="M50 6 L88 18 V58 C88 86 70 102 50 110 C30 102 12 86 12 58 V18 Z" fill="#2a2c33" stroke="#9AA0A8" strokeWidth="3" />
      <circle cx="50" cy="56" r="15" fill="none" stroke="#9AA0A8" strokeWidth="3" />
    </svg>
  );
}
