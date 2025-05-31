/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "i.scdn.co",
      },
      {
        hostname: "assets.aceternity.com",
      },
      {
        hostname: "i.imgur.com",
      },
    ],
  },
}

export default nextConfig
