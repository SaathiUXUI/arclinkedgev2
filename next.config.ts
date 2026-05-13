// Triggering fresh deployment for new repository connection
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/hire/developers",
        destination: "/hire",
        permanent: true,
      },
      {
        source: "/hire/designers",
        destination: "/hire",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "ui-avatars.com" },
      { protocol: "https", hostname: "cdn.simpleicons.org" },
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "images.sanity.io" },
    ],
  },
  experimental: {
    optimizeCss: false,
  },
};

export default nextConfig;
