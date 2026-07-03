import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Required for Docker production builds
  // Creates a standalone server.js with minimal dependencies
  output: "standalone",
};

export default nextConfig;
