/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      API_ENDPOINT: process.env.NEXT_PUBLIC_API_URL
    },
    images: {
      domains: ['localhost'],
    },
  }
  
  module.exports = nextConfig
  