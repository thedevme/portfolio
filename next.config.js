/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",          // ✅ enables `next export`
  images: {
    unoptimized: true        // ✅ disables next/image optimization for static hosting
  },
  trailingSlash: true,       // ✅ ensures URLs like /about/ → about/index.html
  assetPrefix: "/"           // ✅ makes sure assets resolve correctly
};

module.exports = nextConfig;