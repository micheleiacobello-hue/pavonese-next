import type { Sponsor } from '@/lib/types';

export const sponsors: Sponsor[] = [
  { tier: 'main', name: 'Banca del Tirreno', url: 'https://example.com',
    description: 'Istituto di credito del territorio, Main Sponsor del club e partner del progetto giovanile.' },
  { tier: 'gold', name: 'EdilCostruzioni', url: 'https://example.com',
    description: 'Impresa edile di riferimento nella zona dei Castelli Romani.' },
  { tier: 'gold', name: 'AutoPavona', url: 'https://example.com',
    description: 'Concessionaria multimarca e officina autorizzata.' },
  { tier: 'gold', name: 'Caffè Aurora', url: 'https://example.com',
    description: 'Torrefazione artigianale, dal 1978.' },
  { tier: 'tech', name: 'SportLine', url: 'https://example.com',
    description: 'Fornitore tecnico ufficiale di kit e materiale d’allenamento.' },
  { tier: 'tech', name: 'FisioCenter', url: 'https://example.com',
    description: 'Centro di fisioterapia e recupero atletico.' },
  { tier: 'partner', name: 'Ristorante Da Nino',  url: 'https://example.com', description: 'Partner ospitalità.' },
  { tier: 'partner', name: 'Farmacia Centrale',   url: 'https://example.com', description: 'Partner salute.' },
  { tier: 'partner', name: 'Tipografia Moderna',  url: 'https://example.com', description: 'Partner stampa.' },
  { tier: 'partner', name: 'Comune di Pavona',    url: 'https://example.com', description: 'Partner istituzionale.' },
];

export const sponsorsByTier = (t: Sponsor['tier']) => sponsors.filter((s) => s.tier === t);
