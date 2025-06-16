import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://upload.wikimedia.org/**')]
  }
};

export default nextConfig;
