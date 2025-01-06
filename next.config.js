/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true,
    },
    images: {
      domains: ['jdukhfdwckebsjorcnyo.supabase.co'],
    },
  }
  
  module.exports = nextConfig
