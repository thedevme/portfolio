/** @type {import('next').NextConfig} */
const STUDIO_HOST = 'studio.craigclayton.dev';
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
      ],
    };
  },
  async redirects() {
    // Keep the freelance pages off the main portfolio domain
    return [
      { source: '/studio/:path*', has: [{ type: 'host', value: MAIN_HOST }], destination: '/', permanent: false },
      { source: '/services/:path*', has: [{ type: 'host', value: MAIN_HOST }], destination: '/', permanent: false },
    ];
  },
};

module.exports = nextConfig;
