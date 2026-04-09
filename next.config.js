/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true        // disables next/image optimization for static hosting
  },
  trailingSlash: true,       // ensures URLs like /about/ → about/index.html
  async rewrites() {
    return [
      {
        source: '/email/subscribe',
        destination: '/api/subscribe',
      },
    ];
  },
};

module.exports = nextConfig;