import type { OrgMember } from '@/lib/types';

export const organigramma: { vertice: OrgMember[]; operativo: OrgMember[]; consiglio: OrgMember[] } = {
  vertice: [
    { name: 'Giuseppe Romano', role: 'Presidente', lead: true },
    { name: 'Carla Moretti',   role: 'Vicepresidente', lead: true },
  ],
  operativo: [
    { name: 'Luigi Barbieri',    role: 'Direttore Sportivo' },
    { name: 'Francesca Gallo',   role: 'Segreteria' },
    { name: 'Antonio Lombardi',  role: 'Responsabile amministrativo' },
  ],
  consiglio: [
    { name: 'Mario Esposito',   role: 'Consigliere' },
    { name: 'Sara Colombo',     role: 'Consigliere' },
    { name: 'Daniele Ricci',    role: 'Consigliere' },
    { name: 'Giulia Marchetti', role: 'Consigliere' },
  ],
};
