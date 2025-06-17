import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com"
      },
      {
        protocol: "https",
        hostname: "whatsinyourstory.com"
      },
      {
        protocol: "https",
        hostname: "drive.google.com"
      },
      {
        protocol: "http",
        hostname: "*"
      }
    ]
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  output: 'export'
};

export default nextConfig;
