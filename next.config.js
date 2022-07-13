/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'images.saasworthy.com',
      'duckduckgo.com',
      'images5.fanpop.com',
      'zenprospect-production.s3.amazonaws.com',
    ],
  },
};

module.exports = nextConfig;
