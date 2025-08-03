// File: next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {

  eslint: {
    ignoreDuringBuilds: true,
  },
   
  typescript: {
    ignoreBuildErrors: true,
    
  },
};

export default nextConfig;
