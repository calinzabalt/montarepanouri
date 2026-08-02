import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const configDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  outputFileTracingRoot: configDir,
  turbopack: {
    root: configDir,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Avoid persistent cache allocations that can crash 32-bit Node.
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
