// File: next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // The app directory is enabled by default in newer Next.js versions
  env: {
    INSTAGRAM_VERIFY_TOKEN: process.env.INSTAGRAM_VERIFY_TOKEN,
    INSTAGRAM_APP_SECRET: process.env.INSTAGRAM_APP_SECRET,
  },
};

export default nextConfig;
