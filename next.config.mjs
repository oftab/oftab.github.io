/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/oftab',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
