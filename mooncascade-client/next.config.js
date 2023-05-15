/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true 
  },
  env: {
    BASE_API: 'https://yk-project.vercel.app',
  },
}

module.exports = nextConfig
