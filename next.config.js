/** @type {import('next').NextConfig} */

const withImages = require('next-images')
module.exports = withImages({
  esModule: true
})

const nextConfig = {
  reactStrictMode: false,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
}

module.exports = nextConfig
