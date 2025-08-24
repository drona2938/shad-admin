/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  serverExternalPackages: [],
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig
