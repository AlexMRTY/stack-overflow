import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["xsgames.co"],
  },
  serverExternalPackages: ["pino", "pino-pretty"],
};

export default nextConfig;
