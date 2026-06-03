import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the Next.js dev-tools indicator (the "N" badge). It's dev-only and
  // never shows in production anyway — this just keeps the local preview clean.
  devIndicators: false,
};

export default nextConfig;
