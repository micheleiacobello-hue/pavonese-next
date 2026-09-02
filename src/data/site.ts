// Dati istituzionali del club. Modificabili in un solo punto.
export const site = {
  name: 'Calcio Pavonese',
  shortName: 'Pavonese',
  founded: null, // anno di fondazione: da confermare
  address: 'Stadio Comunale «Le Piume», Via dello Sport 21, Pavona (RM)',
  phone: '+39 06 1234 5678',
  email: 'info@pavonesecalcio.it',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.pavonesecalcio.it',
  social: {
    facebook: 'https://facebook.com/pavonesecalcio',
    instagram: 'https://instagram.com/pavonesecalcio',
    youtube: 'https://youtube.com/@pavonesecalcio',
  },
  geo: { lat: 41.706, lng: 12.652 }, // per la mappa Google
};

// Voci di navigazione principali (usate da Navbar, MobileMenu, Footer)
export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'News', href: '/news' },
  { label: 'Calendario', href: '/calendario' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Società', href: '/societa' },
  { label: 'Prima Squadra', href: '/prima-squadra' },
  { label: 'Settore Giovanile', href: '/settore-giovanile' },
  { label: 'Femminile', href: '/femminile' },
  { label: 'Sponsor', href: '/sponsor' },
  { label: 'Contatti', href: '/contatti' },
] as const;
