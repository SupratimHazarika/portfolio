/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // unoptimized: true, // disable next/image optimization
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig
