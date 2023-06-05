/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  env: {
    API_KEY: process.env.API_KEY,
  },
  images: {
    domains: ["media.rawg.io"],
  },
};
