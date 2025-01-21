import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/", // The root path to redirect from
        destination: "/home", // The path to redirect to
        permanent: true, // Indicates a permanent redirect (301)
      },
    ];
  },
};

export default nextConfig;
