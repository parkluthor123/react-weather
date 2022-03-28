/** @type {import('next').NextConfig} */

const withImages = require('next-images')
module.exports = withImages({
  esModule: true
})


const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
