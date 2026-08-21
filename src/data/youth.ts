import type { YouthTeam } from '@/lib/types';

export const youthTeams: YouthTeam[] = [
  { slug: 'juniores',     name: 'Juniores',      ages: '2007-2008', coach: 'M. Gentile', cover: '/img/youth/juniores.jpg' },
  { slug: 'allievi',      name: 'Allievi',       ages: '2009-2010', coach: 'P. Serra',   cover: '/img/youth/allievi.jpg' },
  { slug: 'giovanissimi', name: 'Giovanissimi',  ages: '2011-2012', coach: 'L. Bruni',   cover: '/img/youth/giovanissimi.jpg' },
  { slug: 'esordienti',   name: 'Esordienti',    ages: '2013-2014', coach: 'F. Pace',    cover: '/img/youth/esordienti.jpg' },
  { slug: 'pulcini',      name: 'Pulcini',       ages: '2015-2016', coach: 'D. Riva',    cover: '/img/youth/pulcini.jpg' },
  { slug: 'primi-calci',  name: 'Primi Calci',   ages: '2017-2018', coach: 'S. Longo',   cover: '/img/youth/primi-calci.jpg' },
  { slug: 'piccoli-amici',name: 'Piccoli Amici', ages: '2019-2020', coach: 'V. Costa',   cover: '/img/youth/piccoli-amici.jpg' },
];

export const getYouthTeam = (slug: string) => youthTeams.find((t) => t.slug === slug);
