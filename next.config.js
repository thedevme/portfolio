/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true        // ✅ disables next/image optimization for static hosting
  },
  trailingSlash: true,       // ✅ ensures URLs like /about/ → about/index.html
};

module.exports = nextConfig;