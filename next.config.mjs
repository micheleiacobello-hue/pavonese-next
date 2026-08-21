/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Predisposizione immagini da CDN/CMS futuro (es. Sanity, Cloudinary)
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
};
export default nextConfig;
