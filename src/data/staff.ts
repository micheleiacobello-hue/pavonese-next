import type { StaffMember, Match } from '@/lib/types';

export const technicalStaff: StaffMember[] = [
  { name: 'Marco Bianchi',  role: 'Allenatore' },
  { name: 'Giorgio Sala',   role: 'Vice allenatore' },
  { name: 'Elena Vitali',   role: 'Preparatore atletico' },
  { name: 'Roberto Neri',   role: 'Preparatore portieri' },
  { name: 'Anna Ferri',     role: 'Dirigente accompagnatore' },
];

// Placeholder "prossima partita" — collegabile a calendario federale/CMS.
export const nextMatch: Match = {
  competition: 'Campionato — 34ª giornata',
  home: 'Pavonese', away: 'Real Aprilia',
  day: 'Domenica 22 Giugno', time: '15:30',
  venue: 'Stadio «Le Piume», Pavona',
};
