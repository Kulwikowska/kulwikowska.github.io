import type { NextConfig } from 'next'

// Static export for GitHub Pages (no server). Images are pre-optimised by scripts/optimize-images.mjs.
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
}

export default nextConfig
