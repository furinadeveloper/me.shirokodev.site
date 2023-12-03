/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
        port: "",
        pathname: "/app-assets/**",
      },
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
        port: "",
        pathname: "/avatars/**",
      },
      {
        protocol: "https",
        hostname: "photo-resize-zmp3.zmdcdn.me",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i1.sndcdn.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
