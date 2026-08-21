import type { Player, StaffMember } from '@/lib/types';

export const womenStaff: StaffMember[] = [
  { name: 'Chiara Mancini', role: 'Allenatrice' },
  { name: 'Paolo Ferri',    role: 'Vice allenatore' },
  { name: 'Laura Sanna',    role: 'Preparatrice atletica' },
];

export const womenPlayers: Player[] = [
  { number: 1,  name: 'Sofia Riva',    role: 'Portieri',       position: 'Portiere',     birthYear: '1999' },
  { number: 4,  name: 'Martina Leone', role: 'Difensori',      position: 'Centrale',     birthYear: '2000' },
  { number: 6,  name: 'Giada Villa',   role: 'Centrocampisti', position: 'Mediano',      birthYear: '2001' },
  { number: 10, name: 'Alice Caruso',  role: 'Centrocampisti', position: 'Trequartista', birthYear: '1998' },
  { number: 9,  name: 'Noemi Fabbri',  role: 'Attaccanti',     position: 'Punta',        birthYear: '2002' },
  { number: 7,  name: 'Aurora Testa',  role: 'Attaccanti',     position: 'Esterno',      birthYear: '2003' },
];
