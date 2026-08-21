import { createClient } from 'next-sanity';

// Le variabili arrivano da .env.local / Vercel. Se mancano, il sito usa i dati statici.
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = '2024-01-01';
export const sanityEnabled = Boolean(projectId);

export const client = sanityEnabled
  ? createClient({ projectId: projectId!, dataset, apiVersion, useCdn: true })
  : null;
