import type { Config } from 'tailwindcss';

/**
 * Design system "Pavone" mappato su Tailwind.
 * I colori istituzionali sono esposti come utility (bg-blu, text-oro, ...).
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        blu:    { DEFAULT: '#0A2A3D', 700: '#0D3A52' }, // Blu Pavone
        verde:  { DEFAULT: '#0E7C7B', 600: '#11938F' }, // Verde Pavone
        oro:    { DEFAULT: '#D9A441', 300: '#ECCA85' }, // Oro
        notte:  '#061620',
        ghiaccio: '#F5F7F8',
        grigio: '#5A6B73',
      },
      fontFamily: {
        display: ['var(--font-anton)', 'Georgia', 'serif'],
        titolo: ['var(--font-archivo)', 'sans-serif'],
        testo: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: { card: '14px' },
      boxShadow: { card: '0 18px 40px -18px rgba(10,42,61,.35)' },
      maxWidth: { wrap: '1200px' },
    },
  },
  plugins: [],
};
export default config;
