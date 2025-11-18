import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
  },
  // Ensure Next treats this folder as the root for tracing/resolution
  outputFileTracingRoot: __dirname,
  // Write build output to a different directory to avoid OS locks in OneDrive
  distDir: '.next-build',
  
};

export default nextConfig;
