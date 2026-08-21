import type { Player, PlayerRole } from '@/lib/types';

export const playerRoles: PlayerRole[] =
  ['Portieri', 'Difensori', 'Centrocampisti', 'Attaccanti'];

export const players: Player[] = [
  { number: 1,  name: 'Luca Ferrari',     role: 'Portieri',       position: 'Portiere',      birthYear: '1995' },
  { number: 12, name: 'Davide Costa',     role: 'Portieri',       position: 'Portiere',      birthYear: '2001' },
  { number: 2,  name: 'Andrea Russo',     role: 'Difensori',      position: 'Terzino dx',    birthYear: '1998' },
  { number: 3,  name: 'Matteo Greco',     role: 'Difensori',      position: 'Terzino sx',    birthYear: '1999' },
  { number: 4,  name: 'Simone Rizzo',     role: 'Difensori',      position: 'Centrale',      birthYear: '1996' },
  { number: 5,  name: 'Paolo Marino',     role: 'Difensori',      position: 'Centrale',      birthYear: '1997' },
  { number: 6,  name: 'Gabriele Conti',   role: 'Centrocampisti', position: 'Mediano',       birthYear: '2000' },
  { number: 8,  name: 'Federico Galli',   role: 'Centrocampisti', position: 'Mezzala',       birthYear: '1998' },
  { number: 10, name: 'Alessio De Luca',  role: 'Centrocampisti', position: 'Trequartista',  birthYear: '1997' },
  { number: 7,  name: 'Stefano Bruno',    role: 'Attaccanti',     position: 'Esterno',       birthYear: '2001' },
  { number: 9,  name: 'Marco Esposito',   role: 'Attaccanti',     position: 'Punta',         birthYear: '1996' },
  { number: 11, name: 'Lorenzo Fontana',  role: 'Attaccanti',     position: 'Ala',           birthYear: '2002' },
];
