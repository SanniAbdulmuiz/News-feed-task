import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // allow all HTTPS image domains
      },
    ],
  },
}

export default nextConfig
