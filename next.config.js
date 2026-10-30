/** @type {import('next').NextConfig} */
// studio.localhost lets the studio routes be checked locally (http://studio.localhost:3105)
const STUDIO_HOST = 'studio\\.(craigclayton\\.dev|localhost)';
const MAIN_HOST = '(www\\.)?craigclayton\\.dev';

const nextConfig = {
  images: {
    unoptimized: true        // disables next/image optimization for static hosting
  },
  trailingSlash: true,       // ensures URLs like /about/ → about/index.html
  async rewrites() {
    // studio.craigclayton.dev serves the static freelance site in public/studio/
    return {
      beforeFiles: [
        { source: '/', has: [{ type: 'host', value: STUDIO_HOST }], destination: '/studio/index.html' },
        // Unlisted page for Montana Tucker's family (noindex, not linked from the site)
        { source: '/montanatucker', has: [{ type: 'host', value: STUDIO_HOST }], destination: '/studio/montana-tucker/index.html' },
        { source: '/montanatucker/site', has: [{ type: 'host', value: STUDIO_HOST }], destination: '/studio/montana-tucker/site/index.html' },
        { source: '/montanatucker/:path*', has: [{ type: 'host', value: STUDIO_HOST }], destination: '/studio/montana-tucker/:path*' },
      ],
    };
  },
  async redirects() {
    // Keep the freelance pages off the main portfolio domain
    return [
      { source: '/studio/:path*', has: [{ type: 'host', value: MAIN_HOST }], destination: '/', permanent: false },
      { source: '/MontanaTucker/:path*', has: [{ type: 'host', value: STUDIO_HOST }], destination: '/montanatucker/:path*', permanent: false },
      { source: '/services/:path*', has: [{ type: 'host', value: MAIN_HOST }], destination: '/', permanent: false },
    ];
  },
};

module.exports = nextConfig;
