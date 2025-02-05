/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Add production optimizations
  webpack: (config, { isServer, dev }) => {
    // Only run these optimizations in production
    if (!dev) {
      // Split chunks more aggressively
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 24000000, // Keep chunks under 24MB
          cacheGroups: {
            default: false,
            vendors: false,
            // Create a commons chunk for shared code
            commons: {
              name: 'commons',
              chunks: 'all',
              minChunks: 2,
              reuseExistingChunk: true,
            },
            // Create a vendors chunk for node_modules
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
          },
        },
      }
    }
    return config
  },
}

module.exports = nextConfig