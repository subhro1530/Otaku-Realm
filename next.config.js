/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output:'export'
}

module.exports = nextConfig
module.exports = {
  // other config settings...
  distDir: ".next", // Specify your custom build directory here
  images: {
    domains: ["media.kitsu.io"], // Add the domain(s) you want to allow images from
  },
};